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
import { Book } from "./data/book.dto";

@Controller("book")
export class BookController {
  constructor(private bookService: BookService) {}

  @Get("/findAll")
  getAllBooks() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
    return this.bookService.findAllBooks();
  }

  @Put("/update")
  updateBook(@Body() book: Book): Book[] {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
    return this.bookService.findAllBooks();
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
