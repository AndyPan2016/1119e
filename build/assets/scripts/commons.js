/**
 * 公共js
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-05-05 16:02:08
 */

$(function(){

	var navSite = $('#j-nav-site');
	navSite.hover(function(){
		$(this)//.addClass('active')
			.find('.site-area')
			.addClass('up');
	}, function(){
		$(this)//.removeClass('active')
			.find('.site-area')
			.removeClass('up');
	});

	navSite.on('click', '.site-area-item', function(){
		navSite.find('.site-area').html($(this).text().split(' ')[0]);
		navSite.removeClass('active')
			.find('.site-area')
			.removeClass('up');
	});

    /**
     *个人中心左侧导航
     */
    $(".m-navbar .m-navbar-item dt").click(function(){
        var parent = $(this).parent()
        if(!parent.hasClass('active')){
            parent.addClass("active");
            parent.find("dd").stop().slideUp();
        } else {
            parent.removeClass("active");
            parent.find("dd").stop().slideDown();
        }
    });
    /***
     * 侧边栏
     */
    $(".m-side-bar ul li").hover(function(){
        $(this).find(".info").show();
    },function(){
        $(this).find(".info").hide();
    })

    window.onscroll=function() {//当滚动到大于450显示返回顶部
        var disTop = document.documentElement.scrollTop || document.body.scrollTop;
        console.log();
        disTop > 450 ?
            $('.totop').show():
            $('.totop').hide();
    }
    $('.totop').click(function(){//返回顶部
        $("html, body").animate({
            scrollTop:0
        }, 300);
        return false;
    });

});
