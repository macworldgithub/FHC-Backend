import { Request, Response } from "express";
import * as catService from "../services/categoriesServices";

export const createCategory = async (req: Request, res: Response) => {
  try {
    const category = await catService.createCategory(req.body);
    res.status(201).json(category);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getCategoryByName = async (req: Request, res: Response) => {
  try {
    const category = await catService.getCategoryByName(req.params.name);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json(category);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const category = await catService.getAllCategories();
    if (!category) {
      return res.status(404).json({ message: "Categories not found" });
    }
    res.json(category);
  } catch (error) {}
};

export const deleteCategoryById = async (req: Request, res: Response) => {
  try {
    const catId = req.params.id;
    const response = await catService.deleteCategoryById(catId);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const updateCategory = async (req: Request, res: Response) => {
    try {
      const catId = req.params.id;
      console.log("catId", req.params);
      const updateData = req.body;
      const updatedCategory = await catService.updateCategory(catId, updateData);
      if (!updatedCategory) {
        return res.status(404).json({ message: "Category not found" });
      }
      res.json(updatedCategory);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };
