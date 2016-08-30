$(function () {
	// 设置当前页面1rem的大小为手机像素10px,设计稿640的情况下，px除以20就是需要写的rem单位
	 var ws = $(window).width();
	 if(ws > 480){
		ws = 480; 
	 }; 
	 var font_size = ws/320*10;
	 $('html').css('font-size', font_size+"px");

	 // var wh = $(window).height();
	 // var mh = $(".j-container").height();
	 // if(mh < wh){
	 // 	$(".j-container").height(wh);
	 // 	$(".j-subBtn").css({"position":"fixed","bottom":"0","left":"50%","margin":"0 0 1.7rem -6.9rem"});
	 // }else{
	 // 	$(".j-subBtn").css({"margin":"0 auto 1.7rem"});
	 // }

	 // 分享
	 $(".j-shareBtn").click(function(){
	 	share();
	 });


	 // 立即办理
	 $(".j-subBtn").click(function(){
	 	$("body").append('<div id="zhezhao"></div>');
	 	$(".j-alertBox").fadeIn();
		 // 二次确认弹窗居中
		 /*var alertHeight = $(".j-alertBox").height();
		 $(".j-alertBox").css("margin-top",-alertHeight/2);*/
	 });

	 // 二次弹框确认办理
	 $(".j-yeido").click(function(){
	 	$(".j-alertBox").fadeOut();
	 	$("#loading").show();
	 	setTimeout(function(){
	 		$("#loading").hide();
	 		$(".j-ok").fadeIn();
			 /*var alertHeight = $(".j-ok").height();
			 $(".j-ok").css("margin-top",-alertHeight/2);*/
	 	},3000)
	 })
 // 办理取消
 $(".j-noidont").click(function(){
	 	$(".j-alertBox").fadeOut();
	 	$("#zhezhao").remove();
	 })
 
	 // 办理结果关闭弹窗
	 $(".j-end").click(function(){
	 	$(".j-ok").fadeOut();
	 	$("#zhezhao").remove();
	 })
	 
//预热页面
	 $(".j-yrBtn").click(function(){
	 	$("body").append('<div id="zhezhao"></div>');
	 	$(".j-wks").fadeIn();
	 });
 //预热页面确认
	 $(".j-end").click(function(){
	 	$(".j-wks").fadeOut();
	 	$("#zhezhao").remove();
	 })
})