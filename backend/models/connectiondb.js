"use strict";
const databaseConfig = require('../config/database.json')
const mysql = require('mysql');

let connection = mysql.createConnection(databaseConfig);

module.exports = connection;