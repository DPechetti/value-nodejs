import { getCustomRepository } from "typeorm";
import { classToPlain } from "class-transformer";

import { TagsRepository } from "../repositories/TagsRepository";

class ListTagsService {
  async execute() {
    const tagsRepository = getCustomRepository(TagsRepository)

    const tags = await tagsRepository.find()

    return classToPlain(tags)
  }
}

export { ListTagsService }