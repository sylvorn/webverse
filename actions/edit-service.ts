"use server";

import * as z from "zod";
import prisma from "@/lib/prisma";
import { editServiceSchema } from "@/schemas";

export default async function editService(values: z.infer<typeof editServiceSchema>) {
  const validatedFields = editServiceSchema.safeParse(values);
  if (!validatedFields.success) return { error: "Invalid Details" };

  const { id, title, description, plans, features, categoryId } = validatedFields.data;

  const updatedService = await prisma.service.update({
    where: { id },
    data: {
      name: title,
      description,
      categoryId,
      plans: {
        upsert: plans.map((plan: any) => ({
          where: { id: plan.id || "" },
          update: {
            name: plan.name,
            description: plan.description,
            price: plan.price,
            duration: plan.duration,
          },
          create: {
            name: plan.name,
            description: plan.description,
            price: plan.price,
            duration: plan.duration,
            serviceId: id,
          },
        })),
      },
      features: {
        upsert: features.map((feature: any) => ({
          where: { id: feature.id || "" },
          update: {
            title: feature.title,
            content: feature.content,
          },
          create: {
            title: feature.title,
            content: feature.content,
            serviceId: id,
          },
        })),
      },
    },
  });
}
