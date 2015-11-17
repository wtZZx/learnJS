/**
 *  Element 类型
 *  Element 类型用于表现 XML 或 HTML 元素 提供对元素标签名，子节点及特性的访问
 *  nodeType 的值为1
 *  nodeName 的值是标签名
 *  nodeValue = null
 *  parentNode 可能是 Document 或 Element
 */

/**
 *  1.HTML元素
 *   - id: 元素在文档中的唯一标识
 *   - title: 有关元素的附加说明
 *   - className: 元素指定的 class 类
 */

window.onload = function(){
	var div1 = document.getElementById("div1");
	console.log(div1.className);  // testClass
	console.log(div1.id);   // div1
	
	/**
	 *   取得特性：
	 *   - getAttribute()
	 *   - setAttribute()
	 *   - removeAttribute()
	 *   这些方法可以针对任何特性使用
	 */
	
	console.log(div1.getAttribute("id"));  // div1
	console.log(div1.getAttribute("class"));  // testClass
	
	// 通过 getAttribute() 可以获得自定义特性 自定义特性应该加上 data- 前缀
	
	/**
	 *  attributes 属性
	 *  attributes 属性中包含一个 NamedNodeMap 与 NodeList 类似
	 *  NamedNodeMap 有以下方法
	 *  getNamedItem(name): 返回 nodeName 属性等于 name 的节点
	 *  removeNamedItem(name): 移除 nodeName 属性等于 name 的节点
	 */
     
	 
	 /**
	  *  创建元素: document.createElement("tagname")
	  */
	  var p1 = document.getElementById("p1");
	  
	  var newDIV = document.createElement("div");
	  newDIV.className = "newClass";
	  div1.insertBefore(newDIV, p1);
	  
	  var newTxt = document.createTextNode("test test test");
	  
	  p1.appendChild(newTxt); // p 会有两个文本子节点
	  
	  p1.normalize(); // 相邻文本节点合并
	  
	  // 分割文本节点
	  console.log(p1.firstChild.splitText(5));  // st test test
}