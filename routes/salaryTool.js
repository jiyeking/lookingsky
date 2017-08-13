/**
 * 个人工资计算工具
 * Created by JKL on 2017/8/13.
 */
var express = require("express");
var router = express.Router();



/**
 * 工具首页
 */
router.get("/", function (req, res, next) {
    res.render("salaryTool/index",{"title" : "个人工资收入最大化计算工具"});
});
/**
 * 计算结果
 */
router.get("/result", function (req, res, next) {
    //计算过程
    var data = {
        total : 1111
    }
    res.render("salaryTool/result", data);
});

router.get("/:id", function (req, res) {
    var data = {};
    data["id"] = 1;
    data["total"] = 15000;
    res.render("salaryTool/salary", data);
});

module.exports = router;