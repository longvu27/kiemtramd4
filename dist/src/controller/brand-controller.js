"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const brand_1 = require("../model/brand");
class BrandController {
    constructor() {
        this.add = async (req, res) => {
            let brand = req.body;
            brand = await brand_1.Brand.create(brand);
            return res.status(201).json(brand);
        };
        this.edit = async (req, res) => {
            let newBrand = req.body;
            let id = req.params.id;
            await brand_1.Brand.updateOne({ _id: id }, { $set: newBrand });
            return res.status(200).json({
                message: " edit successfully "
            });
        };
        this.delete = async (req, res) => {
            let id = req.params.id;
            await brand_1.Brand.deleteOne({ _id: id });
            return res.status(200).json({
                message: " delete successfully "
            });
        };
        this.showAll = async (req, res) => {
            let brand = await brand_1.Brand.find();
            return res.status(201).json(brand);
        };
    }
}
exports.default = new BrandController();
//# sourceMappingURL=brand-controller.js.map