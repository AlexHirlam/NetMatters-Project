
    // Cookies:

var cookieShowing = true
document.getElementById("accept").onclick = function() {closeCookie()};

function closeCookie() {
  if (cookieShowing === true) {
    $('#cookies').addClass('cookieHide');
    cookieShowing = false;
    console.log(cookieShowing)
  }
}

console.log(cookieShowing);
