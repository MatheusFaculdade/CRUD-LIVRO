import express from 'express';
import { CreateBookController } from "./controllers/CreateBookController";
import { DeleteBookController } from "./controllers/DeleteBookController";
import { BookListController } from "./controllers/BookListController";
import { UpdateBookController } from "./controllers/UpdateBookController";

const router = express.Router();

router.post('/book', CreateBookController);
router.put('/book/:id', UpdateBookController);
router.delete('/book/:id', DeleteBookController);
router.get('/book', BookListController);

export default router;