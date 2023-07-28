import mongoose, { Document, Schema } from "mongoose";


export interface UserDocument extends Document{
    username: string;
    password: string;
}


const UserSchema: Schema<UserDocument> = new Schema<UserDocument>({
    username: {type: "string",},
    password: {type: "string",}
})


export const User = mongoose.model<UserDocument>('User', UserSchema)