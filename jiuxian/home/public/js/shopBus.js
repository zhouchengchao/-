$(document).ready(function(){
	// 购物车表格功能
	function cart() {
		// 全选
		function check() {
			var checkItem = $("#cart_t").find(":checkbox:gt(0)"),
				len = checkItem.length;
				//check all start
			$("#cart_t").find(":checkbox").click(function () {

				if($(this).hasClass("check-all")){
					var checkVal = $(this).prop("checked");
					$("#cart_t").find(":checkbox").prop("checked",checkVal);
				}
				$("#cart_t").find(":checkbox:first").prop("checked",$("#cart_t").find(":checkbox:gt(0):checked").length == len);
				//check all end
				//change checked ul element background-color
                $("#cart_t").find(":checkbox:gt(0)").each(function () {
                	     var needChangeParent = $(this).parent().parent().parent().parent();
              		
              			if($(this).prop("checked") == true){
              				needChangeParent.css({"backgroundColor":"#fffbf0"});
              	   		 }else{
              				needChangeParent.css({"backgroundColor":"#ffffff"});
              	   		 }
         
              			
                });
                // checked 的checkbox 打勾tick
                $("#cart_t").find(":checkbox").each(function () {
                	if($(this).prop("checked") == true){
                		$(this).parent().find("i").css({"backgroundPosition" : "-17px -58px"});
                	}else{
                		$(this).parent().find("i").css({"backgroundPosition" : "0px -58px"});
                	}
                	
                });
              	
              	
              //change checked ul element background-color End
               // 去结算 btn can be use
               if( $("#cart_t").find(":checked").not(".check-all").length >= 1 ){
               		$("#cart_t .clearing a").css({"backgroundColor" : "#e43a3d"});
               }else{
               		$("#cart_t .clearing a").css({"backgroundColor": "#d0d0d0"});
               }	
               // 去结算 btn can be use  END 
               
               //结算 总价格     
               total();
			});//eack checkbox click event

		}
		check();
		//小计函数
		function subtotal (row) {
				var priceonly = 0,
					goodsNum = 0,
					subtotalPrice = 0;
			     priceonly = parseFloat( $( row.find(".goods_price")[0]).text() ),
				 goodsNum  = parseInt( $( row.find(":text")[0]).val() );
				 if( isNaN( goodsNum ) || (goodsNum < 1) ) { $( row.find(":text")[0]).val( 1 ); }
				 subtotalPrice = priceonly * goodsNum;
				 $(row.find(".goods_subtotal")[0]).text( subtotalPrice ); 
		}
		//小计函数end
		// 结算函数
		function total() {
			var sort = 0,
			    num = 0,
			    total = 0.00;
			sort = $("#cart_t").find(":checkbox:gt(0):checked").length;
			$("#cart_t").find(":checkbox:gt(0):checked").each(function () {
				var wrapUl = $(this).parent().parent().parent().parent(),
				    priceonly = parseFloat( $(wrapUl.find(".goods_price")[0]).text() ),
				    goodsNum  = parseInt( $(wrapUl.find(":text")[0]).val() );
				    if( isNaN( goodsNum ) || (goodsNum < 1) ) { $(wrapUl.find(":text")[0]).val( 1 ); }
				    num += goodsNum;
				    total += priceonly * goodsNum;

			});
			total = total.toFixed(2);
			// 将结算的值放在相应位置
			$("#cart_t").find(".totalBox").each(function () {
				 $(this).find(".sort-num").text(sort); 
				 $(this).find(".total-num").text(num);
				 $(this).find(".total-price-num").text(total);
			});
			// $("#cart_t").find(".c_body").each(function () {
			// 	var value = $(this).find(":text").val();
			// 	num += parseInt();
			// });

		}
		// 结算函数END
		// 
		


		// 为每项商品发放点击事件   事件委托
		$("#cart_t").find(".c_body").each(function () {

			var that = this,
				inputTXT = $( $(this).find(":text")[0] );
			// 失焦
			inputTXT.blur(function () {
				var value = parseInt( $(this).val() );

				if(isNaN(value) || (value < 1) ){ $(this).val(1); }
				if(value > 99999 ){ $(this).val(99999); }
				subtotal($(that));
				total();
				if( parseInt(inputTXT.val()) > 1 ){
					inputTXT.parent().find(".minus").css({"backgroundPosition" : "-15px -94px", "cursor" : "pointer"});
				}
			});

			// 点击事件
			$(this).click(function (event) {
				var src = event.target || event.srcElement;
				src = $(src);
				var fixedVal = parseInt( inputTXT.val());
				// 减
				if( src.hasClass("minus") ){
					 
					
					fixedVal--;
					inputTXT.val( fixedVal );

					
					if( fixedVal < 1 ){
						fixedVal = 1;
						inputTXT.val( 1 );
						src.css({"backgroundPosition" : "-15px -74px", "cursor" : "not-allowed"});

					}
					subtotal($(that));
					total();
					if( parseInt(inputTXT.val()) > 1 ){
						inputTXT.parent().find(".minus").css({"backgroundPosition" : "-15px -94px","cursor" : "pointer"});
					}
				}
				// 加
				if( src.hasClass("plus") ){
					if( fixedVal < 99998 ){
						fixedVal++;
						inputTXT.val( fixedVal );
						subtotal($(that));
						total()
					}else {
						src.css({"backgroundPosition" : "-34px -74px"});
					}
					if( parseInt(inputTXT.val()) > 1 ){
						inputTXT.parent().find(".minus").css({"backgroundPosition" : "-15px -94px", "cursor" : "pointer"});
					}
				}

				// 删除
				if( src.hasClass("c_remove") ){
					$(this).remove();
				}

			});
		});
		// 为每项商品发放点击事件   事件委托 END
		

	}

	cart();//run fn cart
	$("#cart_t").find(":checkbox:first").click();

	$(".clearing a").click(function () {
		
	 	if($(this).css("backgroundColor") == "rgb(228, 58, 61)"){
	 		window.location = "confirm.html";
	 	}
	 	if($(this).css("backgroundColor") == "rgb(228, 58, 61)"){}	
	});


	// 推荐包裹  recommendWrap
	$(".recommand_wrap .rec_head li").mouseenter(function () {
		
			
			var rec_body_item = $(".recommand_wrap .rec_body li"),
			    idx = $(".recommand_wrap .rec_head li").index(this);

			$(this).css({"color" : "#e43a3d", "borderBottomColor" :  "#e43a3d", "cursor" : "pointer"});
    		$(this).siblings().css({"color" : "#666666", "borderBottomColor" :  "transparent", });
			
			rec_body_item.eq( idx ).css({"display" : "block"});
			rec_body_item.eq( idx ).siblings().css({"display" : "none"});



	});
	$( $(".recommand_wrap .rec_head li")[1] ).mouseenter();
});