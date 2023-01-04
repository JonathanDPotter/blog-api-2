import { Schema, model, Document } from "mongoose";
import  { UserDocument } from "./user.model";

export interface PostInput {
  userId: UserDocument["_id"];
  title: string;
  body: string;
  published: boolean;
}

export interface PostDocument extends PostInput, Document {
  author: string;
  createdAt: Date;
  updatedAt: Date;
}

const PostSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    author: {type: String, required: true},
    title: { type: String, required: true },
    body: { type: String, required: true },
    published: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

const PostModel = model<PostDocument>("Post", PostSchema);

export default PostModel;
