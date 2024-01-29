const { Client } = require('pg');
require('dotenv').config();

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`
const client = new Client({
    // host: process.env.DB_HOST,
    // port : process.env.DB_PORT,
    // user : process.env.DB_USER,
    // password : process.env.DB_PASSWORD,
    // database : process.env.DB_DATABASE
    connectionString : connectionString,
})

module.exports = client;