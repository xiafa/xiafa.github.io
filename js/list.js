$(function(){

    var goods=[
        {
            img:"img/lig001.gif",
            price:166,
            detials:"2017新款百搭风格，潮流新品,热款推荐,2017新款百搭风格，潮流新品,热款推荐",
            number:300
        },
        {
            img:"img/lig002.gif",
            price:198,
            detials:"2017新款百搭风格，潮流新品,热款推荐,2017新款百搭风格，潮流新品,热款推荐",
            number:300
        },
        {
            img:"img/lig003.gif",
            price:179,
            detials:"2017新款百搭风格，潮流新品,热款推荐,2017新款百搭风格，潮流新品,热款推荐",
            number:300
        },
        {
            img:"img/lig004.gif",
            price:168,
            detials:"2017新款百搭风格，潮流新品,热款推荐,2017新款百搭风格，潮流新品,热款推荐",
            number:300
        },
        {
            img:"img/lig005.gif",
            price:146,
            detials:"2017新款百搭风格，潮流新品,热款推荐,2017新款百搭风格，潮流新品,热款推荐",
            number:300
        },
        {
            img:"img/lig001.gif",
            price:156,
            detials:"2017新款百搭风格，潮流新品,热款推荐,2017新款百搭风格，潮流新品,热款推荐",
            number:300
        },
        {
            img:"img/lig002.gif",
            price:208,
            detials:"2017新款百搭风格，潮流新品,热款推荐,2017新款百搭风格，潮流新品,热款推荐",
            number:300
        },
        {
            img:"img/lig003.gif",
            price:179,
            detials:"2017新款百搭风格，潮流新品,热款推荐,2017新款百搭风格，潮流新品,热款推荐",
            number:300
        },
        {
            img:"img/lig004.gif",
            price:155,
            detials:"2017新款百搭风格，潮流新品,热款推荐,2017新款百搭风格，潮流新品,热款推荐",
            number:300
        },
        {
            img:"img/lig005.gif",
            price:198,
            detials:"2017新款百搭风格，潮流新品,热款推荐,2017新款百搭风格，潮流新品,热款推荐",
            number:300
        },{
            img:"img/lig001.gif",
            price:156,
            detials:"2017新款百搭风格，潮流新品,热款推荐,2017新款百搭风格，潮流新品,热款推荐",
            number:300
        },
        {
            img:"img/lig002.gif",
            price:208,
            detials:"2017新款百搭风格，潮流新品,热款推荐,2017新款百搭风格，潮流新品,热款推荐",
            number:300
        },
        {
            img:"img/lig003.gif",
            price:179,
            detials:"2017新款百搭风格，潮流新品,热款推荐,2017新款百搭风格，潮流新品,热款推荐",
            number:300
        },
        {
            img:"img/lig004.gif",
            price:155,
            detials:"2017新款百搭风格，潮流新品,热款推荐,2017新款百搭风格，潮流新品,热款推荐",
            number:300
        },
        {
            img:"img/lig005.gif",
            price:198,
            detials:"2017新款百搭风格，潮流新品,热款推荐,2017新款百搭风格，潮流新品,热款推荐",
            number:300
        }
        ,{
            img:"img/lig001.gif",
            price:156,
            detials:"2017新款百搭风格，潮流新品,热款推荐,2017新款百搭风格，潮流新品,热款推荐",
            number:300
        },
        {
            img:"img/lig002.gif",
            price:208,
            detials:"2017新款百搭风格，潮流新品,热款推荐,2017新款百搭风格，潮流新品,热款推荐",
            number:300
        },
        {
            img:"img/lig003.gif",
            price:179,
            detials:"2017新款百搭风格，潮流新品,热款推荐,2017新款百搭风格，潮流新品,热款推荐",
            number:300
        },
        {
            img:"img/lig004.gif",
            price:155,
            detials:"2017新款百搭风格，潮流新品,热款推荐,2017新款百搭风格，潮流新品,热款推荐",
            number:300
        },
        {
            img:"img/lig005.gif",
            price:198,
            detials:"2017新款百搭风格，潮流新品,热款推荐,2017新款百搭风格，潮流新品,热款推荐",
            number:300
        }

    ];
    var arr=goods, s="";
    for(var i=0;i<goods.length;i++){
         s+="<li class='lp-goods-li'><img src='"+goods[i].img+"'><div class='lp-good-bottom'>"+
            "<div><span class='l f36 f14 b'>￥"+goods[i].price+"</span><span class='r'>"+goods[i].number+"</span></div>"+
            "<div class='lp-goods-detials ell'>"+goods[i].detials+"</div>";

    }
    $(".lp-goods-ul").html(s);

    $(".lp-nav-a").click(function(){
        var index=$(".lp-nav-a").index(this);
        var $that=$(this);
        $(".lp-nav-a").removeClass("lp-nav-clicked");
        $(".lp-nav-mask").css("display","block").animate({marginLeft:70*index},150,function(){
            $(".lp-nav-mask").css("display","none");
            $(".lp-nav-a").removeClass("lp-nav-clicked");
            $that.addClass("lp-nav-clicked");
        })
    })
    $(".lp-select-btn").click(function(){
        var low=$(".lp-select-low").val(),
            height=$(".lp-select-height").val();
        console.log(low);
        console.log(height);
        if((low==0 && height==0)||(low>height)){
            alert("请填写正确的价格区间");
            $(".lp-select-low").val("");
            $(".lp-select-height").val("");
        }else {
            s = "";
            arr=[];
            for (var i = 0; i < goods.length; i++) {
               if(goods[i].price>=low && goods[i].price<=height){
                   arr.push(goods[i]);
               }
            }
            for(var m=0;m<arr.length;m++){
                s+="<li class='lp-goods-li'><img src='"+arr[m].img+"'><div class='lp-good-bottom'>"+
                    "<div><span class='l f36 f14 b'>￥"+arr[m].price+"</span><span class='r'>"+arr[m].number+"</span></div>"+
                    "<div class='lp-goods-detials ell'>"+arr[m].detials+"</div>";
            }
            $(".lp-goods-ul").html(s);
        }
    });
    $(".lp-select-price").click(function(){
        $(".lp-select").children("span").removeClass("lp-select-click");
        $(this).addClass("lp-select-click");
        console.log(arr);
        for(var j=0;j<arr.length;j++){
            var num1=arr[j].price;
            for(var k=0;k<arr.length;k++){
                var num2=arr[k].price;
                if(num1<=num2){
                    var t=arr[j];
                    arr[j]=arr[k];
                    arr[k]=t;
                }
            }
        }
        s="";
        for(var m=0;m<arr.length;m++){
            s+="<li class='lp-goods-li'><img src='"+arr[m].img+"'><div class='lp-good-bottom'>"+
                "<div><span class='l f36 f14 b'>￥"+arr[m].price+"</span><span class='r'>"+arr[m].number+"</span></div>"+
                "<div class='lp-goods-detials ell'>"+arr[m].detials+"</div>";
        }
        $(".lp-goods-ul").html(s);
    })

    $(".lp-search-change").click(function(){
        $(".lp-search-change").removeClass("lp-change-clicked");
        $(this).addClass("lp-change-clicked")
    })

});
