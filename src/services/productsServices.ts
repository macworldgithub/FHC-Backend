import Product, { IProduct } from "../models/product";

export const createProduct = async (product: IProduct) => {
  const productResponse = new Product(product);
  return await productResponse.save();
};

export const getAllProducts = async () => {
  const products = await Product.find();
  return await products;
};

export const getProductByName = async (name: string) => {
  const productResponse = await Product.findOne({ name });
  return productResponse;
};

export const updateProduct = async (id: string, product: IProduct) => {
  const updateResponse = await Product.findByIdAndUpdate(id, product, {
    new: true,
  });

  return updateResponse;
};

export const deleteProduct = async (id: string) => {
    const deleteResponse = await Product.findByIdAndDelete(id);
    return deleteResponse;
}
