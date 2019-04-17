//run loader
var interval = setInterval(() => {
    if (document.readyState === 'complete') {
        var preloader = document.getElementById('loading');
        var docLoad = document.querySelector('main');
        preloader.classList.remove('loading');
        preloader.classList.add('loaded');
        docLoad.classList.add('body-visible');

        clearInterval(interval);
    }
}, 4977);

//load welcome section elements

var headerLogo = document.querySelector('header .logo');
var docLoad = document.querySelector('main');

if(docLoad.classList == 'body-visible'){
    anime({
        targets: headerLogo,
        opacity: 1
    })
}