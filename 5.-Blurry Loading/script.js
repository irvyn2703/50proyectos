const texto = document.querySelector('.loadText')
const fondo = document.querySelector('.backG')

var porcentaje = 0

var inter = setInterval(carga, 30)

function carga() {
    porcentaje++;

    if (porcentaje > 99){
        clearInterval(inter)
        texto.classList.add('activate')
    }

    fondo.style.filter = 'blur(' + (100/5 - porcentaje/5) + 'px)'
    texto.innerHTML = porcentaje + "%"
}