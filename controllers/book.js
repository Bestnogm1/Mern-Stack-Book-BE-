import { Books } from "../models/book.js";
import fetch from "node-fetch";
import { Profile } from "../models/profile.js";

async function getAllSearchedBook(req, res) {
  let bookTitle = req.body;
  const getBook = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${bookTitle.title}&maxResults=12`
  );
  let bookData = await getBook.json();
  res.send(bookData.items);
}

async function addBookToCollection(req, res) {
  const { bookId } = req.body;
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes/${bookId}?key=${process.env.API_KEY}`
  );

  const data = await response.json();
  const bookData = data.volumeInfo;
  const googleURL = bookData.selfLink;
  const authors = bookData.authors ? bookData.authors : "No author available";
  const description = bookData.description;
  const cover = bookData.imageLinks
    ? bookData.imageLinks.thumbnail
    : `https://via.placeholder.com/200x250.png?text=No+ImageAvailbe`;
  const publishedDate = bookData.publishedDate;
  const title = bookData.title;

  Books.create({
    title,
    authors,
    bookId,
    description,
    cover,
    googleURL,
    publishedDate,
    ownedBy: req.user.profile,
  })
    .then((book) => {
      Profile.findById({ _id: req.user.profile }).then((profile) => {
        profile.bookshelf.push(book);
        profile.save();
      });
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(err);
    });
}

async function getABookByID(req, res) {
  let { bookId } = req.body;
  let response = await fetch(
    `https://www.googleapis.com/books/v1/volumes/${bookId}?key=${process.env.API_KEY}`
  );
  let bookData = await response.json();

  res.send(bookData.volumeInfo);
}

function getAllBooks(req, res) {
  Books.find({})
    .populate("ownedBy")
    .then((books) => {
      res.status(200).json(books);
    })
    .catch((err) => {
      console.error(err);
    });
}
export { getAllSearchedBook, addBookToCollection, getABookByID, getAllBooks };
