// Mobile nav
$(document).ready(function() {

  $('.js--navicon').click(function() {
    var nav = $('.js--main-nav');
    var icon = $('.js--navicon i');


    nav.slideToggle(200); //Times are in ms
    if (icon.hasClass('ion-navicon-round')) {
      console.log("Yep");
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else {
      icon.removeClass('ion-close-round');
      icon.addClass('ion-navicon-round');
    }


    console.log("Slide toggled");
  });
});
