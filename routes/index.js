const express = require('express');

const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const usersRouter = require('./users.router');
const orderRouter = require('./orders.router');
<<<<<<< HEAD
=======
const customerRouter = require('./customer.router');
>>>>>>> 11eb9ce774d4c85b77d6d41a59dcd7b65435f8dd

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
  router.use('/orders', orderRouter);
<<<<<<< HEAD
=======
  router.use('/customers', customerRouter);
>>>>>>> 11eb9ce774d4c85b77d6d41a59dcd7b65435f8dd
}

module.exports = routerApi;
