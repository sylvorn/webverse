import { NextResponse } from "next/server";
import { format } from "date-fns";
import prisma from "@/lib/prisma";

export async function GET() {
  const allLicenses = await prisma.license.findMany({
    select: {
      id: true,
      subscription: {
        include: {
          plan: {
            include: {
              service: {
                select: {
                  name: true,
                },
              },
            },
          },
          user: {
            select: {
              email: true,
            },
          },
        },
      },
      licenseKey: true,
      status: true,
      createdAt: true,
      expiryDate: true,
    },
  });

  const formattedLicenses = allLicenses.map((license) => ({
    id: license.id,
    serviceName: license.subscription.plan.name,
    licenseKey: license.licenseKey,
    status: license.status,
    createdAt: format(new Date(license.createdAt), "yyyy-MM-dd"),
    expiryDate: format(new Date(license.expiryDate), "yyyy-MM-dd"),
    userEmail: license.subscription.user.email,
  }));

  return NextResponse.json(formattedLicenses);
}
