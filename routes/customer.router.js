const express = require('express');
const router = express.Router();
const validatorHandler = require('../middlewares/validator.handler');
const {
  createCustomerSchema,
  deleteCustomerSchema,
  getCustomerSchema,
  updateCustomerSchema,
} = require('../schemas/customer.schema');
const CustomerService = require('../services/customer.service');
const service = new CustomerService();

router.get('/', async (req, res, next) => {
  try {
    const customers = await service.find();
    res.json(customers);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;

      const getCustomer = await service.findOne(id);
      res.json(getCustomer);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/updateCustomer',
  validatorHandler(updateCustomerSchema, 'body'),
  async (req, res, next) => {
    try {
      const { body } = req;
      const customerUpdated = await service.update(body);
      res.json(customerUpdated);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/createCustomer',
  validatorHandler(createCustomerSchema, 'body'),
  async (req, res, next) => {
    try {
      const { body } = req;
      const newCustomer = await service.create(body);
      res.json(newCustomer);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(deleteCustomerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { params } = req;
      const customerToDelete = await service.delete(params);
      res.json(customerToDelete);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
