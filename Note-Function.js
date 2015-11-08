


/**
 *  Function
 *  函数实际是上 function 类型的实例 且与其他引用类型一样有属性及方法.
 *  函数名仅仅是指向函数的指针 一个函数可能有多个名字
 */
 
function sum(num1, num2){
    return num1 + num2;
}
 
console.log(sum(10, 10));                  // 20
 
var anotherFunctionName = sum;
 
console.log(anotherFunctionName(20, 20));  // 40
 
// ECMAScript 中没有函数重载的概念
 
function sum(num1, num2){
    return num1 - num2;
}
// 同名函数 后面的函数覆盖前面的函数 
console.log(sum(10, 10));   // 0
 
// 函数作为参数
    
var data = [{name: "jack", age: 18},{name: "tom", age: 15}];
 
function compareFunction(propertyName){
    return function(obj1, obj2){
        var value1 = obj1[propertyName];  // 用 [] 的原因是传入的值可能是字符串
        var value2 = obj2[propertyName];
        return value1 - value2;
    }
}
 
data.sort(compareFunction("age"));
console.log(data)   // tom jack 按 age 排序了
 
/**
 *   函数的内部属性
 *   arguments / this
 *   -- arguments 的主要用途用于保存函数的参数 
 *      有一个 callee 的属性 指向拥有这个 arguments 对象的函数 ？
 *   -- this
 *      当处于全局环境中时 this 引用的是 window
 * 
 *   ECMAScript5 中规范化的新属性 caller
 *   保存着调用当前函数的函数的引用 全局作用域中为 null 
 */
 
function fact(num){ 
    if(num <= 1){
        return 1;
    }else{
        return num * arguments.callee(num-1);  // 消除藕合
    }
}
console.log(fact(5));
 
window.color = "red";
 
function showColor(){
    console.log(this.color);
}
 
showColor();  // red
 
 
// caller 属性
function outer(){
    inner();
}
 
function inner(){
    console.log(arguments.callee.caller);
}
 
outer();
 
/**
 *  函数属性和方法
 *  每个函数都有两个属性: length 和 prototype
 *  length表示函数希望接收的命名参数的个数
 */
 
function testFunction1(a, b){
    return a + b;
}
 
function testFunction2(){
     
}
 
console.log(testFunction1.length)    // 2
console.log(testFunction2.length)    // 0
 
// apply() 和 call()
 
function sum(num1, num2){
    return num1 + num2;
}
 
function callSum1(num1, num2){
    return sum.apply(this, arguments);
}
 
function callSum2(num1, num2){
    return sum.apply(this, [num1, num2]); 
    // this 运行函数的作用域 ，因为是在全局作用域调用的，传入的是 window 对象
}
 
console.log(callSum1(10, 10));
console.log(callSum2(10, 10));
 
window.color = "red";
var o = {
  color: "blue",  
};
 
function sayColor(){
    console.log(this.color);
}
 
sayColor.call(this);    //red    全局环境 this -> window
sayColor.call(window);  //red
sayColor.call(o);       //blue   this 对象指向了 o
 
/**
 *  ECMAScript 定义了 bind() 方法， 会创建一个函数的实例
 *  this 值会被绑定到传给 bind() 函数的值
 */
 
var objectSayColor = sayColor.bind(o);
objectSayColor();      // blue
