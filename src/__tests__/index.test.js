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
const supertest_1 = __importDefault(require("supertest"));
const createServer_1 = __importDefault(require("../utils/createServer"));
const routes_json_1 = __importDefault(require("../routes/routes.json"));
const app = (0, createServer_1.default)();
describe("index routes", () => {
    describe("GET '/'", () => {
        it("should return the homepage as html", () => __awaiter(void 0, void 0, void 0, function* () {
            const { statusCode, headers } = yield (0, supertest_1.default)(app).get("/");
            expect(statusCode).toBe(200);
            expect(headers["content-type"]).toMatch(/html/);
        }));
    });
    describe("GET '/healthcheck'", () => {
        it("should return a status code of 200", () => __awaiter(void 0, void 0, void 0, function* () {
            const { statusCode } = yield (0, supertest_1.default)(app).get("/healthcheck");
            expect(statusCode).toBe(200);
        }));
    });
    describe("GET '/routes'", () => {
        it("should return the routes.json file", () => __awaiter(void 0, void 0, void 0, function* () {
            const { statusCode, headers, body } = yield (0, supertest_1.default)(app).get("/routes");
            expect(statusCode).toBe(200);
            expect(headers["content-type"]).toMatch(/json/);
            expect(body).toEqual(routes_json_1.default);
        }));
    });
});
