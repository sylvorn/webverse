import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const services = await prisma.solution.findMany({
    select: {
      id: true,
      name: true,
      description: true,
    },
  });
  return NextResponse.json(services);
}
