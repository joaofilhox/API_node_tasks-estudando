"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskControllers = void 0;
const task_service_1 = require("./../services/task.service");
class TaskControllers {
    getMany(req, res) {
        const taskService = new task_service_1.TaskService();
        const search = req.query.search;
        const response = taskService.getMany(search);
        return res.status(200).json(response);
    }
    getOne(req, res) {
        const taskService = new task_service_1.TaskService();
        const response = taskService.getOne(res.locals.task);
        return res.status(200).json(response);
    }
    create(req, res) {
        const taskService = new task_service_1.TaskService();
        const response = taskService.create(req.body);
        return res.status(201).json(response);
    }
    update(req, res) {
        const taskService = new task_service_1.TaskService();
        // Usando locals aqui 
        const response = taskService.update(res.locals.task, req.body);
        return res.status(200).json(response);
    }
    delete(req, res) {
        const taskService = new task_service_1.TaskService();
        // Usando locals aqui 
        taskService.delete(res.locals.task);
        return res.status(204).json();
    }
}
exports.TaskControllers = TaskControllers;
