'use strict';
const { userData } = require('../data/mandatory.data');
const { USER_TABLE } = require('../models/user.model');
const { Op } = require('sequelize');
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(USER_TABLE, userData);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete(USER_TABLE, { id: { [!Op.eq]: [0] } });
  },
};
