import { Request, Response } from "express";
declare class LaptopController {
    add: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    edit: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    delete: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    showAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    showDetail: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    findByName: (req: Request, res: Response) => Promise<void>;
    findByIdBrand: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    SortUpAscendingPrice: (req: Request, res: Response) => Promise<void>;
    SortDownAscendingQuantity: (req: Request, res: Response) => Promise<void>;
}
declare const _default: LaptopController;
export default _default;
