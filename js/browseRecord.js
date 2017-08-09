//我的订单效果
$(function(){
	$(".br-content-lf-li li:eq(0)").click(function(){
		$(".br-content-lf-li li").toggle()
	})
})



window.onload=function(){
var brContentInput= document.getElementById("br-content-input"); 
 
if(typeof FileReader==='undefined'){ 
     brContentInput.setAttribute('disabled','disabled'); 
}else{ 
     brContentInput.addEventListener('change',readFile,false); 
}
function readFile(){ 
	var file = this.files[0];
	if(!/image\/\w+/.test(file.type)){
		alert("文件必须为图片！");
		return false; 
	} 

	var reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = function(e){ 
		var image = new Image();
		image.src = e.target.result;
		var max=300;
		image.onload = function(){ 
			var brContentLfTit  = document.getElementById("br-content-lf-tit"); 
			var ctx = brContentLfTit.getContext("2d"); 
			ctx.clearRect(0, 0, brContentLfTit.width, brContentLfTit.height); 
			ctx.drawImage(image, 0, 0, 300, 300);
		};  
	}
 };
}
