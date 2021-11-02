import { getCustomRepository } from "typeorm";

import { ComplimentsRepository } from "../repositories/ComplimentsRepository";

class ListUserReceivedComplimentService {
  async execute(user_receiver: string) {
    const complimentsRepository = getCustomRepository(ComplimentsRepository)

    const compliments = await complimentsRepository.find({ where: { user_receiver }})

    return compliments
  }
}

export { ListUserReceivedComplimentService }