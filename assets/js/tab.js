var employers = document.querySelectorAll('.employer--list a'), i;

employers.forEach((employer) => {
    employer.addEventListener('click', () => {
      employer.classList.toggle('active');
    });
  });