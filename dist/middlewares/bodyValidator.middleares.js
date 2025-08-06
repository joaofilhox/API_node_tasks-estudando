"use strict";
//"resolver"
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyValidator = void 0;
class BodyValidator {
    static execute(schema) {
        return (req, res, next) => {
            req.body = schema.parse(req.body); // O parse valida e serializa so passar o que estiver no schema
            next();
        };
    }
}
exports.BodyValidator = BodyValidator;
