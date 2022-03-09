const boom = require('@hapi/boom');
const pool = require('../libs/postgres.pool');
class OrderService {
  constructor() {
    this.pool = pool;
  }
  async create(data) {
    return data;
  }

  async find() {
    const query = 'SELECT * FROM orders';
    const rta = await this.pool.query(query);
    return rta.rows;
  }

  async findOne(id) {
    const query = 'SELECT * FROM orders WHERE id=$1';
    const rta = await this.pool.query(query, [id]);

    if (rta.rowCount === 1) {
      return rta.rows;
    } else {
      return {
        message: boom.notFound('No existe la orden indicada').message,
      };
    }
  }

  async update(id, changes) {
    const { item_id, item_name, item_price } = changes;
    const date_buy = new Date();

    const query = `UPDATE orders SET item_name=$1, item_price=$2, date_buy=$3 WHERE id=$4 and  item_id=$5`;
    const rta = await this.pool.query(query, [
      item_name,
      item_price,
      date_buy,
      id,
      item_id,
    ]);
    if (rta.rowCount === 1) {
      const findOne = await this.findOne(id);
      return { data: findOne, message: 'Orden actualizada' };
    } else {
      return {
        message: boom.badData('La orden no pudo ser actualizada'),
      };
    }
  }

  async delete(id) {
    const query = 'DELETE FROM orders WHERE id=$1';
    const rta = await this.pool.query(query, [id]);
    if (rta.rowCount === 1) {
      return { message: 'Orden Eliminada' };
    } else {
      return {
        message: boom.notFound('La orden no pudo ser eliminada'),
      };
    }
  }
}

module.exports = OrderService;
