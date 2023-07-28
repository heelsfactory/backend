import mongoose, { Document, Schema } from "mongoose";

export interface ProductDocument extends Document {
  productName: string;
  unitPrice: number;
  costPrice: number;
  quantity: number;
  colors: string[];
  profitExpected: number;
  amountSold: number;
  initialQuantity: number;
  quantityLeft: number;
  productImage: string;

}

const ProductSchema: Schema<ProductDocument> = new Schema<ProductDocument>({
  productName: { type: String, required: true },
  unitPrice: { type: Number, required: true },
  costPrice: { type: Number, required: true },
  quantity: { type: Number, required: true },
  colors: [{ type: String}],
  profitExpected: { type: Number, required: true },
  initialQuantity: { type: Number, required: true },
  quantityLeft: { type: Number, required: true },
  amountSold: { type: Number, required: true},
  productImage: { type: String, required: true}
},{
    timestamps: true
});

export const Product = mongoose.model<ProductDocument>(
  "Product",
  ProductSchema
);
