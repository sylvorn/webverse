import { endOfMonth, startOfMonth } from "./currMonth";
import prisma from "@/lib/prisma";
import { auth } from "@/auth";

export const totalSubscriptions = async () => {
  const session = await auth();

  const totalSubscriptions = await prisma.subscription.count({
    where: {
      userId: session?.user.id,
      startDate: {
        gte: startOfMonth,
        lte: endOfMonth,
      },
    },
  });
  return totalSubscriptions;
};

export const totalActiveLicense = async () => {
  const session = await auth();
  const totalActiveLicense = await prisma.license.count({
    where: {
      userId: session?.user.id,
      status: "Active",
    },
  });
  return totalActiveLicense;
};

export const totalPayment = async () => {
  const session = await auth();
  const totalPayments = await prisma.payment.count({
    where: {
      userId: session?.user.id,
      paymentDate: {
        gte: startOfMonth,
        lte: endOfMonth,
      },
    },
  });
  return totalPayments;
};

export const paymentSum = async () => {
  const session = await auth();

  const paymentSum = await prisma.payment.aggregate({
    where: {
      userId: session?.user.id,
      paymentDate: {
        gte: startOfMonth,
        lte: endOfMonth,
      },
    },
    _sum: {
      amount: true,
    },
  });

  return paymentSum;
};

export const recentPayment = async () => {
  const session = await auth();

  const recentPayment = await prisma.payment.findMany({
    orderBy: {
      paymentDate: "desc",
    },
    where: {
      userId: session?.user.id,
    },
    select: {
      amount: true,
      paymentDate: true,
      subscription: {
        select: {
          plan: {
            select: {
              solution: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      },
    },
  });

  const formattedRecentPayments = recentPayment.map((rp) => ({
    amount: rp.amount,
    paymentDate: rp.paymentDate,
    serviceName: rp.subscription.plan.solution.name,
  }));

  return formattedRecentPayments;
};
