const User = require("../../modules/db/schemas/user");
const bcrypt = require("bcrypt");
const config = require("../../../config");
const jwt = require("jsonwebtoken");
const { createJWToken } = require("../../libs/auth");

const loginUser = (request, response) => {
  const userToLogin = request.body;

  User.findOne({ username: userToLogin.username, email: userToLogin.email })
    .then(user => (!user ? Promise.reject("User not found.") : user))
    .then(user => {
      if (bcrypt.compareSync(userToLogin.password, user.password)) {
        return user;
      } else {
        throw Error;
      }
    })
    .then(user => {
      const token = createJWToken({ sessionData: { ...user } });
      response.send(token);
    })
    .catch(err => {
      response.status(400);
      response.json({
        error: "incorrect password"
      });
    });
};

module.exports = loginUser;
