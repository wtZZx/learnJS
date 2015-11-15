window.onload = function(){
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

	// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
	function each(arr, fn) {
		for(var i=0; i<arr.length; i++){
			fn.call(this, arr[i], i);  // call() 在特定的作用域中调用函数
		}
	}

	// 其中fn函数可以接受两个参数：item和index

	// 使用示例
	var arr = ['java', 'c', 'php', 'html'];
	function output(item) {
		console.log(item)
	}
	each(arr, output);  // java, c, php, html

	// 使用示例
	var arr = ['java', 'c', 'php', 'html'];
	function output(item, index) {
		console.log(index + ': ' + item)
	}
	each(arr, output);  // 0:java, 1:c, 2:php, 3:html


	// 获取一个对象里面第一层元素的数量，返回一个整数
	function getObjectLength(obj) {
		var length = 0;
		for(var i in obj){
			length++;
		}
		return length;
	}

	/**
	 *  ECMAScript5 提供了 Object.keys() 方法，接收一个对象做为参数，返回一个包含所有可枚举属性的字符串数组
	 */

	function getObjcetLength(obj){
		return Object.keys(obj).length;
	}

	// 使用示例
	var obj = {
		a: 1,
		b: 2,
		c: {
			c1: 3,
			c2: 4
		}
	};
	console.log(getObjectLength(obj)); // 3

    /**
	 *  实现  insertAfter(newnode,existingnode)
	 *  在指定已有子节点之后插入新的子节点
	 */
	
	var aSpan = document.createElement("span");
	var oUl = document.getElementsByTagName("ul")[0];
	var oP = document.getElementsByTagName("P")[0];
	
	
	insertAfter(aSpan, oUl);
	
	function insertAfter(newnode, existiongnode){
		var parent = existiongnode.parentNode;
		if(parent.lastChild === existiongnode){
			parent.appendChild(newnode);
		}else{
			parent.insertBefore(newnode, existiongnode.nextSibling);
		}
	}
	
	
	console.log(isSiblingNode(oUl, oP));  // true
	
	// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
    function isSiblingNode(element, siblingNode){
		return element.parentNode === siblingNode.parentNode;
	}
	
	// 为element增加一个样式名为newClassName的新样式
	
	/**
	*   存在的情况 1.element 本身没有 class 直接添加
	*              2.element 本身就存在 class 添加新 class
	*/
	
	function addClass(element, newClassName) {
		var oldClass = element.getAttribute("class");
		if(oldClass === null){
		// 判断是否存在旧样式
			element.className = newClassName;
		}else{
			element.className = (oldClass + " " + newClassName);
		}
    }
	
	// 移除element中的样式oldClassName
	
	function removeClass(element, oldClassName){
		var classNames = element.getAttribute("class");
		var patt = new RegExp("\\b" + oldClassName + "\\b");
		// 创建一个包含 oldClassName 的正则对象
		classNames = classNames.replace(patt, "");
		classNames = trim(classNames); 
		// 清除一下首尾空格
		element.setAttribute("class", classNames);
		
		
		// element.classList.remove(oldClassName); // IE10+
    }
	
	
	function getPosition(element){
		var Position = new Object;
		Position.x = element.getBoundingClientRect().left + Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
		Position.y = element.getBoundingClientRect().top + Math.max(document.documentElement.scrollTop, document.body.scrollTop);
		return Position;
	}
	
	// IE - > documentElement Chrome -> body
	/**
	 *  参考：
	 *  《javacript高级程度设计》 P323
	 *  http://www.cnblogs.com/qieqing/archive/2008/10/06/1304399.html
	 *  http://www.cnblogs.com/zhenyu-whu/archive/2012/11/13/2768004.html
	 *  http://gaohaoyang.github.io/2015/04/22/baidu-ife-2-javascript/
	 */
	 
	 // 实现对click事件的绑定
	function addClickEvent(element, listener) {
		element.addEventListener("click", listener, false);
	}

    /**
	 *  keydown 按下任意键 如不放开 重复
	 *  keypress 按下字符键 如不放开 重复
	 *  keyup 释放按键
	 */
	
	// 实现对于按Enter键时的事件绑定
	function addEnterEvent(element, listener) {
		element.addEventListener("keydown", function(event){
			if(event.keyCode == 13){
				listener;
			}
		}, false);
	}
	
	var textBox = document.querySelector("#test");
	
	
}