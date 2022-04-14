var express = require('express')
var bodyParser = require('body-parser');
var cors = require('cors');

const app = express();
const port = 3000;
let books = [];
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/books', (req, res) => {
    res.json(books);
});

app.post('/book', (req, res) => {
const book = req.body;
    console.log(book);
    books.push(book);
res.json(books);
});
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));