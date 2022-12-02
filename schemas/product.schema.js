const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
<<<<<<< HEAD
  image: image.required()
=======
  image: image.required(),
>>>>>>> 11eb9ce774d4c85b77d6d41a59dcd7b65435f8dd
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
<<<<<<< HEAD
  image: image
=======
  image: image,
>>>>>>> 11eb9ce774d4c85b77d6d41a59dcd7b65435f8dd
});

const getProductSchema = Joi.object({
  id: id.required(),
});

<<<<<<< HEAD
module.exports = { createProductSchema, updateProductSchema, getProductSchema }
=======
module.exports = { createProductSchema, updateProductSchema, getProductSchema };
>>>>>>> 11eb9ce774d4c85b77d6d41a59dcd7b65435f8dd
