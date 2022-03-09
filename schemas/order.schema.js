const Joi = require('joi');

const id = Joi.number().integer();
const item_id = Joi.number().integer();
const item_name = Joi.string().alphanum().min(5).max(50);
const item_price = Joi.number().integer();
/* const date_buy = Joi.date().timestamp(); */

const getOrderSchema = Joi.object({
  id: id.required(),
});

const updateOrderSchema = Joi.object({
  id: id.required(),
  item_id: item_id.required(),
  item_name: item_name,
  item_price: item_price,
});

module.exports = { getOrderSchema, updateOrderSchema };
