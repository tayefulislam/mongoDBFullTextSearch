const { textSearchService } = require("../Services/fullTextSearch.Service");

exports.textSearch = async (req, res) => {
  try {
    const { search } = req.query;
    const result = await textSearchService(search);
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
