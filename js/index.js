var navbar = document.getElementById("logo");
var sticky = logo.offsetTop;

function stick() {
  if (window.pageYOffset >= sticky) {
    for child in logo.parentElement.childNodes:
      child.classList.add("sticky");
    logo.parentElement.classList.add("stickyContainer");
  } else {
    for child in logo.parentElement.childNodes:
      child.classList.add("sticky");
    logo.parentElement.classList.add("stickyContainer");
  }
} 

window.onscroll = () => (stick())};
