const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

window.addEventListener("scroll", function() {
  const btnTopo = document.querySelector(".btn-topo");
  if (window.scrollY > 200) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
});


const icones = document.querySelectorAll('a.icones');

icones.forEach(icone => {
  icone.addEventListener('touchstart', () => {
    // Adiciona a classe 'ativo'
    icone.classList.add('ativo');

    // Remove a classe após a animação de 400ms (um pouquinho mais longo pro bounce)
    setTimeout(() => {
      icone.classList.remove('ativo');
    }, 400);
  });
});



