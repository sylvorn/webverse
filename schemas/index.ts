import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Enter a valid email address",
  }),
  password: z.string({
    message: "Enter a valid password",
  }),
});

export const RegisterSchema = z.object({
  fname: z.string({
    message: "Enter a valid first name",
  }),
  lname: z.string({
    message: "Enter a valid last name",
  }),
  email: z.string().email({
    message: "Enter a valid email address",
  }),
  password: z
    .string({
      message: "Enter a valid password",
    })
    .min(8, {
      message: "password length should be 8 characters",
    }),
});
