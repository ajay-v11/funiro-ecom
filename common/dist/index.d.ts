import { z } from 'zod';
export declare const signupSchema: z.ZodEffects<z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    repassword: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    password: string;
    repassword: string;
}, {
    name: string;
    email: string;
    password: string;
    repassword: string;
}>, {
    name: string;
    email: string;
    password: string;
    repassword: string;
}, {
    name: string;
    email: string;
    password: string;
    repassword: string;
}>;
export declare const signinSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const productSchema: z.ZodObject<{
    name: z.ZodString;
    url: z.ZodString;
    price: z.ZodString;
    sku: z.ZodString;
    imageUrl: z.ZodString;
    details: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    url: string;
    price: string;
    sku: string;
    imageUrl: string;
    details: string;
}, {
    name: string;
    url: string;
    price: string;
    sku: string;
    imageUrl: string;
    details: string;
}>;
export type signupType = z.infer<typeof signupSchema>;
export type singinType = z.infer<typeof signinSchema>;
export type productType = z.infer<typeof productSchema>;
