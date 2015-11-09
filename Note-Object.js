
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


 // - 11-9
function Person(){
	
}
var friend = new Person();

Person.prototype = {
	constructor: Person,
	name: "jack",
	age: 10,
	job: "student",
	sayName: function(){
		console.log(this.name);
	}
};

//friend.sayName(); // Uncaught TypeError: friend.sayName is not a function

/**
 *   包含引用类型的原型对象问题
 */

function Person(){
	
}
Person.prototype = {
	constructor: Person,
	name: "jack",
	age: 15,
	job: "student",
	friends: ["tom", "mike"],
	sayName: function(){
		console.log(this.name);
	}
};

var person1 = new Person();
var Person2 = new Person();

person1.friends.push("Bob");

console.log(person1.friends);   // ["tom", "mike", "Bob"]
console.log(Person2.friends);   // ["tom", "mike", "Bob"]

// 本应该只在 Person1 中显示的 Bob 在 Person2 中也显示了出来

/**
 *  结合使用构造函数及原型模式
 *  构造函数定义实例化的属性
 *  原型定义共享的属性
 *  eg. 6.2.4
 */

function Students(name, age, sex){
	this.name = name;
	this.age = age;
	this.sex = sex;
	this.home = ["liyang"];
}

Students.prototype = {
	constructor: Students,
	grade: "Grade1",
	leader: "Mr.wang",
}

var xiaoming = new Students("xiaoming", 18, "boy");
var lisi = new Students("lisi", 16, "girl");
xiaoming.home.push("changzhou");
lisi.home.push("zhengjiang");

console.log(xiaoming.home);   // ["liyang", "changzhou"]
console.log(lisi.home);       // ["liyang", "zhengjiang"]

// xiaoming 和 lisi 分别引用了不同的数组 所以互不影响

/**
 *  继承：
 *  ECMAScript中无法实现接口继承，ECMAScript只支持实现继承，其实现继承的主要是依靠原型键实现的
 */

function animal(name, leg, anType){
	this.name = name;
	this.leg = leg;
	this.anType = anType;
}

animal.prototype = {
	showleg: function(){
		console.log(this.name + " has " + this.leg + " legs");
	},
	showType: function(){
		console.log(this.name + " is " + this.anType);
	}
}

function fish(name, leg){
	 animal.call(this, name, leg, "fish");
	 this.name = name;
}

fish.prototype = Object.create(animal.prototype);
// 通过创建一个空对象来取得 anmial 的原型
fish.prototype.constructor = fish;


fish.prototype.swimming = function(){
	console.log(this.name + " can swimming!");
};


var fishA = new fish("aili", 0);
fishA.showType();
fishA.showleg();
fishA.swimming();

// fishA 的原型指向了 fish , fish 的原型指向了 animal


function Person(name, age, sex){
	this.name = name;
	this.age = age;
	this.sex = sex;
}

Person.prototype.HEAD = 1;
Person.prototype.LEG = 2;

Person.prototype.sleep = function(){
	console.log(this.name + " is sleeping");
}

Person.prototype.eat = function(){
	console.log(this.name + " is eatting");
}

function Student(name, age, sex, grade, major){
	Person.call(this, name, age, sex);
	this.grade = grade;
	this.major = major;
}

Student.prototype = Object.create(Person.prototype);  // 原型式继承
Student.constructor = Student;

Student.prototype.HEAD = 3;

Student.prototype.learing = function(){
	console.log(this.name + " is learing " + this.major);
}

Student.prototype.homeWork = function(){
	console.log(this.name + " is doing " + this.major + " homeWork");
}


var zhangsan = new Student("zhangsan", 18, "man", "grade1", "computer");
var zhangsansFarther = new Person("zhanger", 40, "man");

zhangsan.sleep();
zhangsan.learing();
console.log(zhangsan.grade);
console.log(zhangsan.HEAD);
console.log(zhangsansFarther.HEAD);
zhangsan.homeWork();
