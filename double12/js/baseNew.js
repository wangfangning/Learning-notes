// JavaScript Document
/* 站点说明： 中国联通手机客户端
 * 开发时间： 2011-04-14
 * 开发者： 宁玉波
 * 维护者： 胡建
 *
 * 样式版本： v3.0
 * 版本时间： 2014-03-14
 * 注意事项： 共用JS文件
 */

;jQuery(function( $ ){
	
	//Initialization
	//use this quick url
	url=function(url){
		window.location.href=url;
	};
	
	//you can try it go back
	var backBtn=$('.goback');
	var goBack=function(){
		window.history.back();
	};
	backBtn.bind('click',goBack);
	
	//弹出层调用
	function popupfn(popupBtn,popup,ensureBtn){
		$(popupBtn).click(function(){
			$(popup).show();
		});
		$(ensureBtn).click(function(){
			$(this).parents(popup).hide();
		});
	};
	popupfn('.popupBtn1','.bg_popup1','.ensureBtn');
	popupfn('.popupBtn2','.bg_popup2','.ensureBtn');
	popupfn('.popupBtn3','.bg_popup3','.ensureBtn');
	
	function autopopupfn(popup,ensureBtn){
		$(popup).show();
		$(ensureBtn).click(function(){
			$(this).parents(popup).hide();
		});
	};
	$('.popup_close').click(function(){
		$(this).parents('.bg_popup').hide();
	});
	
	//点击瞬间效果
	function setBtnColor(className,addClass){
		$(className).bind('mousedown touchstart',function(){
			 $(this).addClass(addClass);
		}).bind('mouseup touchend',function(){
			 $(this).removeClass(addClass);
		}).bind('mouseover touchmove',function(){
			 $(this).removeClass(addClass);
		});
	};
	setBtnColor('.tab_list','active');
	setBtnColor('.btn','active');
		
	
	//中奖查询导航切换效果
	$('.tab_award > li,.sub_tab li').click(function(){
		$(this).addClass('on').siblings('li').removeClass('on');
	});
	var subtabLiL = $('.sub_tab li').length;
	$('.sub_tab li').width(100/subtabLiL+'%');
	
	//中奖纪录查看更多
	$('.checkmore').bind('click',function(){
		$('.table_rank tr:gt(1)').clone(true).appendTo('.table_rank');
	});
	
	//老虎机
	/*(function(){
		$('.award').each(function(index){
			var prizeIndex = 4;
			var step,speed,total,ito;
			var awardsLiH = $('.awards').find('li').height();
			var awardLiL = $('.award1').find('li').length;
			var award1 = $('.award1');
			var is_running = false;
			var i = 0; // 奖品默认开始索引
			if(is_running == false){setBtnColor('.start_pull','on');}
			$('.start_pull').click(function(){
				if(is_running == true){
					return false;
				} else{
					step = 0; // 记录已跑的格数
					speed = 240; // 初始速度
					is_running = true;
					ito = setTimeout(rolling, index*1000);
				}
			});
			function rolling () {
				if( i === prizeIndex && speed > 400 ) {
					clearTimeout(ito);
					is_running = false;
					setTimeout(function(){
						autopopupfn('.bg_popup1','.ensureBtn');
					},3000);
					return false;
				}
				i++;
				step++;
				if ( i >= 8 ) i = 0;
				if ( step < awardLiL*2 ) speed -= 5; // 第二圈加速
				if ( step > awardLiL*3 ) speed += 15; // 三圈之内不减速
				if ( speed <= 10 ) speed = 10; // 中间稳住
				$('.award'+(index+1)).animate({marginTop:[-awardsLiH,'linear']},speed,function(){
					var _this = $(this);
					_this.css({'marginTop':0}).find('li').eq(0).appendTo(_this);
				});
				ito = setTimeout(rolling, speed);
			};
		});
	})();*/
	(function(){
		var prizeIndex1 = 0, prizeIndex2 = 5, prizeIndex3 = 6;
		var isPrize = true;
		var step,speed,total,ito;
		var flagEndGame1 = true;
		var flagEndGame2 = true;
		var flagEndGame3 = true;
		var awardsLiH = $('.awards').find('li').height();
		var awardLiL = $('.award1').find('li').length;
		var award1 = $('.award1');
		var is_running1 = is_running2 = is_running3 = false;
		var i1 = i2 = i3 = 0; // 奖品默认开始索引
		$('.start_pull').bind('mousedown touchstart',function(){
			if(is_running1 == false && is_running2 == false && is_running3 == false) $(this).addClass('on'); 
		}).bind('mouseup touchend',function(){
			 if(is_running1 == false && is_running2 == false && is_running3 == false) $(this).removeClass('on');
		}).bind('mouseover touchmove',function(){
			if(is_running1 == false && is_running2 == false && is_running3 == false) $(this).removeClass('on');
		});
		$('.start_pull').click(function(){
			if(is_running1 == true || is_running2 == true || is_running3 == true){
				return false;
			} else{
				flagEndGame1 = false;
				flagEndGame2 = false;
				flagEndGame3 = false;
				document.getElementById('audioplay').play();
				step1 = step2 = step3 = 0; // 记录已跑的格数
				speed1 = speed2 = speed3 = 240; // 初始速度
				is_running1 = is_running2 = is_running3 = true;
				ito1 = setTimeout(rolling1, 0);
				ito2 = setTimeout(rolling2, 500);
				ito3 = setTimeout(rolling3, 1000);
			}
		});
		function rolling1 () {
			if( i1 === prizeIndex1 && speed1 > 300 ) {
				clearTimeout(ito1);
				is_running1 = false;
				flagEndGame1 = true;
				endMusic();
				console.log('end1--->');
				return false;
			}
			i1++;
			step1++;
			if ( i1 >= 8 ) i1 = 0;
			if ( step1 < awardLiL*2 ) speed1 -= 5; // 第二圈加速*/
			if ( step1 > awardLiL*3 ) speed1 += 15; // 三圈之内不减速
			if ( speed1 <= 10 ) speed1 = 10; // 中间稳住
			$('.award1').animate({marginTop:[-awardsLiH,'linear']},speed1,function(){
				var _this = $(this);
				_this.css({'marginTop':0}).find('li').eq(0).appendTo(_this);
			});
			ito1 = setTimeout(rolling1, speed1);
		};
		function rolling2 () {
			if( i2 === prizeIndex2 && speed2 > 300 ) {
				clearTimeout(ito2);
				is_running2 = false;
				flagEndGame2 = true;
				endMusic();
				console.log('end2--->');
				return false;
			}
			i2++;
			step2++;
			if ( i2 >= 8 ) i2 = 0;
			if ( step2 < awardLiL*2 ) speed2 -= 5; // 第二圈加速*/
			if ( step2 > awardLiL*3 ) speed2 += 15; // 三圈之内不减速
			if ( speed2 <= 10 ) speed2 = 10; // 中间稳住
			$('.award2').animate({marginTop:[-awardsLiH,'linear']},speed2,function(){
				var _this = $(this);
				_this.css({'marginTop':0}).find('li').eq(0).appendTo(_this);
			});
			ito2 = setTimeout(rolling2, speed2);
		};
		function rolling3 () {
			if( i3 === prizeIndex3 && speed3 > 300 ) {
				clearTimeout(ito3);
				is_running3 = false;
				flagEndGame3 = true;
				endMusic();
				console.log('end3--->');
				return false;
			}
			i3++;
			step3++;
			if ( i3 >= 8 ) i3 = 0;
			if ( step3 < awardLiL*2 ) speed3 -= 5; // 第二圈加速*/
			if ( step3 > awardLiL*3 ) speed3 += 15; // 三圈之内不减速
			if ( speed3 <= 10 ) speed3 = 10; // 中间稳住
			$('.award3').animate({marginTop:[-awardsLiH,'linear']},speed3,function(){
				var _this = $(this);
				_this.css({'marginTop':0}).find('li').eq(0).appendTo(_this);
			});
			ito3 = setTimeout(rolling3, speed3);
		};
		$('.noPrize').bind('click',function(){
			isPrize = false;
		});
		$('.Prize').bind('click',function(){
			isPrize = true;
		});
		function endMusic(){
			var audio = document.getElementById('audioplay');
			var audiogood = document.getElementById('audioplayGoog');
			var audiobad = document.getElementById('audioplayBad');
			console.log('flagEndGame1--->'+flagEndGame1);
			console.log('flagEndGame2--->'+flagEndGame2);
			console.log('flagEndGame3--->'+flagEndGame3);
			if(flagEndGame1 && flagEndGame2 && flagEndGame3){
				console.log('stop--->');
				audio.pause();
				if(isPrize == true){
					audiogood.play();
				}else{
					audiobad.play();
				}
			}
			
		}
	})();
	
	//shake触发
	(function(){
		init();
		// 首先在页面上要监听运动传感事件
		function init(){
		　　if (window.DeviceMotionEvent) {
		　　　　window.addEventListener('devicemotion', deviceMotionHandler, false);// 移动浏览器支持运动传感事件
		　　} 
		}
		var SHAKE_THRESHOLD = 5000;// 首先，定义一个摇动的阀值
		var last_update = 0;// 定义一个变量保存上次更新的时间
		// 紧接着定义x、y、z记录三个轴的数据以及上一次出发的时间
		var x;
		var y;
		var z;
		var last_x;
		var last_y;
		var last_z;
		
		function deviceMotionHandler(eventData) {
		　　var acceleration = eventData.accelerationIncludingGravity;　// 获取含重力的加速度
		　　var curTime = new Date().getTime();　// 获取当前时间
		　　var diffTime = curTime -last_update;
		　　// 固定时间段
		　　if (diffTime > 80) {
		　　　　last_update = curTime;
		　　　　x = acceleration.x;
		　　　　y = acceleration.y;
		　　　　z = acceleration.z;
		　　　　var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;
		　　　　if (speed > SHAKE_THRESHOLD) {
				shake();
				function shake(){
					//定义摇一摇之后的js效果
					$('.start_pull').trigger('click');
				} 
			}
		　　　　last_x = x;
		　　　　last_y = y;
		　　　　last_z = z;
		　　}
		};
	})();
	
	//输入框编辑
	$('.inputBox').find('input').keyup(function(){
		$(this).val() ? $(this).siblings('.del').show() : $(this).siblings('.del').hide();
	});
	$('.inputBox').find('.del').click(function(){
		$(this).hide().siblings('input').val('').focus();
	})
});