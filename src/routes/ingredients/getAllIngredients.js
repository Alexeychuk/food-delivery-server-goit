const Product = require("../../modules/db/schemas/product");

const getAllProducts = (request, response) => {
  const sendResponse = products => {
    response.status(200);
    response.json(products);
  };

  Product.find()
    .then(sendResponse)
    .catch(err => {
      console.error(err);
    });
};

module.exports = getAllProducts;
