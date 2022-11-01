import { Router } from "express";
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js";
import * as reviewController from "../controllers/reviews.js";
const router = Router();
router.use(decodeUserFromToken);

router.post("/createReviews", checkAuth, reviewController.createReviews);
router.get("/getAllMessages", checkAuth, reviewController.getAllMessages);

export { router };
