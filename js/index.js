var navbar = document.getElementById("logo");
var sticky = logo.offsetTop;

function stick() {
  if (window.pageYOffset >= sticky) {
    logo.parentElement.childNodes.forEach(child => {
      child.classList.add("sticky");
    });
    logo.parentElement.classList.add("stickyContainer");
  } else {
    logo.parentElement.childNodes.forEach(child => {
      child.classList.remove("sticky");
    });
    logo.parentElement.classList.remove("stickyContainer");
  }
}

window.onscroll = () => {
  stick();
};
