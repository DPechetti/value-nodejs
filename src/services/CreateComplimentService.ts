import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";

import { ComplimentsRepository } from "../repositories/ComplimentsRepository";
import { UsersRepository } from "../repositories/UsersRepository";

interface IComplimentRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

class CreateComplimentService {
  async execute({ tag_id, user_sender, user_receiver, message }: IComplimentRequest) {
    if (user_sender === user_receiver) throw new Error('you can\'t commend yourself young Padawan')

    const usersRepository = getCustomRepository(UsersRepository)
    const complimentsRepository = getCustomRepository(ComplimentsRepository)

    const userReceiverFound = await usersRepository.findOne(user_receiver)
    
    if (!userReceiverFound) throw new Error("User receiver not found")

    const compliment = complimentsRepository.create({ tag_id, user_sender, user_receiver, message })

    await complimentsRepository.save(compliment)

    return compliment
  }
}

export { CreateComplimentService }