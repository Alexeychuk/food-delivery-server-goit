const path = require('path');
const fs = require('fs');

const productsRoute = (request, response) => {

    if (request.method == 'GET'){
        const dbName = "all-products.json";
    const dbPath = path.join(__dirname, "../../db/", dbName);
    const dbCallback = (path, (err, data) => {
        if (err) {
            response.writeHead(500);
            response.write(err);
            response.end();
            return
        }
        response.writeHead(200, {"Content-Type": "application/json"});
        response.write(data);
        response.end();
    });

    fs.readFile(dbPath, dbCallback);
    } else {
        response.writeHead(200);
        response.write("Unknown method");
        response.end();
    }
  };
  
  module.exports = productsRoute;