import { z } from "zod";
export const newSolutionSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  categoryId: z.string().min(1, "Category is required"),
  features: z
    .array(
      z.object({
        title: z.string().min(1, "Feature title is required"),
        content: z.string().min(1, "Feature content is required"),
      })
    )
    .min(1, "At least one feature is required"),
  plans: z
    .array(
      z.object({
        name: z.string().min(1, "Plan name is required"),
        description: z.string().min(1, "Plan description is required"),
        price: z.number().min(0, "Price must be a positive number"),
        duration: z.number().int().min(1, "Duration must be at least 1 month"),
      })
    )
    .min(1, "At least one plan is required"),
});
