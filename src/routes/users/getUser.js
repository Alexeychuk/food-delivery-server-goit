const path = require('path');
const fs = require('fs');
const url = require('url');
const DBINFO = require('./constants');

const getSingleUser = (request, response) => {
    const parsedUrl = url.parse(request.url);
    const id = parsedUrl.path.slice(parsedUrl.path.lastIndexOf('/') + 1);
    console.log(id)
    const dbCallback = (path, (err, data) => {
        if (err) {
            response.writeHead(500);
            response.write(err);
            response.end();
            return
        }
        const selectedUser = JSON.parse(data).users.find(user => user.id === id);
        response.writeHead(200, {"Content-Type": "application/json"});
        response.write(JSON.stringify({
            "status": selectedUser ? "success" : "no user with this id", 
            "user": selectedUser ? selectedUser : {}
           }));
        response.end();
    });

    fs.readFile(DBINFO.dbPath, dbCallback);
}

module.exports = getSingleUser;