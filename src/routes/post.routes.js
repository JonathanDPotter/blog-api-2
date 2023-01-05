"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_controller_1 = __importDefault(require("../controllers/post.controller"));
const extractJWT_1 = __importDefault(require("../middleware/extractJWT"));
const router = (0, express_1.Router)();
router.post("/", extractJWT_1.default, post_controller_1.default.createPostHandler);
router.get("/", post_controller_1.default.getAllPostsHandler);
router.get("/:_id", post_controller_1.default.getPostHandler);
router.get("/user/:_id", post_controller_1.default.getUserPostsHandler);
router.patch("/:_id", extractJWT_1.default, post_controller_1.default.updatePostHandler);
router.delete("/:_id", extractJWT_1.default, post_controller_1.default.deletePostHandler);
exports.default = router;
