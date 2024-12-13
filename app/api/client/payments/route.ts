import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" });

  const payments = await prisma.payment.findMany({
    where: {
      userId: session.user.id,
    },
    select: {
      amount: true,
      status: true,
      paymentDate: true,
      method: true,
      subscription: {
        include: {
          plan: {
            include: {
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

  const formattedPayments = payments.map((payment) => ({
    solutionName: payment.subscription.plan.solution.name,
    amount: payment.amount,
    status: payment.status,
    paymentDate: payment.paymentDate,
    method: payment.method,
  }));

  return NextResponse.json(formattedPayments);
}
