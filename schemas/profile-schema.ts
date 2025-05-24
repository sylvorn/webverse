import { z } from "zod";
export const profileSchema = z.object({
  fname: z.string().min(2, "First name must be at least 2 characters"),
  lname: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  mobile: z.string().min(10, "Mobile number must be at least 10 digits"),
  role: z.enum(["Admin", "Client"]).optional(),
  createdAt: z.string().optional(),
});
