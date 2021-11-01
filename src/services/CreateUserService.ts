import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ name, email, admin }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepository)

    if (!email) throw new Error("Incorrect email")

    const userFound = await usersRepository.findOne({ email })

    if (userFound) throw new Error("User already exists")

    const user = usersRepository.create({ name, email, admin })

    await usersRepository.save(user)

    return user
  }
}

export { CreateUserService }