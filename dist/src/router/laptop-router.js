"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.laptopRouter = void 0;
const express_1 = require("express");
const laptop_controller_1 = __importDefault(require("../controller/laptop-controller"));
exports.laptopRouter = (0, express_1.Router)();
exports.laptopRouter.post('', laptop_controller_1.default.add);
exports.laptopRouter.put('/:id', laptop_controller_1.default.edit);
exports.laptopRouter.delete('/:id', laptop_controller_1.default.delete);
exports.laptopRouter.get('', laptop_controller_1.default.showAll);
exports.laptopRouter.get('show-detail/:id', laptop_controller_1.default.showDetail);
exports.laptopRouter.post('/find-by-name', laptop_controller_1.default.findByName);
exports.laptopRouter.get('/find-by-brand/:id', laptop_controller_1.default.findByIdBrand);
exports.laptopRouter.get('/sort-up-ascending-price', laptop_controller_1.default.SortUpAscendingPrice);
exports.laptopRouter.get('/sort-down-ascending-quantity', laptop_controller_1.default.SortDownAscendingQuantity);
//# sourceMappingURL=laptop-router.js.map