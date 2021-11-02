import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepository = getCustomRepository(UsersRepository)

    const userFound = await usersRepository.findOne({ email })

    if (!userFound) throw new Error("Invalid credentials")

    const passwordMatch = await compare(password, userFound.password)

    if (!passwordMatch) throw new Error("Invalid credentials")

    const token = sign({ email }, 'Batatinha', { subject: userFound.id, expiresIn: '1d' })

    return token
  }
}

export { AuthenticateUserService }