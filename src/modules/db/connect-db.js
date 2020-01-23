const mongoose = require("mongoose");

const connectToDB = dbUrl => {
  mongoose
    .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Database connection successful");
    })
    .catch(err => {
      console.error(err);
    });
};

module.exports = connectToDB;
