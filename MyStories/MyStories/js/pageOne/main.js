document.addEventListener("DOMContentLoaded", function() {
  // Selecciona el contenedor del carrusel
  const carousel = document.querySelector('.container__principal__der__contenido');

  // Selecciona los botones de "Next" y "Back"
  const nextButton = document.querySelector('.button__next');
  const backButton = document.querySelector('.button__back');

  // Define la función para avanzar al siguiente elemento del carrusel
  function goToNextSlide() {
    // Desplaza el carrusel hacia la derecha
    carousel.scrollBy({
      left: carousel.offsetWidth, // Desplazamiento hacia la derecha (ancho del contenedor)
      behavior: 'smooth' // Desplazamiento suave
    });

    // Verifica si se ha llegado al final del carrusel
    if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
      // Si se llegó al final, devuelve el carrusel al inicio
      carousel.scrollTo({
        left: 0, // Desplazamiento hacia el inicio
        behavior: 'smooth' // Desplazamiento suave
      });
    }
  }

  // Define la función para retroceder al elemento anterior del carrusel
  function goToPreviousSlide() {
    carousel.scrollBy({
      left: -carousel.offsetWidth, // Desplazamiento hacia la izquierda (ancho negativo del contenedor)
      behavior: 'smooth' // Desplazamiento suave
    });
  }

  // Agrega un evento al botón de "Next" para llamar a la función de avanzar al siguiente elemento
  nextButton.addEventListener('click', goToNextSlide);

  // Agrega un evento al botón de "Back" para llamar a la función de retroceder al elemento anterior
  backButton.addEventListener('click', goToPreviousSlide);
});
