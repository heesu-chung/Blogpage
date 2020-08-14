let button = document.querySelector('#nav-img');
let menubox = document.querySelector('form');
button.onclick = function(){
    if(menubox.className == "inactive"){
        console.log("Hello");
        menubox.className = 'active';

        let extension = document.querySelector('form');
        
/*        extension.style.position = 'absolute';
        extension.style.top = '0px';
        extension.style.width = '100%';
        extension.style.height = '100vh';
        extension.style.backgroundColor = 'white';
        extension.style.zIndex = '100'; 
        extension.style.transition = '1s ease';*/
        extension.style.opacity = '1';
        extension.style.zIndex = '500';
    }
    else{
        console.log("bye");
        menubox.className = 'inactive';
    }
}


