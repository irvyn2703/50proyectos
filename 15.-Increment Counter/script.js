const contenidos = document.querySelectorAll('.contador')

var numX = 0
var numYoutube = 0
var numFace = 0

var temp = 0

obtenerSubs();

var inter = setInterval(contar, 1)

function contar() {
    temp = temp + 10;

    if ((temp > numX) && (temp > numYoutube) && (temp > numFace)){
        clearInterval(inter)
    }

    contenidos.forEach(element => {
        element.innerHTML = temp
    });
}

function obtenerSubs(){
    // obtener los sub
    numX = 12000
    numYoutube = 5000
    numFace = 7500
}