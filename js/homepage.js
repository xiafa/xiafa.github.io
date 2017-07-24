window.onload=function(){
	//跳转登录
	$("#login").click(function(){
	   $(this).attr('href', '../1login/login.html');
    });
    //跳转注册
    $("#regist").click(function(){
	   $(this).attr('href', '../1login/login.html');
	   if($(".middle_rightreg").style.display=="none"){
          $(".middle_rightreg").style.display="block";
       }
    });
    //我的收藏
/*    $(".head_ li").eq(2).bind({
        "mouseover":function () {
        	$(".headol").show();
            $("#headol").hide();
        },
        "mouseout":function () {$(".headol").hide();}
    });*/
	$(".head_ ul li").hover(function(){
		$(this).find("ol").stop().slideDown()
	},function(){
		$(this).find("ol").stop().slideUp()
	});
    //轮播
    var go=function(speed){
        var s;
        if(speed==undefined){
            s=2000
        }else{
            s=2000/speed
        }
        $(".middle_top ul").animate({marginLeft:-1790},s, function(){
            $(".middle_top li").eq(0).appendTo($(".middle_top ul"));
            $(".middle_top ul").css("marginLeft",-895);
        });
    }
    var timer=setInterval(go,2000);
    $(".middle_top ul").hover(function(){
        clearInterval(timer);
        timer=null;
    }, function(){
        timer=setInterval(go,2000);
    });
    //倒计时
    var dayspan=document.getElementById('day');
    var hourspan=document.getElementById('hour');
    var minspan=document.getElementById('min');
    var secspan=document.getElementById("sec");
    function jishi(obj){
    	var now=new Date();
     	var year=obj.year||now.getFullYear();
     	var month=obj.month-1||now.getMonth();
     	var day=obj.day||now.getDate();
     	var hour=obj.hour||0;
     	var min=obj.min||0;
     	var sec=obj.sec||0;
    	var future=new Date(year,month,day,hour,min,sec);
     	var change=future.getTime()-now.getTime();
        var day=Math.floor(change/(1000*60*60*24));
        var hours=Math.floor(change/(1000*60*60));
        var hour=hours%24;
        var mins=Math.floor(change/(1000*60));
        var min=mins%60;
        var sec=Math.floor(change/1000);
        var sec=sec%60;
        return{day:day,hour:hour,min:min,sec:sec};
    }
    setInterval(function(){
     var res=jishi({month:8,day:1,hour:0});
     dayspan.innerHTML=res.day;
     hourspan.innerHTML=res.hour;
     minspan.innerHTML=res.min;
     secspan.innerHTML=res.sec;
     },1000);
    //宝贝店铺切换
    $(".search_top_one li").click(function(){
        if($(this).attr('class')!=".hover"){
			$(this).css('background','#ff3366');
			$(".hover").css('background','#f2f2f2');
		}else{
			$(this).css('background','#f2f2f2');
			$(".hover").css('background','#ff3366');
		}
    });
    //切换详情页
    $(".middle_fourlist ul li").click(function(){
    	 window.open('../7detail/detail.html');
    });
    $(".middle_fourlist ul li").hover(function(){
    	$(this).css('cursor','pointer');
    });
}


