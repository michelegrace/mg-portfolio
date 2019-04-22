// //run loader

function preload() {
  setTimeout( () => {
    if (document.readyState === 'complete') {
    var preloader = document.getElementById('loading');
    var docLoad = document.querySelector('main');
    docLoad.classList.remove('body-hidden');
    docLoad.classList.add('body-visible');
    preloader.classList.remove('loading');
    preloader.classList.add('loaded');
    };
  }, 4977);

  setTimeout( ()=> {

    var welcomeTimeLine = anime.timeline({
        easing: 'linear',
        duration: 1000
    });

    welcomeTimeLine.add({
        targets: ['h1.mega', '.intro-text'],
        opacity: 1,
        delay: anime.stagger(100)
    }).add({
        targets: '.navbar-brand span',
        opacity: 1,
        delay: 100
      }).add({
        targets: '.navbar-menu .navbar-item',
        opacity: 1,
        delay: [220, anime.stagger(250)] 
      })
}, 5000);
};

preload();