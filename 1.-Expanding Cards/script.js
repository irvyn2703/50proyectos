const paneles = document.querySelectorAll('.panel');

paneles.forEach(panel => {
    panel.addEventListener('click', () => {
        removeSeleccion()
        panel.classList.add('seleccion')
    })
})

function removeSeleccion() {
    paneles.forEach(panel => {
        panel.classList.remove('seleccion')
    })
}