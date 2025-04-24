import { User } from "./User";
import { Role } from "../enums/Role";

export class Member extends User {
  constructor(name: string, age: number) {
    super(name, age);
  }

  getRole(): Role {
    return Role.MEMBER;
  }
}
