var tabItems = document.querySelectorAll('.employment-list a'); 

tabItems.forEach(function(tabItem){
    tabItem.addEventListener('click', function(){
        tabItems.forEach(function(tabItem){
            tabItem.classList.remove('active');
        })
        tabItem.classList.add('active');
    });
})


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
// const project = document.querySelector('.project');

// project.classList.add('fadeIn');