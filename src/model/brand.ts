import {Schema, model} from "mongoose";

export interface IBrand {
    name ?: string;
}
let BrandSchema = new Schema<IBrand>({
    name: String
})

let Brand = model<IBrand>('Brand', BrandSchema);
export {Brand}