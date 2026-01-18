const mysql = require('mysql2')

let connection;

function connectToDatabse() {
    if (!connection) {
        connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '12345',
            database: 'express'
        });
    }
    return connection;
}

module.exports = connectToDatabse();


