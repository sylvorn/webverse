import { z } from "zod";
export const newUserSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  mobile: z.string().regex(/^[+]?[1-9]\d{1,14}$/, "Invalid mobile number"),
  role: z.enum(["Admin", "Client"], { required_error: "You need to select a role" }),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
