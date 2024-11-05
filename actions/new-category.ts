"use server";

import prisma from "@/lib/prisma";
import { newCategorySchema } from "@/schemas";
import * as z from "zod";

export default async function newCategory(values: z.infer<typeof newCategorySchema>) {
  const validatedFields = newCategorySchema.safeParse(values);
  if (!validatedFields.success) return { error: "Invalid Details" };

  const { name } = validatedFields.data;

  const existingCategory = await prisma.category.findUnique({
    where: {
      name,
    },
  });
  if (existingCategory) return { error: "Category Exists Already" };

  await prisma.category.create({
    data: {
      name,
    },
  });

  return { success: "Category Created Successfully" };
}
