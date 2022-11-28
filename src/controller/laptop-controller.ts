import {Request, Response} from "express";
import {Laptop} from "../model/laptop";
class LaptopController {
    add = async (req: Request, res: Response) => {
        let laptop = req.body;
        laptop = await Laptop.create(laptop);
        return res.status(201).json(laptop);
    }
    edit = async (req: Request, res: Response) => {
        let newLaptop = req.body
        let id = req.params.id
        await Laptop.updateOne({_id:id}, {$set: newLaptop})
        return res.status(200).json({
            message: " edit successfully "
        })
    }
    delete = async (req: Request, res: Response) => {
        let id = req.params.id
        await Laptop.deleteOne({_id:id})
        return res.status(200).json({
            message: " delete successfully "
        })
    }
    showAll = async (req: Request, res: Response) => {
        let laptops =  await Laptop.find();
        return res.status(201).json(laptops);
    }
    showDetail = async (req: Request, res: Response) => {
        let id = req.params.id;
        let laptop = await Laptop.find({_id: id})
        return res.status(200).json(laptop)
    }
    findByName = async (req: Request, res: Response) => {
        let nameFind = req.body.nameLaptop
        let laptops = await Laptop.find({nameLaptop: nameFind})
        res.json({
            message: "Tim duoc",
            laptops: laptops
        })
    }
    // findByName = async (req : Request, res : Response) =>{
    //     let name =req.body.keyWord
    //     const  findName = await Laptop.find({name: new RegExp(name, 'i')}).exec()
    //     res.json(findName)
    // }
    findByIdBrand = async (req: Request, res: Response) => {
        let id = req.params.id
        let laptops = await Laptop.find({brand: id})
        return res.status(200).json(laptops)
    }

    SortUpAscendingPrice = async (req: Request, res: Response) => {
        let laptops = await Laptop.find().sort({'price': 1})
        res.json({
            mess: " tăng dần theo giá",
            laptops: laptops
        })
    }

    SortDownAscendingQuantity = async (req: Request, res: Response) => {
        let laptops = await Laptop.find().sort({'quantity': -1})
        res.json({
            mess: " giảm dần theo số lượng",
            laptops: laptops
        })
    }
}

export default new LaptopController()