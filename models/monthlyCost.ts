import mongoose, { Document, Schema } from "mongoose";

export interface MonthlyCostDocument extends Document {
  advertisingCost: number;
  packagingCost: number;
  capital: number;
  month: string;
  monthNumber: number;
}

const monthlyCostSchema: Schema<MonthlyCostDocument> =
  new Schema<MonthlyCostDocument>(
    {
      advertisingCost: { type: Number, default: 0 },
      packagingCost: { type: Number, default: 0 },
      capital: { type: Number, default: 0 },
      month: { type: String, required: true },
      monthNumber: { type: Number, required: true },
    },
    {
      timestamps: true,
    }
  );

export const MonthlyCost = mongoose.model<MonthlyCostDocument>(
  "MonthlyCost",
  monthlyCostSchema
);
