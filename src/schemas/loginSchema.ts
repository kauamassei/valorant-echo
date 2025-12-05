import {z} from 'zod'

export const loginSchema = z.object({
    email: z.string().min(1, 'O campo é obrigatório.').email('Utilize um email válido.'),
    password: z.string().min(8, 'A senha precisa ter no mínimo 8 caracteres.')
})

export type LoginSchema = z.infer<typeof loginSchema>;