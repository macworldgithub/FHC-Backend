import { Request, Response } from "express";
import * as productService from "../services/productsServices";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const productResponse = await productService.createProduct(req.body);
    res.status(201).json(productResponse);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getProductByName = async (req: Request, res: Response) => {
  try {
    const name = req.params.name;
    const product = await productService.getProductByName(name);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    res.json(product);
  } catch (error: any) {
    res.status(400).json({
      error: error.message,
    });
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.getAllProducts();
    if (!products) {
      res.status(404).json({
        message: "Products not found",
      });
    }
    res.status(200).json(products);
  } catch (error: any) {
    res.status(400).json({
      error: error.message,
    });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const updateResponse = await productService.updateProduct(id, req.body);
    if (!updateResponse) {
      res.status(404).json({
        message: "Products not found",
      });
    }
    res.status(200).json({
      message: "Product succesfully updated!",
    });
  } catch (error: any) {
    res.status(400).json({
      error: error.message,
    });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleteResponse = await productService.deleteProduct(id);
    if (!deleteResponse) {
      res.status(404).json(deleteResponse);
    }
    res.status(200)
      .json({ item: deleteResponse, message: "Product deleted succesfully" });
  } catch (error: any) {
    res.status(400).json({
      error: error.message,
    });
  }
};
