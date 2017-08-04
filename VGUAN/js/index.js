/**
 * Created by 微观 on 2017/7/28.
 */
//更换手机号
$("#resetphone").on("click",function () {
    $(".phonemark").fadeIn();
})
$("#closerplcphone").on("click",function () {
    $("#newphone").val("")
    $("#phonecode").val("");
    $(".phonemark").fadeOut();
})
$("#closerplcphonebtn").on("click",function () {
    $("#newphone").val("")
    $("#phonecode").val("");
    $(".phonemark").fadeOut();
    return false;
})
//发送验证码
var a = 0;
$(".phone_send").click(function () {
    if(a==0){
        a= 1;
        var newphone = $("#newphone").val();
        if(newphone == ""){
            $(".newphonered").html("*请输入手机号 ").fadeIn().delay(2000).fadeOut();
            a=0;
            return false;
        }else {
            var preg = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
            if (!preg.test(newphone)) {
                $(".newphonered").html("*手机号格式不正确").fadeIn().delay(2000).fadeOut();
                a=0;
                return false;
            }
        }
        $.ajax({
            url:'',
            type:'post',
            data:{ "mobile": newphone},
            success:function (res) {
                var time = 60;
                var phone_send = $("#phone_send");
                phone_send.addClass("phone_down");
                var set = setInterval(function() {
                    time--;
                    phone_send.html(time+"s重新发送");
                    if(time == 0) {
                        a=0;
                        phone_send.removeClass("phone_down").html("发送验证码");
                        clearInterval(set);
                    }
                }, 1000);
            }
        })
    }
})
$("#phonemarsubkbtn").on("click",function () {
    var newphone = $("#newphone").val();
    var phonecode = $("#phonecode").val();
    if (newphone==""){
        $(".newphonered").html("*请输入手机号 ").fadeIn().delay(2000).fadeOut();
        return false;
    }else if(phonecode==""){
        $(".codered").fadeIn().delay(2000).fadeOut();
        return false;
    }
    //在此发送ajax
    $("#newphone").val("")
    $("#phonecode").val("");
    $(".phonemark").fadeOut();
    $(".promptmark").fadeIn();
    return false;
})

//    $("#resetphone").on("click",function () {
//        layer.open({
//            type: 1,
//            title:['更换手机号码', 'font-size:18px;'],
//            area: ['420px', '300px'], //宽高
//            btn: ['确定','取消'],
//            btnAlign: 'c',
//            skin:'btncolor',
//            content: ' <input type="text" id="asd"><p>aa</p>',
//            yes:function (index) {
//                var aa = $("#asd").val();
//                alert(aa);
//                layer.close(index);
//            }
//        });
//    })
//修改密码
$("#rplcpassword").on("click",function () {
    $(".passmark").fadeIn();
})
$("#closerplcpass").on("click",function () {
    $(".passmark").fadeOut();
    $("#nowpass").val("");
    $("#tonewpass").val("");
    $("#newpass").val("");
})
$("#closepassbtn").on("click",function () {
    $(".passmark").fadeOut();
    $("#nowpass").val("");
    $("#tonewpass").val("");
    $("#newpass").val("");
})


$("#nowpass").blur(function(){
    var password = $("#nowpass").val();
    if(password==""){
        $(".nowpassred").html("*请输入您的密码！").fadeIn().delay(2000).fadeOut();
        return false;
    }
});
$("#newpass").blur(function(){
    var password = $("#newpass").val();
    var passreg = /^.{6,20}$/;
    if(password==""){
        $(".newpassred").html("*请输入您的密码！").fadeIn().delay(2000).fadeOut();
        return false;
    }else if(!passreg.test(password)){
        $(".newpassred").html("*请输入长度为6-20位的密码！").fadeIn().delay(2000).fadeOut();
        return false;
    }
});
$("#tonewpass").blur(function(){
    var tonewpass = $("#tonewpass").val();
    var newpass = $("#newpass").val();
    if(newpass!=tonewpass){
        $(".tonewpassred").html("*您输入的两次密码不一致！").fadeIn().delay(2000).fadeOut();
        return false;
    }
});

$("#passsubbtn").on("click",function () {
    var nowpass = $("#nowpass").val();
    var tonewpass = $("#tonewpass").val();
    var newpass = $("#newpass").val();
    var passreg = /^.{6,20}$/;
    if(nowpass==""){
        $(".nowpassred").html("*请输入您的密码！").fadeIn().delay(2000).fadeOut();
        return false;
    }else if(newpass==""){
        $(".newpassred").html("*请输入您的密码！").fadeIn().delay(2000).fadeOut();
        return false;
    }else if(!passreg.test(newpass)){
        $(".newpassred").html("*请输入长度为6-20位的密码！").fadeIn().delay(2000).fadeOut();
        return false;
    }else if(newpass!=tonewpass){
        $(".tonewpassred").html("*您输入的两次密码不一致！").fadeIn().delay(2000).fadeOut();
        return false;
    }else {
        //发送ajax

        $("#nowpass").val("");
        $("#tonewpass").val("");
        $("#newpass").val("");
        $(".passmark").fadeOut();
        $(".promptmark").fadeIn();
        return false;
    }

})

//    var aaa = "nihao";
//    layer.open({
//        title: '提示',
//        content: '<p style="font-size: 18px;color: red;text-align: center">' + aaa +'</p>',
//        btnAlign: 'c',
//    });
//列表页面
//全选或全不选
$("#all").on("click",function () {
    if(this.checked){
        $(".vg-livelist-list-body :checkbox").prop("checked", true);
    }else{
        $(".vg-livelist-list-body :checkbox").prop("checked", false);
    }
});
//设置全选复选框
$(".vg-livelist-list-body :checkbox").click(function(){
    allchk();
});
function allchk(){
    var chknum = $(".vg-livelist-list-body :checkbox").size();//选项总个数
    var chk = 0;
    $(".vg-livelist-list-body :checkbox").each(function () {
        if($(this).prop("checked")==true){
            chk++;
        }
    });
    if(chknum==chk){
        $("#all").prop("checked",true);
    }else{
        $("#all").prop("checked",false);
    }
}
//复制
$(".linkbtn").on("click",function () {
    $(this).siblings('p').children().select();
    document.execCommand("Copy");
})
$(".vg-list-delete").on("click",function () {
    console.log($(".vg-livelist-list-body :checked").length);
    console.log($(".vg-livelist-list-body :checked").parent().parent())
    $(".vg-livelist-list-body :checked").parent().parent().remove();
})