let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".nav-links li")
let imgLinks = document.querySelector(".main");


window.addEventListener('mousemove', cursor);

function cursor(e){
    console.log(e);
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
    mouseCursor.style.zIndex = '1000';
    let removeCursor = document.querySelector("body");
    removeCursor.parentNode.style.cursor = none;
}