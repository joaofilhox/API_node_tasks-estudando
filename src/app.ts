import "express-async-errors" // para async quando for trabalhar com BD => npm install express-async-errors
import express, { json } from "express";
import { taskRouter } from "./routes/task.routes";
import { HandleErrors } from "./errors/handleErrors";

export const app = express();

app.use(json());
app.use("/tasks", taskRouter);
// Aplicando o handleErrors.ts
app.use(HandleErrors.execute);

// Ler múltiplas tasks e fazer uma busca pelo nome da task
// Ler uma única task
// Criar uma task
// Atualizar uma task
// Excluir uma task