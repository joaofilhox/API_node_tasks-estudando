//"resolver"

import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";

export class BodyValidator {
    static execute(schema: ZodSchema) {
        return (req: Request, res: Response, next: NextFunction) => {
            req.body = schema.parse(req.body); // O parse valida e serializa so passar o que estiver no schema

            next();
        }
    }
}