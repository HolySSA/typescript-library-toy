import { RentManager } from "../interfaces/RentManager";
import { Book } from "../models/Book";
import { User } from "../models/User";
import { Member } from "../models/Member";
import { Role } from "../enums/Role";

export class Library implements RentManager {
  private books: Book[] = [];
  private rentedBooks: Map<string, Book> = new Map<string, Book>();

  getBooks(): Book[] {
    return JSON.parse(JSON.stringify(this.books));
  }

  addBook(user: User, book: Book): void {
    if (user.getRole() !== Role.LIBRARIAN) {
      console.log("사서만 도서 추가 가능!");
      return;
    }

    this.books.push(book);
  }

  removeBook(user: User, book: Book): void {
    if (user.getRole() !== Role.LIBRARIAN) {
      console.log("사서만 도서 삭제 가능!");
      return;
    }

    const index = this.books.indexOf(book);
    if (index !== -1) this.books.splice(index, 1);
  }

  rentBook(user: Member, book: Book): void {
    if (user.getRole() !== Role.MEMBER) {
      console.log("유저만 도서를 대여 가능!");
      return;
    }

    if (this.rentedBooks.has(user.name)) {
      console.log(`${user.name}님은 이미 다른 책을 대여중입니다!`);
    } else {
      this.rentedBooks.set(user.name, book);
      console.log(`${user.name}님이 [${book.title}] 책을 빌렸습니다!`);
    }
  }

  returnBook(user: Member, book: Book): void {
    if (user.getRole() !== Role.MEMBER) {
      console.log("유저만 도서를 반납 가능!");
      return;
    }

    if (this.rentedBooks.get(user.name) === book) {
      this.rentedBooks.delete(user.name);
      console.log(`${user.name}님이 [${book.title}] 책을 반납했습니다!`);
    } else {
      console.log(
        `${user.name}님은 [${book.title}] 책을 대출한 내역이 없습니다!`
      );
    }
  }
}
