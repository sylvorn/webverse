"use server";

import { securitySchema } from "@/schemas";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { auth } from "@/auth";
import * as z from "zod";

export default async function UpdateSecurity(values: z.infer<typeof securitySchema>) {
  const validatedFields = securitySchema.safeParse(values);
  if (!validatedFields.success) return { error: "Invalid Passwords" };

  const { currentPassword, newPassword } = validatedFields.data;
  const session = await auth();
  if (!session) return { error: "Login First" };

  const user = await prisma.user.findUnique({
    where: {
      id: session?.user.id,
    },
  });
  if (!user) return { error: "User Not Found" };

  const comparedPassword = await bcrypt.compare(currentPassword, user.password);
  if (!comparedPassword) return { error: "Current Password Is Incorrect" };

  const hasedPassword = await bcrypt.hash(newPassword, 10);
  await prisma.user.update({
    where: {
      id: session.user.id,
    },
    data: {
      password: hasedPassword,
    },
  });
  return { success: "Password Updated" };
}
