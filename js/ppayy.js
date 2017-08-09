window.onload=function(){
	var chat=document.getElementsByClassName("y-wechat");
	var paynone=document.getElementsByClassName("y-paynone");
	for(var i=0;i<chat.length;i++){
		chat[i].index=i;
		chat[i].onclick=function(){
			for(var j=0;j<paynone.length;j++){
				paynone[j].style.display="none"
			}			
			paynone[this.index].style.display="block";	
		}			
	}
	var ychose=document.getElementsByClassName("y-chose")[0];
	var paycont=document.getElementsByClassName("y-pay-content")[0];
	var paycont1=document.getElementsByClassName("y-pay-content1")[0];	
	ychose.onchange=function(){
		var chindex=ychose.selectedIndex;
		if(chindex==0){
			paycont.style.display="block";
			paycont1.style.display="none";
		}else{(chindex==1) 
			paycont1.style.display="block";
			paycont.style.display="none";
		}
	}		
	//倒计时
	var countdown=document.getElementById("y-countdown");
	var countdown1=document.getElementById("y-countdown1");
	var t;
	t=setInterval(function(){
		if(parseInt(countdown1.innerText)>0){
			countdown1.innerText=parseInt(countdown1.innerText)-1+"秒"
		} else{(parseInt(countdown1.innerText) > 0) 
			countdown.innerText = parseInt(countdown.innerText) - 1 + "分";
			countdown1.innerText = "59秒";
		}
		if(parseInt(countdown1.innerText)<=0&&parseInt(countdown.innerText)<=0){
			alert("不能支付");
			clearInterval(t);
		}				
	},1000)		

	//跳转
    $(".y-btn").click(function(){
        window.location.href="paid.html"; 
    })
	
}
