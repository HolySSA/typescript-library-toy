import { User } from "./User";
import { Role } from "../enums/Role";

export class Librarian extends User {
  constructor(name: string, age: number) {
    super(name, age);
  }

  getRole(): Role {
    return Role.LIBRARIAN;
  }
}
