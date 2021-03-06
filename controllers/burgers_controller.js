const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        const burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject)
    });
});



router.post("/api/burger", function(req, res) {
    burger.insertOne([
      "burger_name", "devoured" 
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        res.json({ id: result.insertId });
    });
});



router.put("/api/burger/:id", function(req, res) {
    let condition = "id = " + req.params.id;
    // console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
       }, condition, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});



module.exports = router;
