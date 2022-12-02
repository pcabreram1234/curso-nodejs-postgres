const { models } = require('../libs/sequelize');

class CustomerService {
  async find() {
    const rta = await models.Customer.findAll({
      include: ['user'],
    });
    return rta;
  }

  async findOne(id) {
    console.log(id);
    const rta = await models.Customer.findByPk(id, {
      include: ['user'],
    });
    return rta;
  }

  async create(data) {
    const rta = await models.Customer.create(data);
    return rta;
  }

  async delete(id) {
    const rta = await models.Customer.destroy({
      where: {
        id: id,
      },
    });
    return rta;
  }

  async update(data) {
    const { id, name, lastName, phone, userId } = data;
    const rta = await models.Customer.update(
      {
        name: name,
        lastName: lastName,
        phone: phone,
        userId: userId,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return rta;
  }
}

module.exports = CustomerService;
