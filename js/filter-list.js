$(document).ready(function() {
  $(".filter-list .filter-item").on('click',function(e) {
    var filterType = $(this).attr("value");
    $(".filter-list .filter-item").removeClass('active-filter');
    $(this).addClass('active-filter');
    $('.filter-section').removeClass('is-active');
    $('#'+filterType+'.filter-section').addClass('is-active');
  });
});