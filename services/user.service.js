const boom = require('@hapi/boom');
<<<<<<< HEAD
=======
const { models } = require('../libs/sequelize');
>>>>>>> 11eb9ce774d4c85b77d6d41a59dcd7b65435f8dd

class UserService {
  constructor() {}

  async create(data) {
<<<<<<< HEAD
    return data;
  }

  async find() {
    return [];
=======
    const rta = await models.User.create(data);
    return rta;
  }

  async find() {
    const rta = await models.User.findAll({
      include: ['customer'],
    });
    return rta;
>>>>>>> 11eb9ce774d4c85b77d6d41a59dcd7b65435f8dd
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
