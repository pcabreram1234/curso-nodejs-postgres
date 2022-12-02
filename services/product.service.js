const { models } = require('../libs/sequelize');

class ProductsService {
  async create(data) {
    const rta = await models.Product.create(data);
    return rta;
  }

  async find() {
    const rta = await models.Product.findAll();
    return rta;
  }

  async findOne(id) {
    const rta = await models.Product.findByPk(id);
    return rta;
  }

  async update(id, changes) {
    
  }

  async delete(id) {}
}

module.exports = ProductsService;
