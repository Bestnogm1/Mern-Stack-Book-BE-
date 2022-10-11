import { Router } from "express";
import * as bookCtrl from "../controllers/book.js";
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js";

const router = Router();

/*---------- Public Routes ----------*/

router.get("/allBooks", bookCtrl.findBookAllBook);
/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken);

export { router };
