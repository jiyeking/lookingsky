/**
 *工具
 */
tools = {
    /**
     * 扩展对象方法
     * @param target
     * @param options
     * @returns {*}
     */
    extend : function (target, options) {
        for(var name in options) {
            target[name] = options[name];
        }
        return target;
    },
    /**
     * 判断是否为空对象
     * @param e
     * @returns {boolean}
     */
    isEmptyObject : function (e) {
        var t;
        for (t in e) return !1;
        return !0
    }

}

module.exports=tools;