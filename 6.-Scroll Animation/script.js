const cajasI = document.querySelectorAll('.cajasI');
const cajasD = document.querySelectorAll('.cajasD');
const triggerBottom = window.innerHeight / 5 * 3.8;
let scrollTimeout;

revisarCajas()

window.addEventListener('scroll', function () {
    revisarCajas();
});

function revisarCajas() {
    cajasI.forEach(caja => {
        var boxTop = caja.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            caja.classList.add('show');
        } else {
            caja.classList.remove('show');
        }
    });

    cajasD.forEach(caja => {
        var boxTop = caja.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            caja.classList.add('show');
        } else {
            caja.classList.remove('show');
        }
    });
}
