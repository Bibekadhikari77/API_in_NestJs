import { Injectable } from "@nestjs/common";
import { Book } from "./data/book.dto";

@Injectable()
export class BookService {
  public books: Book[] = [];

  addBookService(book: Book): string {
    this.books.push(book);
    return "Book added successfully";
  }

  updateBookService(book: Book): string {
    let index = this.books.findIndex((currentBook) => {
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
