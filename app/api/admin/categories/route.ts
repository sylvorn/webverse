import { NextResponse } from "next/server";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export async function GET() {
  const session = await auth();
  if (session?.user.role === "Admin") {
    const categories = await prisma.category.findMany({
      select: {
        id: true,
        name: true,
      },
    });
    return NextResponse.json(categories);
  } else {
    return NextResponse.json({ error: "Unauthorized" });
  }
}
