"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const extractJWT_1 = __importDefault(require("../middleware/extractJWT"));
const router = (0, express_1.Router)();
router.get("/validate", extractJWT_1.default, user_controller_1.default.validateUserHandler);
router.post("/register", user_controller_1.default.createUserHandler);
router.post("/login", user_controller_1.default.loginHandler);
router.get("/", user_controller_1.default.getAllUsersHandler);
router.get("/:_id", user_controller_1.default.getUserHandler);
router.delete("/:_id", extractJWT_1.default, user_controller_1.default.deleteUserHandler);
exports.default = router;
