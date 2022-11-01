import { Reviews } from "../models/reviews.js";

function createReviews(req, res) {
  req.body.owner = req.user.profile;
  Reviews.create(req.body)
    .then((reviews) => {
      reviews.populate("ownedBy").then((reviews) => res.json(reviews));
    })
    .catch((error) => res.status(error));
}

function getAllMessages(req, res) {
  Reviews.find({})
    .populate("ownedBy")
    .then((reviews) => {
      res.status(200).send(reviews);
    })
    .catch((error) => res.status(error));
}
export { createReviews, getAllMessages };
