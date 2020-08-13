let portfolioList = document.querySelectorAll(".content");

let img = document.querySelector(".myImg");

let img1 = 'img';

portfolioList.forEach(e => {
    e.addEventListener('mouseover', ()=>{
        console.log("mouse-on");
        
        img.style.backgroundImage = 'url("img/Background_img.png");';
        img.style.zIndex = '50';
        img.style.width = '100px';
        img.style.height = '100px';
        img.style.top = '0';
    });
    e.addEventListener('mouseleave', ()=>{
       //e.classList.remove = "portfolio-img-on";
    });
});
