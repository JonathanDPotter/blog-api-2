"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const mongoose_1 = __importDefault(require("mongoose"));
const UserService = __importStar(require("../services/user.service"));
const supertest_1 = __importDefault(require("supertest"));
const createServer_1 = __importDefault(require("../utils/createServer"));
const app = (0, createServer_1.default)();
const userId = mongoose_1.default.Types.ObjectId.toString();
const userInput = {
    username: "Test User",
    password: "Password123",
};
const userPayload = {
    username: "Test User",
    _id: "63adaad517bbb1c2dc885c37",
    createdAt: "2022-12-29T14:57:25.786Z",
    updatedAt: "2022-12-29T14:57:25.786Z",
    __v: 0,
};
describe("user", () => {
    describe("user registration", () => {
        describe("given the username and password are valid", () => {
            it("should return the user payload", () => __awaiter(void 0, void 0, void 0, function* () {
                const createUserServiceMock = jest
                    .spyOn(UserService, "createUser")
                    // @ts-ignore
                    .mockReturnValueOnce(userPayload);
                const { statusCode, body } = yield (0, supertest_1.default)(app)
                    .post("/api/user/register")
                    .send(userInput);
                expect(statusCode).toBe(200);
                expect(body).toEqual(userPayload);
                expect(createUserServiceMock).toHaveBeenCalledWith(userInput);
            }));
        });
        describe("given the user service throws", () => {
            it("should return a 409 error ", () => __awaiter(void 0, void 0, void 0, function* () {
                const createUserServiceMock = jest
                    .spyOn(UserService, "createUser")
                    .mockRejectedValueOnce("oh no :(");
                const { statusCode } = yield (0, supertest_1.default)(app)
                    .post("/api/user/register")
                    .send({ username: null, password: null });
                expect(statusCode).toBe(409);
                expect(createUserServiceMock).toHaveBeenCalled();
            }));
        });
    });
});
