$(function(){
	$(".cl-dt1").hover(function(){
		$(".cl-dt1 div").css("display","block").animate({"right":"40px"},300);
	},function(){
		$(".cl-dt1 div").animate({"right":"0px"},300,function(){
			$(".cl-dt1 div").css("display","none")
		});
	})

	$(window).scroll(function(){
		var obj=document.body.scrollTop==0?document.documentElement:document.body;
		if(obj.scrollTop>200){
			$(".cl-bm").show();
		}else{
			$(".cl-bm").hide();
		}
	})
	$(".cl-bm").click(function(){
		var obj=document.body.scrollTop==0?document.documentElement:document.body;
		animate(obj,{"scrollTop":0},1000);
	})



	if($("body").hasClass("pay1")){
        $(".gwc-span1").css("background","#FF4566");
        $(".gwc-span2").css("background","#FF4566");
        $(".gwc-li1").css("color","#FF4566");
	}
    if($("body").hasClass("pay2")){
        $(".gwc-span1").css("background","#FF4566");
        $(".gwc-span2").css("background","#FF4566");
        $(".gwc-span3").css("background","#FF4566");
        $(".gwc-span4").css("background","#FF4566");
        $(".gwc-span5").css("background","#FF4566");
        $(".gwc-li1").css("color","#FF4566");
        $(".gwc-li2").css("color","#FF4566");


    }
    if($("body").hasClass("pay3")){
        $(".gwc-span1").css("background","#FF4566");
        $(".gwc-span2").css("background","#FF4566");
        $(".gwc-span3").css("background","#FF4566");
        $(".gwc-span4").css("background","#FF4566");
        $(".gwc-span5").css("background","#FF4566");
        $(".gwc-span6").css("background","#FF4566");
        $(".gwc-span7").css("background","#FF4566");
        $(".gwc-span8").css("background","#FF4566");
        $(".gwc-li1").css("color","#FF4566");
        $(".gwc-li2").css("color","#FF4566");
        $(".gwc-li3").css("color","#FF4566");


    }
    if($("body").hasClass("pay4")){
        $(".gwc-span1").css("background","#FF4566");
        $(".gwc-span2").css("background","#FF4566");
        $(".gwc-span3").css("background","#FF4566");
        $(".gwc-span4").css("background","#FF4566");
        $(".gwc-span5").css("background","#FF4566");
        $(".gwc-span6").css("background","#FF4566");
        $(".gwc-span7").css("background","#FF4566");
        $(".gwc-span8").css("background","#FF4566");
        $(".gwc-span9").css("background","#FF4566");
        $(".gwc-span10").css("background","#FF4566");
        $(".gwc-li1").css("color","#FF4566");
        $(".gwc-li2").css("color","#FF4566");
        $(".gwc-li3").css("color","#FF4566");
        $(".gwc-li4").css("color","#FF4566");
    }



	


})