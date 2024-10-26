import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@/auth";

export async function GET() {
  const session = await auth();

  if (session?.user.role === "Admin") {
    const services = await prisma.service.findMany({
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

    const formattedServices = services.map((service) => ({
      id: service.id,
      name: service.name,
      noOfPlans: service._count.plans,
      noOfSubscriptions: service.plans.reduce((total, plan) => total + plan._count.subscriptions, 0),
    }));

    return NextResponse.json(formattedServices);
  } else {
    return NextResponse.json({ error: "Unauthorized" });
  }
}
