"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signinSchema = exports.signupSchema = void 0;
const zod_1 = require("zod");
exports.signupSchema = zod_1.z
    .object({
    firstName: zod_1.z.string().min(2, { message: 'enter a valid name' }),
    email: zod_1.z.string().email(),
    password: zod_1.z
        .string()
        .min(8, { message: 'password should be atleast 8 characters' }),
    repassword: zod_1.z
        .string()
        .min(8, { message: 'password should be atleast 8 characters' }),
})
    .refine((data) => data.password === data.repassword, {
    message: "Passwords don't match.",
    path: ['repassword'],
});
exports.signinSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z
        .string()
        .min(8, { message: 'password should be atleast 8 characters' }),
});
