import {Router} from "express";
import {brandRouter} from "./brand-router";
import {laptopRouter} from "./laptop-router";

export const router = Router();
router.use('/brand', brandRouter);
router.use('/laptop', laptopRouter);