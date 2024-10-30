import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" });

  const licenses = await prisma.license.findMany({
    where: {
      userId: session.user.id,
    },
    select: {
      status: true,
      licenseKey: true,
      expiryDate: true,
      createdAt: true,
      subscription: {
        select: {
          plan: {
            select: {
              name: true,
              duration: true,
            },
          },
        },
      },
      service: {
        select: {
          name: true,
        },
      },
    },
  });

  const formattedLicenses = licenses.map((license) => ({
    serviceName: license.service.name,
    status: license.status,
    licenseKey: license.licenseKey,
    expiryDate: license.expiryDate,
    createdAt: license.createdAt,
    planName: license.subscription.plan.name,
    planDuration: license.subscription.plan.duration,
  }));

  return NextResponse.json(formattedLicenses);
}
