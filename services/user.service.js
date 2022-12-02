const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class UserService {
  constructor() {}

  async create(data) {
    const rta = await models.User.create(data);
    return rta;
  }

  async find() {
    const rta = await models.User.findAll({
      include: ['customer'],
    });
    return rta;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
