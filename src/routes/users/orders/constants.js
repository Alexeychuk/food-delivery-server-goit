const path = require('path');

const DBINFO = {
    dbName: "all-users.json",
    dbPath: path.join(__dirname, "../../../db/users/", "all-users.json"),
    usersDirPath: path.join(__dirname, "../../../db/users"),
    productsPath: path.join(__dirname, "../../../db/all-products.json"),
}

module.exports = DBINFO; 