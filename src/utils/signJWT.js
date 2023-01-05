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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const signJWT = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = user;
    console.log(`Attempting to sign token for ${username}`);
    try {
        const token = jsonwebtoken_1.default.sign({ username }, config_1.default.server.token.secret, {
            issuer: config_1.default.server.token.issuer,
            expiresIn: "1d",
        });
        return token;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.default = signJWT;
