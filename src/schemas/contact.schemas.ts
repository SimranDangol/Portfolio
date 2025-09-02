import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(5, "Message should be at least 5 characters"),
  subject: z.string().min(5, "Subject should be at least 5 characters"),
});

export type ContactFormInput = z.infer<typeof contactSchema>;
