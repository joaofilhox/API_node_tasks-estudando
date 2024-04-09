import "express-async-errors" // para async quando for trabalhar com BD => npm install express-async-errors

import express, { json } from "express";
import { taskRouter } from "./routes/task.routes";
import { HandleErrors } from "./errors/handleErrors";
import helmet from "helmet"; // Extremamente necessário para segurança para protege a aplicação de diversas vulnerabilidades

export const app = express();

app.use(helmet());
app.use(json());
app.use("/tasks", taskRouter);
// Aplicando o handleErrors.ts
app.use(HandleErrors.execute);
