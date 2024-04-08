export interface ITask{
    id: number;
    title: string;
    description: string;
    steps: string[];
}

export type TTaskCreateData = Omit<ITask, "id">;

export type TTaskUpdateData = Partial<TTaskCreateData>;