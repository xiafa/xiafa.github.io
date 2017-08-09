$(function(){
	var CookieUtil = {
    get: function (name){
        var cookieName = encodeURIComponent(name) + "=",
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null;
        if (cookieStart > -1){
            var cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd == -1){
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart
                + cookieName.length, cookieEnd));
        }
        return cookieValue;
    },
    set: function (name, value, expires, path, domain, secure) {
        var cookieText = encodeURIComponent(name) + "=" +
            encodeURIComponent(value);
        if (expires instanceof Date) {
            cookieText += "; expires=" + expires.toGMTString();
        }
        if (path) {
            cookieText += "; path=" + path;
        }
        if (domain) {
            cookieText += "; domain=" + domain;
        }
        if (secure) {
            cookieText += "; secure";
        }
        document.cookie = cookieText;
    },
    unset: function (name, path, domain, secure){
        this.set(name, "", new Date(0), path, domain, secure);
    }
};
	var s=new Date("May 25,2017");
    if(CookieUtil.get("remember")=="true"){
   	$("#user").val(CookieUtil.get("user"));
	$("#psw").val(CookieUtil.get("psw"));
	$("#remember").attr("checked","checked")
   }	
   else{
   	$("#user").val("");
   	$("#psw").val("");
   	$("#remember").attr("checked",false)
   }

  $("#remember").change(function(){ 
	if($("#remember").is(":checked")){
		var user=$("#user").val();
		var psw=$("#psw").val();
		CookieUtil.set("user",user,s);
		CookieUtil.set("psw",psw,s);
		CookieUtil.set("remember","true",s);
	}
	else{
	    CookieUtil.set("remember","false",s);
	CookieUtil.unset("user");
	CookieUtil.unset("psw");
	}
    })
})