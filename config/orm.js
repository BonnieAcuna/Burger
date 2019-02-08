const connection = require("../config/connection.js");

const orm = {
    selectAll: function(tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if(err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function(table, cols, vals, cb) {
        let queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += " )";
        queryString += "VALUES (";
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        })
    },

    updateOne: function(table, condition, cb) {
        let queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += "devoured=true ";
        queryString += "WHERE ";
        queryString += condition;
        //UPDATE burgers SET devoured=true WHERE id=1
        console.log(queryString)
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

module.exports = orm;