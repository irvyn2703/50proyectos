const pulsador = document.querySelector('.pulsador')
const lineas = document.querySelector('.item')
const menu = document.getElementById('opciones')
var estado = true // el estado true es el menu el estado false la X

verificarEstado()

pulsador.addEventListener('click', () => {
    estado = !estado
    console.log(estado)
    verificarEstado()
})

function verificarEstado () {
    if (estado == true) {
        lineas.classList.add('menu')
        lineas.classList.remove('cerrar')
        // desaparecer
        menu.classList.add('ocultar')
    }else {
        lineas.classList.add('cerrar')
        lineas.classList.remove('menu')
        // ver opciones
        menu.classList.remove('ocultar')
    }
}