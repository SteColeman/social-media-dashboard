/* Setting a variable for the stylesheet link that contains the
dartkmode theme as this is the initial colorscheme */
var themeStyle = document.getElementById("themeSwitcher");

/* this function checks to see what colourscheme is in place and decides
what to change the "href" attribute's inner html to */
function themeColor() {
  if (themeStyle.getAttribute("href") === "css/darkmode.css") {
    themeStyle.setAttribute("href", "css/lightmode.css");
  } else {
    themeStyle.setAttribute("href", "css/darkmode.css");
  }
}

/* adding a event listener to the slider switch at the top of the page. once clicked
on this calls the function themeColor that */
document.getElementById("switcher").addEventListener("click", themeColor);
