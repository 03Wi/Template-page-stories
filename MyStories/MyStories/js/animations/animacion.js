document.addEventListener("DOMContentLoaded", function() {
  // Seleccionar el elemento que queremos animar
  const cuadrado = document.getElementById('cuadrado');

  // Definir la animación con Anime.js
  anime({
    targets: cuadrado,
    translateX: 500, // Mover horizontalmente a 250px
    duration: 10000,
    scale: 1.5, // Escalar a 2 veces su tamaño
    loop: true,
    direction: 'alternate', // Hacer el movimiento en ambas direcciones
    rotate: '1turn',// Duración de la animación en milisegundos (1 segundo)
    easing: 'easeInOutQuart' // Tipo de animación
  });
});

