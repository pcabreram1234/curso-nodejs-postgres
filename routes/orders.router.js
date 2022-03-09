const express = require('express');
const router = express.Router();
const OrderService = require('../services/order.service');
const {
  getOrderSchema,
  updateOrderSchema,
} = require('../schemas/order.schema');
const validatorHandler = require('../middlewares/validator.handler');

const service = new OrderService();

router.get('/', async (req, res) => {
  const order = await service.find();
  res.json({
    data: order,
  });
});

router.get(
  '/:id',
  validatorHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const order = await service.findOne(id);
      res.json({ data: order });
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  validatorHandler(getOrderSchema, 'params'),
  validatorHandler(updateOrderSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const order = await service.update(id, body);
      res.json(order);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const order = await service.delete(id);
      res.json(order);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
