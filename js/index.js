var arr = document.querySelector("#jiantou"); //箭头
var mune = document.querySelector(".headerjianz"); //箭头点击之后的头
var xuanzhong = document.getElementsByClassName("gh"); //显示菜单栏
var xuanzhong2 = document.getElementsByClassName("gh2"); //隐藏菜单栏
var zhe = document.querySelector("#zhezhao"); //遮罩层
var foot = document.querySelector("#zhezhao"); //底部
var imgBox = document.getElementsByClassName("img-slide"); //图片框
var radiotu = document.getElementsByClassName("lunbo-radio"); //圆点
var header = document.getElementsByClassName("header"); //圆点
var juedui=document.getElementsByClassName("juedui");
var dibu=document.querySelector(".foot");
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

/* 小箭头 */
arr.onclick = function() {
	// ====================================
	if (as) {
		console.log('打开')
		arr.className = "rotate225"
		mune.style.display = 'block'
		zhe.style.display = 'block';
		as = false
	} else {
		arr.className = "rotate45"
		mune.style.display = 'none'
		zhe.style.display = 'none';
		as = true
	}
}

/* 点击遮罩层 */
zhe.onclick = function() {
	// ====================================
	if (as) {
		console.log('打开')
		arr.className = "rotate225"
		mune.style.display = 'block'
		zhe.style.display = 'block';
		as = false
	} else {
		arr.className = "rotate45"
		mune.style.display = 'none'
		zhe.style.display = 'none';
		as = true
	}
}

