var lishi = document.getElementsByClassName("lisousuo");
var in2 = document.querySelector("input");

function tiao(a) {
	if (a === 1) {
		window.location.href="javascript:history.go(-1)";
	}
}

in2.onclick = function() {
	in2.value = "";
}


window.onload = function() {
	lishi[0].style.display = "none";
}

$(function() {
	var tj = $(".sousuo-tj");
	var zhi = "";
	tj.click(function() {
		zhi = $(this).text();
		var aa = [];
		aa.push(zhi);
		var aaS = JSON.stringify(aa);
		var twoUrl = encodeURI("sousuo.html?zhi=" + JSON.stringify(aaS)); //使用encodeURI编码  
		location.href = twoUrl;
	})
})
