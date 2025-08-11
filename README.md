# Book Repository API

This project is a simple TypeScript Express API for managing a book repository. It allows users to retrieve a list of books and add new books to the repository.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/book-repository-api.git
   ```

2. Navigate to the project directory:
   ```
   cd book-repository-api
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Compile the TypeScript files:
   ```
   npm run build
   ```

5. Start the server:
   ```
   npm start
   ```

## Usage

Once the server is running, you can use the following API endpoints:

### Get All Books

- **Endpoint:** `GET /api/books`
- **Description:** Retrieves a list of all books in the repository.
- **Response:**
  - Status: 200 OK
  - Body: Array of book objects

### Add a New Book

- **Endpoint:** `POST /api/books`
- **Description:** Adds a new book to the repository.
- **Request Body:**
  - Example:
    ```json
    {
      "title": "Book Title",
      "author": "Author Name",
      "publishedDate": "2023-01-01"
    }
    ```
- **Response:**
  - Status: 201 Created
  - Body: The created book object

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.