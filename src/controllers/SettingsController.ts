import  {Request, Response} from 'express';
import { SettingsService } from '../services/SettingsService';

class SettingsController {
 
    async create(req: Request, resp: Response) {

        const { chat, username} = req.body;

        const settingsService = new SettingsService();

        try{
            const settings = await settingsService.create({chat, username});

            return resp.json(settings);
        }catch(err){
            return resp.status(400).json({
                message: err.message,
            })
        }

    }
}

export {SettingsController}