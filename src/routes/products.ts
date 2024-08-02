import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductByName,
  updateProduct,
} from "../controllers/productsController";

const router = express.Router();

router.post("/", createProduct);
router.get("/", getAllProducts);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);

export default router;
