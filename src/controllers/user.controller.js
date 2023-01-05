"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const user_service_1 = require("../services/user.service");
const validateUserHandler = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.sendStatus(200);
    }
    catch (error) {
        console.log(error.message);
        return res.status(401).send(error.message);
    }
});
const createUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, user_service_1.createUser)(req.body);
        return res.json((0, lodash_1.omit)(user, "password"));
    }
    catch (error) {
        console.log(error.message);
        return res.status(409).send(error.message);
    }
});
const loginHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { username, password } = req.body;
    try {
        const token = yield (0, user_service_1.login)(username, password);
        return res.json(token);
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).json(error.message);
    }
});
const getAllUsersHandler = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, user_service_1.getAllUsers)();
        return res.json(users);
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).json(error.message);
    }
});
const getUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    try {
        const user = yield (0, user_service_1.getUser)(_id);
        return res.json(user);
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).json(error.message);
    }
});
const deleteUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    try {
        const user = yield (0, user_service_1.deleteUser)(_id);
        return res.json(`Successfully deleted ${user === null || user === void 0 ? void 0 : user.username}`);
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).json(error.message);
    }
});
const controller = {
    validateUserHandler,
    createUserHandler,
    loginHandler,
    getAllUsersHandler,
    getUserHandler,
    deleteUserHandler,
};
exports.default = controller;
