"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsTaskIdValid = void 0;
const database_1 = require("../database/database");
const App_Error_1 = require("../errors/App.Error");
class IsTaskIdValid {
    static execute(req, res, next) {
        const id = req.params.id;
        const task = database_1.taskDatabase.find((task) => task.id === Number(id));
        if (!task) {
            throw new App_Error_1.AppError("Task not found.", 404);
        }
        // armazena valores da consulta
        res.locals.task = task;
        next();
    }
}
exports.IsTaskIdValid = IsTaskIdValid;
