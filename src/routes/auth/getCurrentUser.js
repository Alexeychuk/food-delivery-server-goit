const User = require("../../modules/db/schemas/user");
const { verifyJWTToken } = require("../../libs/auth");

const getCurrentUser = (req, res) => {
  let token = req.headers["x-access-token"];

  verifyJWTToken(token)
    .then(decodedToken => {
      User.findById(decodedToken.data.$__._id).then(user =>
        res.status(400).json({ status: "Success.", user })
      );
    })
    .catch(err => {
      res.status(400).json({ message: "Invalid token for current user." });
    });
};

module.exports = getCurrentUser;
