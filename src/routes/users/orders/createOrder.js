const path = require("path");
const fs = require("fs");
const url = require("url");
const DBINFO = require("./constants");
const uniqid = require("uniqid");

const createOrder = (request, response) => {
  const parsedUrl = url.parse(request.url);
  let body = "";

  request.on("data", function(data) {
    body = JSON.parse(data);
  });

  request.on("end", function() {
    const dbCallback =
      (path,
      (err, data) => {
        if (err) {
          response.writeHead(500);
          response.write(err);
          response.end();
          return;
        }

        const userId = JSON.parse(data).users.find(
          user => user.id === body.user
        );

        if (!userId) {
          response.writeHead(200, { "Content-Type": "application/json" });
          response.write(
            JSON.stringify({
              status: "failed(there is no user with such id)",
              order: {}
            })
          );
          response.end();
          return;
        }
        const userOrdersDir = path.join(DBINFO.usersDirPath, body.user);
        const orderId = uniqid();
        const orderProducts = body.products;

        if (fs.existsSync(userOrdersDir)) {
          fs.writeFile(
            path.join(userOrdersDir, "orders", `${orderId}.json`),
            JSON.stringify(body),
            () => {}
          );
        } else {
          fs.mkdir(userOrdersDir, () => {
            fs.mkdir(path.join(userOrdersDir, "orders"), () => {
              fs.writeFile(
                path.join(userOrdersDir, "orders", `${orderId}.json`),
                JSON.stringify(body),
                () => {}
              );
            });
          });
        }

        fs.readFile(DBINFO.productsPath, (err, data) => {
          const productsList = JSON.parse(data);

          if (
            orderProducts.every(orderProduct =>
              productsList.some(product => product.id === orderProduct)
            )
          ) {
            response.writeHead(200, { "Content-Type": "application/json" });
            response.write(
              JSON.stringify({
                status: "success",
                user: { ...body, id: orderId }
              })
            );
            response.end();
          } else {
            response.writeHead(200, { "Content-Type": "application/json" });
            response.write(JSON.stringify({ status: "failed", order: null }));
            response.end();
          }
        });
      });
    fs.readFile(DBINFO.dbPath, dbCallback);
  });
};

module.exports = createOrder;
