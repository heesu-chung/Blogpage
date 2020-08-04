let mouseCursor = document.querySelector(".cursor");
let CursorFollower = document.querySelector(".cursor-follower");

let navLinks = document.querySelectorAll(".nav-links li")
let imgLinks = document.querySelector(".main");


window.addEventListener('mousemove', cursor);
window.addEventListener('mousemove', cursorFollow);

function cursor(e){
    
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
    
    let removeCursor = document.querySelector("body");
    removeCursor.parentNode.style.cursor = none;
}

function cursorFollow(e){
    CursorFollower.style.top = e.pageY + 'px';
    CursorFollower.style.left = e.pageX + 'px';
}

navLinks.forEach(link =>{
    link.addEventListener('mouseleave', ()=>{
        mouseCursor.classList.remove("link-grow");
        link.classList.remove("hovered_link");
    });
    link.addEventListener('mouseover', ()=>{
        mouseCursor.classList.add("link-grow");
        link.classList.add("hovered_link");
    });
});
