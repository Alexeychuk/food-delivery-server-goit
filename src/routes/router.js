const express = require("express");
const mainRoute = require("./main/main");

const loginUser = require("./auth/loginUser");
const logoutUser = require("./auth/logoutUser");
const registerUser = require("./auth/registerUser");
const getCurrentUser = require("./auth/getCurrentUser");

const getUser = require("./user/get-user");
const deleteUser = require("./user/delete-user");
const getAllUser = require("./user/get-all-users");
const createUser = require("./user/create-user");
const updateUser = require("./user/update-user");

const createOrder = require("./order/create-order");
const getOrder = require("./order/get-order");

const createProduct = require("./products/create-product");
const updateProduct = require("./products/update-product");
const getAllProducts = require("./products/getAllProducts");
const getProduct = require("./products/getProduct");

const createIngredient = require("../routes/ingredients/create-ingredient");

const createComment = require("../routes/comments/createComment");
const getCommentsForProduct = require("../routes/comments/getCommentsForProduct");

const verifyJWT_MW = require("../middlewares/verify_JWT_MW");

const apiRoutes = express.Router();

apiRoutes
  .get("/", mainRoute)

  .post("/auth/login", loginUser)
  .post("/auth/register", registerUser)
  .get("/auth/logout", verifyJWT_MW, logoutUser)
  .get("/auth/current", verifyJWT_MW, getCurrentUser)

  .get("/users", verifyJWT_MW, getAllUser)
  .get("/users/:id", verifyJWT_MW, getUser)
  .delete("/users/:id", verifyJWT_MW, deleteUser)
  .put("/users/:id", verifyJWT_MW, updateUser)
  .post("/users", verifyJWT_MW, createUser)

  .post("/orders", verifyJWT_MW, createOrder)
  .get("/orders/:id", verifyJWT_MW, getOrder)

  .get("/products", verifyJWT_MW, getAllProducts)
  .get("/products/:id", verifyJWT_MW, getProduct)
  .post("/products", verifyJWT_MW, createProduct)
  .put("/products/:id", verifyJWT_MW, updateProduct)

  .post("/ingredients", verifyJWT_MW, createIngredient)

  .post("/comments", verifyJWT_MW, createComment)
  .get("/comments", verifyJWT_MW, getCommentsForProduct);

module.exports = apiRoutes;