/* 点击图片圆点切换 */
function lunbo(a) {
	switch (a) {
		case 0:
			imgBox[0].style.display = "block";
			imgBox[1].style.display = "none";
			imgBox[2].style.display = "none";
			imgBox[3].style.display = "none";
			break;
		case 1:
			imgBox[0].style.display = "none";
			imgBox[1].style.display = "block";
			imgBox[2].style.display = "none";
			imgBox[3].style.display = "none";
			break;
		case 2:
			imgBox[0].style.display = "none";
			imgBox[1].style.display = "none";
			imgBox[2].style.display = "block";
			imgBox[3].style.display = "none";
			break;
		default:
			imgBox[0].style.display = "none";
			imgBox[1].style.display = "none";
			imgBox[2].style.display = "none";
			imgBox[3].style.display = "block";
			break;
	}
}
var boby=document.getElementsByClassName("boby");
/* 点击头部菜单 */
function dian(a) {
	mune.style.display = 'none';
	zhe.style.display = 'none';
	if (a === 0) {
		boby[0].style.display='block';
		xuanzhong[0].style.cssText = "color:#ED5B00; border-bottom: 0.06rem solid #ED5B00";
		xuanzhong2[0].style.cssText = "color:#ED5B00; border: 0.026666rem solid #ED5B00;";
		
	} else {
		xuanzhong[0].style.cssText = "color: gray;border:0rem;";
		xuanzhong2[0].style.cssText = "color:black; border:0.026666rem solid gainsboro ;";
		boby[0].style.display='none';
	}
	
	if (a === 1) {
		boby[1].style.display='block';
		xuanzhong[1].style.cssText = "color:#ED5B00; border-bottom: 0.06rem solid #ED5B00";
		xuanzhong2[1].style.cssText = "color:#ED5B00; border: 0.026666rem solid #ED5B00;";
	} else {
		xuanzhong[1].style.cssText = "color: gray;border:0rem;";
		xuanzhong2[1].style.cssText = "color:black; border:0.026666rem solid gainsboro ;";
		boby[1].style.display='none';
	}
	if (a === 2) {
		boby[2].style.display='block';
		xuanzhong[2].style.cssText = "color:#ED5B00; border-bottom: 0.06rem solid #ED5B00";
		xuanzhong2[2].style.cssText = "color:#ED5B00; border: 0.026666rem #ED5B00;";
	} else {
		xuanzhong[2].style.cssText = "color: gray;border:0rem;";
		xuanzhong2[2].style.cssText = "color:black; border:0.026666rem solid gainsboro ;";
		boby[2].style.display='none';
	}
	if (a === 3) {
		boby[3].style.display='block';
		xuanzhong[3].style.cssText = "color:#ED5B00; border-bottom: 0.06rem solid #ED5B00";
		xuanzhong2[3].style.cssText = "color:#ED5B00; border: 0.026666rem solid #ED5B00;";
	} else {
		xuanzhong[3].style.cssText = "color: gray;border:0rem;";
		xuanzhong2[3].style.cssText = "color:black; border:0.026666rem solid gainsboro ;";
		boby[3].style.display='none';
	}
	if (a === 4) {
		boby[4].style.display='block';
		xuanzhong[4].style.cssText = "color:#ED5B00; border-bottom: 0.06rem solid #ED5B00";
		xuanzhong2[4].style.cssText = "color:#ED5B00; border: 0.026666rem solid #ED5B00;";
	} else {
		xuanzhong[4].style.cssText = "color: gray;border:0rem;";
		xuanzhong2[4].style.cssText = "color:black; border:0.026666rem solid gainsboro ;";
		boby[4].style.display='none';
	}
	arr.className = "rotate45";
	as = true;
}
/* 点击切换 */
function caidan(a) {
	if(a==0){
		document.getElementById('sy').src='https://m.mi.com/static/img/icon-home-selected.598ca2c8f9.png'
		document.getElementById('spansy').style.color="#ED5B00";
		header[0].style.display='block';
		juedui[0].style.display='block';
	}else{
		document.getElementById('sy').src='https://m.mi.com/static/img/icon-home.c1947eda40.png';
		document.getElementById('spansy').style.color="#999999";
		header[0].style.display='none';
		juedui[0].style.display='none';
	}
	if(a==1){
		document.getElementById('fl').src='https://m.mi.com/static/img/icon-category-selected.252b82a2d7.png';
		document.getElementById('spanfl').style.color="#ED5B00";
		boby[6].style.display='block';
		
	}else{
		document.getElementById('fl').src='https://m.mi.com/static/img/icon-category.be93273636.png';
		document.getElementById('spanfl').style.color="#999999";
		boby[6].style.display='none';
	}
	 if(a==2){
		document.getElementById('mq').src='https://m.mi.com/static/img/icon-star-selected.52a68e3664.png';
		document.getElementById('spanmq').style.color="#ED5B00";
	}else{
		document.getElementById('mq').src='https://m.mi.com/static/img/icon-star.d051789804.png';
		document.getElementById('spanmq').style.color="#999999";
	}
	if(a==3){
		document.getElementById('gwc').src='https://m.mi.com/static/img/icon-cart-selected.0099b47830.png';
		document.getElementById('spangwc').style.color="#ED5B00";
		location.href="html/shoppingcart.html"; 
	}else{
		document.getElementById('gwc').src='https://m.mi.com/static/img/icon-cart.585c3aa4d3.png';
		document.getElementById('spangwc').style.color="#999999";
	}
	if(a==4){
		document.getElementById('wd').src='https://m.mi.com/static/img/icon-user-selected.fceea5d907.png';
		document.getElementById('spanwd').style.color="#ED5B00";
		boby[5].style.display='block';
	}else{
		document.getElementById('wd').src='https://m.mi.com/static/img/icon-user.23496a0116.png';
		document.getElementById('spanwd').style.color="#999999";
		boby[5].style.display='none';
	}
}

function tiaozhuan(a){
	if(a===1){
	 location.href="html/selectshangpin.html"; 	
	}
}
function changp(a){
	if(a===0){
		location.href="html/buyphone.html";
	}
	if(a===1){
		location.href="html/buyphone.html";
	}
}
/* 窗体打开 */
window.onload = function() {
	arr.className = "rotate45";
	mune.style.display = 'none';
	zhe.style.display = 'none';
	radiotu[0].checked = true;
	dian(0);
	document.getElementById('sy').src='https://m.mi.com/static/img/icon-home-selected.598ca2c8f9.png'
	document.getElementById('spansy').style.color="#ED5B00";
}
