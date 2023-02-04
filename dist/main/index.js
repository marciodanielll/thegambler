"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerError = exports.ClientError = void 0;
var ClientError_1 = require("./ClientError");
Object.defineProperty(exports, "ClientError", { enumerable: true, get: function () { return __importDefault(ClientError_1).default; } });
var ServerError_1 = require("./ServerError");
Object.defineProperty(exports, "ServerError", { enumerable: true, get: function () { return __importDefault(ServerError_1).default; } });
