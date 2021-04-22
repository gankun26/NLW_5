import {Request, Response} from "express";
import { MessagesServices } from "../services/MessagesService";




class MessagesController{
    async create(req: Request, resp: Response){
        const {admin_id, text, user_id} = req.body;
        const messagesServices = new MessagesServices();

        const message = await messagesServices.create({
            admin_id,
            text,
            user_id
        })

        return resp.json(message);
    }

    async showByUser(req: Request, resp: Response){
        const {id} = req.params;

        const messagesServices = new MessagesServices();

        const list = await messagesServices.listByUser(id);

        return resp.json(list);
    }
}

export {MessagesController};