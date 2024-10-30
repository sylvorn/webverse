"use server";
import { verifyUserSchema } from "@/schemas";
import prisma from "@/lib/prisma";
import * as z from "zod";
import dayjs from "dayjs";

export const runtime = "edge";

export default async function verifyUser(values: z.infer<typeof verifyUserSchema>) {
  const user = await prisma?.user.findUnique({
    where: {
      email: values.email,
    },
  });

  if (user) {
    if (!user.isVerfiy) {
      const expiresOn = dayjs(user.otpExpiresOn);
      if (!expiresOn.isBefore(dayjs())) {
        if (user.otp === values.otp) {
          await prisma.user.update({
            where: {
              email: values.email,
            },
            data: {
              otp: "",
              isVerfiy: true,
            },
          });
          return { success: "User Verified" };
        } else {
          return { error: "OTP Is Invalid" };
        }
      } else {
        return { error: "OTP Is Expired" };
      }
    } else {
      return { error: "User Already Verified" };
    }
  } else {
    return { error: "User Not Found" };
  }
}
