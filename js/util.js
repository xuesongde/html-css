function Util(){
	this.getXmlHttpRequest=function(){
		var xhr;
		//非IE浏览器创建XmlHttpRequest对象
		if(window.XMLHttpRequest){
			xhr=new window.XMLHttpRequest();
		}
		//IE浏览器创建ActiveXObject对象
		if(window.ActiveXObject){
			try{
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}catch(e){
				console.error(e)
				try{
					xhr = new ActiveXObject("msxml2.XMLHTTP");
				}catch(er){
					console.error(er)
				}
			}
		}
		return xhr;
	}
}