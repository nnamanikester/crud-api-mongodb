const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const cors = require("cors");

// MIDDLEWARE
app.use(express.json());
app.use(cors());

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
