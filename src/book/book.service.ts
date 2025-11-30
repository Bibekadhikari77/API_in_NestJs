import { Injectable } from "@nestjs/common";
import { Book } from "./data/book.dto";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class BookService {
  public books: Book[] = [];

  addBookService(book: Book): string {
    book.id = uuidv4();
    this.books.push(book);
    return "Book added successfully";
  }

  updateBookService(book: Book): string {
    const index = this.books.findIndex((currentBook) => {
      return currentBook.id === book.id;
    });
    this.books[index] = book;
    return "Book updated successfully";
  }

  deleteBookService(bookId: string): string {
    this.books = this.books.filter((book) => {
      return book.id !== bookId;
    });
    return "Book deleted successfully";
  }

  findAllBooksService(): Book[] {
    return this.books;
  }
}
