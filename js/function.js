//兼容性的通过类名获取元素
function getClass(className,eleobj){
      eleobj=eleobj||document; 
	if(eleobj.getElementsByClassName){
		return eleobj.getElementsByClassName(className)
	}
	else
	{
      var all=eleobj.getElementsByTagName("*");
    
      var newarr=[];
    for (var i = 0; i < all.length; i++) {
    	/*if(all[i].className==className){
    		newarr.push(all[i])*/
    		if(checkClass(className,all[i].ClassName))
    		{
             newarr.push(all[i]);
    		}
    	}
   

	return newarr;
}
 };
function checkClass(str,lstr){
    var arr=lstr.split(" ")
    for (var i = 0; i <=arr.length; i++) {
    	if(arr[i]==str){
    		return true
    	}
    }
    
    return false
    	
}
//兼容性的获取或修改文本内容
function getText(ele,text){
   if(text!=undefined){
    if(ele.getElementsByClassName){
       ele.textContent=text;
    }else{
       ele.innerText=text;
    }
   }else{
    if(ele.getElementsByClassName){
        return ele.textContent;
    }else{
        return ele.innerText;
    }
   }
}
//兼容性的获取样式信息
function getStyle(ele,attr){
    //attr是字符串，必须用[]写
   if(window.getComputedStyle){
       return getComputedStyle(ele,null)[attr]
   }else{
      return ele.currentStyle[attr]
   }
}
//通过多种方式获取元素的函数
function $(selector,eleobj){
    if(typeof selector=="string"){
       eleobj=eleobj||document; 
    selector=selector.replace(/^\s*\s*$/g,"")
 if(selector.charAt(0)=="."){
   return getClass(selector.slice(1),eleobj)
 }else if(selector.charAt(0)=="#"){
    //return document.getElementById(selector.substring(1))
   return document.getElementById(selector.slice(1))
 }else if(/^[a-z|A-Z][a-z|A-Z|1-6]*$/g.test(selector)){
    return eleobj.getElementsByTagName(selector)
 }else if(/^<[a-z|A-Z]*[a-z|A-Z|1-6]*>$/g.test(selector)){
   return document.createElement(selector.slice(1,-1))
 }}else if(typeof selector=="function"){
   /* window.onload=function(){
        selector()}*/
        addEvent(window,"load",selector)
    }

}


function aa(callback)
{
  window.onload=function(){callback();}
}
//获取某个对象元素节点
function getChildren(obj){
  var arr=obj.childNodes;
   var newarr=[]
   for (var i = 0; i < arr.length; i++) {
     if(arr[i].nodeType==1){
      newarr.push(arr[i])
     }
   };
   return newarr;
}
//获取第一个元素子节点
function getFirst(obj){
  return getChildren(obj)[0]
}
//获取最后一个元素子节点
function getLast(obj){
var arr=getChildren(obj)
return arr[arr.length-1]
}
//获取下一个元素子节点
function getNext(obj){
  var next=obj.nextSibling;
  if(next==null){
    return null;
  }
  while(next.nodeType!=1){
    next=next.nextSibling;
    if(next==null){
      return null;
    }
  }
  return next;
}
//获取上一个元素子节点
function getPre(obj){
  var pre=obj.previousSibling;
  if(pre==null){
    return null;
  }
  while(pre.nodeType!=1){
    pre=pre.previousSibling;
    if(pre==null){
      return null;
    }
  }
  return pre;
}
//插入一个元素的后边
function insertAfter(newobj,oldobj){
//insertBefore
var next=getNext(oldobj);
var parent=oldobj.parentNode;
parent.insertBefore(newobj,next)
}

//获取任何一个元素的文档坐标
 function getPosition(obj){
  var left=obj.offsetLeft;
  var top=obj.offsetTop;
  var parent=obj.parentNode;
    //重复的判断
    //判断
    while(obj.parentNode.nodeName!="BODY"){
      //console.log(parent)
      if(getStyle(parent,"position")=="absolute"||getStyle(parent,"position")=="relative"){
        left+=parent.offsetLeft+parseInt(getStyle(parent,"borderLeftWidth"))
        top+=parent.offsetTop+parseInt(getStyle(parent,"borderTopHeight"))
      }
         parent=parent.parentNode;
    }

    return { x:left,y:top}
 }


 //兼容绑定多个事件函数
 function addEvent(obj,event,fun){
  if(obj.addEventListener){
    obj.addEventListener(event,fun,false)
  }else{
    obj.attachEvent("on"+event,fun)
  }
 }


 //兼容删除事件的函数
 function removeEvent(obj,event,fun){
  if(obj.addEventListener){
    obj.removeEventListener(event,fun,false)
  }else{
    obj.detachEvent("on"+event,fun)
  }
 }
 //事件滚轮函数
