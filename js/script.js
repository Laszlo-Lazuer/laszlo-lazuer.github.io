// Mobile nav
$(document).ready(function() {
console.log("Test");
var linkActiveSelector='selected',mainNavLink='.js--main-nav li a',
navActiveSelector='.js--main-nav li a.selected', navIndicator='.nav-indicator',
indicatorDefault = 2500;

$(mainNavLink).click(function() {
  var offset = $(this).offset().left, anchors = $(mainNavLink),
  indicatorDefault = 2500, width;

  function offsetCalc(elem){
    width = $(elem).outerWidth();
    offset = offset  + (width/2);
    $(navIndicator).css({"display":"block","left":offset});
  }

  if ($(this).hasClass(linkActiveSelector)){
    $(mainNavLink).removeClass(linkActiveSelector);
    $(navIndicator).css({"display":"none","left":indicatorDefault});
  } else {
    offsetCalc($(this));
    $(mainNavLink).removeClass(linkActiveSelector);
    $('.js--search span').removeClass('search-selected');
    $(this).addClass(linkActiveSelector);
  }
});

  $('.js--main-nav li a').click(function() {
    console.log("I'm In");
    var offset = $( this ).offset().left;
    var width = $(this).width();
    var anchors = $('.js--main-nav li a');
    var previous;
    var indicatorDefault = 2500;

    console.log(offset);
    offset = offset  + width/2;
    console.log("offset: " + offset);
    $('.nav-indicator').css({"display":"block","left":offset});
      $('.js--main-nav li a').removeClass("selected");
      $(this).addClass('selected');
  });

  $('.js--navicon').click(function() {
    const TRANSITION_DURATION = 350;
    var nav = $('.js--main-nav');
    var nav = $('.js--mobile-nav');
    var icon = $('.js--navicon');

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

  // Logic to add or remove the search icon active class
$('.js--search').click(function() {
 if ($('.js--search span').hasClass('search-selected')) {
   $('.js--search span').removeClass('search-selected');
} else {
  width = $('.js--search span').outerWidth();
  var offset = $(this).offset().left  + (width/2);
  console.log(offset);
  $('.nav-indicator').css({"display":"block","left":offset});
  $(mainNavLink).removeClass(linkActiveSelector);
  $('.js--search span').addClass('search-selected');
}
});

$(window).resize(function(){
  if ($(navActiveSelector).outerWidth() > 0){
  var width = $(navActiveSelector).outerWidth();
  var offset = $(navActiveSelector).offset().left  + (width/2);
  $(navIndicator).css({"display":"block","left":offset});
  } else {
    $(mainNavLink).removeClass(linkActiveSelector);
    $('.js--search span').removeClass('search-selected');
    $(navIndicator).css({"display":"none","left":indicatorDefault,"visibility":"none"});
  }
});

});
