/*
  common 公用脚本
*/
var tapReady = false;
var moveReady = true;
// 兼容pc click事件
var touch = 'click';
if (window.orientation == undefined) {
  tapReady = true;
} else {
  touch = 'tap';
}
// 屏幕滚动时设置tap状态，用于阻止屏幕滚动时误触发tap事件
$(document.body).on('touchstart', function(){
  tapReady = true;
});
$(document.body).on('touchmove', function(){
  tapReady = false;
  if (!moveReady) return false;
});

/*
  ui 通用脚本
*/

// j-dolink 自动绑定链接
$(function(){
	$('.j-dolink').on(touch, function(){
		var href = $(this).data('href');
		location.href = href;
	});
});
/*var winWidth = window.innerWidth;
if(winWidth > 480){
	winWidth = 480;
};
var font_size = winWidth/320*10;
document.getElementsByTagName('html')[0].style.fontSize = font_size+"px";*/
	
$(function(){
	$('.readygo .btn').on(touch,function(){
		$(this).hide();
		$('.readygo .btn1').show();
	});
	var date,flag;
	$('.readygo .btn1').on(touch,function(){
		var _img = $('.city-space1 img');
		var _div = $('.city-space-progress');
		if(!flag){
			
			_img.attr('src','img/renwu.gif');
			if(!date){
				date = +new Date();
			};
			var ws = parseFloat(_img.css('left'));
			//alert(ws);
			var lefts = ws +2;
			_img.css('left',lefts+'%');
			_div.css('width',lefts+'%')
			if(parseFloat(_img.css('left')) == 100){
				var date1 = +new Date();
				var time = (date1 - date)/1000;
				_img.attr('src','img/renwu.png')
				var str = time+'秒';
				waitFns(str,function(){
						
				});
				flag = true;	
			};
		};
	});
		
});


// 双按钮弹出提示层
function waitFn(msgtxt,fn1){
  var waitalertObj = $('.ui-wait');
  if (waitalertObj.length) {
    waitalertObj.show();
  } else {
    waitalertObj = $('<div class="ui-wait"><div class="content"><h3>二次确认</h3>'
	+'<div class="content-nr"></div>'
	+'<div class="ui-operation"><a href="javascript:void(0)" class="js_abolish">取消</a><a href="javascript:void(0)" class="js_confirm">确认办理</a></div></div></div>');
    $('body').append(waitalertObj);
  }
  waitalertObj.find('.content-nr').html(msgtxt);
 
  waitalertObj.find('.closeJs,.js_abolish').unbind("click").click(function(){
	  $('.ui-wait').hide();
  });
  waitalertObj.find('.js_confirm').unbind("click").click(function(){ //确定的回调函数
  	 $('.ui-wait').hide();
	 if ($.isFunction(fn1)) {
		fn1();
	}
  });
};

// 单按钮弹出提示层
function waitFns(msgtxt,fn1){
  var waitalertObj = $('.ui-waits');
  if (waitalertObj.length) {
    waitalertObj.show();
  } else {
    waitalertObj = $('<div class="ui-waits"><div class="content"><em class="closeJs"></em>'
	+'<div class="content-nr"></div>'
	+'<div class="ui-operation"><a href="javascript:void(0)" class="js_confirm"></a></div></div></div>');
    $('body').append(waitalertObj);
  }
  waitalertObj.find('.content-nr').html(msgtxt);

  waitalertObj.find('.closeJs,.js_abolish').unbind("click").click(function(){
	  $('.ui-waits').hide();
  });
  waitalertObj.find('.js_confirm').unbind("click").click(function(){ //确定的回调函数
  	 $('.ui-waits').hide();
	 if ($.isFunction(fn1)) {
		fn1();
	}
  });
};


var msg = '<img src="images/loading.gif" width="36"><p>加载中，请稍候...</p>';
// 加载中弹出提示层
function waitAlertFn(msg){
  var waitalertObj = $('.ui-waitalert');
  if (waitalertObj.length) {
    waitalertObj.show();
  } else {
    waitalertObj = $('<div class="ui-waitalert"><div class="content"></div></div>');
    $('body').append(waitalertObj);
  }
  waitalertObj.find('.content').html(msg);
  
};
function waitAlertClose(){
  $('.ui-waitalert').hide();
};


