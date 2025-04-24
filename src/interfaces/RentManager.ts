import { Book } from "../models/Book";
import { User } from "../models/User";
import { Member } from "../models/Member";

export interface RentManager {
  getBooks(): Book[];
  addBook(user: User, book: Book): void;
  removeBook(user: User, book: Book): void;
  rentBook(user: Member, book: Book): void;
  returnBook(user: Member, book: Book): void;
}
