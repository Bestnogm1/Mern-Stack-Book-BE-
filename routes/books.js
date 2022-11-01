import { Router } from "express";
import * as bookCtrl from "../controllers/book.js";
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js";

const router = Router();

/*---------- Public Routes ----------*/

router.post("/getAllSearchedBook", bookCtrl.getAllSearchedBook);
router.post("/getABookByID", bookCtrl.getABookByID);
/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken);
router.post("/addBookToCollection", checkAuth, bookCtrl.addBookToCollection);
router.get("/getAllBooks", checkAuth, bookCtrl.getAllBooks);

export { router };
