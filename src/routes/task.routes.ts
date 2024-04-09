import { BodyValidator } from './../middlewares/bodyValidator.middleares';
import { Router } from "express";
import { TaskControllers } from './../controllers/task.controllers';
import { IsTaskIdValid } from "../middlewares/isTaskIdValid.middlewares";
import { taskCreateBodySchema, taskUpdateBodySchema } from '../schemas/task.schemas';

export const taskRouter = Router();

const taskControllers = new TaskControllers();

taskRouter.get("/", taskControllers.getMany);
taskRouter.get("/:id", IsTaskIdValid.execute, taskControllers.getOne);
taskRouter.post("/", BodyValidator.execute(taskCreateBodySchema), taskControllers.create);
taskRouter.patch("/:id", BodyValidator.execute(taskUpdateBodySchema), IsTaskIdValid.execute, taskControllers.update);
taskRouter.delete("/:id", IsTaskIdValid.execute, taskControllers.delete);