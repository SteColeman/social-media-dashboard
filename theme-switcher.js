
var themeStyle = document.getElementById("themeSwitcher");

function themeColor() {
  if (themeStyle.getAttribute("href") === "css/darkmode.css"){
    themeStyle.setAttribute("href", "css/lightmode.css");
  }else { themeStyle.setAttribute("href", "css/darkmode.css");
  }
}

 document.getElementById("switcher").addEventListener("click", themeColor);
