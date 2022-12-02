const express = require('express');

const CategoryService = require('./../services/category.service');
const validatorHandler = require('./../middlewares/validator.handler');
<<<<<<< HEAD
const { createCategorySchema, updateCategorySchema, getCategorySchema } = require('./../schemas/category.schema');
=======
const {
  createCategorySchema,
  updateCategorySchema,
  getCategorySchema,
} = require('./../schemas/category.schema');
>>>>>>> 11eb9ce774d4c85b77d6d41a59dcd7b65435f8dd

const router = express.Router();
const service = new CategoryService();

router.get('/', async (req, res, next) => {
  try {
    const categories = await service.find();
    res.json(categories);
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
  validatorHandler(getCategorySchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await service.findOne(id);
      res.json(category);
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
  validatorHandler(createCategorySchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCategory = await service.create(body);
      res.status(201).json(newCategory);
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
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const category = await service.update(id, body);
      res.json(category);
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
  validatorHandler(getCategorySchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
<<<<<<< HEAD
      await service.delete(id);
      res.status(201).json({id});
=======
      const category = await service.delete(id);
      res.json(category);
>>>>>>> 11eb9ce774d4c85b77d6d41a59dcd7b65435f8dd
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
