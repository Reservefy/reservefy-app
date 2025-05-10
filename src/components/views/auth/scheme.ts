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
