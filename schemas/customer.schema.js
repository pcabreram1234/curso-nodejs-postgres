const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3);
const lastName = Joi.string().min(3);
const phone = Joi.string().min(10);
const userId = Joi.number().integer();

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  userId: userId.required(),
});

const updateCustomerSchema = Joi.object({
  id: id.required(),
  name: name,
  lastName: lastName,
  phone: phone,
  userId: userId.required(),
});

const getCustomerSchema = Joi.object({
  id: id.required(),
});

const deleteCustomerSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createCustomerSchema,
  updateCustomerSchema,
  getCustomerSchema,
  deleteCustomerSchema,
};
