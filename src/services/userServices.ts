import User, { IUser } from "../models/user";

export const createUser = async (userData: IUser) => {
  const user = new User(userData);
  return await user.save();
};

export const getUserByEmail = async (email: string) => {
  return await User.findOne({ email });
};
