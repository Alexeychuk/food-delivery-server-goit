const Comment = require("../../modules/db/schemas/Comment");

const getCommentsForProduct = (request, response) => {
  const productId = request.query.productId;
  console.log(productId);

  const sendResponse = comments => {
    response.json({
      status: "success",
      comments
    });
  };

  const sendError = err => {
    console.log(err);
    response.status(400);
    response.json({
      error: "Comments was not finded"
    });
  };

  Comment.find({ product: productId })
    .then(sendResponse)
    .catch(sendError);
};

module.exports = getCommentsForProduct;
