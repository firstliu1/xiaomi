//光标获取事件
	function message() {
		$(".no-pwd").css("display", "none")
		$(".no-name").css("display", "none")
	}
	$(function() {
		// $("#denlu").attr("disabled",true);		
		//表单禁用
		$(".form").submit(function(e) {
			e.preventDefault();
		})
		way.set("longdenlu", {
			email: '999@126.com',
			pwd: '999'
		})
		//登录
		$(".submit").click(() => {
			var checked = $("#checked").prop("checked");
			if (!checked) {
				$(".clause").css("display", "block")
				setInterval(function() {
					$(".clause").css("display", "none")
				}, 5000);
				return;
			}

			var neww = way.get("longdenlu")
			console.log(neww)
			var ip = "http://localhost:8002"
			$.ajax({
				url: ip + "/ucenterservice/user/login",
				data: JSON.stringify(neww),
				type: "post",
				dataType: "json",
				contentType: "application/json;charset=utf-8",
				async: false,
				success: function(data) {
					console.log(data.success)
					//判断是否登录成功，成功就把token存到cookie里
					if (data.success === true) {
						console.log(data)
						$.cookie('userid', data.data.token);
						var locateCity = $.cookie('userid');
						//跳转网页
						window.location.href = "index.html"
						// console.log(locateCity)
					} else {
						//否则显示密码错误
						if (data.message === '密码错误') {
							$(".no-pwd").css("display", "block")
						} else {
							//显示手机号错误
							$(".no-name").css("display", "block")
						}
					}

				}
			})

		})
	})
	function dian(a){
		if(a===0){
			location.href="../index.html";
		}
	}