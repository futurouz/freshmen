$(function(){

  //Scroll event
  $(window).scroll(function(){
    var scrolled = $(window).scrollTop();
    if (scrolled > 1000) $('.goToTop').fadeIn('slow');
    if (scrolled < 1000) $('.goToTop').fadeOut('slow');
  });

  //Click event
  $('.goToTop').click(function () {
    $('html, body').animate({
        scrollTop: $("#contents").offset().top
      }, 1000);
    });

});
