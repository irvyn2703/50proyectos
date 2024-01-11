const vasos = document.querySelectorAll('.vasos')
const vacio = document.querySelector('.vacio')
const agua = document.querySelector('.agua')
const contenido = document.querySelectorAll('.contenido')

for (let i = 0; i < vasos.length; i++) {
    vasos[i].addEventListener( 'click', () => {
        var temp = ((i+1) * (50/4))
        console.log(vasos[i].classList)
        //cambiar el tamaño
        vacio.style.height = (100-temp) + '%'
        agua.style.height = temp + '%'
        // contenido
        // Litros
        console.log()
        contenido[0].innerHTML = 2 - (temp * 2 / 100) + 'L'
        contenido[1].innerHTML = temp + '%'
        // activamos los vasos
        for (let j = 0; j < vasos.length; j++) {
            if (j <= i) {
                vasos[j].classList.add('activate')
            }else{
                vasos[j].classList.remove('activate')
            }
        }
    })    
}