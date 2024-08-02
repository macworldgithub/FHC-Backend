import SubCategory, { ISubCategory } from "../models/subCategories";

export const createSubCategory = async (subCatData: ISubCategory) => {
  const subCategory = new SubCategory(subCatData);
  return await subCategory.save();
};

export const getSubCategoryByName = async (name: string) => {
  return await SubCategory.findOne({ name });
};

export const deleteSubCategoryById = async (subCatId: string) => {
  return await SubCategory.findByIdAndDelete(subCatId);
};

export const updateSubCategory = async (
  subCatId: string,
  updateData: Partial<ISubCategory>
) => {
  return await SubCategory.findByIdAndUpdate(subCatId, updateData, { new: true });
};

export const getAllSubCategories = async () => {
  return await SubCategory.find();
};