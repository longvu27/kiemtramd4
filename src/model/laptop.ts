import {Schema, model} from "mongoose";
import {IBrand} from "./brand";
export interface ILaptop {
    nameLaptop ?: string;
    price ?: number;
    quantity ?: number;
    brand ?: IBrand
}

let LaptopSchema = new Schema<ILaptop>({
    nameLaptop: String,
    price: String,
    quantity: Number,
    brand: {
        type: Schema.Types.ObjectId,
        ref: 'brand'
    }

});

let Laptop = model<ILaptop>('Laptop', LaptopSchema);
export {Laptop};