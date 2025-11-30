import {
  Body,
  Controller,
  Get,
  Put,
  Delete,
  Post,
  Param,
} from "@nestjs/common";
import { BookService } from "./book.service";
import type { Book } from "./data/book.dto";

@Controller("book")
export class BookController {
  constructor(private bookService: BookService) {}

  @Get("/findAll")
  getAllBooks(): Book[] {
    return this.bookService.findAllBooksService();
  }

  @Put("/update")
  updateBook(@Body() book: Book): string {
    return this.bookService.updateBookService(book);
  }

  @Delete("/delete/:id")
  deleteBook(@Param("id") bookId: string): string {
    return this.bookService.deleteBookService(bookId);
  }

  @Post("/create")
  createBook(@Body() book: Book): string {
    return this.bookService.addBookService(book);
  }
}
