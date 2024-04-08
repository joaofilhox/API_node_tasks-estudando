import { genereteId, taskDatabase } from "../database/database"
import { ITask, TTaskCreateData, TTaskUpdateData } from "../interfaces/task.interface";

export class TaskService {
    // Ler múltiplas tasks e fazer uma busca pelo title da task
    getMany(search?: string): ITask[] {
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
    getOne(task: ITask): ITask {

        return task;
    }

    // Criar uma task
    create(body: TTaskCreateData): ITask {
        const newTask: ITask = {
            //  ...body,                //Não tipando newTask     
            // tipando newTask
            id: genereteId(),
            title: body.title,
            description: body.description,
            steps: body.steps
        }
        taskDatabase.push(newTask);

        return newTask;
    }

    // Atualizar uma task
     // esta usando o locals do res e trazendo o valor armazenado feito na consulta do BD
    upadte(currentTask: ITask, body: TTaskUpdateData): ITask {
        // Pegar tudo que tem na task antiga e vai substitui todo que vier no body 
        const uptadTask = { ...currentTask, ...body }

        const index = taskDatabase.findIndex((task) => task.id === currentTask.id);

        taskDatabase.splice(index, 1, uptadTask);

        return uptadTask;
    }

    // Excluir uma task
     // esta usando o locals do res e trazendo o valor armazenado feito na consulta do BD
    delete(currentTask: ITask): void {
        const index = taskDatabase.findIndex((task) => task.id === currentTask.id);

        taskDatabase.splice(index, 1);
    }
}




