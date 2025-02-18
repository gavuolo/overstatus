import { User } from "@prisma/client";
import { CreateUserDTO } from "../dto/create-user.dto";


export abstract class UsersRepository{
    abstract createUser(data: CreateUserDTO): Promise<User>;
    abstract findUserById(id: number ): Promise<User>;
    abstract findUserByEmail(email: string): Promise<User>;
}