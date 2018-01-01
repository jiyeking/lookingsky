/**
 * my book
 * Created by JKL on 2018/1/1.
 */
var express = require("express");
var router = express.Router();

router.all("/addBook", function (req, res) {

    //获取参数
    var data = tools.extend({},req.body);
    data["reqBody"] = req.body;

    if(!tools.isEmptyObject(req.query)){
        data = req.query;
        data["type"] = "query";
    }
    data["liyongfei"] = true;
    // res.render("salaryTool/salary", data);
    res.json(data);
});
module.exports = router;