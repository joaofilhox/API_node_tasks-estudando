"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleErrors = void 0;
const App_Error_1 = require("./App.Error");
const zod_1 = require("zod");
class HandleErrors {
    static execute(error, req, res, next) {
        if (error instanceof App_Error_1.AppError) {
            return res.status(error.statusCode).json({ message: error.message });
        }
        if (error instanceof zod_1.ZodError) {
            return res.status(400).json(error);
        }
        console.log(error);
        return res.status(500).json({ message: "Internal serve error" });
    }
}
exports.HandleErrors = HandleErrors;
