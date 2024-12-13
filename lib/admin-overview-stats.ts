import { endOfCurrentMonth, endOfMonth, startOfMonth, startOfYear } from "./currMonth";
import prisma from "@/lib/prisma";

export async function getTotalRevenue() {
  const totalRevenue = await prisma.payment.aggregate({
    _sum: {
      amount: true,
    },
    where: {
      paymentDate: {
        gte: startOfMonth,
        lte: endOfMonth,
      },
    },
  });

  return totalRevenue;
}

export async function getTotalSubscriptions() {
  const totalSubscriptions = await prisma.subscription.count({
    where: {
      startDate: {
        gte: startOfMonth,
        lte: endOfMonth,
      },
    },
  });
  return totalSubscriptions;
}

export async function getTotalActiveLicense() {
  const totalActiveLicense = await prisma.license.count({
    where: {
      status: "Active",
    },
  });
  return totalActiveLicense;
}

export async function getRecentPayments() {
  const recentPayments = await prisma.payment.findMany({
    orderBy: {
      paymentDate: "desc",
    },
    take: 5,
    select: {
      amount: true,
      subscription: {
        include: {
          user: {
            select: {
              fname: true,
              lname: true,
              email: true,
            },
          },
        },
      },
    },
  });

  const formatedRecentPayments = recentPayments.map((rp) => ({ fname: rp.subscription.user.fname, lname: rp.subscription.user.lname, email: rp.subscription.user.email, amount: rp.amount }));

  return formatedRecentPayments;
}

export async function getMonthlyCategorySums() {
  const startOfYear = new Date(new Date().getFullYear(), 0, 1);
  const endOfCurrentMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);

  // Fetch payments within the specified date range and with "Completed" status
  const payments = await prisma.payment.findMany({
    where: {
      paymentDate: {
        gte: startOfYear,
        lte: endOfCurrentMonth,
      },
      status: "Completed",
    },
    include: {
      subscription: {
        include: {
          plan: {
            include: {
              solution: {
                include: {
                  category: true,
                },
              },
            },
          },
        },
      },
    },
  });

  // Set to keep track of all unique category names
  const allCategories = new Set<string>();

  // Initial pass to gather all unique categories and sum per month/category
  const monthlySums: { [month: string]: { [category: string]: number } } = {};

  payments.forEach((payment) => {
    const month = new Date(payment.paymentDate).toLocaleString("default", { month: "long" });
    const categoryName = payment.subscription.plan.solution.category?.name || "Unknown";

    // Add the category to the set of all categories
    allCategories.add(categoryName);

    // Initialize month and category if not already set
    if (!monthlySums[month]) {
      monthlySums[month] = {};
    }
    if (!monthlySums[month][categoryName]) {
      monthlySums[month][categoryName] = 0;
    }

    // Add the payment amount to the correct category for the month
    monthlySums[month][categoryName] += payment.amount;
  });

  // Transform the accumulated data into the required format, ensuring every category is present in each month
  const result = Object.entries(monthlySums).map(([month, categories]) => {
    const monthlyData: { [key: string]: number | string } = { month };

    // Populate each category with either its sum or 0 if it didn't have entries in that month
    allCategories.forEach((category) => {
      monthlyData[category] = categories[category] || 0;
    });

    return monthlyData;
  });

  return result;
}

export async function getServiceSales() {
  const payments = await prisma.payment.findMany({
    where: {
      paymentDate: {
        gte: startOfYear,
        lte: endOfCurrentMonth,
      },
      status: "Completed",
    },
    include: {
      subscription: {
        include: {
          plan: {
            include: {
              solution: true,
            },
          },
        },
      },
    },
  });

  const salesByService = payments.reduce((acc, payment) => {
    const serviceName = payment.subscription.plan.solution.name;
    if (!acc[serviceName]) {
      acc[serviceName] = 0;
    }
    acc[serviceName] += payment.amount;
    return acc;
  }, {} as Record<string, number>);

  const result = Object.entries(salesByService).map(([service, sales]) => ({ service, sales }));

  return result;
}
