"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Laptop = void 0;
const mongoose_1 = require("mongoose");
let LaptopSchema = new mongoose_1.Schema({
    nameLaptop: String,
    price: String,
    quantity: Number,
    brand: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'brand'
    }
});
let Laptop = (0, mongoose_1.model)('Laptop', LaptopSchema);
exports.Laptop = Laptop;
//# sourceMappingURL=laptop.js.map