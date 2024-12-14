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

export const newSolutionSchema = z.object({
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

export const profileSchema = z.object({
  fname: z.string().min(2, "First name must be at least 2 characters"),
  lname: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  mobile: z.string().min(10, "Mobile number must be at least 10 digits"),
  role: z.enum(["Admin", "Client"]).optional(),
  createdAt: z.string().optional(),
});

export const notificationSchema = z.object({
  marketing: z.boolean(),
  security: z.boolean(),
  newsletter: z.boolean(),
});

export const securitySchema = z
  .object({
    currentPassword: z.string().min(8, "Password must be at least 8 characters"),
    newPassword: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const newUserSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  mobile: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid mobile number"),
  role: z.enum(["Admin", "Client"], {
    required_error: "You need to select a role",
  }),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const newCategorySchema = z.object({
  name: z.string().min(2, {
    message: "Category name must be at least 2 characters.",
  }),
});

export const newBlogSchema = z.object({
  title: z.string().min(10, {
    message: "Title must be at least 10 characters.",
  }),
  brief: z
    .string()
    .min(10, {
      message: "Brief must be at least 10 characters.",
    })
    .max(300, {
      message: "Brief name must be at max 300 characters.",
    }),
  content: z.string().optional(),
  publised: z.boolean().default(false),
});
