import { Books } from "../models/book.js";
import fetch from "node-fetch";

function getAllBook(req, res) {
  Books.find({}).then((books) => {
    books.json();
  });
}

async function findBookAllBook(req, res) {
  let response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${req.query.search}&maxResults=12&key=${process.env.API_KEY}`
  );
  const data = await response.json();
  console.log(data);
}

export { getAllBook, findBookAllBook };
