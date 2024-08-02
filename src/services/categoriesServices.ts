import Category, { ICategory } from "../models/categories";

export const createCategory = async (catData: ICategory) => {
  const category = new Category(catData);
  return await category.save();
};

export const getCategoryByName = async (name: string) => {
  return await Category.findOne({ name });
};

export const getCategoryById = async (_id: string) => {
  return await Category.findOne({ _id });
};

export const deleteCategoryById = async (catId: string) => {
  return await Category.findByIdAndDelete(catId);
};

export const updateCategory = async (
  catId: string,
  updateData: Partial<ICategory>
) => {
  return await Category.findByIdAndUpdate(catId, updateData, { new: true });
};

export const getAllCategories = async () => {
  return await Category.find();
};
