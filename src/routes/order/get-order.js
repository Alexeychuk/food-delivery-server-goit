const Order = require("../../modules/db/schemas/order");

const getOrder = (request, response) => {
  const id = request.params.id;

  const sendResponse = order => {
    response.status(200);
    response.json(order);
  };

  const findOrder = Order.findById(id);

  findOrder.then(sendResponse).catch(err => {
    console.error(err);
  });
};

module.exports = getOrder;
