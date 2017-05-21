// Mobile nav
$(document).ready(function() {
console.log("Test");
  $('.js--navicon').click(function() {
    var nav = $('.js--main-nav');
    var nav = $('.js--mobile-nav');
    var icon = $('.js--navicon i');


    // nav.slideDown(2000); //Times are in ms
    if (icon.hasClass('ion-navicon-round')) {
      console.log("Yep");
      $(".center-nav").css("display", "none");
      $(".center-nav-mobile").css("display", "inline-block");

      nav.slideDown(1000); //Times are in ms
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else {
      nav.slideUp(2000); //Times are in ms
      icon.removeClass('ion-close-round');
      icon.addClass('ion-navicon-round');
    }


    console.log("Slide toggled");
  });
});
