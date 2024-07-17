const mysql = require('mysql2');
const env = require('dotenv').config();
 
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});
 
connection.connect((err) => {
    if(err) {
        throw err;
    } else {
        console.log('Mysql connected');
    }
});
 
module.exports = connection;