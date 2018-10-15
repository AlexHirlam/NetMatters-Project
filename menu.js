


var sidebarShowing = false;

window.onload = (sidebarShowing);

var afterStatus = false;


document.getElementById("showSideBar").onclick = function() {sidebarFunction()};
document.getElementById("overlay").onclick = function() {afterExit()};
//document.querySelector(".main"), '::after'.onclick = function() {afterExit()};

function sidebarFunction() {
  if (sidebarShowing === false) {
      $('body').addClass('menu-active');
      sidebarShowing = true;
      $('#overlay').addClass('sidebarOverlay');
      console.log(sidebarShowing);
    } else {
      $('body').removeClass('menu-active');
      sidebarShowing = false;
      console.log(sidebarShowing);
    }
}

function afterExit() {
  if (sidebarShowing === true) {
    $('#overlay').removeClass('sidebarOverlay');
    $('body').removeClass('menu-active');
    sidebarShowing = false;
    console.log(afterStatus);
  }
  console.log(afterStatus);
}
    console.log(afterStatus);
