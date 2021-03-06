/**
 * 个人工资计算工具
 * Created by JKL on 2017/8/13.
 */
var express = require("express");
require("./viewObj/salary");
require("../public/js/tools");
var router = express.Router();



/**
 * 工具首页
 */
// router.get("/", function (req, res, next) {
//     res.render("salaryTool/index",new salary());
// });
var salaryRate = {
    1 : {type : 1,//含税级距
        level : 1,
        lineMoney : 1500,
        rate : 3,
        deduct : 0
    },
    2 : {type : 1,//含税级距
        level : 2,
        lineMoney : 4500,
        rate : 10,
        deduct : 105
    },
    3 : {type : 1,//含税级距
        level : 3,
        lineMoney : 9000,
        rate : 20,
        deduct : 555
    },
    4 : {type : 1,//含税级距
        level : 4,
        lineMoney : 35000,
        rate : 25,
        deduct : 1005
    },
    5 : {type : 1,//含税级距
        level : 5,
        lineMoney : 55000,
        rate : 30,
        deduct : 2755
    },
    6 : {type : 1,//含税级距
        level : 6,
        lineMoney : 80000,
        rate : 35,
        deduct : 5505
    },
    7 : {type : 1,//含税级距
        level : 7,
        rate : 45,
        deduct : 13505
    }
    }

/**
 * 计算结果
 */
router.all("/", function (req, res, next) {
    if(req.method == "get"){
        res.render("salaryTool/index", new salary());
    }
    //获取参数
    var form = new salary(req.body);

    if(!tools.isEmptyObject(req.query)){
        form = req.query;
    }

    //定义公式
    var expression = "(salary - insureMoney - otherMoney - baseLine) ";
    //应纳税所得额
    var shouldRateMoney = convertExpression(expression, form);
    //等级
    for(var level in salaryRate){
        if(form.salary <= salaryRate[level].lineMoney){
            break;
        }
    }

    var rateMoney = convertExpression(shouldRateMoney +" * rate/100 -  deduct",salaryRate[level]);
    //计算过程


    form.result = form.salary - rateMoney -form.insureMoney-form.otherMoney;
    res.render("salaryTool/index", form);
});
/**
 * 公式转换成具体值操作
 * @param expression
 * @param data
 * @returns {*}
 */
function convertExpression(expression, data) {
    for(var key in data){
        var val = (data[key].length > 0 || data[key]>0) ? data[key] : 0;
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