/**
 *  DOM1定义了一个 Node 接中 这个 Node 接口在 js 中是作为 Node 类型实现的
 *  ！！！除 IE 外 所以浏览器都可以访问这个类型
 */
window.onload = function(){

	var div1 = document.getElementById("div1");
	console.log(div1.nodeType);  // 1
    // Node.ELEMENT_NODE(1) 表示为元素节点
	
	console.log(div1.nodeName);  // DIV  - 是个字符串
	console.log(div1.nodeValue);  // null
	
	// 对于元素节点 nodeName 为标签名 nodeValue 为 null
	
	
	// 每个节点都有一个 childNodes 属性（子节点
	// childNodes 返回的不是数组！虽然有 length 方法！
	var firstChild = div1.childNodes[0];
	var secondChild = div1.childNodes[1];
	var count = div1.childNodes.length;
	
	console.log(firstChild + "," + secondChild + "," + count);  
	//[object Text],[object HTMLParagraphElement],5
	
	var childNodesArray = Array.prototype.slice.call(div1.childNodes);
	console.log(childNodesArray instanceof Array);  // true
	
	// 每个节点都有一个 parentNode 属性，指向父节点
	/**
	 *  包含在 childNodes 列表中的所有节点都有相同的父节点 
	 *  它们也都是同胞节点 可以使用 previousSibling 和 nextSibling 访问同胞
	 */
	
	console.log(firstChild.parentNode === secondChild.parentNode); // true
	console.log(firstChild.nextSibling === secondChild)  // true  nextSibling 访问之后的同胞
	console.log(firstChild.previousSibling);  // null perviousSibling 访问他的之前的同胞
	
	
	console.log(firstChild.nodeType == 3);  // 文本节点 值为 3
	
	// 可以通过 hasChildNodes() 方法查询是否有子节点
	
	console.log(firstChild.ownerDocument); // 指向表示整个文档的文档节点
	
	/**
	 *  操作节点
	 *  appendChild() 用于向 childNodes 的末尾添加一个节点
	 */
	
	var newParagraph = document.createElement("p");
	div1.appendChild(newParagraph);
	
	
	// 如果 appendChild() 的节点在文档中已经存在 就把原来的位置转到新的位置
	// div2 的父节点从 body 变为了 div1
	var div2 = document.getElementById("div2");
	console.log(div2.parentNode);  // body
	div1.appendChild(div2);
	
	console.log(div2.parentNode == div1);  // true
	
	/**
	 *  insertBefore() 方法 
	 *  - 两个参数 要插入的节点和作为参照的节点
	 *  - 插入完成后 要插入的节点 和 参照节点会成为 （同胞）！
	 */
	
	/**
	 *  实现 insertAfter() 方法
	 */
	
	var newList = document.createElement("ul");
	var p1 = document.getElementById("p1");
	
	insertAfter(newList, p1);
	
	 function insertAfter(newchild,refchild){
		 var parentNode = refchild.parentNode;
		 if(parentNode.lastChild == refchild){
			 parentNode.appendChild(newchild);
		 }else{
			 parentNode.insertBefore(newchild,refchild.nextSibling);
		 }
	 }
	 
     /**
	  *  replaceChild()方法
	  *  两个参数 - 要插入的节点， 要替换的节点
	  *  返回 要替换的节点 （要替换的节点会从文档中移除
	  */
	  var a1 = document.getElementById("a1");
	  var newSection = document.createElement("section");
	  var returnNode = div1.replaceChild(newSection, a1);
	  console.log(returnNode);   // <a href="#" id="a1">123</a>
	  
	  
	  // 移除节点; removeChild()
}