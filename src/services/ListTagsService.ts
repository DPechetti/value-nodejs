import { getCustomRepository } from "typeorm";

import { TagsRepository } from "../repositories/TagsRepository";

class ListTagsService {
  async execute() {
    const tagsRepository = getCustomRepository(TagsRepository)

    return await tagsRepository.find()
  }
}

export { ListTagsService }