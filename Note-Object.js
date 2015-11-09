
// 都是对象
function testFunction(){
	
}

var testArr = [1, 2];
var testPatt = /\w{1,}/;
var testDate = new Date();

console.log(testFunction instanceof Object);   // true
console.log(testArr instanceof Object);        // true
console.log(testPatt instanceof Object);       // true 
console.log(testDate instanceof Object);       // true


/**
 *  prototype: 原型
 *  创建的每个函数都有一个 prototype 属性, 这个属性是一个指针, 指向一个对象
 *  
 */

function Person(){
	
}
Person.prototype.job = "student";

console.log(Person.prototype instanceof Object);   // true  原型是一个指向一个对象的指针

var newPerson = new Person();
newPerson.age = 18;
newPerson.name = "tom";


console.log(newPerson.name);
console.log(newPerson.job);

console.log(newPerson.hasOwnProperty("job"));   // false
console.log(newPerson.hasOwnProperty("name"));  // true
/**
 *  通过 hasOwnProperty() 方法可以确定 对象的属性是在其实例上还是在其原型中的
 *  若在其原型中 返回 false 若在实例中 返回 true
 */

/**
 *  ECMAScript 5 定义了 Object.getPrototypeOf() 方法， 这个方法返回 [[Prototype]] 的值
 */

console.log(Object.getPrototypeOf(newPerson));
// 返回了 newPerson 的 [[Prototype]] 的值 

console.log("toString" in Person);   // true
console.log("toString" in Object);   // true

var keys = Object.keys(Person.prototype);
console.log(keys);               // ["job"];

keys = Object.keys(newPerson);
console.log(keys);              // ["age", "name"]

keys = Object.getOwnPropertyNames(Person.prototype);
console.log(keys);              // ["constructor", "job"]
/**
 *   constructor - 构造函数
 *   默认情况下 所有的原型对象都会自动获得一个 constructor 属性
 *   这个属性包含一个指向 prototype 属性所在函数的指针
 */
console.log(Person.prototype.constructor);
  
/**  Console:
 *   function Person(){
 *   
 *   }
 */

keys = Object.getOwnPropertyNames(newPerson);
console.log(keys);              // ["age", "name"]


var xiaoming = new Person();
xiaoming.age = 19;
xiaoming.job = "teacher";
xiaoming.name = "xiaoming";   

console.log(xiaoming.job);      // teacher - 来自实例

delete xiaoming.job;
// 通过 delete 操作符可以删除实例属性 之后会重新访问原型中的属性

console.log(xiaoming.job);      // student  -- 来自原型


 