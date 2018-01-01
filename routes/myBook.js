/**
 * my book
 * Created by JKL on 2018/1/1.
 */
var express = require("express");
var router = express.Router();

router.get("/addBook", function (req, res) {

    var data = req.body;
    data["liyongfei"] = true;
    // res.render("salaryTool/salary", data);
    res.json(data);
});
module.exports = router;