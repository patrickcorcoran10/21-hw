const express = require("express");
const mongoose = require("mongoose");

// 
const logger = require("morgan");
// 


const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(logger("dev"));
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/bookProject',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

// app.use(require("./routes/api.js"));

// app.use(require("./routes/view.js"));


app.listen(PORT, () => {
    console.log("We are working out on ", PORT)
})