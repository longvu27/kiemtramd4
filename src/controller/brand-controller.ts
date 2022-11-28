import {Request, Response} from "express";
import {Brand} from "../model/brand";

class BrandController {
    add = async (req: Request, res: Response) => {
        let brand = req.body;
        brand = await Brand.create(brand);
        return res.status(201).json(brand);
    }
    edit = async (req: Request, res: Response) => {
        let newBrand = req.body;
        let id = req.params.id
        await Brand.updateOne({_id:id}, {$set: newBrand})
        return res.status(200).json({
            message: " edit successfully "
        })
    }
    delete = async (req: Request, res: Response) => {
        let id = req.params.id
        await Brand.deleteOne({_id:id})
        return res.status(200).json({
            message: " delete successfully "
        })
    }
    showAll = async (req: Request, res: Response) => {
        let brand =  await Brand.find();
        return res.status(201).json(brand);
    }
}

export default new BrandController()