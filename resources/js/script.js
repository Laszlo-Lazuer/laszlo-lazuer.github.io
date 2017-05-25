// Mobile nav
$(document).ready(function() {
  var linkActiveSelector='selected',mainNavLink='.js--main-nav li a',
  navActiveSelector='.js--main-nav li a.selected', navIndicator='.nav-indicator',
  indicatorDefault = 2500;

  $(mainNavLink).click(function() {
    var offset = $(this).offset().left, anchors = $(mainNavLink),
    indicatorDefault = 2500, width;

    if ($(this).hasClass(linkActiveSelector)){
      $(mainNavLink).removeClass(linkActiveSelector);
      $(navIndicator).css({"display":"none","left":indicatorDefault});
    } else {
      width = $(this).outerWidth();
      offset = offset  + (width/2);
      $(navIndicator).css({"display":"block","left":offset});
      // offsetCalc($(this));
      $(mainNavLink).removeClass(linkActiveSelector);
      $('.js--search span').removeClass('search-selected');
      $(this).addClass(linkActiveSelector);
    }
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
     $(navIndicator).css({"display":"none","left":indicatorDefault,"visibility":"none"});

  } else {
    width = $('.js--search span').outerWidth();
    var offset = $(this).offset().left  + (width/2);
    console.log(offset);
    if ($(window).width() > 767){
    $('.nav-indicator').css({"display":"block","left":offset});
    }
    $(mainNavLink).removeClass(linkActiveSelector);
    $('.js--search span').addClass('search-selected');
  }
  });

  $(window).resize(function(){
    if ($(window).width() > 767 && ($(navActiveSelector).hasClass(linkActiveSelector))){
    var width = $(navActiveSelector).outerWidth();
    var offset = $(navActiveSelector).offset().left  + (width/2);
    $(navIndicator).css({"display":"block","left":offset});
    } else if ($(window).width() > 767 && (($('.js--search span').hasClass('search-selected')))) {
      var width = $('.js--search span').outerWidth();
      var offset = $('.js--search span').offset().left  + (width/2);
      $(navIndicator).css({"display":"block","left":offset})
    }
    else {
      $(mainNavLink).removeClass(linkActiveSelector);
      $('.js--search span').removeClass('search-selected');
      $(navIndicator).css({"display":"none","left":indicatorDefault,"visibility":"none"});
    }
  });
});
