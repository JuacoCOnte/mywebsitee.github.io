

//Loader
window.addEventListener("load", function () {
  const loader = document.getElementById("loader-wrapper");
  setTimeout(function () {
    loader.style.display = "none";
  }, 2000);
});

// //Intro
// // Agrega sombreado a los textos
  $('.parallax-text').css('text-shadow', '2px 2px 2px #000');
  $('.parallax-text1').css('text-shadow', '4px 4px 4px #000');

  function parallax() {
    const parallax = document.querySelector('.parallax');
    const parallaxInner = document.querySelector('.parallax-inner');
    const scrollPosition = window.pageYOffset;
    const innerHeight = parallaxInner.offsetHeight;
    
    parallax.style.backgroundPositionY = `${scrollPosition * 0.7}px`;
    parallaxInner.style.top = `${50 - (scrollPosition / innerHeight) * 100}%`;
  }
  
  window.addEventListener('scroll', parallax);
  
