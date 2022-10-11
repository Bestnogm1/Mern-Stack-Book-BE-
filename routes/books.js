import { Router } from "express";
import * as authCtrl from "../controllers/book.js";
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js";

const router = Router();

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken);
router.post("/findallbooks", checkAuth, authCtrl.findBookAllBook);

export { router };
