import { UserRepository } from "@desys/account/domain";

const users = [
  {
    id: 1,
    name: "user1"
  },
  {
    id: 2,
    name: "user2"
  }
]

export const userRepository: UserRepository = {
  getUsers: async () => {
    return users;
  },
  getUser: async id => {
    const user = users.find(user => user.id === id);
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    return user
  },
  createUser: async user => {
    users.push(user);
    return user;
  },
  updateUser: async user => {
    return user;
  },
  deleteUser: async id => {
    return;
  }
}