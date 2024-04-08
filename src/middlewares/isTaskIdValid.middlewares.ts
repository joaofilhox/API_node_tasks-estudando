import { NextFunction, Request, Response } from "express";
import { taskDatabase } from "../database/database";
import { AppError } from "../errors/App.Error";

export class IsTaskIdValid{
    static execute(req: Request, res: Response, next: NextFunction){
        const id = req.params.id;

        const task = taskDatabase.find((task) => task.id === Number(id));

        if(!task){
            throw new AppError("Task not found.", 404);
        }
        // armazena valores da consulta
        res.locals.task = task;

        next()
    }
}