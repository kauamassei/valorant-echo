import { z } from "zod";

export const formSchema = z
  .object({
    name: z.string().min(3, "O número mínimo de caracteres é 3."),
    email: z
      .string()
      .min(1, "O campo é obrigatório.")
      .email("Utilize um email válido."),
    password: z.string().min(8, "A senha precisa ter no mínimo 8 caracteres."),
    confirmPassword: z
      .string()
      .min(8, "A confirmacao deve conter 8 caracteres."),
  })
  .refine((field) => field.password === field.confirmPassword, {
    message: "As senhas precisam ser iguais",
    path: ["confirmPassword"],
  });

export type FormSchema = z.infer<typeof formSchema>;
