/**
 * Created by Admin on 2017/3/7.
 */
$(function () {
    $(".de-nav").hover(function () {
        $(this).children("ul").removeClass("dn");
        $(this).children("a").children("img").css("transform","rotate(180deg)");
    },function () {
        $(this).children("ul").addClass("dn");
        $(this).children("a").children("img").css("transform","rotate(0deg)");
    })



    // 放大镜效果
    for (var i = 0; i < $(".de-small-img").length; i++) {
        $(".de-small-list li").click(function () {
            $(".de-show img")[0].src = $(this).children("img").attr("src");
            $(".de-bigshow img")[0].src = $(this).children("img").attr("src");
            $(".de-small-list li").children("div").css("opacity","0.7");
            $(this).children("div").css("opacity","0");
            // $(".de-small-list li").children("div").toggleClass("de-small-block")
        })
    }
    $(".de-show-mask").hover(function () {
        $(".de-mask").css("display", "block");
        $(".de-bigshow").css("display", "block");
    }, function () {
        $(".de-mask").css("display", "none");
        $(".de-bigshow").css("display", "none");
    })
    $(".de-show-mask").mousemove(function (e) {
        var ev = e || window.event;
        var ox = ev.offsetX;
        var oy = ev.offsetY;
        var left = ox - parseInt($(".de-mask").width()) / 2;
        var top = oy - parseInt($(".de-mask").width()) / 2;
        if (left < 0) {
            left = 0
        }
        if (top < 0) {
            top = 0
        }
        if (left > parseInt($(".de-show").width()) - parseInt($(".de-mask").width())) {
            left = parseInt($(".de-show").width() - parseInt($(".de-mask").width()))
        }
        if (top > parseInt($(".de-show").height()) - parseInt($(".de-mask").width())) {
            top = parseInt($(".de-show").height() - parseInt($(".de-mask").width()))
        }
        $(".de-mask").css({"left": left + "px", "top": top + "px"});
        $(".de-bigshow img").css({"marginLeft": -1.6 * left + "px", "marginTop": -1.33 * top + "px"})
    })

    // 选择颜色
    $(".de-color").click(function () {
        // console.log($(this).index())
        $(".de-color").css("border", "1px solid #e5e5e5")
        $(this).css("border", "1px solid #000")
    })


    $(".de-size").click(function () {
        $(".de-size").css("border","1px solid #e5e5e5")
        $(this).css("border","1px solid #ff0000")
    })
    // 选择数量
    $(".de-number").val(1);
    $(".de-add").click(function () {
        var i=parseInt($(".de-number").val());
        if(i+1>$(".de-stock").text()){
            $(".de-number").val($(".de-stock").text())
        }else{
            $(".de-number").val(i+1);
        }
    })
    $(".de-sub").click(function () {
        var i=parseInt($(".de-number").val());
        if(i-1==0){
            $(".de-number").val(1)
        }else{
            $(".de-number").val(i-1)
        }
    })

    var k=0,num;
    $(".de-classification-nav li").click(function () {
        if(num==undefined){
            k++;
            if(k==1){
                $(this).children("img").css("transform","rotate(90deg)").next().removeClass("dn");
            }
            if(k==2){
                $(this).children("img").css("transform","rotate(0deg)").next().addClass("dn");
                k=0;
            }
        }
        if($(this).index()==num){
            k++;
            if(k==1){
                $(this).children("img").css("transform","rotate(90deg)").next().removeClass("dn");
            }
            if(k==2){
                $(this).children("img").css("transform","rotate(0deg)").next().addClass("dn");
                k=0;
            }
        }
        else{
            $(".de-classification-nav li").children("img").css("transform","rotate(0deg)").next().addClass("dn");
            $(this).children("img").css("transform","rotate(90deg)").next().removeClass("dn");
            k=1;
        }
        num=$(this).index();
    })


    var j=0;
    $(".de-xiala").click(function () {
        j++;
        if(j==1){
            $(".de-look-hidden").removeClass("dn");
            $(this).children("img").css("transform","rotate(180deg)");
        }
        if(j==2){
            $(".de-look-hidden").addClass("dn");
            $(this).children("img").css("transform","rotate(0deg)");
            j=0;
        }

    })


    $(".de-infor-nav li").click(function () {
        $(".de-infor-nav li").removeClass("de-infornav-click").end().css({"background":"#f6f6f6","border-right":"1px solid #ececec","border-bottom":"1px solid #eeeeee"});
        $(this).addClass("de-infornav-click");
        if($(this).index()==0){
            $(".de-detail-item").removeClass("dn");
            $(".de-evaluation-item").addClass("dn");
            $(".de-another-item").addClass("dn");
            $(".de-erweima-item").addClass("dn");
            $(".de-infor-add").removeClass("dn");
        }
        if($(this).index()==1){
            $(".de-detail-item").addClass("dn");
            $(".de-evaluation-item").removeClass("dn");
            $(".de-another-item").addClass("dn");
            $(".de-erweima-item").addClass("dn");
            $(".de-infor-add").addClass("dn");
        }
        if($(this).index()==2){
            $(".de-detail-item").addClass("dn");
            $(".de-evaluation-item").addClass("dn");
            $(".de-another-item").removeClass("dn");
            $(".de-erweima-item").addClass("dn");
            $(".de-infor-add").addClass("dn");
        }
        if($(this).index()==3){
            $(".de-detail-item").addClass("dn");
            $(".de-evaluation-item").addClass("dn");
            $(".de-another-item").addClass("dn");
            $(".de-erweima-item").removeClass("dn");
            $(".de-infor-add").addClass("dn");
        }
    })



    $(window).scroll(function () {
        // console.log($(this).scrollTop())
        if($(".de-shopping-detail").hasClass("de-infornav-click")){
            if($(this).scrollTop()>=45&&$(this).scrollTop()<$(".de-infor").offset().top-200){
                $(".de-infor-add").removeClass("dn").css({"position":"absolute","left":"960px","top":"32px"});
            }
            if($(this).scrollTop()>=$(".de-infor").offset().top-200){
                $(".de-infor-add").removeClass("dn").css({"position":"fixed","left":$(".de-infor").offset().left+$(".de-infor").width(),"top":"200px"});
            }
            if($(this).scrollTop()<45){
                $(".de-infor-add").addClass("dn");
            }
            // console.log($(".de-miaoshu").offset().top-$(this).scrollTop())
            if($(".de-miaoshu").offset().top-$(this).scrollTop()<220){
                $(".de-infor-miaoshu").children("img").addClass("dn");
                $(".de-infor-xiaoguo").children("img").removeClass("dn");
            }
            if($(".de-miaoshu").offset().top-$(this).scrollTop()>=220){
                $(".de-infor-miaoshu").children("img").removeClass("dn");
                $(".de-infor-xiaoguo").children("img").addClass("dn");
            }
        }
    })



})