import { Request, Response } from "express";
import * as userService from "../services/userServices";

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.getUserByEmail(req.params.email);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
