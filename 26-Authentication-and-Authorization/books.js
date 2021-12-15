const express = require('express');
const { authenticationMiddleware, authorizationMiddleware } = require('./middlewares');

const app = express();
const port = 4000;

const books = [
  {
    "author": "Robert Martin",
    "country": "USA",
    "language": "English",
    "pages": 209,
    "title": "Clean Code",
    "year": 2008
  },
  {
    "author": "Dave Thomas & Andy Hunt",
    "country": "USA",
    "language": "English",
    "pages": 784,
    "title": "The Pragmatic Programmer",
    "year": 1999
  },
  {
    "author": "Kathy Sierra, Bert Bates",
    "country": "USA",
    "language": "English",
    "pages": 928,
    "title": "Head First Java",
    "year": 2003
  },
];

app.use(express.json());

app.get("/books", authenticationMiddleware, authorizationMiddleware(['admin', 'member']), (req, res) => {
  res.send(books);
});

app.post("/books", authenticationMiddleware, authorizationMiddleware(['admin']),  (req, res) => {
  books.push(req.body);
  res.send("book added successfully");
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
});