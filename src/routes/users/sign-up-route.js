const qs = require('querystring');
const fs = require('fs');
const path = require('path');
const DBINFO = require('./constants');
const uniqid = require('uniqid');

const signUpRoute = (request, response) => {

    let body = '';

    request.on('data', function (data) {
      body = JSON.parse(data);
    });

    request.on('end', function () {

      const dbCallback = (path, (err, data) => {
        if (err) {
            response.writeHead(500);
            response.write(err);
            response.end();
            return
        }
        const newUserWithId = {...body, id: uniqid() };
        const users = JSON.parse(data);
        const usersArray = [...users.users, newUserWithId]

        const newUsers = { users : usersArray};

        fs.writeFile(DBINFO.dbPath, JSON.stringify(newUsers), () => {
          const res = {status:"success",user:newUserWithId}
           
          response.writeHead(200, {"Content-Type": "application/json"});
          response.write(JSON.stringify(res));
          response.end();
        });

       
    });
      fs.readFile(DBINFO.dbPath, dbCallback);
    

    });

};

module.exports = signUpRoute;