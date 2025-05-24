import { z } from "zod";
export const newBlogSchema = z.object({
  title: z.string().min(10, { message: "Title must be at least 10 characters." }),
  brief: z.string().min(10, { message: "Brief must be at least 10 characters." }).max(300, { message: "Brief name must be at max 300 characters." }),
  content: z.string().min(10, { message: "Content must be at least 10 characters." }),
  publised: z.boolean().default(false),
});
