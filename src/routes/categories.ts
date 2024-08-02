import express from 'express';
import { createCategory, deleteCategoryById, getAllCategories, updateCategory,  } from '../controllers/categoriesController';

const router = express.Router();

router.post('/', createCategory);
router.get('/', getAllCategories);
router.delete('/:id', deleteCategoryById);
router.put('/:id', updateCategory);

export default router;