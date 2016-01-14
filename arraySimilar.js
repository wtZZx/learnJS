// 用于记录次数的对象

var cate = {
    string: 0,
    boolean: 0,
    number: 0,
    undefined: 0,
    null: 0,
    function: 0,
    Date: 0,
    window: 0
}

// 记录数据类型

function getCate(array, resultCate) {
    for(var i=0; i<array.length; i++) {
        if(typeof(array[i]) !== "object") {
            resultCate[typeof(array[i])]++;
        } else if(array[i] instanceof Date) {
            resultCate["Date"] ++;
        } else if(array[i] === null) {
            resultCate["null"] ++;
        } else if(array[i] === window){
            resultCate["window"] ++;
        }
    }
}

// 判断对象内属性出现的次数是否为 偶数 次
// 如果每个属性出现的次数为 偶数 次说明 两个数组数据类型出现的次数相同
function isEven(obj) {
    for(var key in obj) {
        if(obj[key]%2 == 1) {
            return false;
        }
    }
    return true;
}

// 鉴于比较对象为数组 如果不是数组直接 pass
function arraysSimilar(array1, array2) { 
    if(Array.isArray(array1) &&  Array.isArray(array2)) {
        
        var res = Object.create(cate);
        getCate(array1, res),
        getCate(array2, res);
        if(isEven(res) &&　array1.length == array2.length) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
