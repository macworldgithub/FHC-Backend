import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  id: number;
  subCatId: number;
  name: string;
  price: number;
  code: string;
  featureList: string[];
  description: string;
  quantity: number;
  image: string;
}

const ProductSchema: Schema = new Schema({
  id: { type: Number, required: true },
  subCatId: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  code: { type: String, required: true },
  featureList: { type: Array<String>, required: true},
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  image: { type: String, required: true },
});

const Product = mongoose.model<IProduct>("Product", ProductSchema);

export default Product;
