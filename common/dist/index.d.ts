import { z } from 'zod';
export declare const signupSchema: z.ZodEffects<z.ZodObject<{
    firstName: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    repassword: z.ZodString;
}, "strip", z.ZodTypeAny, {
    firstName: string;
    email: string;
    password: string;
    repassword: string;
}, {
    firstName: string;
    email: string;
    password: string;
    repassword: string;
}>, {
    firstName: string;
    email: string;
    password: string;
    repassword: string;
}, {
    firstName: string;
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
export type signupType = z.infer<typeof signupSchema>;
export type singinType = z.infer<typeof signinSchema>;
