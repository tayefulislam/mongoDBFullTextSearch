const express = require("express");

const router = express.Router();
const fullTextSearchController = require("../Controllers/fullTextSearch.Controller");
router.route("/").post(fullTextSearchController.textSearch);

module.exports = router;
