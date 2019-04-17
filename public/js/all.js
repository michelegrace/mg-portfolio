// //run loader
// var loadScreen = setInterval(() => {
//     if (document.readyState === 'complete') {
//         var preloader = document.getElementById('loading');
//         var docLoad = document.querySelector('main');
//         var headerLogo = document.querySelector('header .logo');
//         docLoad.classList.remove('body-hidden');
//         docLoad.classList.add('body-visible');
//         preloader.classList.remove('loading');
//         preloader.classList.add('loaded');
//         headerLogo.classList.add('fadeInElem');
//         clearInterval(loadScreen);
//     }
// }, 4977);
var employers = document.querySelectorAll('.employer--list a'), i;

employers.forEach((employer) => {
    employer.addEventListener('click', () => {
      employer.classList.toggle('active');
    });
  });