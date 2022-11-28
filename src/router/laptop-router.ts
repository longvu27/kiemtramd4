import {Router} from "express";
import laptopController from "../controller/laptop-controller";

export const laptopRouter = Router();
laptopRouter.post('', laptopController.add)
laptopRouter.put('/:id',laptopController.edit)
laptopRouter.delete('/:id',laptopController.delete)
laptopRouter.get('',laptopController.showAll)
laptopRouter.get('show-detail/:id', laptopController.showDetail)
laptopRouter.post('/find-by-name',laptopController.findByName)
laptopRouter.get('/find-by-brand/:id', laptopController.findByIdBrand)
laptopRouter.get('/sort-up-ascending-price', laptopController.SortUpAscendingPrice)
laptopRouter.get('/sort-down-ascending-quantity', laptopController.SortDownAscendingQuantity)