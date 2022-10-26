const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const fullTextRoute = require("./routes/fullTextSearch.route");

// test route
app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/v1/search", fullTextRoute);

module.exports = app;
