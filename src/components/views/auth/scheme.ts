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
    path: ['confirmPassword'],
    params: {
      i18n: 'custom.passwords_do_not_match',
    },
  });

export type ResetPwdFormType = z.infer<typeof resetPwdSchema>;

const usernameSchema = z
  .string()
  .min(3)
  .max(20)
  .refine((data) => data.match(/^[a-zA-Z0-9_]+$/), {
    params: {
      i18n: 'custom.invalid_username',
    },
  });

const phoneSchema = z
  .string()
  .refine((data) => data.match(/^\+?[1-9]\d{1,14}$/), {
    params: {
      i18n: 'custom.invalid_phone',
    },
  });

export const registerEmailSchema = z
  .object({
    username: usernameSchema,
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    params: {
      i18n: 'custom.confirm_password_mismatch',
    },
  });

export const registerPhoneSchema = z
  .object({
    username: usernameSchema,
    phone: phoneSchema,
    password: z.string().min(6),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    params: {
      i18n: 'custom.confirm_password_mismatch',
    },
  });

export type RegisterEmailFormType = z.infer<typeof registerEmailSchema>;
export type RegisterPhoneFormType = z.infer<typeof registerPhoneSchema>;
