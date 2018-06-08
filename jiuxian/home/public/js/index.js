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
       
      
      


      //carousel start
        
        


      function playBullet(){
      	 var $imgct=$(".carousel .img-ct ");
         var $bulletct=$(".carousel .bullet");
         var intervalNum;
         $bulletct.find("li").each(function(){
             $(this).mouseenter(function(){
                  //为每一个bullet li 设置data,用来下面判断
                   //$(this).data("data","1");  .....没必要----没判断效果
                  // $bulletct.find("li").not(this).data("data","0");...没必要
                   //backgroundColor 变化
                   $bulletct.find("li").css({"background":"#000"});
                   $(this).css({"background":"#f00"});
                   //
                   var index=$bulletct.find("li").index(this);
                   $imgct.find("li").eq(index).show();
                   $imgct.find("li").not($imgct.find("li").eq(index)).hide();
                   //判断
                   var data=$(this).data("data");
                   if(intervalNum!="undefined"){
                       clearInterval(intervalNum);
                   };
                   
                        // 后轮番
                         var index2=$bulletct.find("li").index(this)+1;
                         if(index2===7){
                          index2=0;
                       }

                         intervalNum=window.setInterval(function(){
           
                        $bulletct.find("li").css({"background":"#000"});
                        $bulletct.find("li").eq(index2).css({"background":"#f00"});
          
                       $imgct.find("li").eq(index2).show();
                       $imgct.find("li").not($imgct.find("li").eq(index2)).hide();
                       index2+=1;
                      if(index2===7){
                          index2=0;
                       }
            
                 },1000);
                   
                 


             });
         });
          
      	/*$bulletct.find("li").hover(
      	function () {//over
      		// window.clearInterval(backInterval);
      	    $bulletct.find("li").css({"background":"#000"});
            $(this).css({"background":"#f00"});
            var index=$bulletct.find("li").index(this);
            $imgct.find("li").eq(index).show();
            $imgct.find("li").not($imgct.find("li").eq(index)).hide();
           
        },
        function () {//out
           var index2=$bulletct.find("li").index(this)+1;
           window.setInterval(function(){
           
            $bulletct.find("li").css({"background":"#000"});
            $bulletct.find("li").eq(index2).css({"background":"#f00"});
          
            $imgct.find("li").eq(index2).show();
            $imgct.find("li").not($imgct.find("li").eq(index2)).hide();
            index2+=1;
            if(index2===7){
            	index2=0;
            }
            
            },2000);
        }

        );*/
  
          	
         
       
      };
      playBullet();
      
      $(".carousel .bullet").find("li:first-child").mouseenter();

//bullet里的第一个里，给他手动触发mouseenter事件
 
     
     // var $firstLi = document.getElementsByClassName("bullet")[0].getElementsByTagName('li')[0];

     //  var eventN = document.createEvent("HTMLEvents");
     //  eventN.initEvent('mouseenter',true,true);
     // eventN.eventType = "message";
     //  if ( $firstLi.fireEvent ) {
     //      $firstLi.fireEvent(eventN);
        

     //  }else if($firstLi.dispatchEvent){
     //      $firstLi.dispatchEvent(eventN);
     //  }


 //
 //     
 //          
 //               
 //                    
 //                         
 //                              
 //                                        
       //疯狂抢购
       function shopNav(){
      
       	   var navli=$(".indexTabBox ul li");
       	   var contentli=$(".indexTabContent .contentContainer .contentItem");
       	 
       	   navli.hover(function () {

       	   	   var idx=navli.index(this);
       	   	   contentli.hide();
               contentli.eq(idx).show();
               
       	   });
       }; 
      shopNav();

//sideBAR add
  function shopAd(){
     var tittle=$(".adad ul.tittle").find("li");
     var content=$(".adad ul.content").find("li");
     content.hide();
     content.eq(0).show();
     tittle.hover(function(){
         var idx=tittle.index(this);
         content.hide();
         content.eq(idx).show();


     });

  };
  shopAd();


//小型ppt模板  --推荐
function pptex(selector){
  if(selector!="undefined"){
    var pptct=$(selector+" ul.pptimgct").find("li");
   var pptbullet=$(selector+" ul.pptbullet").find("li");
   var idx=0,len=pptbullet.length-1;
   setInterval(function(){
       if(idx<=len){
           pptbullet.eq(idx).css("background","lightblue");
           pptbullet.not(pptbullet.eq(idx)).css("background","lightgray");
          

           pptct.hide();
           pptct.eq(idx).show();
           idx++;
       }else{
           idx=0;
       }
   },1500);
  }
   

  
};

//t1   ppt
setTimeout(function(){
  pptex(".t1");
},0);

//t2 ppt
setTimeout(function(){
  pptex(".t2");
},1000);



setTimeout(function(){
  pptex(".goodppt");
});





});



