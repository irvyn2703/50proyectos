const left = document.querySelector('.left');
const right = document.querySelector('.right');


left.addEventListener('mouseenter', () => {
    if (isMouseInsideScreen()) {
        left.classList.add('activate');
        left.classList.remove('inactivate');
        right.classList.add('inactivate');
        right.classList.remove('activate');
    }else{
        left.classList.remove('activate');
        left.classList.remove('inactivate');
        right.classList.remove('activate');
        right.classList.remove('inactivate');
    }
});

left.addEventListener('mouseleave', () => {
    if (isMouseInsideScreen()) {
        left.classList.add('inactivate');
        left.classList.remove('activate');
        right.classList.add('activate');
        right.classList.remove('inactivate');
    }else{
        left.classList.remove('activate');
        left.classList.remove('inactivate');
        right.classList.remove('activate');
        right.classList.remove('inactivate');
    }
});

right.addEventListener('mouseenter', () => {
    if (isMouseInsideScreen()) {
        right.classList.add('activate');
        right.classList.remove('inactivate');
        left.classList.add('inactivate');
        left.classList.remove('activate');
    }else{
        left.classList.remove('activate');
        left.classList.remove('inactivate');
        right.classList.remove('activate');
        right.classList.remove('inactivate');
    }
});

right.addEventListener('mouseleave', () => {
    if (isMouseInsideScreen()) {
        right.classList.add('inactivate');
        right.classList.remove('activate');
        left.classList.add('activate');
        left.classList.remove('inactivate');
    }else{
        left.classList.remove('activate');
        left.classList.remove('inactivate');
        right.classList.remove('activate');
        right.classList.remove('inactivate');
    }
});

function isMouseInsideScreen() {
    // Verificar si el mouse está dentro de la pantalla
    return event.clientX >= 0 && event.clientY >= 0 && event.clientX <= window.innerWidth && event.clientY <= window.innerHeight;
}