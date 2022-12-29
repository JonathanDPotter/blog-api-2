import bcrypt from "bcrypt";
import signJWT from "../utils/signJWT";
import UserModel, { UserInput } from "../models/user.model";

export const createUser = async (input: UserInput) => {
  try {
    const user = await UserModel.create(input);
    return user;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getAllUsers = async () => {
  try {
    const users = await UserModel.find().select("-password");
    return users;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getUser = async (_id: string) => {
  try {
    const user = await UserModel.findById(_id).select("-password");
    return user;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const login = async (username: string, password: string) => {
  try {
    const user = await UserModel.findOne({ username });

    if (!user) throw new Error("User not found.");

    const isAuth = await bcrypt.compare(password, user.password);

    if (!isAuth) throw new Error("Password is incorrect.");

    const token = await signJWT(user);

    return token;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const deleteUser = async (_id: string) => {
  try {
    const user = await UserModel.findByIdAndDelete(_id).select("-password");
    return user;
  } catch (error: any) {
    throw new Error(error);
  }
};
