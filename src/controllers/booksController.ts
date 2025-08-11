import { Request, Response } from 'express';
import { BooksService } from '../services/booksService';
import { Book } from '../models/book';

export class BooksController {
    private booksService: BooksService;

    constructor() {
        this.booksService = new BooksService();
    }

    public async getAllBooks(req: Request, res: Response): Promise<void> {
        try {
            const books: Book[] = await this.booksService.fetchAllBooks();
            res.status(200).json(books);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving books' });
        }
    }

    public async addBook(req: Request, res: Response): Promise<void> {
        const newBook: Book = req.body;
        try {
            await this.booksService.saveBook(newBook);
            res.status(201).json({ message: 'Book added successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error adding book' });
        }
    }
}