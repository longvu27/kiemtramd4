"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.brandRouter = void 0;
const express_1 = require("express");
const brand_controller_1 = __importDefault(require("../controller/brand-controller"));
exports.brandRouter = (0, express_1.Router)();
exports.brandRouter.post('', brand_controller_1.default.add);
exports.brandRouter.put('/:id', brand_controller_1.default.edit);
exports.brandRouter.delete('/:id', brand_controller_1.default.delete);
exports.brandRouter.get('', brand_controller_1.default.showAll);
//# sourceMappingURL=brand-router.js.map