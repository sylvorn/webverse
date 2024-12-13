import { NextResponse } from "next/server";
import { format } from "date-fns";
import prisma from "@/lib/prisma";
import { auth } from "@/auth";

export async function GET() {
  const session = await auth();
  if (session?.user.role === "Admin") {
    const allLicenses = await prisma.license.findMany({
      select: {
        id: true,
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
      solutionName: license.subscription.plan.solution.name,
      licenseKey: license.licenseKey,
      status: license.status,
      createdAt: format(new Date(license.createdAt), "yyyy-MM-dd"),
      expiryDate: format(new Date(license.expiryDate), "yyyy-MM-dd"),
      userEmail: license.subscription.user.email,
    }));

    return NextResponse.json(formattedLicenses);
  } else {
    return NextResponse.json({ error: "Unauthorized" });
  }
}
