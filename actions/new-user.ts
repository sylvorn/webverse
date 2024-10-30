"use server";
import * as z from "zod";
import prisma from "@/lib/prisma";
import bcyrpt from "bcryptjs";
import { newUserSchema } from "@/schemas";

export default async function newUser(values: z.infer<typeof newUserSchema>) {
  const validatedFields = newUserSchema.safeParse(values);
  if (!validatedFields.success) return { error: "Invalid Details" };

  const { firstName, lastName, mobile, email, role, password } = validatedFields.data;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (user) return { error: "User Already Exists With Given Email Id" };

  const hasedPassword = await bcyrpt.hash(password, 10);
  await prisma.user.create({
    data: {
      fname: firstName,
      lname: lastName,
      mobile,
      email,
      role,
      password: hasedPassword,
      isVerfiy: true,
    },
  });

  return { success: "User Created Successfully" };
}
