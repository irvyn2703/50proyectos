const respuesta = document.querySelector('.respuesta')
const btn = document.getElementById('btn')

btn.addEventListener('click', generarBroma)

generarBroma()

// funcion async para que no afecte la ejecucion
async function generarBroma() {
    respuesta.classList.remove('activate')

    const config = {
    headers: {
        Accept: 'application/json',
    },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json()

    //console.log(data)

    respuesta.innerHTML = data.joke


    respuesta.classList.add('activate')
}