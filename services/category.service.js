<<<<<<< HEAD
const boom = require('@hapi/boom');

class CategoryService {

  constructor(){
  }
  async create(data) {
    return data;
  }

  async find() {
    return [];
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

=======
const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class CategoryService {
  async create(data) {
    const rta = await models.Category.create(data);
    return rta;
  }

  async find() {
    const findCategoryQuery = 'SELECT * FROM categoryservice';
    const rta = await this.pool.query(findCategoryQuery);
    const data = rta.rows;
    return { data: data };
  }

  async findOne(id) {
    const findOneQuery = 'SELECT * FROM categoryservice WHERE id=$1';
    const rta = await this.pool.query(findOneQuery, [id]);
    if (rta.rowCount === 1) {
      return {
        data: rta.rows,
      };
    } else {
      return {
        message: boom.notFound('Esta categoria no existe').message,
      };
    }
  }

  async update(id, changes) {
    const { type, available } = changes;
    const updateQuery =
      'UPDATE categoryservice SET type=$1, available= $2 where id = $3';
    const rta = await this.pool.query(updateQuery, [type, available, id]);
    if (rta.rowCount === 1) {
      const result = await this.findOne(id);
      return {
        data: result.data[0],
        message: 'Elemento actualizado',
      };
    } else {
      boom.badData('La categoria no pudo ser actualizada').message;
    }
  }

  async delete(id) {
    const deleteQuery = 'DELETE FROM categoryservice where id=$1';
    const rta = await this.pool.query(deleteQuery, [id]);
    if (rta.rowCount === 1) {
      return {
        data: rta.rows,
      };
    } else {
      return {
        message: boom.badData('El elemento no existe o no pudo ser eliminado')
          .message,
      };
    }
  }
>>>>>>> 11eb9ce774d4c85b77d6d41a59dcd7b65435f8dd
}

module.exports = CategoryService;
