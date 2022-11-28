import { Request, Response } from "express";
declare class BrandController {
    add: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    edit: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    delete: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    showAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: BrandController;
export default _default;
