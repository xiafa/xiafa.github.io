window.onload=function(){
  //个人信息验证
  var peButton=document.getElementById("pe-button");
  //存放错误信息
    var err=1;
    var peYx=document.getElementById("pe-yx"),
        peName=document.getElementById("pe-name"),
        peUser=document.getElementById("pe-user"),
        peBir=document.getElementById("pe-bir"),
        pePersonal=document.getElementById("pe-personal");
    
    //验证邮箱
    peYx.onblur=function(){
        var peReg=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
        if(!peReg.test(peYx.value)){
            err=1;
            document.getElementsByClassName("email-err")[0].style.display="inline-block";
        }else{
            err=0;
            document.getElementsByClassName("email-err")[0].style.display="none";
        }
    }
    
    //验证真实姓名
    peName.onblur=function(){
        var pNameReg=/^[\u4e00-\u9fa5]{2,5}$/;
        if(!pNameReg.test(peName.value)){
            err=1;
            document.getElementsByClassName("tname-err")[0].style.display="inline-block";
        }else{
            err=0;
            document.getElementsByClassName("tname-err")[0].style.display="none";
        }
    }
    
    //验证昵称
    peUser.onblur=function(){
        var pUserReg=/^[\u4e00-\u9fa5]{2,5}$/;
        if(!pUserReg.test(peUser.value)){
            err=1;
            document.getElementsByClassName("user-err")[0].style.display="inline-block";
        }else{
            err=0;
            document.getElementsByClassName("user-err")[0].style.display="none";
        }
    }
    
    //验证生日
    peBir.onblur=function(){
        var pBirReg=/^(19|20)\d{2}-(1[0-2]|0?[1-9])-(0?[1-9]|[1-2][0-9]|3[0-1])$/;
        if(!pBirReg.test(peBir.value)){
            err=1;
            document.getElementsByClassName("bir-err")[0].style.display="inline-block";
        }else{
            err=0;
            document.getElementsByClassName("bir-err")[0].style.display="none";
        }
    }
    // 所在地
    var province1=document.getElementById("pe-province");
    var city=document.getElementById("pe-citys");
    province1.onfocus=function(){
        province1.innerHTML="<option value=''>请选择省份</option>";
        for(var i=0;i<provinceList.length;i++){
            var option=document.createElement("option");
            option.text=provinceList[i].name;
            province1.appendChild(option);
        }
    }
    var num;
    province1.onchange=function(){
        city.innerHTML="<option value=''>请选择城市</option>";
        num=this.selectedIndex-1;
        var arr=provinceList[num].cityList;
        for(var i=0;i<arr.length;i++){
            var option=document.createElement("option");
            option.text=arr[i].name;
            city.appendChild(option);
        }
    }
    //验证个人说明
    pePersonal.onblur=function(){
        var pPersonalReg=/^[\u4e00-\u9fa5]{10,}$/;
        if(!pPersonalReg.test(pePersonal.value)){
            err=1;
            document.getElementsByClassName("personal-err")[0].style.display="inline-block";
        }else{
            err=0;
            document.getElementsByClassName("personal-err")[0].style.display="none";
        }
    }
    var peBtn=document.getElementById("pe-btn");
    peBtn.onclick=function(){
        var peForm=document.getElementById("pe-form");
        if(peYx.value==""||peName.value==""||peUser.value==""||peBir.value==""||pePersonal.value.length==""){
            alert("填写信息不全")
            peForm.onsubmit=function(){
                return false;
            }
            return;
        }
        if(err==0){
            peForm.onsubmit=function(){
                return true;
            }
            return;
        }else{
            peForm.onsubmit=function(){
                return false;
            }
            return;
        }
    }


//头像上传效果

//获取上传按钮
var peContentInput = document.getElementById("pe-content-input"); 
 
if(typeof FileReader==='undefined'){ 
     peContentInput.setAttribute('disabled','disabled'); 
}else{ 
     peContentInput.addEventListener('change',readFile,false); 
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
  var peContentLfTit = document.getElementById("pe-content-lf-tit"); 
  var ctx =peContentLfTit.getContext("2d"); 
      ctx.clearRect(0, 0, peContentLfTit.width, peContentLfTit.height); 
      ctx.drawImage(image, 0, 0, 300, 300);
    };  
  }
};
}


//我的订单效果
$(function(){
	$(".pe-content-lf-li li:eq(0)").click(function(){
		$(".pe-content-lf-li li:eq(1)").toggle();
		$(".pe-content-lf-li li:eq(2)").toggle();
		$(".pe-content-lf-li li:eq(3)").toggle();
		$(".pe-content-lf-li li:eq(4)").toggle();
		$(".pe-content-lf-li li:eq(5)").toggle();
	})
})