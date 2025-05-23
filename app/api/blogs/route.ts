import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const blogs = await prisma.blog.findMany({
    where: {
      published: true,
    },
    select: {
      id: true,
      title: true,
      brief: true,
      clap: true,
    },
  });
  return NextResponse.json(blogs);
}
