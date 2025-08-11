import express from 'express';
import bodyParser from 'body-parser';
import { setBooksRoutes } from './routes/books';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

setBooksRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});