import { Role } from "../enums/Role";

export abstract class User {
  constructor(public name: string, public age: number) {}
  abstract getRole(): Role;
}
