import { z } from "zod";

export const employeeSchema = z.object({
  firstName: z.string().trim().min(1, "First Name is required"),
  lastName: z.string().trim().min(1, "Last Name is required"),
  username: z.string().trim().min(1, "Username is required"),
  password: z.string().trim().min(1, "Password is required"),
  phone: z.string().trim().min(1, "Phone is required"),
  email: z
    .string()
    .email("Invalid email address")
    .optional()
    .or(z.literal("")),
});