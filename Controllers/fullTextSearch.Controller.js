const {
  createSearchService,
  searchByKeywordService,
} = require("../Services/fullTextSearch.Service");

exports.createSearch = async (req, res) => {
  try {
    const text = req.body;
    const result = await createSearchService(text);
    res.status(200).json({
      status: "success",
      message: "Search text save Succesfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Search text save unsuccesfully",
      error: error.message,
    });
  }
};

exports.searchByKeyword = async (req, res) => {
  try {
    const { search } = req.query;
    const result = await searchByKeywordService(search);
    res.status(200).json({
      status: "success",
      message: "Search Succesfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Search unsuccesfully",
      error: error.message,
    });
  }
};
