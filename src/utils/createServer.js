"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const helmet_1 = __importDefault(require("helmet"));
const index_routes_1 = __importDefault(require("../routes/index.routes"));
const createServer = () => {
    const server = (0, express_1.default)();
    server.use(express_1.default.json());
    server.use(express_1.default.static(path_1.default.join(__dirname, "../static")));
    // logging with morgan
    server.use((0, morgan_1.default)("dev"));
    server.use((0, cors_1.default)({ origin: "*" }));
    server.use((0, helmet_1.default)());
    server.use(index_routes_1.default);
    return server;
};
exports.default = createServer;
