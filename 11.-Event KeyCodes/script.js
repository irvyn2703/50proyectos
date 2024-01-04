const cajas = document.querySelectorAll('.tecla')
const container = document.querySelector('.container')

window.addEventListener('keydown', (e) => {
    container.classList.add('activate')
    cajas[0].innerHTML = e.key + "<span>event.key</span>"
    cajas[1].innerHTML = e.keyCode + "<span>event.keyCode</span>"
    cajas[2].innerHTML = e.code + "<span>event.Code</span>"
})