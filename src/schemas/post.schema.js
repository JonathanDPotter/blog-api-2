"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPostSchema = void 0;
const zod_1 = require("zod");
exports.createPostSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        userId: (0, zod_1.string)({
            required_error: "User record is required",
        }),
        title: (0, zod_1.string)({
            required_error: "Title is required",
        }).max(30, "Title too long - must be fewer than 30 characters."),
        body: (0, zod_1.string)({
            required_error: "Body is required.",
        }),
        published: (0, zod_1.boolean)({ required_error: "Published is required." }),
    }),
});
