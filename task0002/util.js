// 实践判断各种数据类型的方法，并在util.js中实现以下方法：
// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    // your implement
    return Array.isArray(arr);
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
    // your implement
    if(typeof(fn) == "function"){
        return true;
    }else return false;
}

/**  test
 *  var arr = [1,2,3];
 *  console.log(isArray(arr));
 *  function test(){
 *  return false;
 *  }
 *  console.log(isFunction(arr));
*/

// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
    var arr2 = [];
    for(var i=0; i<arr.length; i++){
        if(arr2.indexOf(arr[i]) == -1){  // 如果在新数组中没有找到旧数组中的元素返回 -1
            arr2.push(arr[i]);
        }
    }
    return arr2;
}

// 使用示例
var a = [1, 3, 5, 7, 5, 3];
var b = uniqArray(a);
console.log(b); // [1, 3, 5, 7]

// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简洁的正则表达式完成该题目
function trim(str) {
    // your implement
    // var patt = /^\s|$\s/g;
    return str.replace(/^\s+|$\s+/g, "");   // replace 方法将匹配正则式的字符替换 这里替换为空
}

// 使用示例
var str = '   hi!  ww  ';
str = trim(str);
console.log(str); 

/**
 *   深度克隆与浅度克隆的差别在于引用类型的克隆，
 *   在深度克隆中 基本类型仍然为值传递，引用类型需要完全重新定义。
 *   存在的问题： 1. 判断对象中的值是基本类型还是引用类型
 *               2. 判断对象中的值是实例中的还是原型中的(过滤掉原型中的方法和属性)
 *               3. 若为引用类型 则递归改方法
 */

var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};



var testArr = [1, 2, 3, 4, 5, 6];

console.log(testArr.constructor == Array);   // true

var testDate = new Date();
console.log(testDate.constructor == Date);   // true

function cloneObject(src){
	var o = null;
	if(src.constructor == Array){       // 判断 src 的构造函数(构造器)是否为数组
		o = [];
	}else{
		o = {};
	}
	
	for(var key in src){
		if(src.hasOwnProperty(key) && (src[key] instanceof Object)){
		//  排除非 src 对象中的实例属性 且如果为对象的话进行递归
			o[key] = arguments.callee(src[key]);
		}else{
			o[key] = src[key];
		}
	}
	
	return o;
}



var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);
console.log(abObj.b.b1[0]);

console.log(tarObj.a);      // 1
console.log(tarObj.b.b1[0]);    // "hello"
