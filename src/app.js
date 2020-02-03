const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const url = require('url');

const getSingleProduct = require('./routes/products/getSingleProduct');
const productsRoute = require('./routes/products/products');
const signUpRoute = require('./routes/users/sign-up-route');
const getUser = require('./routes/users/getUser');
const createOrder = require('./routes/users/orders/createOrder');

const requestTime = function (req, res, next) {
  req.requestTime = Date.now();
  next();
};

// добавление middleware ко всем роутам
app.use(requestTime);
app.use(express.json());

app.get('/', function (req, res) {
  const responseText = 'This is the main route!';
  res.send(responseText);
});

app.get('/products', productsRoute);

app.get('/products/:id', getSingleProduct);

app.get('/users/:id', getUser);

app.post('/users', signUpRoute);

app.post('/orders', createOrder);

module.exports = app;





