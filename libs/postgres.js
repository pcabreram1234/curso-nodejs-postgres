const { Client } = require('pg');
const { config } = require('../config/config');

async function getConnection() {
  const client = new Client({
    database: config.dbName,
    host: config.dbHost,
    user: config.dbUser,
    port: config.dbPort,
    password: config.dbPassword,
  });
  await client.connect();
  return client;
}

module.exports = { getConnection };
