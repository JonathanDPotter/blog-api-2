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
exports.deletePost = exports.updatePost = exports.getUserPosts = exports.getPost = exports.getAllPosts = exports.createPost = void 0;
const post_model_1 = __importDefault(require("../models/post.model"));
const user_model_1 = __importDefault(require("../models/user.model"));
const createPost = (input) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const author = yield user_model_1.default.findById(input.userId);
        const post = yield post_model_1.default.create(Object.assign(Object.assign({}, input), { author: author === null || author === void 0 ? void 0 : author.username }));
        return post;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.createPost = createPost;
const getAllPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield post_model_1.default.find();
        return posts;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.getAllPosts = getAllPosts;
const getPost = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield post_model_1.default.findById(_id);
        return post;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.getPost = getPost;
const getUserPosts = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield post_model_1.default.find({ user: _id });
        return posts;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.getUserPosts = getUserPosts;
const updatePost = (_id, update) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield post_model_1.default.findByIdAndUpdate(_id, update);
        return post;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.updatePost = updatePost;
const deletePost = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield post_model_1.default.findByIdAndDelete(_id);
        return post;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.deletePost = deletePost;
