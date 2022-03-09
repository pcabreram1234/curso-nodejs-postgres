const Joi = require('joi');

const id = Joi.number().integer();
/* const name = Joi.string().min(3).max(15);
const image = Joi.string().uri(); */
const type = Joi.string().min(3).max(15);
const available = Joi.boolean();

const createCategorySchema = Joi.object({
  type: type.required(),
  available: available.required(),
});

const updateCategorySchema = Joi.object({
  type: type,
  available: available,
});

const getCategorySchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createCategorySchema,
  updateCategorySchema,
  getCategorySchema,
};
