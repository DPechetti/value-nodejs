import { getCustomRepository } from "typeorm";

import { UsersRepository } from "../repositories/UsersRepository";

class ListUsersService {
  async execute() {
    const tagsRepository = getCustomRepository(UsersRepository)

    return await tagsRepository.find()
  }
}

export { ListUsersService }