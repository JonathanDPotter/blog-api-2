import PostModel, { PostInput } from "../models/post.model";

export const createPost = async (input: PostInput) => {
  try {
    const post = await PostModel.create(input);
    return post;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getAllPosts = async () => {
  try {
    const posts = await PostModel.find();
    return posts;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getPost = async (_id: string) => {
  try {
    const post = await PostModel.findById(_id);
    return post;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getUserPosts = async (_id: string) => {
  try {
    const posts = await PostModel.find({ user: _id });
    return posts;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const updatePost = async (_id: string, update: PostInput) => {
  try {
    const post = await PostModel.findByIdAndUpdate(_id, update);
    return post;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const deletePost = async (_id: string) => {
  try {
    const post = await PostModel.findByIdAndDelete(_id);
    return post;
  } catch (error: any) {
    throw new Error(error);
  }
};
