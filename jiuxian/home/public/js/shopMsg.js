$(document).ready(function(){
     // public_header 下拉菜单  （triangle没弄好）
       $(".dropshow_parent").mouseenter(function(){
       	   $(this).find(".myAlcohol .triangle").css({"transform":"rotate(180deg)","margin-left":'0px','margin-top':""});
           $(this).find(".myAlcohol").css({"background":"#fff"});
           $(this).find(".dropshow").show();
       });

       $(".dropshow_parent").mouseleave(function(){
       	    $(this).find(".myAlcohol .triangle").css({"transform":"rotate(0deg)",});
       	    $(this).find(".myAlcohol").css({"background":"#f2f2f2"});
       	    $(this).find(".dropshow").hide();
       	  $(this).find(".myAlcohol .triangle").css({"transform":"rotate(0deg)"});
       });
       // public_header end
       // 
       // 放大镜start
       (function(){
          var ct = document.querySelector("div.magnifier"),
        cover = document.querySelector("div.glass"),
        maxImg = document.querySelector("img.maxImg"),
        maxImgBox = document.querySelector(".maxBox");

             //移除是的镜片，放大图容器消失函数 
        function hideMaxImg(){
          cover.style.display = "none";
          maxImgBox.style.display = "none";
        }
            
            // 鼠标移除事件
        ct.onmouseout = function(event){
                event.stopPropagation();

          hideMaxImg();
        };
            
            function coverPlay() {

              ct.onmousemove = function (event) {
                event.stopPropagation();

                        //获取鼠标在container中的位置
                var coverX = event.clientX,
                    coverY = event.clientY,
                    clientRect = event.currentTarget.getBoundingClientRect(),
                    coverOffsetX = coverX - clientRect.left - 115,
                    coverOffsetY = coverY - clientRect.top - 115;
                if(coverOffsetX > (clientRect.width - 115) || coverOffsetX < 0 || coverOffsetY < 0 || coverOffsetY > (clientRect.height - 115)){
                  return false;
                }
                   //处理边界
                      if(!coverOffsetX){
                          coverOffsetX = 0;
                      };
                      if(coverOffsetX > clientRect.width-230){
                        coverOffsetX = clientRect.width - 230;
                      }
                      if(!coverOffsetY){
                        coverOffsetY = 0;
                      }
                      if(coverOffsetY > clientRect.height - 230){
                          coverOffsetY = clientRect.height - 230;
                      }


                    cover.style.display = "block";
                    cover.style.left = coverOffsetX + "px";
                    cover.style.top = coverOffsetY + "px";

                    maxImgBox.style.display = "block";


                    var percentLeft = coverOffsetX / clientRect.width,
                        percentTop = coverOffsetY / clientRect.height;

                      

                    maxImg.style.left = -Math.floor(maxImg.clientWidth * percentLeft) + "px";
                    maxImg.style.top = -Math.floor(maxImg.clientHeight * percentTop) + "px";

                     
              };
            }
            coverPlay();


          

            
       }());


         // 
            var srcImg = $(".intro .magnifier img.srcImg")[0],
                maxImg =  $(".intro .magnifier img.maxImg" )[0];

             $(".minImgBox li").each(function () {
               $(this).mouseenter(function () {
                   var src =this.getElementsByTagName("img")[0].src;
                   src = src.replace(/(\d)(?=\.(png|jpg))/g ,function(){
                     return arguments[0] + 1;
                   });
                   
                   srcImg.src = src;
                   maxImg.src = src ;

                   // 边框颜色
                   this.style.borderColor = "red";
                   $(this).siblings().css({"borderColor" : "transparent"});

               });
            });
           // END
           
             // 右商品详情、商品咨询列表
             
             var d_items = $(".d_box .d_list .d_item"),
                 h_items = $(".d_box .d_header li");

             h_items.click(function(){
                  var idx = h_items.index();
                  $(this).css({"borderTopColor":"#c33"});
                  $(this).siblings().css({"borderTopColor":"transparent"});
                  
                  d_items.eq(idx).css({"display" : "block"});

                  d_items.eq(idx).siblings().css({"display" : "none"});


             });

             $(h_items[0]).click();
           // 右商品详情、商品咨询列表END
           // 
           ////////////
           // 客户评论区  //
           (function(){
              var hList = $(".commentBox .commentHeader .commentHeaderList li");
              hList.click(function () {
                  $(this).css({"borderBottomColor" : "#c33"});
                  $(this).siblings().css({"borderBottomColor" : "transparent"});
              });
              hList[0].click();
           }());
            // 客户评论区  END//
           


            // 遮罩 加入购物车
            function goShop(){
              var backShop = $("#coverCon .converConBtn > a"),
                 // btn 为显示加入购物车的遮盖提示
                  btn = $(".introInfo .choosePosBay a.btn_addBus "),
                  coverArea = $("#coverArea"),
                  coverCon = $("#coverCon");
                $(backShop[0]).click(function () {
                  coverArea.css({"display" : "none"});
                  coverCon.css({"display" : "none"});
                });

                 btn.click(function(){
                     coverArea.css({"display" : "block"});
                  coverCon.css({"display" : "block"});
                 });
            }
            goShop();
            
            // 遮罩 加入购物车END

  });

