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

export const verifyUserSchema = z.object({
  otp: z
    .string()
    .min(6, {
      message: "OTP Should Be 6 Digits",
    })
    .max(6, {
      message: "OTP Should Be 6 Digits",
    }),
  email: z.string().email(),
});

export const newServiceSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  categoryId: z.string().min(1, "Category is required"),
  features: z
    .array(
      z.object({
        title: z.string().min(1, "Feature title is required"),
        content: z.string().min(1, "Feature content is required"),
      })
    )
    .min(1, "At least one feature is required"),
  plans: z
    .array(
      z.object({
        name: z.string().min(1, "Plan name is required"),
        description: z.string().min(1, "Plan description is required"),
        price: z.number().min(0, "Price must be a positive number"),
        duration: z.number().int().min(1, "Duration must be at least 1 month"),
      })
    )
    .min(1, "At least one plan is required"),
});
