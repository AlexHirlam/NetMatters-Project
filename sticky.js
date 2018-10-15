var position = $(window).scrollTop(); // should start at 0
var navbarHeight = $('header').outerHeight();

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll > position && scroll > navbarHeight) {
    $('header').removeClass('nav-down').addClass('nav-up').removeClass('nav-top');
  } else {
    $('header').removeClass('nav-up').addClass('nav-down');
  }
  //down to up
  if ($(window).scrollTop() ==0) {
    $('header').addClass('nav-top');
    console.log("Top");
  }
  position = scroll;
});
