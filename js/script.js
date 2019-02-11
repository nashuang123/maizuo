var header=document.getElementById("header_wrap");
var ospan=document.querySelectorAll("#page span");
var i=0;
setInterval(function(){
	i++;
	if(i>=9){
		i=1;
		header.style.left="0px";
	}
	move(header,"left",-980*i);
	pageCss()
},4000)
function move(ele,dir,end){
	clearInterval(ele.timer)
	ele.timer=setInterval(function(){
		
		if(dir==="left"){
			ele.style.left=ele.offsetLeft-100+"px";
			if(ele.offsetLeft<=end){
				ele.style.left=end+"px";
			}
		}
	},30)
	
}
function pageCss(){
	for(var j=0;j<ospan.length;j++){
		ospan[j].style.background="none";
	}
	ospan[i===8?0:i].style.background="#fff";
}
var fixed=document.getElementsByClassName("fixed")[0];
var choose=document.getElementById("choose");
window.onscroll=function(){
	if(document.documentElement.scrollTop>=548){
		fixed.style.display="block";
		choose.style.position="fixed";
		choose.style.top="93px";
		choose.style.left="0";
	}else{
		fixed.style.display="none";
		choose.style.position="relative";
		choose.style.top="0";
		choose.style.left="0";
	}
}