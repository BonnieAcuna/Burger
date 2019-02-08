const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        const burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject)
    });
});

router.post("/api/burger", function(req, res) {
    burger.create([
      "burger_name", "devoured"  
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burger/:id", function(req, res) {
    const condition = "id=" + req.params.id;

    burger.update(condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.redirect('/');
        }
    });
});

module.exports = router;
