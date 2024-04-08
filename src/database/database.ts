import { ITask } from "../interfaces/task.interface";

let id = 0;

export const taskDatabase: ITask[] = [];

export const genereteId = () => {
    id++;
    return id;
}