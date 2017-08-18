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
    //获取参数
    var form = req.query;
    //定义公式
    var expression = "(salary - insureMoney - otherMoney - baseLine) ";
    var data = {
        result : convertExpression(expression, form)
    }
    res.render("salaryTool/result", data);
});
/**
 * 公式转换成具体值操作
 * @param expression
 * @param data
 * @returns {*}
 */
function convertExpression(expression, data) {
    for(var key in data){
        var val = data[key].length > 0 ? data[key] : 0;
        var reg = new RegExp(key, "g");
        expression = expression.replace(reg, val);
    }
    return eval(expression);
}
router.get("/:id", function (req, res) {
    var data = {};
    data["id"] = 1;
    data["total"] = 15000;
    res.render("salaryTool/salary", data);
});

module.exports = router;