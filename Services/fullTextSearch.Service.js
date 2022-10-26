const TextSearch = require("../Models/fullTextSearch");

exports.createSearchService = async (text) => {
  console.log(text);
  const result = await TextSearch.create(text);
  return result;
};

exports.searchByKeywordService = async (keyword) => {
  console.log(keyword);

  const pipeline = [
    {
      $search: {
        index: "default",
        text: {
          query: keyword,
          path: {
            wildcard: "*",
          },
          fuzzy: {}, // if we use fuzzy the it will not check poitn to ponit
        },
      },
    },
  ];

  if (keyword) {
    const result = await TextSearch.aggregate(pipeline);
    return result;
  } else {
    const result = await TextSearch.find({});
    return result;
  }
};
