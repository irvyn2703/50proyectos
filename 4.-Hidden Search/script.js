const buscar = document.getElementById('busqueda')
const entrada = document.querySelectorAll('.entrada')
const boton = document.getElementById('activarBtn')
var estado = true

boton.addEventListener('click', () => {
    if (estado == true) {
        entrada.forEach(element => {
            element.classList.add('activate')
        });
        boton.classList.add('activate')
        estado = false    
    }else{
        entrada.forEach(element => {
            element.classList.remove('activate')
        });
        boton.classList.remove('activate')
        estado = true
    }    
})