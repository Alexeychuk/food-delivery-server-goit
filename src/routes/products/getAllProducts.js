const Product = require("../../modules/db/schemas/product");
const Ingredient = require("../../modules/db/schemas/ingredient");

const getAllProducts = (request, response) => {
  const sendResponse = products => {
    response.status(200);
    response.json(products);
  };

  Product.find()
    .populate("ingredients")
    .then(sendResponse)
    .catch(err => {
      console.error(err);
    });
};

module.exports = getAllProducts;
