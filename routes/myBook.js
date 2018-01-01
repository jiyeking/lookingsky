/**
 * my book
 * Created by JKL on 2018/1/1.
 */
var express = require("express");
var router = express.Router();

router.all("/addBook", function (req, res) {

    //获取参数
    var data = req.body;
    if(!tools.isEmptyObject(req.query)){
        data = req.query;
    }
    //doAddBook
    res.json(data);
});
module.exports = router;