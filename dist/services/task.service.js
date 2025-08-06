"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const database_1 = require("../database/database");
class TaskService {
    // Ler múltiplas tasks e fazer uma busca pelo title da task
    getMany(search) {
        if (search) {
            const searchResults = database_1.taskDatabase.filter((task) => task.title.toLowerCase().includes(search.toLowerCase()));
            return searchResults;
        }
        else {
            return database_1.taskDatabase;
        }
    }
    // Ler uma única task
    // esta usando o locals do res e trazendo o valor armazenado feito na consulta do BD
    getOne(task) {
        return task;
    }
    // Criar uma task
    create(body) {
        const now = new Date();
        const newTask = {
            //  ...body,                //Não tipando newTask     
            // tipando newTask
            id: (0, database_1.genereteId)(),
            title: body.title,
            description: body.description,
            steps: body.steps,
            createdAt: now,
        };
        database_1.taskDatabase.push(newTask);
        return newTask;
    }
    // Atualizar uma task
    // esta usando o locals do res e trazendo o valor armazenado feito na consulta do BD
    update(currentTask, body) {
        const now = new Date();
        // Pegar tudo que tem na task antiga e vai substitui todo que vier no body 
        const updatedTask = Object.assign(Object.assign(Object.assign({}, currentTask), body), { updatedAt: now });
        const index = database_1.taskDatabase.findIndex((task) => task.id === currentTask.id);
        database_1.taskDatabase.splice(index, 1, updatedTask);
        return updatedTask;
    }
    // Excluir uma task
    // esta usando o locals do res e trazendo o valor armazenado feito na consulta do BD
    delete(currentTask) {
        const index = database_1.taskDatabase.findIndex((task) => task.id === currentTask.id);
        database_1.taskDatabase.splice(index, 1);
    }
}
exports.TaskService = TaskService;
