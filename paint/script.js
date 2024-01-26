document.addEventListener('DOMContentLoaded', function () {
    const lienzo = document.getElementById('lienzo');
    const btnPintar = document.getElementById('btnPintar');
    const btnBorrar = document.getElementById('btnBorrar');
    let isMouseDown = false;
    let isPintar = true;

    btnPintar.addEventListener('click', function () {
        isPintar = true;
        lienzo.style.cursor = 'crosshair';
    });

    btnBorrar.addEventListener('click', function () {
        isPintar = false;
        lienzo.style.cursor = 'cell';
    });

    lienzo.addEventListener('mousedown', function () {
        isMouseDown = true;
    });

    lienzo.addEventListener('mouseup', function () {
        isMouseDown = false;
    });

    lienzo.addEventListener('mousemove', pintar);

    function pintar(evento) {
        if (!isMouseDown) return;

        const x = evento.clientX - lienzo.getBoundingClientRect().left;
        const y = evento.clientY - lienzo.getBoundingClientRect().top;

        const pixel = document.createElement('div');
        pixel.classList.add('pixel');

        if (isPintar) {
            pixel.style.backgroundColor = '#000';
        } else {
            pixel.style.backgroundColor = '#fff'; // Color blanco para borrar
        }

        pixel.style.left = `${x}px`;
        pixel.style.top = `${y}px`;

        lienzo.appendChild(pixel);
    }
});
