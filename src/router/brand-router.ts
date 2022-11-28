import {Router} from "express";
import brandController from "../controller/brand-controller";

export const brandRouter = Router();
brandRouter.post('', brandController.add)
brandRouter.put('/:id',brandController.edit)
brandRouter.delete('/:id',brandController.delete)
brandRouter.get('',brandController.showAll)