function mousewheel(obj,upfun,downfun){

  if(document.attachEvent){
document.attachEvent("onmousewheel",scrollFn); //IE、 opera
}else if(document.addEventListener){
document.addEventListener("mousewheel",scrollFn,false);
//chrome,safari -webkitdocument.
addEventListener("DOMMouseScroll",scrollFn,false);
//firefox

}
function scrollFn(e){
  var ev=e||window.event;
  
  var dir=ev.detail||ev.wheelDelta;
  if(dir==3||dir==-120){
    upfun.call(obj)
  }else{
    downfun.call(obj)
  }
}
}
//图片拖拽事件
function Drag(obj,setingObj){
      setingObj=setingObj||{}
        this.pos=setingObj.pos||"absolute";
        this.x=setingObj.x==undefined?true:setingObj.x;
        this.y=setingObj.y==undefined?true:setingObj.y; 
        this.animate=setingObj.animate==undefined?true:setingObj.animate;
        this.obj=obj;
        if(getComputedStyle(obj,null).position!="absolute"&&getComputedStyle(obj,null).position!="fixed"){
          obj.style.position=this.pos;    
        }
        this.ox=0;
        this.oy=0;
        this.cx=0;
        this.cy=0;
        this.left=0;
        this.top=0;
        this.down()
        this.aa;
        this.startX=0;
        this.startY=0;
        this.endX=0;
        this.endY=0; 
        this.changeX=0;
        this.changeY=0;
        this.speed=0.8;
  }
  Drag.prototype={
    down:function(){
     var that=this;
     addEvent(this.obj,"mousedown",function(e){
      var ev=e||window.event;
      that.ox=ev.offsetX;
      that.oy=ev.offsetY;
      that.move()
      that.up() 
     })   
    },
    move:function(){
     var that=this;
     this.aa=this.mmove()
     addEvent(document,"mousemove",this.aa)
    },
    up:function(){
     var that=this;
     addEvent(document,"mouseup",function(){
      removeEvent(document,"mousemove",that.aa)
      if(that.animate){
      var flag=Math.abs(that.changeX)<Math.abs(that.changeY);
      var t=setInterval(function(){
        that.changeX*=that.speed;
        that.changeY*=that.speed; 
          that.left+=that.changeX;
          that.top+=that.changeY;
          if(flag){
              if(Math.abs(that.changeY)<1){
                clearInterval(t)
              }
          } else{
              if(Math.abs(that.changeX)<1){
                clearInterval(t)
              }
          }
         if(that.x&&that.y){
         that.obj.style.left=that.left+"px";
         that.obj.style.top=that.top+"px";
         }
         if(that.x&&!that.y){
         that.obj.style.left=that.left+"px";  
         }
         if(!that.x&&that.y){
         that.obj.style.top=that.top+"px";
         }  
      },60)
      }
     }) 
    },
    mmove:function(){
      //返回一个事件处理程序 fun  
     var that=this;
     function aa(e){
     var ev=e||window.event;
     that.cx=ev.clientX;
     that.cy=ev.clientY; 
     that.left=that.cx-that.ox;
     that.top=that.cy-that.oy;
     that.endX=that.left;
     that.endY=that.top;
     if(that.x&&that.y){
     that.obj.style.left=that.left+"px";
     that.obj.style.top=that.top+"px";
     }
     if(that.x&&!that.y){
       that.obj.style.left=that.left+"px";  
     }
     if(!that.x&&that.y){
      that.obj.style.top=that.top+"px";
     }
     that.changeX=that.endX-that.startX;
     //start执行上一次mousemove的left 和top
     //end  当前这一次mousemove的left和top
     //change 最后一次mousemove的时候改变量
     that.changeY=that.endY-that.startY;
     that.startX=that.endX;
     that.startY=that.endY;
      }
     return aa;
    }
  }
  //判断某个元素是否包含有另外一个元素
 function contains (parent,child) {
  if(parent.contains){
     return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
 }

 //判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
  function checkHover (e,target) {
   if(getEvent(e).type=="mouseover"){
      return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
   }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
  }


//鼠标移入移除事件
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
    if(overfun){
      obj.onmouseover=function  (e) {
        if(checkHover(e,obj)){
           overfun.call(obj,e);
        }
      }
    }
    if(outfun){
      obj.onmouseout=function  (e) {
        if(checkHover(e,obj)){
           outfun.call(obj,e);
        }
      }
    }
}
 
  function getEvent(e){
    return e||window.event;
  } 