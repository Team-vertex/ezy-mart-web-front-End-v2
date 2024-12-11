import { object, string } from 'zod';

export const signInSchema = object({
  email: string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email address' }),
  password: string().min(1, { message: 'Password is required' }),
});

export const signUpSchema = object({
  firstName: string().min(1, { message: 'First name is required' }),
  lastName: string().min(1, { message: 'Last name is required' }),
  email: string()
    .email({ message: 'Invalid email address' })
    .min(1, { message: 'Email is required' }),
  mobile: string().min(1, { message: 'Mobile number is required' }),
  password: string()
    .min(6, { message: 'Password must be at least 6 characters long' })
    .min(1, { message: 'Password is required' }),
  gender: string()
    .min(1, { message: 'Gender is required' })
    .refine((value) => ['Male', 'Female', 'Other'].includes(value), {
      message: 'Gender must be Male, Female, or Other',
    }),
});

export const otpSchema = object({
  otp: string()
    .length(6, { message: 'OTP must be exactly 6 digits long' })
    .regex(/^\d+$/, { message: 'OTP must only contain numbers' }),
});
