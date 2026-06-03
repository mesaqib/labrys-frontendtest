import { z } from "zod";

const optionalEmail = z
  .string()
  .trim()
  .refine((value) => !value || z.string().email().safeParse(value).success, "Invalid email address")
  .transform((value) => (value ? value : undefined));

export const clientSchema = z.object({
  firstName: z.string().trim().min(1, "First Name is required"),
  lastName: z.string().trim().min(1, "Last Name is required"),
  username: z.string().trim().min(1, "Username is required"),
  password: z.string().trim().min(1, "Password is required"),
  phone: z.string().trim().min(1, "Phone is required"),
  email: optionalEmail.optional(),
});
