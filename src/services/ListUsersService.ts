import { getCustomRepository } from "typeorm";
import { classToPlain } from "class-transformer";

import { UsersRepository } from "../repositories/UsersRepository";

class ListUsersService {
  async execute() {
    const tagsRepository = getCustomRepository(UsersRepository)

    const users = await tagsRepository.find()

    return classToPlain(users)
  }
}

export { ListUsersService }