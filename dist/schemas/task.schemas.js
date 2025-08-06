"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskUpdateBodySchema = exports.taskCreateBodySchema = exports.taskSchema = void 0;
const zod_1 = require("zod");
exports.taskSchema = zod_1.z.object({
    id: zod_1.z.number().positive(),
    title: zod_1.z.string().min(1),
    description: zod_1.z.string().min(1),
    steps: zod_1.z.string().array().min(1),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date().optional(),
});
exports.taskCreateBodySchema = exports.taskSchema.pick({
    title: true,
    description: true,
    steps: true,
});
exports.taskUpdateBodySchema = exports.taskSchema.pick({
    title: true,
    description: true,
    steps: true,
}).partial();
/*
exemplo sem usar o zod:

export const taskCreateBodySchema = z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    steps: z.string().array().min(1)
});

export const taskUpdateBodySchema = z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    steps: z.string().array().optional()
})
*/ 
