$(function() {
				var sj
				var ip='http://localhost:8001'
				$.ajax({
					url: ip+"/productservice/product/",
					type: "get",
					dataType: "json",
					async : false,
					success: function(data) {
						// data = jQuery.parseJSON(data);  //dataType指明了返回数据为json类型，故不需要再反序列化
						sj=data.data.productList;
					   way.set("productList",data.data.productList)
					   console.log(data.data.productList)
					}
				})
			
			})