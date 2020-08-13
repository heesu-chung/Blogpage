let fadeOut = document.querySelector('.anima');

setTimeout(opacity, 600);

function opacity() {
    fadeOut.style.transition = '1s ease-in-out';
    fadeOut.style.opacity = '.0';
    fadeOut.style.width = '0';
    fadeOut.style.zIndex='0';
}
