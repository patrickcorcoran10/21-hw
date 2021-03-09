const router = require("express").Router();
const Book = require("../models/book");

router.get("/api/books", (res, req) => {
    Book.find(req.body).then(bookData => {
        res.json(bookData)
    }).catch(err => {
        res.json(err)
    }) 
})
router.post("/api/books", (res, req) => {
    Book.create(req.body).then(bookData => {
        res.json(bookData)
    }).catch(err => {
        res.json(err)
    }) 
})

module.exports = router;