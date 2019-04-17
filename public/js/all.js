// // have events happen on scroll. 

// //first have projects fade in on view.


// let scrollPosition = 0;
// const projects = document.querySelectorAll('.project');


// function position(){
//     let windowY = window.scrollY;
//     if (windowY < scrollPosition){
//         console.log(scrollPosition);
//         projects.forEach((project) => {
//             project.classList.add('none');
//         })
        
//     } else {
//         projects.forEach((project) => {
//             project.classList.add('else');
//         })
//     }
//     scrollPosition = windowY;
// }
// console.log(window.scrollY);
// window.addEventListener('scroll', position);

const project = document.querySelector('.project');

project.classList.add('fadeIn');
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
// hide non-active employment tabs

