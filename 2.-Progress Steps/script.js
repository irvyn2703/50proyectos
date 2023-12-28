const progress = document.getElementById('barra')
const btnPrev = document.getElementById('prev')
const btnNext = document.getElementById('next')
const circulos = document.querySelectorAll('.circulo')

let posicion = 0


btnNext.addEventListener('click', () => {
    posicion++

    if (posicion > circulos.length - 1) {
        posicion = circulos.length - 1
    }

    actualizarPosicion()
    activarBtns()
})

btnPrev.addEventListener('click', () => {
    posicion--

    if (posicion < 0) {
        posicion = 0
    }

    actualizarPosicion()
    activarBtns()
})

function actualizarPosicion(){
    // actualizar circulo
    circulos.forEach((circulo) => {
        circulo.classList.remove('seleccion')
    })
    for (let i = 0; i <= posicion; i++) {
        circulos[i].classList.add('seleccion')
    }

    // actializar barra
    var porcentaje = posicion * (100/(circulos.length - 1))
    if (porcentaje > 98) {
        porcentaje = 98
    }
    progress.style.width = porcentaje + '%'
}

function activarBtns(){
    if(posicion > 0){
        btnPrev.disabled = false
    }else{
        btnPrev.disabled = true
    }

    if (posicion == circulos.length - 1) {
        btnNext.disabled = true
    }else{
        btnNext.disabled = false
    }
}