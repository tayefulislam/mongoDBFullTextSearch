const express = require("express");

const router = express.Router();
const fullTextSearchController = require("../Controllers/fullTextSearch.Controller");
router
  .route("/")
  .get(fullTextSearchController.searchByKeyword)
  .post(fullTextSearchController.createSearch);

module.exports = router;
