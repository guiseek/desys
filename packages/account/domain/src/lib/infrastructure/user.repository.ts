import { User } from "../entities/user";

export abstract class UserRepository {
  abstract getUsers(): Promise<User[]>;
  abstract getUser(id: number): Promise<User>;  
  abstract createUser(user: User): Promise<User>;
  abstract updateUser(user: User): Promise<User>;
  abstract deleteUser(id: number): Promise<void>;
}