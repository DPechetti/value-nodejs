import { Request, Response } from "express";
import { ListUserSentComplimentService } from "../services/ListUserSentComplimentService";

class ListUserSentComplimentController {
  async handle(req: Request, res: Response) {
    const { user_id } = req;
    
    const listUserSentComplimentService = new ListUserSentComplimentService()
    
    const compliments = await listUserSentComplimentService.execute(user_id)
    
    return res.json(compliments)
  }
}

export { ListUserSentComplimentController }