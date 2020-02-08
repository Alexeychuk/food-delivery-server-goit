const config = require("../../config");
const jwt = require("jsonwebtoken");
const _ = require("lodash");

function verifyJWTToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, config.secretKey, (err, decodedToken) => {
      if (err || !decodedToken) {
        return reject(err);
      }

      resolve(decodedToken);
    });
  });
}

function createJWToken(details) {
  if (typeof details !== "object") {
    details = {};
  }

  if (!details.maxAge || typeof details.maxAge !== "number") {
    details.maxAge = 3600;
  }

  details.sessionData = _.reduce(
    details.sessionData || {},
    (memo, val, key) => {
      if (typeof val !== "function" && key !== "password") {
        memo[key] = val;
      }
      return memo;
    },
    {}
  );

  let token = jwt.sign(
    {
      data: details.sessionData
    },
    config.secretKey
  );

  return token;
}

module.exports = {
  verifyJWTToken,
  createJWToken
};
