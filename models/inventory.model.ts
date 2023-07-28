import mongoose, { Document, Schema } from "mongoose";


export interface InventoryDocument extends Document{
    productId: string;
    productName: string;
    initialQuantity: number;
    quantityLeft: number;

}


const UserSchema: Schema<InventoryDocument> = new Schema<InventoryDocument>({
    productId: {type: String, required: true},
    productName: {type: String, required: true},
    initialQuantity: {type: Number, required: true},
    quantityLeft: {type: Number, required: true},
})


export const Inventory = mongoose.model<InventoryDocument>('Inventory', UserSchema)