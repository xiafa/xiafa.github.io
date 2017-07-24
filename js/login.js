window.onload=function(){
   //QQ登录
   $(".middle_right_down ul li").click(function(){
        if($(this).html=="QQ登录"){
        	var url='https://graph.qq.com/oauth/show?which=Login&display=pc&scope=all&display=pc&response_type=code&redirect_uri=http%3A%2F%2Fwww.meilishuo.com%2Fuser%2Fthirdtransfer%3Fthird%3Dqq%26platform%3Dpc%26operScene%3Dlogin&state=TASyfbkq7hyx9oh&client_id=210915&ptp=1.aen5Pb.0.0.SUU6e';
        	location.href=url;
        }else if($(this).val=="微博注册"){
        	window.open('../8pay/pay.html');
        }else{
            window.open('../7detail/detail.html');
        }	
   });
   $(".middle_right_down ul li").hover(function(){
    	$(this).css('cursor','pointer');
   });
   //微博登录
   //微信登录
}
