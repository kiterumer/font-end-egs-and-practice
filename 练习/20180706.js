function convertToArray(nodes){
	var array=null;
	try{
		array=Array.prototype.slice.call(nodes,0); //针对非IE浏览器
	}catch(ex){
		array=new Array();
		for(var i=0,len=nodes.length;i<len;i++){
			array.push(nodes[i]);
		}
	}
     return array;
}
这个convertToArray()函数首先尝试了创建数组的最简单方式。如果导致了错误（说明是在IE8及更早版本中，
则通过try-catch块来捕获错误，然后手动创建数组。这是另一种检测怪癖的形式。

var returnedNode=someNode.appendChild(newNode);
alert(returnedNode==newNode); //true
alert(someNode.lastChild==newNode); //true

//someNode有多个子节点
var returnedNode=someNode.appendChild(someNode.firstChild);
alert(returnedNode==someNode.firstChild); //false
alert(returnedNode==someNode.lastChild); //true

//插入后成为最后一个子节点 
returnedNode=someNode.insertBefore(newNode,null)
alert(newNode==someNode.lastChild); //true
//插入后成为第一个子节点
var returnedNode=someNode.insertBefore(newNode,someNode.firstChild);
alert(returnedNode==newNode); //true
alert(newNode==someNode.firstChild); //true
//插入到最后一个子节点前面
returnedNode=someNode.insertBefore(newNode,someNode.lastChild);
alert(newNode=someNode.childNodes[someNode.childNodes.length-2]); //true

document.write("<strong>"+(new Date()).toString()+"</strong>");
// 在页面加载过程中输出当前日期和时间

document.write("<script type=\"text/javascript\" src=\"file.js\">"+"<\/script>");
需要加转义字符

<script>
window.onload=function(){
document.write("hello world")}</script>

var i,len,child=element.firstChild;
while(child!=element.lastChild){
	if(child.nodeType==1){   

		processChild(child);
	}
	child=child.nextSibling;
}

var i, len,child=element.firstElementChild;
while(child!=element.lastElementChild){
	processChild(child);
	child=child.nextElementSibling;
}

语句
if(i>25){
	alert("Greater than 25.");
}else if(i<0){
	alert("Less than 0.");
}else{
	alert("Between 0 and 25,inclusive.");
}

var i=0;
do{
	i+=2;
}while(i<10);
alert(i);

for (property in expression) statment
for(var propName in window){
	document.write(propName);
}

var num=0;
for(var i=1;i<10;i++){
	if(i%5==0){
		break;
	}
	num++;
}
alert(num);   4

var num=0;
for (var i=1;i<10;i++){
	if(i%5==0){
		continue;
	}
	num++;
}
alert(num);  8

var num=0;
outermost:
for(var i=0;i<10;i++){
	for(var j=0;j<10;j++){
		if(i==5&&j==5){
			break outermost;
		}
		num++;
	}
}
alert(num);  55
如果两个循环都自然结束，num的值应该是100。但内部循环中的break语句带了一个参数：要返还的
标签。添加这个标签的结果将导致break语句不仅会退出内部的for语句，而且也会退出外部的for语句
因此，当变量i和j都等于5时，num的值正好是55.

var num=0;
outermost:
for(var i=0;i<10;i++){
	for(var j=0;j<10;j++){
		if(i==5&&j==5){
			continue outermost;
		}
		num++;
	}
}
alert(num);  95



