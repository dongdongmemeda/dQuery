/**
 *  author: 蔡东
 *  createdOn: 2017/11/18
 *  desc: dQuery库（源自于jQuery源码解析）
*/

function dQuery(){
    return dQuery.pr.init()    //  返回原型dQuery.prototype，而不是返回dQuery，返回dQuery会造成死循环
}
dQuery.pr = dQuery.prototype = {
    constructor: dQuery,    //  原型的指针指向构造函数
    init: function(){
        return this    //  this指向的是dQuery.prototype的作用域，而不是jQuery本身
    },
    //  复制对象
    copy: function(){
        let target
        if(arguments.length > 0){
            if(arguments[0] === true){
                //  第一个参数为true执行深复制
                let rest
                [arguments[0], ...rest] = [...arguments]
                target = JSON.parse(JSON.stringify(Object.assign({}, ...rest)))
            }else{
                //  否则进行浅复制
                target = Object.assign({}, ...arguments)
            }
        }
        return target
    }
}
dQuery.prototype.init.prototype = dQuery.pr    //  核心，将init的作用域指向dQuery.prototype
dQuery.extend = dQuery.pr.extend = function(){}