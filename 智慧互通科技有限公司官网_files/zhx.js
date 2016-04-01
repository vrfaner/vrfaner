$(document).ready(function(){
		
		/*  menu  */
	var e=100,i=$(".menu_ani_outer a").length,t=e*i>$(window).width()?e*i+40:$(window).width();
	$(".menu_ani_outer").css({width:t,left:"-"+t+"px"});
	$(".didi_phone_menu").bind("touchend",function(e){
		e.stopPropagation()
	}),
	$(".btn_show_menu").bind("touchend",function(){
		$("#phone_menu").show(),
		$(".zhtc_phone_menu").css('position','fixed'),
		//$(".phone_sec_menu").hide().css({left:"-140px"}),
		$(".menu_ani_outer").show().stop().animate({left:"0"},300)
	}),
	$(".btn_show_menu").bind("click",function(){
		$("#phone_menu").show(),
		$(".zhtc_phone_menu").css('position','fixed'),
		//$(".phone_sec_menu").hide().css({left:"-140px"}),
		$(".menu_ani_outer").show().stop().animate({left:"0"},300)
	}),
	$(".menu_ani_outer").bind("touchend",function(e){
		e.stopPropagation()
	})
    function startMenu(obj) {
        var activeLi = obj,
            activeLiOffset = activeLi.offset();
        $('#menu_border').stop().animate({
            'width': 90,
			'opacity':1,
            'left': activeLiOffset.left
        }, 200);
    }

    function endMenu(obj) {
        $('#menu_border').stop().animate({
            'width': '100%',
            'left': 0,
			'opacity':0
        }, 200);
    }
	
	$(".zhnav ul li").removeClass("refunt"),
    $(".zhnav ul .hv").addClass("refunt"),
    $(".zhnav ul li").hover(function() {
        var a = $(this).index();
        $(".zhnav ul li").removeClass("refunt"),
        $(".zhnav ul li").eq(a).addClass("refunt")
    }
    , function() {
        var a = $(".zhnav ul .hv").index();
        $(".zhnav ul li").removeClass("refunt"),
        $(".zhnav ul .hv").addClass("refunt")
    }
    ),
	
	//.spe_li
    $('.zhnav li').bind('mouseover', function() {
            //startMenu($(this));
        })
        .bind('mouseout', function() {
            //endMenu($(this));
        });

    /*  menu end  */
	
		function IsPC(){  
			var userAgentInfo = navigator.userAgent;  
			var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
			var flag = true;  
			for (var v = 0; v < Agents.length; v++) {  
				if (userAgentInfo.indexOf(Agents[v]) > 0){ 
					flag = false; 
					break; 
				}  
			}  
			return flag;  
		}
		
		function IsIE(){
			var browser=navigator.appName, 
				b_version=navigator.appVersion, 
				version=b_version.split(";"); 
			if(version[1]){
				var	trim_Version=version[1].replace(/[ ]/g,"");
				var Agents = new Array("MSIE8.0", "MSIE7.0", "MSIE6.0"); 
				var flag = false;
				for (var v = 0; v < Agents.length; v++) {  
					if (browser == "Microsoft Internet Explorer" && trim_Version == Agents[v]){ 
						flag = true; 
						break; 
					}  
				}  
				return flag;
			}
		}
		
		var bindEvent = IsPC() ? 'click' : 'touchend';
		
		//关于我们菜单划过
		//var qcloud={};
//		$('[_t_nav]').hover(function(){
//			var _nav = $(this).attr('_t_nav');
//			clearTimeout( qcloud[ _nav + '_timer' ] );
//			qcloud[ _nav + '_timer' ] = setTimeout(function(){
//			$('[_t_nav]').each(function(){
//			$(this)[ _nav == $(this).attr('_t_nav') ? 'addClass':'removeClass' ]('nav-up-selected');
//			});
//			$('#'+_nav).stop(true,true).slideDown(200);
//			}, 150);
//		},function(){
//			var _nav = $(this).attr('_t_nav');
//			clearTimeout( qcloud[ _nav + '_timer' ] );
//			qcloud[ _nav + '_timer' ] = setTimeout(function(){
//			$('[_t_nav]').removeClass('nav-up-selected');
//			$('#'+_nav).stop(true,true).slideUp(200);
//			}, 150);
//		});
	
	//停车场车牌识别
	$(".carnum_list .bd ul li").hover(function(){$(this).find(".hpic").fadeIn()},function(){$(this).find(".hpic").fadeOut()});
			
	
	
	/*加入我们 招聘信息-》折叠信息  */
		$(document).on('click','.abcon_tb tr.rzzw',function(){
			 //if($(this).closest("tr").next(".rzyq").is(":visible")){
			 if(!$(this).attr('isclick')){
				$(this).removeAttr('isclick').find('em').removeClass('btn_up_up').addClass('btn_up_down').end()
				.next('.rzyq').slideUp(400);
			 	//$(this).closest("tr").next(".rzyq").hide();
				$(this).find('em').addClass('btn_up_up').end()
				.next('.rzyq').slideDown(400);	
				$(this).attr('isclick','yes').addClass('rzzw_bg');//.css('background-color','#f7f7f7');
			 }
			 else{
				 $(this).find('em').removeClass('btn_up_up').addClass('btn_up_down')
				.end().next('.rzyq').slideUp(400);
				$(this).removeAttr('isclick').removeClass('rzzw_bg');
			 	//$(this).closest("tr").next(".rzyq").show();
			 }
		});
		
		
		$(document).on('click','.module-nav li',function(){
			var dvalue=$(this).attr("data-value");
			//if(dvalue=="conHot"){
				$(this).addClass("active").siblings().removeClass("active");
				$('.abcon2').find('#'+dvalue).addClass("active").siblings('.content-list').removeClass("active");
			//}	
		});		
	/*  折叠信息end  */
	
	/*底部：微信划过*/
	$(".ft-weixin").hover(function() {
		$(".weixin-pop").show();
	}, function() {
		$(".weixin-pop").hide();
	});
	$(".ft-sina").hover(function() {
		$(".weibo-pop").show();
	}, function() {
		$(".weibo-pop").hide();
	});	
	
	
	/*  console 
		if (!window.console) console = {};
		console.log = console.log || function(){};
	
		console.log("hello，程序员哥哥，又见到这个彩蛋是不是很开心？\n我知道你此刻想吐槽，想攻击我们官网；\n更重要的是你想优化，想改变这个网站，甚至是整个智慧星。\n找到了合适了你的起点了么？\n从这扇门开始改变智慧星，改变世界，改变自己。\n");
		console.log("芝麻开门:发送简历至 %c hr@zhtc66.com（ 邮件标题请以“姓名-应聘XX职位-来自console”命名）","color:#ff8800");
		console.log("你创造世界的舞台：http://www.zhxtc.com/"); */
	
	
	
	
});

//滚动条进入脚本
		//window.onload=function(){
//			$("#parkman-anm-one").bind("scrollin",function(){
//				$(this).addClass("animate")
//			});
//			$("#reg-anm-first").bind("scrollin",function(){
//				$(this).addClass("animate")
//			});
//			$("#reg-anm-second").bind("scrollin",function(){
//				$(this).addClass("animate")
//			});
//			$("#reg-anm-third").bind("scrollin",function(){
//				$(this).addClass("animate")
//			});
//			$("#reg-anm-fouth").bind("scrollin",function(){
//				$(this).addClass("animate")
//			});
//			$("#reg-anm-fifth").bind("scrollin",function(){
//				$(this).addClass("animate")
//			})
//		};

