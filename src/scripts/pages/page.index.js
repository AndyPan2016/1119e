/**
 * 首页页面js
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-05-08 19:26:30
 */

$(function(){


	/*var swiper = new Swiper('.swiper-container', {
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		loop: true,
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows : true,
		},
	});*/

	var swiper = new Swiper('#j-banner-carousel', {
		loop: true,
		autoplay: {
	        delay: 5000,
	        disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable :true,
		}
	});

	$('#featured').orbit({
		frontendWidth: 690,		//frontend Img Width
		frontendHeight: 300,
		//frontendBorder: '1px solid #d9d9d9',
		frontendLeft: 230,  //front left
		backendWidth: 690, //backend Img Width 1
		backendTop: 0,	//backend Img  1 Position
		backendLeft: 0, //backend Img  1 left
		backendLeft3: 450, //backend Img  1 rgiht
		//backendBorder: '1px solid #d9d9d9',	 
		backendWidth2: 690, //backend Img Width 2
		backendTop2: 0,	// backend Img Position 2      
		backendLeft4: 0,// backend Img Position right 
		backendLeft2: 0, //backend Img Position left
		//backendBorder2: '1px solid #d9d9d9',
		sceneWidth: 1200,
		sceneHeight: 300,
	});

	//<!-- 登录 -->
	
	var mypopup = CompPopup();
	var popupIndex9;
	$('#j-btn-popup-login').click(function(){
		popupIndex9 = mypopup.open({
			type: 1,
			//标题
			title: '投资',
			//这里的content也可以是DOM对象
			content: $('#j-popup-login'),
			area: ['350px' ],
			shadeClose:true,
			end:function(){
				
			}
		});
		$(".layui-layer-title,.layui-layer-setwin").hide();
	});

});

