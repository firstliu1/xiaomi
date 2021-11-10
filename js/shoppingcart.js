$(function() {
	$(".herder div").eq(0).click(function() {
		console.log("123")
		window.location.replace("../index.html");
	})
	$(".herder div").eq(2).click(function() {
		location.href = "selectshangpin.html";
	})
	$(".konggw div").eq(2).click(function() {
		top.location.href = "../index.html";
	})
	$(".gwcdl span").eq(2).click(function() {
		top.location.href = "long.html";
	})
	var num = 0;
	var count = 0;
	var zj=0;
	$(".jian").click(function() {
		let a = parseInt($(this).next().html());
		var dj=parseInt($(this).parent().prev().children().eq(0).text()) ;
		if(--a < 1 ){
			a = 1
		}else{
			if($(this).parent().parent().prev().prev().css("background-image") == "none"){
			
			}else{
				num -= dj
				count -= 1
				$(".dibu").children().eq(0).children().eq(3).text(num);
				$(".dibu").children().eq(0).children().eq(1).text(count);
			}
		}
		$(this).next().html(a);
		zj=dj*a;
		$(this).parent().next().text(zj);
	})
	$(".jia").click(function() {
		var dj=parseInt($(this).parent().prev().children().eq(0).text());
		let a = parseInt($(this).prev().html());
		if(++a > 10){
			a=10
		}else{
			if($(this).parent().parent().prev().prev().css("background-image") == "none"){
			}else{
				num += dj
				count += 1
				$(".dibu").children().eq(0).children().eq(3).text(num);
				$(".dibu").children().eq(0).children().eq(1).text(count);
			}
		}
		$(this).prev().html(a);
		var zj=dj*a;
		$(this).parent().next().text(zj);
	})
	$(".xe").click(function() {
		if ($(this).css("background-image") == "none") {
			$(this).addClass("xuanze");
			var sl = parseInt($(this).next().next().children().eq(3).children().eq(1).text());
			var zj=parseInt($(this).next().next().children().eq(4).text())
			num +=zj
			count += sl
			$(".dibu").children().eq(0).children().eq(3).text(num);
			$(".dibu").children().eq(0).children().eq(1).text(count);
		} else {
			$(this).removeClass("xuanze");
			var sl = parseInt($(this).next().next().children().eq(3).children().eq(1).text());
			var zj = parseInt($(this).next().next().children().eq(4).text());
			num -= zj
			count -= sl
			$(".dibu").children().eq(0).children().eq(3).text(num);
			$(".dibu").children().eq(0).children().eq(1).text(count);
		}

	})
	$(".sc").click(function() {
		var zj=parseInt($(this).prev().children().eq(4).text());
		var sl=parseInt($(this).prev().children().eq(3).children().eq(1).text());
		if($(this).parent().parent().prev().prev().css("background-image") == "none"){
		}else{
			num-=zj
			count-=sl
			$(".dibu").children().eq(0).children().eq(3).text(num);
			$(".dibu").children().eq(0).children().eq(1).text(count);
		}
		$(this).parent().remove();
		
	})

})
