let cerrar = document.querySelectorAll('.close')[0];
let abrir = document.querySelectorAll('.cta')[0];
let modal = document.querySelectorAll('.modal')[0];
let modalC = document.querySelectorAll('.modal-container')[0];

abrir.addEventListener('click', function (e) {
    e.preventDefault();
    modalC.style.opacity = '1';
    modalC.style.visibility = 'visible';
    modal.classList.toggle('modal-close');
});
cerrar.addEventListener('click', function () {
    modal.classList.toggle('modal-close');

    setTimeout(function () {
        modalC.style.opacity = '0';
        modalC.style.visibility = 'hidden';
    }, 600)
});

window.addEventListener('click', function (e) {
    if (e.target == modalC) {
        modal.classList.toggle('modal-close');
        setTimeout(function () {
            modalC.style.opacity = '0';
            modalC.style.visibility = 'hidden';
        }, 600)
    }

})

//EFECTOS CONTENIDO MODAL
const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');
const shoes = document.querySelectorAll('.shoe');
const gradients = document.querySelectorAll('.gradient');
const shoeBg = document.querySelector('.shoeBackground');

let prevColor = 'blue';
let animationEnd = true;

function changeSize() {
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}
function changeColor() {
    if (!animationEnd) return;
    let primary = this.getAttribute('primary');
    let color = this.getAttribute('color');
    let shoe = document.querySelector(`.shoe[color="${color}"]`);
    let gradient = document.querySelector(`.gradient[color="${color}"]`);
    let prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`);

    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');

    document.documentElement.style.setProperty('--primary', primary);

    shoes.forEach(s => s.classList.remove('show'));
    shoe.classList.add('show');

    gradients.forEach(g => g.classList.remove('first', 'second'));
    gradient.classList.add('first');
    prevGradient.classList.add('second');

    prevColor = color;
    Animation = false;

    gradient.addEventListener('animationed', () => {
        animationEnd = true;
    })
}

sizes.forEach(size => size.addEventListener('click', changeSize));
colors.forEach(c => c.addEventListener('click', changeColor));

let x = window.matchMedia("(max-width: 1000px)");

function changeHeight() {
    if (x.matches) {
        let shoeHeight = shoes[0].offsetHeight;
        shoeBg.style.height = `${shoeHeight * 0.9}px`;
    } else {
        shoeBg.style.height = "475px";
    }
}

changeHeight();

window.addEventListener('resize', changeHeight);