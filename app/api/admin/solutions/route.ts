import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@/auth";

export async function GET() {
  const session = await auth();

  if (session?.user.role === "Admin") {
    const services = await prisma.solution.findMany({
      select: {
        id: true,
        name: true,
        _count: {
          select: {
            plans: true,
          },
        },
        plans: {
          select: {
            _count: {
              select: {
                subscriptions: true,
              },
            },
          },
        },
      },
    });

    const formattedServices = services.map((solution) => ({
      id: solution.id,
      name: solution.name,
      noOfPlans: solution._count.plans,
      noOfSubscriptions: solution.plans.reduce((total, plan) => total + plan._count.subscriptions, 0),
    }));

    return NextResponse.json(formattedServices);
  } else {
    return NextResponse.json({ error: "Unauthorized" });
  }
}
