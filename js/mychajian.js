var provinceArr=["四川","重庆","云南","湖南","江西"];
	var cityArr=[["成都","达州","绵阳"],
	             ["万州","沙坪坝"],
	             ["昆明","大理","丽江"],
				 ["长沙","湘潭","株洲"],
				 ["南昌","赣州","吉安"]];
	var areaArr=[[["锦江区","青羊区","金牛区","高新区"],["达县","渠县"],["绵阳市","南山"]],
	             [["五桥","百安"],["西永","西科"]],
	             [["昆明市","花城"],["洱海","苍山","下关"],["幕府","玉龙县"]],
				 [["芙蓉区","雨花区"],["雨湖区","岳塘区","湘潭县"],["石峰区","天元区"]],
				 [["西湖区","东湖区","青山湖区"],["南康区","信丰县","安远县"],["吉州区","青原区","吉安县"]]];
	
	   $().ready(function(){
	       //初始化省份
	       for(var i=0;i<provinceArr.length;i++){
	               $("#province").append("<option value='"+(i+1)+"'>"+provinceArr[i]+"</option>");   
	       }
	
	     //初始化城市
	     $("#city").append("<option value='0'>请选择城市</option>");
	       for(var i=0;i<cityArr[0].length;i++){
	               $("#city").append("<option value='"+(i+1)+"'>"+cityArr[0][i]+"</option>");
	       }
	
	     //初始化区域
	     $("#area").append("<option value='0' >请选择区域 </option>");
	       for(var i=0;i<cityArr[0][0].length;i++){
	               $("#area").append("<option value='"+(i+1)+"'>"+areaArr[0][0][i]+"</option>");
	       }
	
	
	
	       //下面进行province的change事件切换设置
	       $("#province").change(function(){
	           //先清除城市 和区域里下拉列表里的所有
	          $("#city").empty();
	          $("#area").empty();
	
	          //添加一个下标为0，value为0的potion，文字为请选择城市，在省份的下拉列表被选中时候显示
	          $("#city").append("<option value='0'>请选择城市</option>");
	
	           //设置所选择的option的当前下标，对应的cityArr里的下标，并赋值
	           var proValue=$(this).val();
	           var curCity=cityArr[proValue-1];
	           for(var i=0;i<curCity.length;i++){
	               $("#city").append("<option value='"+(i+1)+"'>"+curCity[i]+"</option>");
	           }
	       });
	
	     //下面进行city的change事件切换设置
	       $("#city").change(function(){
	         //先清除区域里下拉列表里的所有
	           $("#area").empty();
	
	         //添加一个下标为0，value为0的option，文字为请选择区域，在城市的下拉列表被选中时候显示
	           $("#area").append("<option value='0' >请选择区域 </option>");
	
	         //获取此时province和city所对应的下标
	         var proValue=$("#province").val();
	         var cityValue=$(this).val();
	         var curArea=areaArr[proValue-1][cityValue-1];
	         for(var i=0;i<curArea.length;i++){
	             $("#area").append("<option value='"+(i+1)+"'>"+curArea[i]+"</option>");
	         }
	       });
	   });          