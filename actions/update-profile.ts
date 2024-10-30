"use server";
import { profileSchema } from "@/schemas";
import prisma from "@/lib/prisma";
import * as z from "zod";
import { auth } from "@/auth";

export const runtime = "edge";

export default async function UpdateProfile(values: z.infer<typeof profileSchema>) {
  const validatedFields = profileSchema.safeParse(values);
  if (!validatedFields.success) return { error: "Invalid Details" };

  const { fname, lname, email, mobile } = validatedFields.data;
  const session = await auth();

  if (!session) return { error: "Unauthorized" };

  await prisma.user.update({
    where: {
      id: session.user.id,
    },
    data: {
      fname,
      lname,
      email,
      mobile,
    },
  });

  return { success: "Profile Updated" };
}
