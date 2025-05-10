import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Min 6 characters'),
});

export type LoginFormType = z.infer<typeof loginSchema>;

export function validateLogin(data: LoginFormType) {
  loginSchema.safeParse(data);
}
