import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest, { params }: { params: { name: string } }) {
  if (!params.name) return NextResponse.json({ error: "Solutions Name Required" });
  const serviceName = params.name.replaceAll("-", " ");
  const service = await prisma.solution.findFirst({
    where: {
      name: serviceName,
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

  if (!service) return NextResponse.json({ error: "Invalid Solutions Name" });

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
