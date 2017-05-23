// Mobile nav
$(document).ready(function() {
console.log("Test");
  $('.js--main-nav li a').click(function() {
    console.log("I'm In");
    var offset = $( this ).offset().left;
    var width = $(this).width();
    console.log(offset);
    offset = offset  + width/2;
    console.log("offset: " + offset);
    $('.nav-indicator').css({"display":"block","left":offset});
  });

  $('.js--navicon').click(function() {
    //Found via inspection of globa.min.js Ln6:680
    const TRANSITION_DURATION = 350;
    var nav = $('.js--main-nav');
    var nav = $('.js--mobile-nav');
    var icon = $('.js--navicon');


    // show:"fadeIn",hide:"fadeOut"
    // nav.slideDown(2000); //Times are in ms
    if (icon.hasClass('mobile-menu-btn')) {
      console.log("Yep");
      $(".center-nav").css("display", "none");
      $(".center-nav-mobile").css("display", "inline-block");

      nav.slideDown(TRANSITION_DURATION).fadeIn(500); //Times are in ms
      fadeIn:{opacity:"show";}
      icon.addClass('mobile-menu-close-btn');
      icon.removeClass('mobile-menu-btn');
    } else {
      nav.slideUp(TRANSITION_DURATION); //Times are in ms
      icon.removeClass('mobile-menu-close-btn');
      icon.addClass('mobile-menu-btn');
    }

    console.log("Slide toggled");
  });
});
