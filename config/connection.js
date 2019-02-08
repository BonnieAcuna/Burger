const mysql = require("mysql");
//We need a production connection and a local connection as well
let connection;
if(process.env.JAWSDB_URL) {
    //This would be production DB instance //This environment variable is injected in at runtime by Heroku but only after you set up JAWSDB as a add-on for that Heroku repository which does require a credit card on your account even though it is free :(
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    //if production instance does not exist we must be running the app locally
    //this is local connection
     connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Angel1Acuna",
        database: "burgers_db"
    });
}

connection.connect(function(err) {
    if (err) {
        console.error("error conncecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;