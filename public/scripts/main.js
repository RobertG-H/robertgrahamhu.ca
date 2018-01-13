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
        $('.navbar').addClass("top");
        $('.navbar-item').addClass("top");
        $('.navbar-menu').addClass("top");
        $('.navbar').removeClass("scrolled");
        $('.navbar-item').removeClass("scrolled");
    }else{
        $('.navbar').removeClass("top");
        $('.navbar-item').removeClass("top");
        $('.navbar-menu').removeClass("top");
        $('.navbar').addClass("scrolled");
        $('.navbar-item').addClass("scrolled");
    }
}
function scrollToSection(sec) {
	var scroll = $('#'+sec);
  var offset = 40;

  $('html, body').animate({
      scrollTop: $(scroll).offset().top + offset
  }, 500);

}

function closeModal(){
  $('.modal').removeClass("is-active");
}

function designProjectsModal(){
  $('.design-projects-modal').addClass("is-active");
}

function rhythmTapperModal(){
$('.rhythm-tapper-modal').addClass("is-active");
}
