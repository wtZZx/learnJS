/**
 *   Array类型
 * 
 *   创建数组有两种基本方式 
 *   1. var colors = new Array();
 *      var colors = new Array(5);   会创建一个 length 值为 5 的数组
 *      var colors = new Array("red", "blue", "yellow");
 * 
 *   2. var colors = ["red", "blue", "yellow"];   // 数组的字面量表示法
 *      var colors = [];   会创建一个空数组！    
 *      - 在使用数组的字面量表示法时，不会调用 Array 构造函数
 */
 
var colors = ["red", "yellow", "gray"];
console.log(colors[0]);
colors[3] = "blue";             // 新增第四项
console.log(colors.length);     // 4
 
/**
 *   数组的项数保存在其 length 属性中，始终返回 0 或更大的值
 *   !!! length 不是只读的 !!!
 *   利用 length 可以方便的在尾部添加新项
 */
 
colors.length = 3;
console.log(colors[3]);       // undefined
 
colors[colors.length] = "pink";
console.log(colors.length);    // 4
 
//  -- 检测数组  Array.isArray()
 
console.log(Array.isArray(colors));  // true
 
 
//  -- 转换方法
 
console.log(colors.toString());   // [red, yellow, gray, pink]  返回数组的字符串表示
 
console.log(colors.toLocaleString());  
 
var person1 = {
    toLocaleString: function(){
        return "Mike";
    },
    toString: function(){
        return "jack";
    }
};
 
var person2 = {
    toLocaleString: function(){
        return "bob";
    },
    toString: function(){
        return "hellen";
    }
};
 
 
var people = [person1, person2]
console.log(people);                         // [Object,Object]
console.log(people.toLocaleString());        // Mike,bob
console.log(people.toString());              // jack,hellen
 
// -- 使用 join() 方法构建带分隔符的字符串
// -- 如果不给 join() 方法传入任何值 , 或者传入 undefined 会使用逗号分隔.
 
console.log(colors.join("/"));  // red/yellow/gray/pink
 
/**
 *   栈方法  LIFO
 *   栈中项的推入 和 弹出只发生在栈的顶部 
 *   ECMAScript 提供了 push() 和 pop() 方法
 */
 
 
var names = ["jack", "bob", "tom"];
names.push("mike");         // 推入之后 length + 1
console.log(names.pop());   // mike  -pop()返回字符串 mike
console.log(names.length);  // 3  弹出之后 length-1 
 
/**
 *   队列方法  FIFO
 *   ECMAScript 提供了 shift() 方法用于从数组前端取得项
 *   unshift() 方法可以在数组前端添加项 返回数组的新长度
 */
 
console.log(names.shift());   // jack -取出之后 length - 1
console.log(names.length);    // 2
var t = names.unshift("ant");
console.log(t);               // 3
console.log(names[0]);        // ant
 
 
/**
 *   重排序方法 : reverse() 和 sort()
 *   reverse() 方法会反转数组的顺序
 *   sort() 方法默认升序排序
 *   tip: sort() 方法会调用每个数组项的 toString() 方法 进行字符串大小的比较
 * 
 *   tip: sort() 和 reverse() 方法的返回值是排序后的数组
 */
 
 
var values=[1,2,3,5,6,15];
console.log(values.reverse());    //  [15,6,5,3,2,1]
console.log(values.sort());      // [1, 15, 2, 3, 5, 6]
 
 
/**
 *   sort() 方法比较的是字符串的大小 ！！！
 */
 
function compare(first, second){
    return first - second;               // 降序: second - first
}
 
console.log(values.sort(compare));       // [1, 2, 3, 5, 6, 15]
 
 
/**
 *   操作方法：
 *   -- 1. concat() 方法基于当前数组中的所有项创建一个新数组
 *   -- 2. slice() 方法能基于当前数组中的一或多个项创建一个新数组
 *         * 一个参数 返回从改参数指定的位置到数组的结束
 *         ** 两个参数  返回从第一个参数指定的位置到第二个参数（不包括第二个参数）的项
 */
 
var testArr1 = ["apple", "microsoft", "alibaba"];
var testArr2 = testArr1.concat();
var testArr3 = ["eastpak", "select"];
 
console.log(testArr2);    // ["apple", "microsoft", "alibaba"]
testArr2 = testArr1.concat("baidu");
console.log(testArr2);    // ["apple", "microsoft", "alibaba", "baidu"]
testArr2 = testArr1.concat(testArr3);
console.log(testArr2);    // ["apple", "microsoft", "alibaba", "eastpak", "select"]
 
testArr2 = testArr1.slice(0,1);
console.log(testArr2);    // ["apple"]  不包括 "microsoft"
testArr2 = testArr1.slice(1);
console.log(testArr2);    // ["microsoft", "alibaba"]
 
/**
 *  - splice() 方法
 *   1. 删除： 两个参数 要删除的第一项的位置和要删除的项数
 *       返回的是从原始数组中删除的项 如下面的 testArr2
 *   2. 插入： 三个参数 (起始位置, 0, 要插入的项(可以做为多个参数))
 *   3. 替换： 向指定位置插入任意数量的项，同时删除任意数量的项
 *        三个参数(起始位置，要删除的项数和要插入的任意数量的项)
 *        * 插入的项数不必与删除的项数相等。
 */
 
testArr2 = testArr1.splice(0, 2);
console.log(testArr2);       // ["apple", "microsoft"]
console.log(testArr1);       // ["alibaba"]
 
 
// 此处 testArr2 中的内容为 ["apple", "microsoft"]
testArr2.splice(1, 0, "english", "cake");
console.log(testArr2);      // ["apple", "english", "cake", "microsoft"]
 
testArr2.splice(1, 1, "have", "pig");
console.log(testArr2);     // ["apple", "have", "pig", "cake", "microsoft"]
testArr2.splice(1, 2, "pen", "egg");
console.log(testArr2);     // ["apple", "pen", "egg", "cake", "microsoft"]
 
/**  位置方法：
 *   ECMAScript 5 为数组实例添加了两个位置方法
 *   indexOf() 和 lastIndexOf()
 *   两个参数：要查找的项(元素),查找起点位置的索引(可选)
 *   indexOf() 从 index = 0 处开始查找
 *   lastIndexOf() 从 length-1 处开始查找
 */
 
console.log(testArr2.indexOf("pen"));     // 1
console.log(testArr2.indexOf("pen", 3));  // -1  没找到的话返回 -1
console.log(testArr2.indexOf("egg", 2));  // 2
console.log(testArr2.lastIndexOf("pen")); // 1
 
/**
 *  迭代方法
 *  every(): 如果数组中的每项都满足测试函数 返回在真
 *  some(): 如果数组中有一项满足测试函数 返回为真
 *  filter(): 返回数组中满足测试函数的项
 *  map(): 返回每次调用的结果组成的数组
 *  forEach：本质与使用 for 迭代数组一样
 * 
 *  ***
 *  支持迭代方法的浏览器： IE9+, Firefox 2+, Safari 3+, Opear 9.5, Chrome
 */

