/**
 * Created by Admin on 2017/3/7.
 */
//支付完成页面 换图
 var pdnum=1;
$(".pd-new").click(function(){
    if(pdnum==1){
        $(".pd-fvr1").css("display","none");
        $(".pd-fvr2").css("display","block");
        pdnum=2;
    }else{
        $(".pd-fvr1").css("display","block");
        $(".pd-fvr2").css("display","none");
        pdnum=1;
    }
})
//地址管理页面
var add=$(".adrs-add");
add.click(function(){
    $(".adit-save").css("display","none").siblings(".adrs-save").css("display","block");
    $(".adrs-newinfo").css("display","block");
    $("#adrs-province").find("option:selected").text("--请选择--");
    $("#adrs-citys").css("display","none").siblings("#adrs-area").css("display","none");
})
$(".adrs-close").click(function(){
    $(".adrs-newinfo").css("display","none");
})
$(".adrs-newinfo span:contains('*')").css("color","red").parent("span").css("color","#333");
//三级联动
var province=$("#adrs-province");
var city=$("#adrs-citys");
var eara=$("#adrs-area");
city.css("display","none").siblings("#adrs-area").css("display","none");
province.focus(function(){
    province.html('<option value="">请选择省份</option>>');
    for(var i=0;i<provinceList.length;i++){
        province.append('<option>'+provinceList[i].name+'</option>>')
    }
})
var num;
province.change(function(){
    city.css("display","inline-block");
    city.html('<option value="">请选择城市</option>>');
    eara.html('<option value="">请选择地区</option>>');
    num=this.selectedIndex-1;
    var arr=provinceList[num].cityList;
    for(var i=0;i<arr.length;i++){
        city.append('<option>'+arr[i].name+'</option>>')
    }
    var num1;
    city.change(function(){
        eara.css("display","inline-block");
        eara.html('<option value="">请选择地区</option>>');
        num1=this.selectedIndex-1;
        var arr=provinceList[num].cityList[num1].areaList;
        for(var i=0;i<arr.length;i++){
            eara.append('<option>'+arr[i]+'</option>>');
        }
    });
});
//表单验证
$(".adrs-user").blur(function(){
    if(!$(this).val()){
        $(".adrs-nameerror").css("display","inline").html("姓名未填写");
    }else{
        $(".adrs-nameerror").css("display","none");
        $(this).val();
    }
})
$(".adrs-iph").blur(function(){
    if(!$(this).val()){
        $(".adrs-iperror").css("display","inline").html("电话未填写");
    }else{
        var iphreg=/(?:\(\d{3,4}\)|\d{3,4}-?)\d{8}/
        if(iphreg.test($(this).val())){
            $(".adrs-iperror").css("display","none")
            $(this).val()
        }else{
            $(".adrs-iperror").css("display","inline").html("电话格式错误");
        }
    }
})
$(".adrs-dtdz").blur(function(){
    if(!$(this).val()){
        $(".adrs-dzerror").css("display","inline").html("请输入详细地址")
    }else{
        $(".adrs-dzerror").css("display","none");
    }
})
$(".adrs-eml").blur(function(){
    if($(this).val()){
        var emlreg=/^\d{6}$/;
        if(emlreg.test($(this).val())){
            $(".adrs-emlerror").css("display","none")
            $(this).val()
        }else{
            $(".adrs-emlerror").css("display","inline").html("邮编输入错误");
        }
    }else{
        $(".adrs-emlerror").css("display","none")
    }
})
var numa=2,user,sla,slb,slc,address,iph,alldz,eml,adit,eq;
var ss1=1;
var arrinfo=[];
arrinfo[2]=["张三","浙江省","杭州市","拱墅区","乐富智汇园","111111","17188108237",]
// 保存
// if(ss1==1){
    $(".adrs-save").click(function(){
        user=$(".adrs-user").val();
        sla=$("#adrs-province").val();
        slb=$("#adrs-citys").val();
        slc=$("#adrs-area").val();
        address=$(".adrs-dtdz").val();
        iph=$(".adrs-iph").val();
        alldz=sla+slb+slc+address;
        eml=$(".adrs-eml").val();
        if(user&&eml&&address&&iph&&sla&&slb&&slc){
            numa++;
            arrinfo.push(numa);
            arrinfo[numa]=[];
            arrinfo[numa].push(user,sla,slb,slc,address,eml,iph);
            aa(user,alldz,eml,iph,numa);
            $(".adrs-newinfo").css("display","none");
            $(".adrs-newinfo input").val("");
            $(".adrs-newinfo select").val("");
            console.log(arrinfo);
        }else{
            if(!$(".adrs-user").val()){
                $(".adrs-nameerror").css("display","inline").html("姓名未填写");
            }
            if(!$(".adrs-iph").val()){
                $(".adrs-iperror").css("display","inline").html("电话未填写");
            }
            if(!$(".adrs-dtdz").val()){
                $(".adrs-dzerror").css("display","inline").html("请输入详细地址");
            }
            if(!sla&&!slb&&!slc){
                $(".adrs-ldzerror").css("display","inline").html("请选择地址");
            }else{
                $(".adrs-ldzerror").css("display","none");
            }
            if(!eml){
                $(".adrs-emlerror").css("display","inline").html("邮编输入错误");
            }
        }
    })
