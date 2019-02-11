const orm = require("../config/orm.js");

const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    

    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },

    
    //condition shoudl be id
    updateOne: function( val, condition, cb) {
        orm.updateOne("burgers", val, condition, function(res) {
            cb(res);
        });
    }
};


module.exports = burger;