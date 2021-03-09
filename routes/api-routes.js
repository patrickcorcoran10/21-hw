const router = require("express").Router();
const Book = require("../models/book.js");

// router.get("/api/books", (res, req) => {
//     Book.find({}).then(bookData => {
//         res.json(bookData)
//     }).catch(err => {
//         res.json(err)
//     }) 
// })
router.post("/api/books", (res, req) => {
    Book.create(req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
})

module.exports = router;