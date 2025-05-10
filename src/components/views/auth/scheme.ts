import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type LoginFormType = z.infer<typeof loginSchema>;

export const forgotPwdEmailSchema = z.object({
  email: z.string().email(),
  code: z.string().optional(),
});

export const forgotPwdCodeSchema = z.object({
  email: z.string().email(),
  code: z.string().length(6),
});

export type ForgotPwdEmailFormType = z.infer<typeof forgotPwdEmailSchema>;
export type ForgotPwdCodeFormType = z.infer<typeof forgotPwdCodeSchema>;

export const resetPwdSchema = z
  .object({
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export type ResetPwdFormType = z.infer<typeof resetPwdSchema>;
