const tarjetas = document.querySelectorAll('.card');
const botones = document.querySelectorAll('.btn');

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener('click', () => {
        // Verificar si la tarjeta tiene la etiqueta 'activate'
        const tieneActivate = tarjetas[i].classList.contains('activate');
        
        if (!tieneActivate) {
            tarjetas[i].classList.add('activate');
            botones[i].classList.add('fa-circle-xmark');
            botones[i].classList.remove('fa-chevron-down');
        } else {
            tarjetas[i].classList.remove('activate');
            botones[i].classList.remove('fa-circle-xmark');
            botones[i].classList.add('fa-chevron-down');
        }
    });
}
