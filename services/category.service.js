const boom = require('@hapi/boom');
const { type } = require('express/lib/response');
const pool = require('../libs/postgres.pool');

class CategoryService {
  constructor() {
    this.pool = pool;
  }

  async create(data) {
    const { type, available } = data;
    const values = [type, available];
    const query =
      'INSERT INTO categoryservice (type, available) values ($1, $2)';
    const rta = await this.pool.query(query, values);
    if (rta.rowCount === 1) {
      return {
        ...data,
        message: 'Categoria creada',
      };
    } else {
      boom.badData('La categoria no pudo ser creada');
    }
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
}

module.exports = CategoryService;
