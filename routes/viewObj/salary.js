var tools = require("../../public/js/tools.js");
/**
 * 工资对象
 * @param options
 */
salary = function (options) {
    this.title = "个人工资收入最大化计算工具";
    this.salary = "";
    this.insureMoney = "";
    this.otherMoney = "";
    this.baseLine = "";
    this.result = "";
    tools.extend(this, options);
    return this;
}

module.exports=salary;