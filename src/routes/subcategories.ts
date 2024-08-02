import express from 'express';
import { createSubCategory, deleteSubCategoryById, getAllSubCategories, getSubCategoryByName, updateSubCategory  } from '../controllers/subCategoriesController';

const router = express.Router();

router.post('/', createSubCategory);
router.get('/', getAllSubCategories);
router.delete('/:id', deleteSubCategoryById);
router.put('/:id', updateSubCategory);

export default router;