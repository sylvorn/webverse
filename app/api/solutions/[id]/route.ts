import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  if (!params.id) return NextResponse.json({ error: "Solutions Id Required" });

  const service = await prisma.solution.findUnique({
    where: {
      id: params.id,
    },
    select: {
      id: true,
      name: true,
      description: true,
      features: {
        select: {
          title: true,
          content: true,
        },
      },
      plans: {
        select: {
          name: true,
          description: true,
          price: true,
          duration: true,
        },
      },
      category: {
        select: {
          name: true,
        },
      },
    },
  });

  const categories = await prisma?.category.findMany();

  if (!service) return NextResponse.json({ error: "Invalid Solutions Id" });

  const formattedSolutions = {
    name: service.name,
    description: service.description,
    category: service.category.name,
    features: service.features,
    plans: service.plans,
    categories,
  };

  return NextResponse.json(formattedSolutions);
}
