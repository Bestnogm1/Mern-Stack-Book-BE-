import { Router } from "express";
import * as profilesCtrl from "../controllers/profiles.js";
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js";

const router = Router();

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken);
router.get("/", checkAuth, profilesCtrl.index);
router.post("/show", checkAuth, profilesCtrl.show);
router.delete("/deleteBook/:id", checkAuth, profilesCtrl.deleteBook);
export { router };
