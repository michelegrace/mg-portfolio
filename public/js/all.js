
const welcome = document.querySelector('#welcome');

welcome.addEventListener('click', () => {
    console.log('sanity');
    anime({
        targets: welcome,
        rotateX: 180,
        duration: 3000
      });
});