// }
// 设为默认
$(".adrs-first").click(function(){
    $(".adrs-sure1").css("visibility","hidden");
    $(".adrs-first").css("visibility","visible");
    $(this).css("visibility","hidden").siblings(".adrs-sure1").css("visibility","visible");
})
//编辑
$(".adrs-adit").click(function(){
    $(".adrs-save").css("display","none").siblings(".adit-save").css("display","block");
    eq=$(this).parent().index();
    console.log(eq+1);
    adit=$(this);
    $("form select").css("display","inline-block");
    $(".adrs-newinfo").css("display","block");
    $(".adrs-user").val(arrinfo[eq]["0"]);
    console.log(arrinfo[eq][1]);
    $("#adrs-province").find("option:selected").text(arrinfo[eq][1]);
    $("#adrs-citys").find("option:selected").text(arrinfo[eq][2]);
    $("#adrs-area").find("option:selected").text(arrinfo[eq][3]);
    $(".adrs-dtdz").val(arrinfo[eq][4]);
    $(".adrs-eml").val(arrinfo[eq][5]);
    $(".adrs-iph").val(arrinfo[eq][6]);
})
// if(ss1==2){
    $(".adit-save").click(function(){
        // $(".insure-save").removeClass("adit-save").addClass("adrs-save");
        user=$(".adrs-user").val();
        sla=$("#adrs-province").val()||arrinfo[eq][1];
        if(sla==arrinfo[eq][1]){
            slb=arrinfo[eq][2];
            slc=arrinfo[eq][3];
        }else{
            slb=$("#adrs-citys").val();
            slc=$("#adrs-area").val();
            $(".adrs-dtdz").val();
        }
        address=$(".adrs-dtdz").val();
        iph=$(".adrs-iph").val();
        alldz=sla+slb+slc+address;
        eml=$(".adrs-eml").val();
        if(user&&eml&&address&&iph&&sla&&slb&&slc){
            arrinfo[numa].push(user,sla,slb,slc,address,eml,iph);
            bb(adit,user,alldz,eml,iph,eq);
            console.log("11"+$("#adrs-citys").val())
            $(".adrs-newinfo").css("display","none");
            $(".adrs-newinfo input").val("");
            $(".adrs-newinfo select").val("");
        }else{
            if(!$(".adrs-user").val()){
                $(".adrs-nameerror").css("display","inline").html("姓名未填写");
            }
            if(!$(".adrs-iph").val()){
                $(".adrs-iperror").css("display","inline").html("电话未填写");
            }
            if(!$(".adrs-dtdz").val()){
                $(".adrs-dzerror").css("display","inline").html("请输入详细地址");
            }
            if(!$("#adrs-area").val()){
                $(".adrs-ldzerror").css("display","inline").html("请选择地址");
            }else{
                $(".adrs-ldzerror").css("display","none");
            }
            if(!eml){
                $(".adrs-emlerror").css("display","inline").html("邮编输入错误");
            }
        }
        ss1=1;
    })
// }

// 删除
$(".adrs-dl").click(function(){
    var a=confirm("确定要删除该地址吗");
    if(a){
        $(this).parent(".adrs-1").remove();
    }
})
//保存修改函数
function aa(name,address,yb,phone,numa){
    var newadrs=$(".adrs-1").clone(true).appendTo(".adrs-main").addClass("adrs-ad"+numa);
    newadrs.children(".adrs-adrs").html(address);
    newadrs.children(".adrs-name").html(name);
    newadrs.children(".adrs-yb").html(yb);
    newadrs.children(".adrs-phone").html(phone);
    newadrs.children(".adrs-sure1").css("visibility","hidden");
    newadrs.children(".adrs-first").css("visibility","visible");
    newadrs.siblings(".ord-adress1").css({
        "background":"none",
        "border":"3px solid #f4f4f4"
    })
}
function bb(adit,name,address,yb,phone,numa){
    adit.siblings(".adrs-adrs").html(address);
    adit.siblings(".adrs-name").html(name);
    adit.siblings(".adrs-yb").html(yb);
    adit.siblings(".adrs-phone").html(phone);
    adit.siblings(".adrs-sure1").css("visibility","hidden");
    adit.siblings(".adrs-first").css("visibility","visible");
}

//跳转
    /*$(".y-gopay-btn").click(function(){
        window.location.href="insure.html"; 
    })*/

