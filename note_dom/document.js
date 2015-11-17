window.onload = function(){
	/**
	 *  js 通过 Document 类型表示整个文档 
	 *  在浏览器中 document 对象是 HTMLDocument 的一个实例 表示整个 html 页面
	 *  nodeType = 9
	 *  nodeName = #document
	 *  nodeValue = null
	 *  parentNode = null
	 *  ownerDocument = null
	 */
	
	// document 有一个 body 属性 直接指向 <body>
	var body = document.body;
	body.style.backgroundColor = "#3cc"; 
	
	console.log(document.title);
	document.title = "Note-Document";
	
	// URL属性包含了完整的 URL
	// domain 属性只包含页面的域名
	// referrrer 保存着链接到当前页面的那个页面的 url
	var url = document.URL;
	var domain = document.domain;
	
	console.log(url + "," + domain);
	
    /**
	 *  查找元素
	 *  getElementById() / getElementsByTagName() / getElementsByName()
	 *  getElementById():
	 *      接收要取得元素的 ID 如果找不到 返回 null  (区分大小写)
	 *  getElementsByTagName():
	 *      接收要取得元素的标签名 返回包含零或多个元素的 nodeList
	 *      namedItem() 可以通过  name 值取得集合中的项
	 *  getElementsByName():
	 *      返回带有给定 name 的所有元素
	 */
	
	 var allPra = document.getElementsByTagName("p");
	 console.log(allPra.length);  // 4
	 
	 var lastPra = allPra.namedItem("last");
	 console.log(lastPra); // <p name="last">345</p>
	 
	 var allElement = document.getElementsByTagName("*");
	 console.log(allElement);
	 
	 /**
	  *  DOM 一致性检测
	     document.inplementation.hasFeature(要检测的DOM功能, 版本号);
	  */
	  
	  var isSupportCss = document.implementation.hasFeature("css", "2.0");
	  console.log(isSupportCss);
	  
	  
}