window.onload=function(){
	var ysbtn1=document.getElementsByClassName("y-sbtn1")[0];
	var ysbtn=document.getElementsByClassName("y-sbtn");
	ysbtn1.onclick=function(){
		if(ysbtn1.checked==true){
			for(var i=0;i<ysbtn.length;i++){
				ysbtn[i].checked=true;
			}
		}else{
			for(var i=0;i<ysbtn.length;i++){
				ysbtn[i].checked=false;
			}
		}
	}
	var ysbtn2=document.getElementsByClassName("y-sbtn2")[0];
	ysbtn2.onclick=function(){
		if(ysbtn2.checked==true){
			for(var i=0;i<ysbtn.length;i++){
				ysbtn[i].checked=true;
			}
		}else{
			for(var i=0;i<ysbtn.length;i++){
				ysbtn[i].checked=false;
			}
		}
	}
	var ysbtn3=document.getElementsByClassName("y-sbtn3")[0];
	var ysbtn4=document.getElementsByClassName("y-sbtn4");
	ysbtn3.onclick=function(){
		if(ysbtn3.checked==true){
			for(var i=0;i<ysbtn4.length;i++){
				ysbtn4[i].checked=true;
			}
		}else{
			for(var i=0;i<ysbtn4.length;i++){
				ysbtn4[i].checked=false;
			}
		}
	}
	var ycheck=document.getElementsByClassName("y-sbtn5")
	var ysbtn5=document.getElementsByClassName("y-sbtn5")[0];
	var ysbtn6=document.getElementsByClassName("y-sbtn6");
    var goodNumber=document.getElementsByClassName("y-gdnumber")[0];
    var yBig=document.getElementsByClassName("y-sumprice")[0];
    var yNumber=document.getElementsByClassName("y-number");
    var yPrice=document.getElementsByClassName("y-price");
    var ySingelPrice=document.getElementsByClassName("y-single-price");
    var sum=0;

    var gnumber=0;
    for(var i=0;i<ycheck.length;i++){
    	if(ycheck[i].checked==true){
    		gnumber++;
		}
		if(gnumber>0){
            for(var i=0;i<yNumber.length;i++){
                sum+=yNumber[i].innerText*yPrice[i].innerText;
            }
            yBig.innerText=sum;
		}
	}
    goodNumber.innerText=gnumber;
	ysbtn5.onclick=function(){
		if(ysbtn5.checked==true){
			for(var i=0;i<ysbtn6.length;i++) {
                ysbtn6[i].checked = true;
            }
			gnumber++;
			if(gnumber>0){
				sum=0;
                for(var i=0;i<yNumber.length;i++){
                    sum+=yNumber[i].innerText*yPrice[i].innerText;
                }
                yBig.innerText=sum;
			}
		}else {
            for (var i = 0; i < ysbtn6.length; i++) {
                ysbtn6[i].checked = false;
            }
            gnumber--;
            if (gnumber > 0) {
            	sum=0;
                for (var i = 0; i < yNumber.length; i++) {
                    sum += yNumber[i].innerText * yPrice[i].innerText;
                }
                yBig.innerText = sum;
            }else{
                yBig.innerText = "0.00";
			}
        }
        goodNumber.innerText=gnumber;
	}
	var ydiv1=document.getElementsByClassName("y-div1");
	var ydiv2=document.getElementsByClassName("y-div2");
	var ydiv3=document.getElementsByClassName("y-div3");


	for(var i=0;i<ydiv1.length;i++){
        if(parseInt(ydiv2[i].innerText)>1){
            ySingelPrice[i].innerText=yNumber[i].innerText*yPrice[i].innerText;
            console.log(ySingelPrice[i].innerText)
        }
		ydiv1[i].index=i;
		ydiv1[i].onclick=function(){	
			if(parseInt(ydiv2[this.index].innerText)>1){
				ydiv2[this.index].innerText=parseInt(ydiv2[this.index].innerText)-1;
                ySingelPrice[this.index].innerText=yNumber[this.index].innerText*yPrice[this.index].innerText;
				sum=0;
                if(ysbtn4[this.index].checked==true){
                    for(var i=0;i<yNumber.length;i++){
                        sum+=yNumber[i].innerText*yPrice[i].innerText;
                        console.log(sum)
                    }
                    yBig.innerText=sum;
                }
			}			
		}
	}
	for(var i=0;i<ydiv3.length;i++){
		ydiv3[i].index=i;
		ydiv3[i].onclick=function(){		
			if(parseInt(ydiv2[this.index].innerText)>=1){
				ydiv2[this.index].innerText=parseInt(ydiv2[this.index].innerText)+1;
                ySingelPrice[this.index].innerText=yNumber[this.index].innerText*yPrice[this.index].innerText;
				sum=0;
				if(ysbtn4[this.index].checked==true){
                    for(var i=0;i<yNumber.length;i++){
                        sum+=yNumber[i].innerText*yPrice[i].innerText;
                        console.log(sum)
                    }
                    yBig.innerText=sum;
				}


			}			
		}
	}
	var ydelete=document.getElementsByClassName("ydelete");
    var ygoodcont=document.getElementsByClassName("y-goods-content");
	for(var i=0;i<ydelete.length;i++){
		ydelete[i].index=i;
		ydelete[i].onclick=function() {
            ygoodcont[this.index].style.display = "none";
            ycheck[this.index].checked=false;
            console.log(ycheck[this.index].checked)
            sum=0;
            gnumber=0;
            for(var i=0;i<ycheck.length;i++){
                if(ycheck[i].checked==true){
                    gnumber++;
                }
                if(gnumber>0){
                    for(var i=0;i<yNumber.length;i++){
                        sum+=yNumber[i].innerText*yPrice[i].innerText;
                    }
                    yBig.innerText=sum;
                }else{
                    yBig.innerText="0.00";
				}
            }
        }
	}
	var yprice=document.getElementsByClassName("yprice");
	var ypayBtn=document.getElementsByClassName("y-gopay-btn")[0];
	console.log(ypayBtn)
	setInterval(function(){
		var k=0
		for(var i=0;i<ysbtn4.length;i++){
			if(ysbtn4[i].checked==true){
				k=1;
			}else{
				k=0;
			}
		}
		if(k==1){
            ypayBtn.style.backgroundColor="#ff0000"
		}else{
            ypayBtn.style.backgroundColor="#d8d8d8"
		}
	},100)


	//跳转
    $(".y-gopay-btn").click(function(){
        window.location.href="insure.html"; 
    })
}