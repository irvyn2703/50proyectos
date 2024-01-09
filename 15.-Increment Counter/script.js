const contenidos = document.querySelectorAll('.contador')

var numX = 0
var numYoutube = 0
var numFace = 0

var temp = 0

obtenerSubs();

var inter = setInterval(contar, 1)

function contar() {
    temp = temp + 11;

    contenidos.forEach(element => {
        element.innerHTML = temp
    });

    if (temp > numX){
        contenidos[0].innerHTML = numX        
    }
    if (temp > numYoutube) {
        contenidos[1].innerHTML = numYoutube
    }
    if (temp > numFace) {
        contenidos[2].innerHTML = numFace    
    }

    if ((temp > numX) && (temp > numYoutube) && (temp > numFace)) {
        clearInterval(inter)
    }
    //console.log(temp)
}

function obtenerSubs(){
    // obtener los sub
    numX = 12000
    numYoutube = 5000
    numFace = 7500
}