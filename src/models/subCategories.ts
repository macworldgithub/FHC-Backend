import mongoose, { Schema, Document } from 'mongoose';

export interface ISubCategory extends Document {
    catId: number;
    name: string;
    image: string;
}

const SubCategorySchema: Schema = new Schema({
    catId: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true }
});

const SubCategory = mongoose.model<ISubCategory>('SubCategory', SubCategorySchema);

export default SubCategory;
