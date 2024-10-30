"use server";

import generateOTP from "@/lib/generate-otp";
import { RegisterSchema } from "@/schemas";
import prisma from "@/lib/prisma";
import dayjs from "dayjs";
import bcrypt from "bcryptjs";
import * as z from "zod";
import { transporter } from "@/lib/nodemailer";

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
  const otp = generateOTP();
  const now = dayjs();
  const otpExpiresOn = now.add(30, "minute");

  const newUser = await prisma.user.create({
    data: {
      fname,
      lname,
      email: email,
      password: hasedPassword,
      otp,
      otpExpiresOn: otpExpiresOn.toDate(),
    },
  });

  transporter.sendMail({
    to: email,
    subject: "Your OTP for Yuganta Technolgies",
    text: `
    Dear ${fname},

    Your One-Time Password (OTP) is: ${otp}.

    This OTP is valid for the next 30 minutes. Please use it to complete your verification process.

    If you did not request this OTP, please ignore this message.

    Best regards,
    Jenil Desai | CEO | Prayam Infosoft
    `,
  });

  return { success: "Email Sent" };
};
