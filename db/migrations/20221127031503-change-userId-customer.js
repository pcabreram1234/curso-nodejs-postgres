'use strict';
const { DataTypes } = require('sequelize');
const { CUSTOMER_TABLE } = require('../models/customer.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.changeColumn(CUSTOMER_TABLE, 'user_id', {
      field: 'user_id',
      allowNull: false,
      unique: true,
      type: DataTypes.INTEGER,
    });
  },

  async down(queryInterface) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
