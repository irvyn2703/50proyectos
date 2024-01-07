const textArea = document.getElementById('textarea')
const opciones = document.querySelector('.opciones')

textArea.addEventListener('keyup', (e) => {
    if (e.key === 'Enter'){
        obtenerPalabras()
    }
    
})

function obtenerPalabras(){
    var mostrar = ''
    var contenido = textArea.value;
    var palabras = contenido.split(',')

    // seleccion aleatoria
    var indiceAleatorio = Math.floor(Math.random() * palabras.length);

    for (let i = 0; i < palabras.length; i++) {
        if (i == indiceAleatorio) {
            mostrar += '<div class="items seleccion" style="animation-delay: ' + (0.2 * i) + 's; ">' + palabras[i] + '</div>'
        }else{
            mostrar += '<div class="items activate" style="animation-delay: ' + (0.2 * i) + 's; ">' + palabras[i] + '</div>'
        }
    }

    textArea.value = ''
    opciones.innerHTML = mostrar
    console.log(mostrar)
}