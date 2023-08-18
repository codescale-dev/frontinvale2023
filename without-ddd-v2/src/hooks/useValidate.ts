import { z } from 'zod'

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*]).{8,}$/g

const User = z.object({
  name: z.string()
    .min(3, { message: 'Nome deve ter no mínimo 3 caracteres!'})
    .max(20, { message: 'Nome deve ter no máximo 20 caracteres!'}),
  email: z.string()
    .email({ message: "Email Inválido!" }),
  password: z.string()
    .regex(passwordRegex, { message: 'A senha deve ser forte!'}),
  confirmPassword: z.string()
    .regex(passwordRegex, { message: 'A senha deve ser forte!'})
}).refine(
  (data) => data.password === data.confirmPassword, {
    message: "As senhas devem ser iguais!",
    path: ["password"],
  }
)

type User = z.infer<typeof User>

const validate = (user: User) => {
  return User.safeParse(user)
}

export const useValidate = () => {
  return { validate }
}
