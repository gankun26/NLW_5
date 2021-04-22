import {Request, Response} from "express";
import { UserService } from "../services/UserService";

class UsersController {
    async create(req: Request, resp: Response): Promise<Response>{
        const {email} = req.body;
        const usersService = new UserService();

        const user = await usersService.create(email);

        return resp.json(user);
    }

}

export {UsersController};