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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.login = exports.getUser = exports.getAllUsers = exports.createUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const lodash_1 = require("lodash");
const signJWT_1 = __importDefault(require("../utils/signJWT"));
const user_model_1 = __importDefault(require("../models/user.model"));
const createUser = (input) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.default.create(input);
        return user;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.createUser = createUser;
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_model_1.default.find().select("-password");
        return users;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.getAllUsers = getAllUsers;
const getUser = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.default.findById(_id).select("-password");
        return user;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.getUser = getUser;
const login = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userDoc = yield user_model_1.default.findOne({ username });
        if (!userDoc)
            throw new Error("User not found.");
        const isAuth = yield bcrypt_1.default.compare(password, userDoc.password);
        if (!isAuth)
            throw new Error("Password is incorrect.");
        const token = yield (0, signJWT_1.default)(userDoc);
        const user = (0, lodash_1.pick)(userDoc, ["username", "_id"]);
        return { user, token };
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.login = login;
const deleteUser = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.default.findByIdAndDelete(_id).select("-password");
        return user;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.deleteUser = deleteUser;
