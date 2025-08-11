import { Book } from '../models/book';

export class BooksService {
    private books: Book[] = [];

    public fetchAllBooks(): Book[] {
        return this.books;
    }

    public saveBook(book: Book): void {
        this.books.push(book);
    }
}