"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PostSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" },
    author: { type: String, required: true },
    title: { type: String, required: true },
    body: { type: String, required: true },
    published: { type: Boolean, required: true },
}, {
    timestamps: true,
});
const PostModel = (0, mongoose_1.model)("Post", PostSchema);
exports.default = PostModel;
