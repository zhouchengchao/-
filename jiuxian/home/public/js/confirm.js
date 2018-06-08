$(document).ready(function (){
	// 省市区三级连动 这个效果实现了，但并不开心，因为代码不佳
	$("#areaBox .selectArea").click(function () {
			var province_g = "",
				city_g = "",
				coutry_g = "",
			    result = "";
	 		//添加document点击事件， 用closest() 方法进行判断#areaBox 之外的事件。
	 		$(document).click(function(event){
	 			event = event || window.event;
	 			var src = event.target || event.srcElement,
	 				areaDetail = $("#areaBox .areaDetail"),
	 				areaList = $("#areaBox .areaDetail .areaList"),
	 				selectArea = $("#areaBox .selectArea");
	 			if( $(src).closest("#areaBox").length == 0 ){
	 				areaDetail.css("display" , "none");
	 				areaList.css("display" , "none");
	 				selectArea.css("borderBottomColor" , "#cacaca");

	 				// 
					 ///////////
	 				//  //
					 ///////////
	 			result = province_g + city_g + coutry_g; 
	 			if(!(result == "")){
	 				$("#areaBox .selectArea b:first").text(result);
	 			}


	 			}

	 			//
	 			
	 		});
	 		// 点击selectArea 的效果
	 		$(this).css("borderBottomColor" , "#fff");
	 		$(this).siblings(".areaDetail").css({"display" : "block" });
	 		// 在省份ul中填充li
	 		// 过程：1.通过事件源对象找到json键，获取该键的值串联成字符串，插入到下一区域的ul中
	 		// 		 2.点击#areaBox 外触发.areaDetail .areaList隐藏 ，用closest() 进行判断。
	 		$("#areaBox .areaDetail .selectedBox .selectProvince").click(function () {
	 			
	 			var html = "";
	 			for( var prop_p in pcc){

	 				if( pcc.hasOwnProperty(prop_p) ){
	 					html += "<li>" + prop_p + "</li>";

	 				}
	 			}
	 			$("#areaBox .areaDetail .provinceList ul").html(html);
	 			$("#areaBox .areaDetail .provinceList").css("display" , "block");
	 				// 在省份ul中填充li end
	 			$("#areaBox .areaDetail .provinceList ul").click( function (event) {//..
	 				var event = event || window.event,
	 					src = event.target || event.srcElement,//事件源对象
	 					html = "";
 					if( src != this ){
 						srcTxt = $(src).text();
 						province_g = srcTxt;//保存省=======
 						city_g = "";//======
 						coutry_g = ""; //====
 						$("#areaBox .selectedBox .selectProvince em").text(srcTxt);
	 					for( var prop_c in pcc[srcTxt]){
	 						if( pcc[srcTxt].hasOwnProperty(prop_c) ){ //..
	 							html += "<li>" + prop_c + "</li>";
	 						}
	 					}
	 					$("#areaBox .areaDetail .cityList ul").html(html);
	 					$("#areaBox .areaDetail .areaList").css("display" , "none");
 						$("#areaBox .areaDetail .provinceList").css("display" , "block");

 						

 					}
 					
 					
 					// 省份选择完毕
 					$("#areaBox .areaDetail .selectedBox .selectCity").click( function(){
 						$("#areaBox .areaDetail .areaList").not(".cityList").css("display" , "none");
 						$("#areaBox .areaDetail .cityList").css("display" , "block");

 						// 为.provinceL
 						$("#areaBox .areaDetail .cityList ul").click( function (event) {
 							  event = event || window.event;
 							  var src = event.target || event.srcElement,
 							  	  html_p = "";
 							  if(src != this ){
 							  	var srcTxt = $(src).text();
 							  	city_g = srcTxt; //保存市=======
 							  	coutry_g = ""//==========
 							  	var p = $("#areaBox .areaDetail .selectedBox .selectProvince em").text();
 							  	$("#areaBox .areaDetail .selectedBox .selectCity em").text(srcTxt);
 							  	var  arr_q = pcc[p][srcTxt],
 							  		 arr_q_len = pcc[p][srcTxt].length;
 							  	for(var prop_q = 0; prop_q < arr_q_len; prop_q++  ){
 							  		
 							  			html_p += "<li>" + arr_q[prop_q] + "</li>"

 							  		
 							  	}
 							  	$("#areaBox .areaDetail .countyList ul").html(html_p);


 							  	$("#areaBox .areaDetail .selectedBox .selectCounty").click(function() {
 							  		$("#areaBox .areaDetail .areaList").css("display" , "none");
 							  		$("#areaBox .areaDetail .countyList").css("display" , "block");

 							  		$("#areaBox .areaDetail .countyList ul").click(function(event){
 							  			event = event || window.event;
 							  			var src_q = event.target || event.srcElement;

 							  			if(src_q != this){
 							  				var coutry_q = $(src_q).text();
 							  				coutry_g = coutry_q;//保存区=====

 							  				$("#areaBox .areaDetail .selectedBox .selectCounty em").text( coutry_q );
 							  			}

 							  			
 							  		});

 							  	});

 							  } 
 						});
 					});
	 					

	 			});

	 		});




	 	});	
	// 省市区ENDEND
	// 
	// 支付方式
	(function () {
		var method = $(".pay_method > div");


		// hover 
		method.hover(function() {
			var w = parseInt( $(this).css("borderWidth") );
				
			$(this).addClass("onhover");
            if(!isNaN(w) && (w == 1)){
            	$(this).css({"borderColor" : "#e63936"});
            }
       	} , function () {
		
				var w = parseInt( $(this).css("borderWidth") );
				$(this).removeClass("onhover");
           	 	if(!isNaN(w) && (w == 1)){
            		$(this).css({"borderColor" : "#dddddd"});
            	}
			}
		);
	
		// hover END
		// click
		 method.click(function () {
		 	$(this).addClass("onclick");
		 	$(this).siblings().removeClass("onclick");
		 	$(this).siblings().css({"borderColor" : "#dddddd" });//点击就要移入，所以会触发hover，清除影响
		 });
		// click END
		// 
		// 对在线支付 .inline 手动触发 click
		method.eq(0).click();
	}());
	// 支付方式 end
	// 
	// 
	// 
	// 
		///////////////
		//发票图标点击事件 //
	function iClick() {
		$(".invoice i").data("single" , 0);
	$(".invoice i").click(function () {
		if( !$(this).data("single") ){
			$(this).css({"backgroundPosition" : "-17px -58px"});
			$(this).data("single", 1);
		}else {
			$(this).css({"backgroundPosition" : "0px -58px"});
			$(this).data("single", 0);
		}
			
	});
	}
	iClick();
	//发票图标点击事件
		
	
	
});