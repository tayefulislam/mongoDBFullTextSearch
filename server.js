const app = require("./app");

const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT || 5000;
const uri = process.env.URI;

mongoose.connect(uri).then(() => {
  console.log("data base is connected");
});

app.listen(port, () => {
  console.log("server is run at ", port);
});
