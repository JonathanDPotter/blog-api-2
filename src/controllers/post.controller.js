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
const post_service_1 = require("../services/post.service");
const createPostHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield (0, post_service_1.createPost)(req.body);
        return res.json(post);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error.message);
    }
});
const getAllPostsHandler = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield (0, post_service_1.getAllPosts)();
        return res.json(posts);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error.message);
    }
});
const getPostHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    try {
        const post = yield (0, post_service_1.getPost)(_id);
        return res.json(post);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error.message);
    }
});
const getUserPostsHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    try {
        const posts = yield (0, post_service_1.getUserPosts)(_id);
        return res.json(posts);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error.message);
    }
});
const updatePostHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    try {
        const post = yield (0, post_service_1.updatePost)(_id, req.body);
        console.log("put req: ", req.body);
        return res.json(post);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error.message);
    }
});
const deletePostHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    try {
        const post = yield (0, post_service_1.deletePost)(_id);
        return res.json(`Successfully deleted ${post === null || post === void 0 ? void 0 : post.title}`);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error.message);
    }
});
const controller = {
    createPostHandler,
    getAllPostsHandler,
    getPostHandler,
    getUserPostsHandler,
    updatePostHandler,
    deletePostHandler,
};
exports.default = controller;
function getUsersPosts(_id) {
    throw new Error("Function not implemented.");
}
