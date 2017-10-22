jQuery(document).ready(function(){
 $(".menu-list li").on('click',function(e) {
   $(".menu-list li").removeClass("highlight");
   $(this).addClass("highlight");
 })
});
