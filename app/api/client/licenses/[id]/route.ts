import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@/auth";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await auth();

  if (!session?.user) return NextResponse.json({ error: "Unauthorized" });

  if (!params.id) return NextResponse.json({ error: "License Id Required" });

  const licenseDetails = await prisma.license.findUnique({
    where: {
      userId: session.user.id,
      id: params.id,
    },
    select: {
      id: true,
      licenseKey: true,
      createdAt: true,
      expiryDate: true,
      status: true,
      subscription: {
        include: {
          payments: {
            select: {
              id: true,
              amount: true,
              status: true,
              paymentDate: true,
            },
          },
          plan: {
            select: {
              solution: {
                select: {
                  name: true,
                },
              },
              name: true,
            },
          },
        },
      },
    },
  });

  if (!licenseDetails) return NextResponse.json({ error: "License Not Found" });

  const formatedLicenseDetails = {
    id: licenseDetails.id,
    licenseKey: licenseDetails.licenseKey,
    buyDate: licenseDetails.createdAt,
    expiryDate: licenseDetails.expiryDate,
    status: licenseDetails.status,
    planName: licenseDetails.subscription.plan.name,
    solutionName: licenseDetails.subscription.plan.solution.name,
    paymentsHistory: licenseDetails.subscription.payments.map((ps) => ({
      id: ps.id,
      amount: ps.amount,
      date: ps.paymentDate,
      status: ps.status,
    })),
  };

  console.log(formatedLicenseDetails);

  return NextResponse.json(formatedLicenseDetails);
}
