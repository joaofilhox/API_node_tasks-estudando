import { TaskService } from './../services/task.service';
import { Request, Response } from "express";

export class TaskControllers {
    getMany(req: Request, res: Response) {
        const taskService = new TaskService();

        const search = req.query.search;

        const responce = taskService.getMany(search as string);

        return res.status(200).json(responce);
    }

    getOne(req: Request, res: Response) {
        const taskService = new TaskService();

        const response = taskService.getOne(res.locals.task);

        return res.status(200).json(response);
    }

    create(req: Request, res: Response) {
        const taskService = new TaskService();

        const responce = taskService.create(req.body);

        return res.status(201).json(responce);
    }

    update(req: Request, res: Response) {
        const taskService = new TaskService();

        // Usando locals aqui 
        const responce = taskService.upadte(res.locals.task, req.body);

        return res.status(200).json(responce);
    }

    delete(req: Request, res: Response) {
        const taskService = new TaskService();

        // Usando locals aqui 
        taskService.delete(res.locals.task);

        return res.status(204).json();
    }
}