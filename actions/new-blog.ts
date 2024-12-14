"use server";
import * as z from "zod";
import prisma from "@/lib/prisma";
import { newBlogSchema } from "@/schemas";
import { auth } from "@/auth";

export default async function newBlog(values: z.infer<typeof newBlogSchema>) {
  const session = await auth();

  if (!session) return { error: "Unauthorized" };
  const validatedFields = newBlogSchema.safeParse(values);
  if (!validatedFields.success) return { error: "Invalid Details" };

  const { title, brief, content } = validatedFields.data;

  const blogId = await prisma.blog.create({
    data: {
      title,
      brief,
      content,
      userId: session.user.id,
    },
    select: {
      id: true,
    },
  });

  return { success: "Blog Created Successfully", blogId: blogId.id };
}
