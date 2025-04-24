import { Library } from "./services/Library";
import { Librarian } from "./models/Librarian";
import { Member } from "./models/Member";
import { Book } from "./models/Book";

function main() {
  const myLibrary = new Library();
  const librarian = new Librarian("르탄이", 30);
  const member1 = new Member("예비개발자", 30);
  const member2 = new Member("독서광", 28);

  const book = new Book("TypeScript 문법 종합반", "강", new Date());
  const book2 = new Book("금쪽이 훈육하기", "오", new Date());
  const book3 = new Book("요식업은 이렇게!", "백", new Date());

  myLibrary.addBook(librarian, book);
  myLibrary.addBook(librarian, book2);
  myLibrary.addBook(librarian, book3);

  const books = myLibrary.getBooks();
  console.log("대여할 수 있는 도서 목록:", books);

  myLibrary.rentBook(member1, book);
  myLibrary.rentBook(member2, book2);

  myLibrary.returnBook(member1, book);
  myLibrary.returnBook(member2, book2);
}

main();
