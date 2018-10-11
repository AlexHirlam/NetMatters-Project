

var sidebarShowing = false;

document.getElementById("showSideBar").onclick = function() {sidebarFunction()};

function sidebarFunction() {
  if (sidebarShowing === false) {
      $('body').addClass('menu-active');
      sidebarShowing = true;
    } else {
      $('body').removeClass('menu-active');
      sidebarShowing = false;
    }
}
