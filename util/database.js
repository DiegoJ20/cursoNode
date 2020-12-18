const MySql = require('mysql2');

const pool = MySql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: ''
});

module.exports = pool.promise();