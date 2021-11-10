var imgBox = document.getElementsByClassName("img-slide"); //图片框
var radiotu = document.getElementsByClassName("lunbo-radio"); //圆点
var as = true;
var index = 0,len;

/* 轮播图 */
len = imgBox.length;
function slideShow() {
	if (index == 0) {
		radiotu[1].checked = true;
	} else if (index == 1) {
		radiotu[2].checked = true;
	} else if (index == 2) {
		radiotu[3].checked = true;
	}else if (index == 3) {
		radiotu[4].checked = true;
	}else if (index == 4) {
		radiotu[0].checked = true;
	}
	
	index++;
	if (index >= len) {
		index = 0
	};
	for (var i = 0; i < len; i++) {
		imgBox[i].style.display = 'none';
	}
	imgBox[index].style.display = 'block';
}
setInterval(slideShow, 5000);
/* 点击图片圆点切换 */
function lunbo(a) {
	switch (a) {
		case 0:
			imgBox[0].style.display = "block";
			imgBox[1].style.display = "none";
			imgBox[2].style.display = "none";
			imgBox[3].style.display = "none";
			imgBox[4].style.display = "none";
			break;
		case 1:
			imgBox[0].style.display = "none";
			imgBox[1].style.display = "block";
			imgBox[2].style.display = "none";
			imgBox[3].style.display = "none";
			imgBox[4].style.display = "none";
			break;
		case 2:
			imgBox[0].style.display = "none";
			imgBox[1].style.display = "none";
			imgBox[2].style.display = "block";
			imgBox[3].style.display = "none";
			imgBox[4].style.display = "none";
			break;
		case 3:
			imgBox[0].style.display = "none";
			imgBox[1].style.display = "none";
			imgBox[2].style.display = "none";
			imgBox[3].style.display = "block";
			imgBox[4].style.display = "none";
			break;
		default:
			imgBox[0].style.display = "none";
			imgBox[1].style.display = "none";
			imgBox[2].style.display = "none";
			imgBox[3].style.display = "none";
			imgBox[4].style.display = "block";
			break;
	}
}

/* 窗体打开 */
window.onload = function() {
	radiotu[0].checked = true;
}
