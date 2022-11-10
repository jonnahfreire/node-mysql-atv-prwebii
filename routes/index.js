const path = require("path");
const conn = require("../services/index");

const express = require('express')
const router = express.Router()

const basePath = path.join(__dirname, "..", "templates");

router.get('/', (__, res) => {
    res.sendFile(`${basePath}/index.html`);
});

router.post('/books/insertbook', (req, res) => {
    const title = req.body.title;
    const pages = req.body.pages;

    console.log(`Title: ${title}\nPages: ${pages}`);

    const query = `INSERT INTO books(title, pages) VALUES ("${title}", "${pages}")`;

    conn.query(query, (err) => {
        err && console.log(err);
    });
    res.redirect('/');
});

router.get('/books', (req, res) => {
    const query = `SELECT * FROM books`;

    conn.query(query, (err, data) => {
        err && console.log(err);
        const books = data;

        console.log(books);
    });
    res.redirect('/');
});

module.exports = router;