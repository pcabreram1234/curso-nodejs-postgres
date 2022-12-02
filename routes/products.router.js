const express = require('express');

const ProductsService = require('./../services/product.service');
const validatorHandler = require('./../middlewares/validator.handler');
<<<<<<< HEAD
const { createProductSchema, updateProductSchema, getProductSchema } = require('./../schemas/product.schema');
=======
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
} = require('./../schemas/product.schema');
>>>>>>> 11eb9ce774d4c85b77d6d41a59dcd7b65435f8dd

const router = express.Router();
const service = new ProductsService();

router.get('/', async (req, res, next) => {
  try {
    const products = await service.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

<<<<<<< HEAD
router.get('/:id',
=======
router.get(
  '/:id',
>>>>>>> 11eb9ce774d4c85b77d6d41a59dcd7b65435f8dd
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

<<<<<<< HEAD
router.post('/',
=======
router.post(
  '/',
>>>>>>> 11eb9ce774d4c85b77d6d41a59dcd7b65435f8dd
  validatorHandler(createProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newProduct = await service.create(body);
      res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  }
);

<<<<<<< HEAD
router.patch('/:id',
=======
router.patch(
  '/:id',
>>>>>>> 11eb9ce774d4c85b77d6d41a59dcd7b65435f8dd
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

<<<<<<< HEAD
router.delete('/:id',
=======
router.delete(
  '/:id',
>>>>>>> 11eb9ce774d4c85b77d6d41a59dcd7b65435f8dd
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
<<<<<<< HEAD
      res.status(201).json({id});
=======
      res.status(201).json({ id });
>>>>>>> 11eb9ce774d4c85b77d6d41a59dcd7b65435f8dd
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
