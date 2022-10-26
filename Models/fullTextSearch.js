const mongoose = require("mongoose");

const fullTextSearchSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    body: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const TextSearch = mongoose.model(
  "TextSearch",
  fullTextSearchSchema,
  "TextSearch"
);

module.exports = TextSearch;
