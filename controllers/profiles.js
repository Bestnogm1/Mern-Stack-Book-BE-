import { Books } from "../models/book.js";
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

function deleteBook(req, res) {
  const profilesId = req.params.id;
  let { booksId } = req.body;
  Books.findById(booksId).then((book) => {
    Books.findByIdAndDelete(booksId).then(() => {
      Profile.findByIdAndUpdate(profilesId).then((profile) => {
        profile.bookshelf.remove({ _id: book._id });
        profile.save().then(() => res.sendStatus(200));
      });
    });
  });
}

export { index, show, deleteBook };
