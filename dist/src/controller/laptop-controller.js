"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const laptop_1 = require("../model/laptop");
class LaptopController {
    constructor() {
        this.add = async (req, res) => {
            let laptop = req.body;
            laptop = await laptop_1.Laptop.create(laptop);
            return res.status(201).json(laptop);
        };
        this.edit = async (req, res) => {
            let newLaptop = req.body;
            let id = req.params.id;
            await laptop_1.Laptop.updateOne({ _id: id }, { $set: newLaptop });
            return res.status(200).json({
                message: " edit successfully "
            });
        };
        this.delete = async (req, res) => {
            let id = req.params.id;
            await laptop_1.Laptop.deleteOne({ _id: id });
            return res.status(200).json({
                message: " delete successfully "
            });
        };
        this.showAll = async (req, res) => {
            let laptops = await laptop_1.Laptop.find();
            return res.status(201).json(laptops);
        };
        this.showDetail = async (req, res) => {
            let id = req.params.id;
            let laptop = await laptop_1.Laptop.find({ _id: id });
            return res.status(200).json(laptop);
        };
        this.findByName = async (req, res) => {
            let nameFind = req.body.nameLaptop;
            let laptops = await laptop_1.Laptop.find({ nameLaptop: nameFind });
            res.json({
                message: "Tim duoc",
                laptops: laptops
            });
        };
        this.findByIdBrand = async (req, res) => {
            let id = req.params.id;
            let laptops = await laptop_1.Laptop.find({ brand: id });
            return res.status(200).json(laptops);
        };
        this.SortUpAscendingPrice = async (req, res) => {
            let laptops = await laptop_1.Laptop.find().sort({ 'price': 1 });
            res.json({
                mess: " tăng dần theo giá",
                laptops: laptops
            });
        };
        this.SortDownAscendingQuantity = async (req, res) => {
            let laptops = await laptop_1.Laptop.find().sort({ 'quantity': -1 });
            res.json({
                mess: " giảm dần theo số lượng",
                laptops: laptops
            });
        };
    }
}
exports.default = new LaptopController();
//# sourceMappingURL=laptop-controller.js.map