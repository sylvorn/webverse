import { z } from "zod";
export const verifyUserSchema = z.object({
  otp: z.string().min(6, { message: "OTP Should Be 6 Digits" }).max(6, { message: "OTP Should Be 6 Digits" }),
  email: z.string().email(),
});
