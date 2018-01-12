$(document).ready(function(){
  if($('.navbar').length > 0){
      $(window).on("scroll load resize", function(){
          checkScroll();
      });
  }
});

/**
 * Listen to scroll to change header opacity class
 */

function checkScroll(){
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px
    if($(window).scrollTop() < startY){
        $('.navbar').addClass("scrolled");
        $('.navbar-item').addClass("scrolled");
        $('.navbar-menu').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
        $('.navbar-item').removeClass("scrolled");
        $('.navbar-menu').removeClass("scrolled");
    }
}
