import { z } from "zod";
export const LoginSchema = z.object({
  email: z.string().email({ message: "Enter a valid email address" }),
  password: z.string({ message: "Enter a valid password" }),
});
