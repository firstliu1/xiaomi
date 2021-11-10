var in2 = document.querySelector("input");

function tiao(a) {
	if (a === 1) {
		window.location.href="javascript:history.go(-1)";
	}
}
in2.onclick = function() {
	in2.value = "";
}

$(function() {
	var twoText = decodeURI(window.location.href.split("=")[1]); //decodeURI解码
	var zhi=twoText;
	var s = zhi.substr(4,zhi.length)
	var sf = s.slice(0,s.length-4)
	in2.value=sf; 
	
	var caidan=$(".saixuan div");
	var zhezhao=$(".zhezhao");
	var zh=$(".saixuan-zh");
	var zh_px=$(".zh-px");
	var xp_yx=$(".xp-yx");
	var zh_icon=$(".zh-icon");
	var xp_icon=$(".xp-icon");
	var icon=$(".icon");
	zh.addClass("none-no");
	zhezhao.addClass("none-no");
	$(".zhezhao2").addClass("none-no");
	$(".saixuan-fenlei").addClass("none-no");
	var con=0,dian=0;
	$(".saixuan-fenlei span").click(function(){
		$(this).addClass("yangshi");
		$(this).siblings().removeClass("yangshi");
		
	})
	$(".fenlei-db span").eq(1).click(function(){
		$(".zhezhao2").addClass("none-no");
		$(".saixuan-fenlei").addClass("none-no");
	})
	$(".fenlei-db span").eq(0).click(function(){
		$(".saixuan-fenlei span").removeClass("yangshi");
	})
	caidan.click(function(){
		if($(this).text()==="综合"||$(this).text()==="新品"){
			con+=1;
			if(con%2===0){
				zhezhao.addClass("none-no");
				zh.addClass("none-no");
			}else{
				zhezhao.removeClass("none-no");
				zh.removeClass("none-no");
			}
		}else if($(this).text()==="限量"){
			caidan.eq(1).addClass("ys");
			caidan.eq(2).removeClass("ys");
			icon.eq(0).removeClass("icon-ys2");
			icon.eq(1).removeClass("icon-ys");
			xp_yx.removeClass("ys");
			zh_px.removeClass("ys");
			caidan.eq(0).removeClass("ys");
			zh_icon.removeClass("block-yes");
			xp_icon.removeClass("block-yes");
			zhezhao.addClass("none-no");
			zh.addClass("none-no");
		}else if($(this).text()==="价格"){
			dian+=1;
			if(dian%2===0){
				icon.eq(1).addClass("icon-ys");
				icon.eq(0).removeClass("icon-ys2");
			}else{
				icon.eq(0).addClass("icon-ys2");
				icon.eq(1).removeClass("icon-ys");
			}
			caidan.eq(2).addClass("ys");
			caidan.eq(1).removeClass("ys");
			xp_yx.removeClass("ys");
			zh_px.removeClass("ys");
			caidan.eq(0).removeClass("ys");
			zh_icon.removeClass("block-yes");
			xp_icon.removeClass("block-yes");
			zhezhao.addClass("none-no");
			zh.addClass("none-no");
		}else if($(this).text()==="筛选"){
			$(".zhezhao2").removeClass("none-no");
			$(".saixuan-fenlei").removeClass("none-no");
		}
	})
	xp_yx.click(function(){
		xp_yx.addClass("ys");
		zh_px.removeClass("ys");
		zh_icon.removeClass("block-yes");
		xp_icon.addClass("block-yes");
		caidan.eq(0).addClass("ys");
		zhezhao.addClass("none-no");
		zh.addClass("none-no");
		caidan.eq(0).html("新品");
		caidan.eq(2).removeClass("ys");
		caidan.eq(1).removeClass("ys");
		icon.eq(0).removeClass("icon-ys2");
		icon.eq(1).removeClass("icon-ys");
		con+=1;
	})
	zh_px.click(function(){
		zh_px.addClass("ys");
		xp_yx.removeClass("ys");
		zh_icon.addClass("block-yes");
		xp_icon.removeClass("block-yes");
		caidan.eq(0).addClass("ys");
		zhezhao.addClass("none-no");
		zh.addClass("none-no");
		caidan.eq(0).html("综合");
		caidan.eq(2).removeClass("ys");
		caidan.eq(1).removeClass("ys");
		icon.eq(0).removeClass("icon-ys2");
		icon.eq(1).removeClass("icon-ys");
		con+=1;
	})
	$(".zhezhao2").click(function(){
		$(".zhezhao2").addClass("none-no");
		$(".saixuan-fenlei").addClass("none-no");
	})
	

})
