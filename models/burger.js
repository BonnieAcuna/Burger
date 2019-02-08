const orm = require("../config/orm.js");

const burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    create: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    //condition shoudl be id
    update: function( condition, cb) {
        orm.updateOne("burgers", condition, function(res) {
            cb(res);
        });
    }
};


module.exports = burger;