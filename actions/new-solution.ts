"use server";
import { newSolutionSchema } from "@/schemas";
import prisma from "@/lib/prisma";
import * as z from "zod";

export default async function newSolution(values: z.infer<typeof newSolutionSchema>) {
  const validatedFields = newSolutionSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid Details" };
  }

  const { title, description, categoryId, features, plans } = validatedFields.data;

  const newSolution = await prisma.solution.create({
    data: {
      name: title,
      description,
      categoryId,
    },
  });

  if (!newSolution) return { error: "Failed to create service" };

  const createdPlans = await prisma.plan.createMany({
    data: plans.map((plan) => ({
      name: plan.name,
      description: plan.description,
      price: plan.price,
      duration: plan.duration,
      solutionId: newSolution.id,
    })),
  });

  const createdFeatures = await prisma.features.createMany({
    data: features.map((feature) => ({
      title: feature.title,
      content: feature.content,
      solutionId: newSolution.id,
    })),
  });

  return { success: "New Solution Created", newSoultionId: newSolution.id };
}
