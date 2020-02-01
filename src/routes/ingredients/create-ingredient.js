const Ingredient = require("../../modules/db/schemas/ingredient");

const createIngredient = (request, response) => {
  const ingredient = request.body;

  const newIngredient = new Ingredient(ingredient);

  const sendResponse = ingredient => {
    console.log(ingredient);

    response.json({
      status: "success",
      ingredient
    });
  };

  const sendError = err => {
    console.log(err);
    response.status(400);
    response.json({
      error: "Ingredient was not saved"
    });
  };

  newIngredient
    .save()
    .then(sendResponse)
    .catch(sendError);
};

module.exports = createIngredient;
