import { z } from "zod"

export const formSchema = z.object({
  email: z.string().email({
    message: "Введите адрес электронной почты",
  }),
  password: z.string().min(1, {
    message: "Введите пароль",
  }),
})
