"use server";
import { notificationSchema } from "@/schemas";
import prisma from "@/lib/prisma";
import * as z from "zod";
import { auth } from "@/auth";

export const runtime = "edge";

export async function UpdateNotification(values: z.infer<typeof notificationSchema>) {
  const validatedFields = notificationSchema.safeParse(values);
  if (!validatedFields.success) return { error: "Invalid Options" };

  const { marketing, security, newsletter } = validatedFields.data;
  const session = await auth();

  await prisma.user.update({
    where: {
      id: session?.user.id,
    },
    data: {
      marketingEmails: marketing,
      securityEmails: security,
      updatesEmails: newsletter,
    },
  });

  return { success: "Notifications Perferences Updated" };
}
