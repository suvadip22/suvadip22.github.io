$(document).ready(function() {
  $(".filter-list .filter-item").on('click',function(e) {
    var filterType = $(this).attr("value");
    $('.filter-section').removeClass('is-active');
    $('#'+filterType+'.filter-section').addClass('is-active');
  });
});