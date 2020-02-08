const logoutUser = (request, response) => {
  response.status(200).json({ message: "success." });
};

module.exports = logoutUser;
