import { Request, Response } from "express";
import { omit } from "lodash";
import { CreateUserInput } from "../schemas/user.schema";
import {
  createUser,
  getAllUsers,
  getUser,
  deleteUser,
  login,
} from "../services/user.service";

const createUserHandler = async (
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) => {
  try {
    const user = await createUser(req.body);
    return res.send(omit(user, "password"));
  } catch (error: any) {
    console.log(error);
    return res.status(409).send(error.message);
  }
};

const loginHandler = async (req: Request, res: Response) => {
  let { username, password } = req.body;

  try {
    const token = await login(username, password);
    return res.send(token);
  } catch (error: any) {
    console.log(error);
    return res.status(500).send(error.message);
  }
};

const getAllUsersHandler = async (_req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    return res.send(users);
  } catch (error: any) {
    console.log(error);
    return res.status(500).send(error.message);
  }
};

const getUserHandler = async (req: Request, res: Response) => {
  const { _id } = req.params;
  try {
    const user = await getUser(_id);
    return res.send(user);
  } catch (error: any) {
    console.log(error);
    return res.status(500).send(error.message);
  }
};

const deleteUserHandler = async (req: Request, res: Response) => {
  const { _id } = req.params;
  try {
    const user = await deleteUser(_id);
    return res.send(`Successfully deleted ${user?.username}`);
  } catch (error: any) {
    console.log(error);
    return res.status(500).send(error.message);
  }
};

const controller = {
  createUserHandler,
  loginHandler,
  getAllUsersHandler,
  getUserHandler,
  deleteUserHandler,
};

export default controller;
