import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@/auth";

export async function GET() {
  const session = await auth();
  if (session?.user.role === "Admin") {
    const allUsers = await prisma.user.findMany({
      select: {
        id: true,
        fname: true,
        lname: true,
        email: true,
        mobile: true,
        role: true,
      },
    });
    return NextResponse.json(allUsers);
  } else {
    return NextResponse.json({ error: "Unauthorized" });
  }
}
