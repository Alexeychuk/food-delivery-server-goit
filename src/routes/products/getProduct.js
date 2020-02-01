const Product = require("../../modules/db/schemas/product");
const Ingredient = require("../../modules/db/schemas/ingredient");

const getProduct = (request, response) => {
  const id = request.params.id;
  console.log(id);
  const sendResponse = products => {
    response.status(200);
    response.json(products);
  };

  Product.findById(id)
    .populate("ingredients")
    .then(sendResponse)
    .catch(err => {
      console.error(err);
    });
};

module.exports = getProduct;
