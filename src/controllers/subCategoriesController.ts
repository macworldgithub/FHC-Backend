import { Request, Response } from "express";
import * as subCatService from "../services/subCategoriesService";

export const createSubCategory = async (req: Request, res: Response) => {
  try {
    const subCategory = await subCatService.createSubCategory(req.body);
    res.status(201).json(subCategory);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getSubCategoryByName = async (req: Request, res: Response) => {
  try {
    const subCategory = await subCatService.getSubCategoryByName(req.params.name);
    if (!subCategory) {
      return res.status(404).json({ message: "SubCategory not found" });
    }
    res.json(subCategory);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllSubCategories = async (req: Request, res: Response) => {
  try {
    const subCategories = await subCatService.getAllSubCategories();
    if (!subCategories) {
      return res.status(404).json({ message: "SubCategories not found" });
    }
    res.json(subCategories);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const deleteSubCategoryById = async (req: Request, res: Response) => {
  try {
    const subCatId = req.params.id;
    const response = await subCatService.deleteSubCategoryById(subCatId);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const updateSubCategory = async (req: Request, res: Response) => {
  try {
    console.log("updateSubCategory body", req.body);
    const subCatId = req.params.id;
    const updateData = req.body;
    const updatedSubCategory = await subCatService.updateSubCategory(subCatId, updateData);
    if (!updatedSubCategory) {
      return res.status(404).json({ message: "SubCategory not found" });
    }
    res.json(updatedSubCategory);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};