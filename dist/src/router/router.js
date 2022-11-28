"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const brand_router_1 = require("./brand-router");
const laptop_router_1 = require("./laptop-router");
exports.router = (0, express_1.Router)();
exports.router.use('/brand', brand_router_1.brandRouter);
exports.router.use('/laptop', laptop_router_1.laptopRouter);
//# sourceMappingURL=router.js.map