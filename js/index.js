//淡入淡出
var dang=0;
var timer2=null;
window.onload=function(){
	var aImg=getByClass("slide")

	autoFadeOutIn(aImg)

}

function autoFadeOutIn(obj){
timer2=setInterval(function(){	
		setTimeout(function(){
			var num=1;
			var num1=0;
			var val=dang+1;
			timer=setInterval(function(){
				//淡出
				num-=0.1;
				if(num<=0){
					num=0;
					clearInterval(timer)
				}
				obj[dang].style.opacity=num;
				//淡入
				num1+=0.1;
				if(num1>=1){
						num1=1;
						clearInterval(timer)
						dang+=1;
						if(dang>obj.length-1){
						dang=0;
						}
					}
				if(val>obj.length-1){
					val=0;
				}
				obj[val].style.opacity=num1;	
				},100)
			},2000)
		},4000)
	
}		
function getByClass(sClass){
    var aResult=[];
    var aEle=document.getElementsByTagName('*');
    /*正则模式*/
    var re=new RegExp("\\b" + sClass + "\\b","g");
    for(var i=0;i<aEle.length;i++){
        /*字符串search方法判断是否存在匹配*/
        if(aEle[i].className.search(re) != -1){
            aResult.push(aEle[i]);
        }
    }
    return aResult;
};