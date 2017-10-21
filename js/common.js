jQuery(document).ready(function(){
  $('#view-source').click(function(){
    //alert('Hi');
    $(window).scrollTop( $("#top").offset().top );
		return false;
	});
});
