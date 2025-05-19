<script src="https://unpkg.com/scrollreveal"></script>

    ScrollReveal().reveal('.hero', {
      delay: 200,
      distance: '50px',
      origin: 'top',
      duration: 1000,
      easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.services', {
      delay: 300,
      distance: '50px',
      origin: 'bottom',
      duration: 1000,
    });

    ScrollReveal().reveal('.card', {
      delay: 400,
      distance: '20px',
      origin: 'bottom',
      interval: 200,
      duration: 800
    });

    ScrollReveal().reveal('.steps', {
      delay: 500,
      distance: '60px',
      origin: 'left',
      duration: 1000
    });

    ScrollReveal().reveal('.fade-text', {
      opacity: 0,
      duration: 1200,
      distance: '30px',
      origin: 'bottom',
      easing: 'ease',
      interval: 200
    });
console.log("Animations actives");
document.querySelector('.buttons button').addEventListener('click', function(){
    document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
});
button.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });
  function toggleHeart(button) {
    button.classList.toggle("active");
  }