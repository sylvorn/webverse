"use server";
import { newServiceSchema } from "@/schemas";
import * as z from "zod";

export const runtime = "edge";

export default async function newService(values: z.infer<typeof newServiceSchema>) {
  const validatedFields = newServiceSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid Details" };
  }

  const { title, description, categoryId, features, plans } = validatedFields.data;

  const newService = await prisma?.service.create({
    data: {
      name: title,
      description,
      categoryId,
    },
  });

  if (!newService) return { error: "Failed to create service" };

  const createdPlans = await prisma?.plan.createMany({
    data: plans.map((plan) => ({
      name: plan.name,
      description: plan.description,
      price: plan.price,
      duration: plan.duration,
      serviceId: newService.id,
    })),
  });

  const createdFeatures = await prisma?.features.createMany({
    data: features.map((feature) => ({
      title: feature.title,
      content: feature.content,
      serviceId: newService.id,
    })),
  });

  return { success: "New Service Created" };
}
