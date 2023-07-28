import mongoose, { Document, Schema } from "mongoose";

export interface SaleDocument extends Document {
  productId: string;
  productName: string;
  quantity: number;
  transportationCost: number;
  moneyGot: number;
}

const SaleSchema: Schema<SaleDocument> = new Schema<SaleDocument>(
  {
    productId: { type: String, required: true },
    productName: { type: String, required: true },
    quantity: { type: Number, required: true },
    moneyGot: { type: Number, required: true },
    transportationCost: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export const Sale = mongoose.model<SaleDocument>("Sale", SaleSchema);
