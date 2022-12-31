import { object, string, boolean, TypeOf } from "zod";

export const createPostSchema = object({
  body: object({
    userId: string({
      required_error: "User record is required",
    }),
    title: string({
      required_error: "Title is required",
    }).max(30, "Title too long - must be fewer than 30 characters."),
    body: string({
      required_error: "Body is required.",
    }),
    published: boolean({ required_error: "Published is required." }),
  }),
});

export type CreatePostInput = TypeOf<typeof createPostSchema>;
