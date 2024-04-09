//import { ITask } from "../interfaces/task.interface"; 
import { TTask } from "../schemas/task.schemas"; // estou usando o tipagem do zod
let id = 0;

export const taskDatabase: TTask[] = [];

export const genereteId = () => {
    id++;
    return id;
}