const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

// MIDDLEWARE
app.use(express.json());

// ROUTES IMPORTS
const postsRoute = require("./routes/posts");

//  REGISTER IMPORTED ROUTES
app.use("/posts", postsRoute);

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose.connect(
  process.env.ANOTHER_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("DB Connected!");
  }
);
const port = process.env.PORT || 3000;

app.listen(port);
