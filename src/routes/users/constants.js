const path = require('path');

const DBINFO = {
    dbName: "all-users.json",
    dbPath: path.join(__dirname, "../../db/users/", "all-users.json")
}

module.exports = DBINFO; 