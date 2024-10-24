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

  return recentPayments;
}

export async function getMonthlyCategorySums() {
  const startOfYear = new Date(new Date().getFullYear(), 0, 1);
  const endOfCurrentMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);

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
              service: {
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

  return payments;
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
              service: true,
            },
          },
        },
      },
    },
  });

  const salesByService = payments.reduce((acc, payment) => {
    const serviceName = payment.subscription.plan.service.name;
    if (!acc[serviceName]) {
      acc[serviceName] = 0;
    }
    acc[serviceName] += payment.amount;
    return acc;
  }, {} as Record<string, number>);

  const result = Object.entries(salesByService).map(([service, sales]) => ({ service, sales }));

  return result;
}
