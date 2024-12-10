import {z} from 'zod';

export const signupSchema = z
  .object({
    name: z.string().min(2, {message: 'enter a valid name'}),
    email: z.string().email(),
    password: z
      .string()
      .min(8, {message: 'password should be atleast 8 characters'}),
    repassword: z
      .string()
      .min(8, {message: 'password should be atleast 8 characters'}),
  })
  .refine((data) => data.password === data.repassword, {
    message: "Passwords don't match.",
    path: ['repassword'],
  });

export const signinSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, {message: 'password should be atleast 8 characters'}),
});

export const productSchema = z.object({
  name: z.string().min(1, {message: 'enter the product name'}),
  url: z.string().min(1, {message: 'enter some url'}),
  price: z.string().min(1, {message: 'enter the price'}),
  sku: z.string().min(1, {message: 'enter the product sku'}),
  imageUrl: z.string().min(1, {message: 'enter the imageUrl'}),
  details: z.string().min(1, {message: 'enter the product details'}),
});

export type signupType = z.infer<typeof signupSchema>;
export type singinType = z.infer<typeof signinSchema>;
export type productType = z.infer<typeof productSchema>;
