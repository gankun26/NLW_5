import  {Request, Response} from 'express';
import {getCustomRepository} from "typeorm";
import {SettingsRepository} from "../repositories/SettingsRepository";

class SettingsController {
 
    async create(req: Request, resp: Response) {

        const { chat, username} = req.body;

        const settingsRepository = getCustomRepository(SettingsRepository);
    
        const settings = settingsRepository.create({
            chat,
            username,
        });
    
        await settingsRepository.save(settings);
    
        return resp.json(settings);

    }
}

export {SettingsController}