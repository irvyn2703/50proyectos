const accionar = document.querySelectorAll('.accionar') // elementos que se moveran
const menu = document.getElementById('mostrar')
const quitar = document.getElementById('quitar')

menu.addEventListener('click', () => {
    accionar.forEach((item) => {
        item.classList.add('activate')
    })
})

quitar.addEventListener('click', () => {
    accionar.forEach((item) => {
        item.classList.remove('activate')
    })
})