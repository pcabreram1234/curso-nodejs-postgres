const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const image = Joi.string().uri();

const createCategorySchema = Joi.object({
  name: name.required(),
<<<<<<< HEAD
  image: image.required()
});

const updateCategorySchema = Joi.object({
  name: name,
  image: image
=======
  image: image.required(),
});

const updateCategorySchema = Joi.object({
  id: id.required(),
  name: name,
  image: image,
>>>>>>> 11eb9ce774d4c85b77d6d41a59dcd7b65435f8dd
});

const getCategorySchema = Joi.object({
  id: id.required(),
});

<<<<<<< HEAD
module.exports = { createCategorySchema, updateCategorySchema, getCategorySchema }
=======
module.exports = {
  createCategorySchema,
  updateCategorySchema,
  getCategorySchema,
};
>>>>>>> 11eb9ce774d4c85b77d6d41a59dcd7b65435f8dd
