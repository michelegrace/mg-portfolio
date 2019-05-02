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
         duration: 500
    });

    welcomeTimeLine.add({
        targets: 'h1.mega',
        opacity: 1,
        delay: 100
    }).add({
      targets: '.intro-text',
      opacity: 1,
      delay: 75
    }).add({
        targets: '.navbar-logo span',
        opacity: 1,
        // delay: 10
      }).add({
        targets: '.navbar-menu .navbar-item',
        opacity: 1,
        delay: [75, anime.stagger(250)] 
      })
}, 5000);
};

preload();
window.addEventListener("load", function(){
  const employers = document.querySelectorAll(".employer--list a");

  const navBtn = document.querySelector('.navbar-burger');
  const mobileMenu = document.querySelector('#mainNav');
  navBtn.addEventListener('click', function(){
    let expandMenu = navBtn.classList.toggle('is-active');

    if(expandMenu){
      mobileMenu.classList.add('is-active');
    } else {
      mobileMenu.classList.remove('is-active');
    }
  });
  
  
  function tabClicks(tabClick){
    for (let i = 0; i < employers.length; i++){
      employers[i].classList.remove("active");
    }
    let activeTab = tabClick.currentTarget;
    activeTab.classList.add("active");
    tabClick.preventDefault();
    let workHistoryPane = document.querySelectorAll(".workHistory .workHistory__detail");

    for(i = 0; i < workHistoryPane.length; i++){
      workHistoryPane[i].classList.remove('active-tab');
    }

    let selectedAnchor = tabClick.currentTarget;
    let getAnchorID = selectedAnchor.getAttribute("href");
    let activeEmployer = document.querySelector(getAnchorID);
    activeEmployer.classList.add("active-tab");
  }

  for(i = 0; i < employers.length; i++){
    employers[i].addEventListener("click", tabClicks);
  }
  });