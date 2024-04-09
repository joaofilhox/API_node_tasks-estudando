import { ZodArray, z } from "zod";

export const taskSchema = z.object({
    id: z.number().positive(),
    title: z.string().min(1),
    description: z.string().min(1),
    steps: z.string().array().min(1),
    createdAt: z.date(),
    updatedAt: z.date().optional(),
});

// se eu estrair so zod vai ser diferente pois vai createdAt e upadatedAt
// Posso esta extraindo tipos com o zod
export type TTask = z.infer<typeof taskSchema>;

export const taskCreateBodySchema = taskSchema.pick({
    title: true,
    description: true,
    steps: true,
});

// Posso esta extraindo tipos com o zod
export type TTaskCreateBody = z.infer<typeof taskCreateBodySchema>;

export const taskUpdateBodySchema = taskSchema.pick({
    title: true,
    description: true,
    steps: true,
}).partial();


// Posso esta extraindo tipos com o zod
export type TTaskUpdateBody = z.infer<typeof taskUpdateBodySchema>;



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