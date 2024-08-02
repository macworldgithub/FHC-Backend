import mongoose, { Schema, Document } from 'mongoose';

export interface ICategory extends Document {
    typeId: number;
    name: string;
    description: string;
    image: string;
    showOnNav: boolean;
}

const CategorySchema: Schema = new Schema({
    typeId: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    showOnNav: { type: Boolean, required: true }
});

const Category = mongoose.model<ICategory>('Category', CategorySchema);

export default Category;
