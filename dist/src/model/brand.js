"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Brand = void 0;
const mongoose_1 = require("mongoose");
let BrandSchema = new mongoose_1.Schema({
    name: String
});
let Brand = (0, mongoose_1.model)('Brand', BrandSchema);
exports.Brand = Brand;
//# sourceMappingURL=brand.js.map