const User = require("../../modules/db/schemas/user");
const bcrypt = require("bcrypt");
const { createJWToken } = require("../../libs/auth");

const registerUser = (request, response) => {
  const userToRegister = request.body;

  const hashedPassword = bcrypt.hashSync(userToRegister.password, 10);
  const userData = { ...userToRegister, password: hashedPassword };
  const newUser = new User(userData);

  const sendResponse = user => {
    const token = createJWToken({ sessionData: { ...user } });

    response.json({
      status: "success",
      user,
      token
    });
  };

  const sendError = err => {
    response.status(400);
    response.json({
      error: "user isn`t created"
    });
  };

  newUser
    .save()
    .then(sendResponse)
    .catch(sendError);
};

module.exports = registerUser;
