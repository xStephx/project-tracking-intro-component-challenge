const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const hamburgerIcon = document.getElementById('hamburger-icon');

hamburger.addEventListener('click', () => {
  const isHidden = mobileMenu.classList.contains('hidden');
  if (isHidden) {
    mobileMenu.classList.remove('hidden');
    hamburgerIcon.src = 'assets/images/icon-close.svg';
    mobileMenu.classList.add('animate__animated', 'animate__fadeInDownBig');
    setTimeout(() => {
      mobileMenu.classList.remove('animate__fadeInDownBig'); 
    }, 1000);
  } else {
    hamburgerIcon.src = 'assets/images/icon-hamburger.svg';
    mobileMenu.classList.add('animate__animated', 'animate__fadeOutUpBig');
    setTimeout(() => {
      mobileMenu.classList.add('hidden'); 
      mobileMenu.classList.remove('animate__fadeOutUpBig');
    }, 500);
  }
});
