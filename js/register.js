$(function(){
	// input焦点事件
	$("#phone-number").focus(function(){
		if($(this).val()=="手机号码"){
			$(this).val("")
		}
	})
	$("#phone-number").blur(function(){
		if($(this).val()==""){
			$(this).val("手机号码")
		}
	})
	$("#code").focus(function(){
		if($(this).val()=="验证码"){
			$(this).val("")
		}
	})
	$("#code").blur(function(){
		if($(this).val()==""){
			$(this).val("验证码")
		}
	})
	// 获取验证码
	var seconds=60;
	function fun(){
		if(seconds==0){
			$("#get-code").attr("disabled",false);
			$("#get-code").removeClass("disabled")
			$("#get-code").html("获取验证码");
			seconds=60;
			clearInterval(t);
		}
		else{
        $("#get-code").html("剩余"+seconds+"秒");
        seconds--;
        }
	}
	var t;
	$("#get-code").click(function(){
		 clearInterval(t);
		 alert("验证码已发送,请查收短信")
		$(this).attr("disabled","disabled"); 
		$(this).addClass("disabled");
	    t=setInterval(fun,1000);
	})
	// 信息验证
	var reg1=/^\d{11}$/;
	var reg2=/^\d{6}$/;
	$("#register-button").click(function(){
		var phone_number=$("#phone-number").val();
	    var code=$("#code").val();
	    var str=""
		// 是否符合规则
		if(!(reg1.test(phone_number))){
			str+="手机号码填写不正确\n"
		}
		if(!(reg2.test(code))){
			str+="验证码填写不正确\n"
		}
		if(!($(":checkbox").is(":checked"))){
            str+="未同意注册条款\n"
		}
		if(str!=""){
			alert(str)
		}
	})

})