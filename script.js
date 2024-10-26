const btnYes = document.getElementById('btnYes');
const btnNo = document.getElementById('btnNo');

btnYes.addEventListener('click', () => {
    alert('SABIA QUE ME AMABAS SEREMOS FELICES POR MUCHO TIEMPO TE AMOOO');
});

btnNo.addEventListener('click', () => {
    const x = Math.random() * (window.innerWidth - 150); // 150 es el ancho del botón
    const y = Math.random() * (window.innerHeight - 50); // 50 es el alto del botón

    btnNo.style.position = 'absolute';
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
});
