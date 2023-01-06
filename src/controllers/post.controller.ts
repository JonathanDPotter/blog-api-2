import { Request, Response } from "express";
import { CreatePostInput } from "../schemas/post.schema";
import {
  createPost,
  getAllPosts,
  getPost,
  deletePost,
  updatePost,
  getUserPosts,
} from "../services/post.service";

const createPostHandler = async (
  req: Request<{}, {}, CreatePostInput["body"]>,
  res: Response
) => {
  try {
    const post = await createPost(req.body);
    return res.json(post);
  } catch (error: any) {
    console.log(error);
    return res.status(500).json(error.message);
  }
};

const getAllPostsHandler = async (_req: Request, res: Response) => {
  try {
    const posts = await getAllPosts();
    return res.json(posts);
  } catch (error: any) {
    console.log(error);
    return res.status(500).json(error.message);
  }
};

const getPostHandler = async (req: Request, res: Response) => {
  const { _id } = req.params;
  try {
    const post = await getPost(_id);
    return res.json(post);
  } catch (error: any) {
    console.log(error);
    return res.status(500).json(error.message);
  }
};

const getUserPostsHandler = async (req: Request, res: Response) => {
  const { _id } = req.params;
  try {
    const posts = await getUserPosts(_id);
    return res.json(posts);
  } catch (error: any) {
    console.log(error);
    return res.status(500).json(error.message);
  }
};

const updatePostHandler = async (req: Request, res: Response) => {
  const { _id } = req.params;
  try {
    const post = await updatePost(_id, req.body);
    return res.json(post);
  } catch (error: any) {
    console.log(error);
    return res.status(500).json(error.message);
  }
};

const deletePostHandler = async (req: Request, res: Response) => {
  const { _id } = req.params;
  try {
    const post = await deletePost(_id);
    return res.json(`Successfully deleted ${post?.title}`);
  } catch (error: any) {
    console.log(error);
    return res.status(500).json(error.message);
  }
};

const controller = {
  createPostHandler,
  getAllPostsHandler,
  getPostHandler,
  getUserPostsHandler,
  updatePostHandler,
  deletePostHandler,
};

export default controller;
function getUsersPosts(_id: string) {
  throw new Error("Function not implemented.");
}
