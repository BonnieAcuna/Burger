const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Angel1Acuna",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("error conncecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;