import { Router } from 'express';
import { BooksController } from '../controllers/booksController';

const router = Router();
const booksController = new BooksController();

export function setBooksRoutes(app: Router) {
    app.get('/books', booksController.getAllBooks.bind(booksController));
    app.post('/books', booksController.addBook.bind(booksController));
}

export default router;