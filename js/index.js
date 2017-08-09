$(function() {
    /*  搜索  */
    $(".baby-p p").click(function() {

        $(".baby-p p").css({
            background:"#f2f2f2",
            color:"#000"
        }).filter(this).css({
            background:"#ff3666",
            color:"#fff"
        })
    });

    /*  导航左侧栏  */
    $(".pull-down li").hover(function(){
        $(this).find(".in-release").css({bottom:0}).finish();
        $(this).find(".in-release").slideDown(10);
    },function(){
        $(this).find(".in-release").css({bottom:0}).finish();
        $(this).find(".in-release").slideUp(10);
    });


    $(".pull-down li").hover(function() {
         var index=$(this).index()
        $(".pull-down>li").css({
            width:"280px",
            "border-top":0,
            "border-bottom":0,
        }).eq(index).css({
            width:"284px",
            "border-top":"2px solid #ff3666",
            "border-bottom":"2px solid #ff3666",
        });

        $(".pull-down li div").css({"border-bottom":"1px dashed #979797"})
        $(".pull-down li div").eq(index).css({"border-bottom":0});
        $(".pull-down li div").eq(index-1).css({"borderBottom":0});
        $(".pull-lastLi").css({"border-bottom":"2px solid #ff3666",}).eq(index).css({"border-bottom":"2px solid #ff3666",})

    },function(){
        var index=$(this).index()
       $(this).css({
           width:"280px",
           "border-top":0,
           "border-bottom":0,
       });
        $(".pull-down li div").css({"border-bottom":"1px dashed #979797"})
        $(".pull-lastLi").css({"border-bottom":"2px solid #ff3666",}).eq(index).css({"border-bottom":"2px solid #ff3666",})
    });



    


    /* banner 轮播 */
    var num=0;
    var t=setInterval(move,5000);
    function move() {
        num++;
        if(num<0){
            num=$(".in-banner ul li").length-1;
        }else if(num==$(".in-banner ul li").length){
            num=0;
        }
        $(".in-banner li").css("display","none").eq(num).fadeIn(1000).css("display","block");
    }
    
    

    /*  内容  图片  */
   $(".in-filterb").hover(function(){
        $(".in-filterb").not(this).css({opacity:0.5});
    });
    $(".in-filterb").mouseout(function(){
        $(".in-filterb").not(this).css({opacity:0});
    });

   $(".in-filter").hover(function(){
        $(".in-filter").not(this).css({opacity:0.5});
    });
    $(".in-filter").mouseout(function(){
        $(".in-filter").not(this).css({opacity:0});
    });

    $(".in-cententa").hover(function(){
        $(this).children("ol").children(".in-evaluate").css("display","block")
    },function() {
        $(this).children("ol").children(".in-evaluate").css("display","none")
    })

    
    
    /*  倒计时  */
    show_time();
});

// 倒计时
function show_time(){
    var time_start=new Date().getTime();// 设定当前时间
    var time_end=new Date("2017/03/11 00:00:00").getTime();// 最终时间
    // 计算时间差
    var time_distance=time_end-time_start;
    // 天
    var int_day=Math.floor(time_distance/86400000);
    time_distance-=int_day*86400000;
    // 时
    var int_hour=Math.floor(time_distance/3600000);
    time_distance-=int_hour*3600000;
    // 分
    var int_minute=Math.floor(time_distance/60000);
    time_distance-=int_minute*60000;
    // 秒
    var int_second=Math.floor(time_distance/1000);
    // 时分秒为单数时，前面加0
    if(int_day<10){
        int_day="0"+int_day;
    }
    if(int_hour<10){
        int_hour="0"+int_hour;
    }
    if(int_minute<10){
        int_minute="0"+int_minute;
    }
    if(int_second<10){
        int_second="0"+int_second;
    }
    // 显示时间
    $(".in-d").val(int_day);
    $(".in-h").val(int_hour);
    $(".in-m").val(int_minute);
    $(".in-s").val(int_second);
    // 设置定时器
    setTimeout("show_time()",1000);
    
}


    //跳转
    $(".jacket").click(function(){
        window.location.href="list.html"; 
    })
    //跳转
    $(".in-cententa").click(function(){
        window.location.href="detail.html"; 
    })



