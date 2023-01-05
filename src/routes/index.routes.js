"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const routes_json_1 = __importDefault(require("./routes.json"));
const user_routes_1 = __importDefault(require("./user.routes"));
const post_routes_1 = __importDefault(require("./post.routes"));
const router = (0, express_1.Router)();
router.get("/", (_req, res) => res.sendFile(path_1.default.join(__dirname, "../static/index.html")));
router.get("/healthcheck", (_req, res) => res.sendStatus(200));
router.get("/routes", (_req, res) => res.status(200).json(routes_json_1.default));
// add api routes
router.use("/api/user", user_routes_1.default);
router.use("/api/post", post_routes_1.default);
exports.default = router;
