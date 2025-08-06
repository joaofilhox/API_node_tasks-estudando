import { genereteId, taskDatabase } from "../database/database"
//import { TTask, TTaskCreateData, TTaskUpdateData } from "../interfaces/task.interface"; 
import { TTask, TTaskCreateBody, TTaskUpdateBody } from "../schemas/task.schemas"; // estou usando o tipagem do zod

export class TaskService {
    // Ler múltiplas tasks e fazer uma busca pelo title da task
    getMany(search?: string): TTask[] {
        if (search) {
            const searchResults = taskDatabase.filter((task) =>
                task.title.toLowerCase().includes(search.toLowerCase())
            );

            return searchResults;
        } else {
            return taskDatabase;
        }
    }

    // Ler uma única task
    // esta usando o locals do res e trazendo o valor armazenado feito na consulta do BD
    getOne(task: TTask): TTask {

        return task;
    }

    // Criar uma task
    create(body: TTaskCreateBody): TTask {
        const now = new Date();

        const newTask: TTask = {
            //  ...body,                //Não tipando newTask     
            // tipando newTask
            id: genereteId(),
            title: body.title,
            description: body.description,
            steps: body.steps,
            createdAt: now,
        }
        taskDatabase.push(newTask);

        return newTask;
    }

    // Atualizar uma task
    // esta usando o locals do res e trazendo o valor armazenado feito na consulta do BD
    upadte(currentTask: TTask, body: TTaskUpdateBody): TTask {
        const now = new Date();
        // Pegar tudo que tem na task antiga e vai substitui todo que vier no body 
        const uptadTask = { ...currentTask, ...body, upadteAt: now }

        const index = taskDatabase.findIndex((task) => task.id === currentTask.id);

        taskDatabase.splice(index, 1, uptadTask);

        return uptadTask;
    }

    // Excluir uma task
    // esta usando o locals do res e trazendo o valor armazenado feito na consulta do BD
    delete(currentTask: TTask): void {
        const index = taskDatabase.findIndex((task) => task.id === currentTask.id);

        taskDatabase.splice(index, 1);
    }
}




