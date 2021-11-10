var xuanzhong=document.getElementsByClassName("dian");
			var xiahua1=document.getElementsByClassName("status-other1");
			var xiahua2=document.getElementsByClassName("status-other2");
			var xiahua3=document.getElementsByClassName("status-other3");
			var xiahua4=document.getElementsByClassName("status-other4");
			var sp=document.querySelector("#sp1");
			var pj=document.querySelector("#pj1");
			var xq=document.querySelector(".youhuixq");
			var xq2=document.querySelector(".youhuixq-body");
			var canshu=document.getElementsByClassName("canshu");
			var goumai=document.querySelector(".goumai");
			/* 头部切换 */
			function shang(a){
				if(a===0){
					xuanzhong[0].style.color="#ff5934"; 
					xiahua1[0].style.display="block"; 
					sp.scrollIntoView(false);
				}else{
					xuanzhong[0].style.color="#3c3c3c";
					xiahua1[0].style.display="none"; 
				}
				if(a===1){
					xuanzhong[1].style.color="#ff5934"; 
					xiahua2[0].style.display="block"; 
					pj.scrollIntoView(false);
				}else{
					xuanzhong[1].style.color="#3c3c3c";
					xiahua2[0].style.display="none"; 
				}
				if(a===2){
					xuanzhong[2].style.color="#ff5934"; 
					xiahua3[0].style.display="block"; 
				}else{
					xuanzhong[2].style.color="#3c3c3c";
					xiahua3[0].style.display="none"; 
				}
				if(a===3){
					xuanzhong[3].style.color="#ff5934"; 
					xiahua4[0].style.display="block"; 
				}else{
					xuanzhong[3].style.color="#3c3c3c";
					xiahua4[0].style.display="none"; 
				}
				
			}
			window.onload=function(){
				shang(0);
				yincang(0);
				yincang(3);
				yincang(5);
				yincang(8);
				yincang(9);
			}
			function fanhui(a){
				if(a===0){
					location.href="../index.html";
				}
			}
			function shouye(){
				location.href="../index.html"
			}
			
			function yincang(a){
				if(a===0){
					xq.style.display="none";
					xq2.style.display="none";
				}
				if(a===1){
					xq.style.display="block";
					xq2.style.display="block";
				}
				if(a===2){
					xq.style.display="block";
					canshu[0].style.display="block";
				}
				if(a===3){
					xq.style.display="none";
					canshu[0].style.display="none";
				}
				if(a===4){
					xq.style.display="block";
					goumai.style.display="block";
				}
				if(a===5){
					xq.style.display="none";
					goumai.style.display="none";
				}
				if(a===6){
					xq.style.display="block";
					canshu[1].style.display="block";
				}
				if(a===7){
					xq.style.display="block";
					canshu[2].style.display="block";
				}
				if(a===8){
					xq.style.display="none";
					canshu[1].style.display="none";
				}
				if(a===9){
					xq.style.display="none";
					canshu[2].style.display="none";
				}
				
			}
			