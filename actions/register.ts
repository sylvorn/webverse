"use server";

import { RegisterSchema } from "@/schemas";
import bcrypt from "bcrypt";
import * as z from "zod";
import prisma from "@/lib/prisma";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid Fields" };
  }

  const { fname, lname, email, password } = validatedFields.data;

  const existingUser = await prisma.user.findFirst({
    where: {
      email,
    },
  });
  if (existingUser) {
    return { error: "User Already Exists With Given Email" };
  }

  const hasedPassword = await bcrypt.hash(values.password, 10);
  const newUser = await prisma.user.create({
    data: {
      fname,
      lname,
      email: email,
      password: hasedPassword,
    },
  });

  return { success: "Email Sent" };
};
