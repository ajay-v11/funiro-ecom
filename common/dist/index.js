"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchema = exports.signinSchema = exports.signupSchema = void 0;
const zod_1 = require("zod");
exports.signupSchema = zod_1.z
    .object({
    name: zod_1.z.string().min(2, { message: 'enter a valid name' }),
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
exports.productSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, { message: 'enter the product name' }),
    url: zod_1.z.string().min(1, { message: 'enter some url' }),
    price: zod_1.z.string().min(1, { message: 'enter the price' }),
    sku: zod_1.z.string().min(1, { message: 'enter the product sku' }),
    imageUrl: zod_1.z.string().min(1, { message: 'enter the imageUrl' }),
    details: zod_1.z.string().min(1, { message: 'enter the product details' }),
});
