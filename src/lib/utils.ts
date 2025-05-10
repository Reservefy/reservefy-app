import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const PHONE_REGEX = /^\+?[1-9]\d{1,14}$/;
export const USERNAME_REGEX = /^[a-zA-Z0-9_]+$/;
export const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
