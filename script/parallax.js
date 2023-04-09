window.addEventListener('scroll', function() {
  let offset = window.pageYOffset;
  let parallax = document.querySelector('.parallax');

  parallax.style.backgroundPositionY = offset * 0.7 + 'px';
});
