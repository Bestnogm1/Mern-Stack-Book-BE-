import { Profile } from "../models/profile.js";

function index(req, res) {
  Profile.find({})
    .then((profiles) => res.status(200).json(profiles))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}

function show(req, res) {
  let { profileId } = req.body;
  Profile.findById({ _id: profileId })
    .populate("bookshelf")
    .then((profile) => {
      res.status(200).json(profile);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}
export { index, show };
