import { Router } from "express";
import { TaskControllers } from './../controllers/task.controllers';
import { IsTaskIdValid } from "../middlewares/isTaskIdValid.middlewares";

export const taskRouter = Router();

const taskControllers = new TaskControllers();

taskRouter.get("/", taskControllers.getMany);
taskRouter.get("/:id", IsTaskIdValid.execute, taskControllers.getOne);
taskRouter.post("/", taskControllers.create);
taskRouter.patch("/:id", IsTaskIdValid.execute, taskControllers.update);
taskRouter.delete("/:id", IsTaskIdValid.execute, taskControllers.delete);