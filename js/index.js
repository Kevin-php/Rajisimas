//barra saliente
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

let btn = document.getElementById("btn-up");
btn.addEventListener("click", function(){
  document.getElement.scrollTop=0;
})

window.addEventListener("scroll", function(){
  if(document.documentElement.scrollTop > 0){
    btn.style.display = "flex";
  }else{
    btn.style.display = "none";
  }
})