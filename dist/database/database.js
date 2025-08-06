"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genereteId = exports.taskDatabase = void 0;
let id = 0;
exports.taskDatabase = [];
const genereteId = () => {
    id++;
    return id;
};
exports.genereteId = genereteId;
