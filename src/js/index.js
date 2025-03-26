function activateMobileMenu() {
  const burger = document.getElementById("burger");
  const headerMenu = document.querySelector(".header-menu");
  const preContainer = document.querySelector(".pre-container")
  let scrollPosition = 0;

  function burgerToggle() {
    if (headerMenu.classList.contains("active")) {
      // Fechar o menu e restaurar a posição original do scroll
      document.body.style.position = "";
      document.body.style.top = "";
      preContainer.style.position = "";
      window.scrollTo(0, scrollPosition);
    } else {
      // Salvar a posição do scroll antes de abrir o menu
      scrollPosition = window.scrollY;
      document.body.style.position = "fixed";
      preContainer.style.position = "fixed";
      document.body.style.top = `-${scrollPosition}px`;
    }

    headerMenu.classList.toggle("active");
  }

  burger.addEventListener("click", burgerToggle);
}

activateMobileMenu();


function scrollEffects() {
  const header = document.querySelector(".pre-container");
  const introducao = document.querySelector(".introducao");

  function scrollAnimate() {
    const introducaoHeight = introducao.getBoundingClientRect().height * 0.9;
    if (window.scrollY > introducaoHeight && window.innerWidth < 750) {

      header.classList.add("scroll-animate");

      
    } else if (window.scrollY > introducaoHeight && window.innerWidth > 750) {
      header.classList.add("scroll-animate");
      document.querySelector('header').style.background = "#141414e3"
    } else {
      header.classList.remove("scroll-animate");
      document.querySelector('header').style.background = "transparent"
    }
  }

  window.addEventListener("scroll", scrollAnimate);
}

scrollEffects();

function textAnimation() {
  const developer = document.getElementById('developer');
  const detail = document.getElementById('detail');
  const uxDesigner = document.getElementById('ux-designer');
  const location = document.getElementById('location');
  const image = document.querySelector('.text-wrapper img');
  const elements = [developer, detail, uxDesigner, location];

  image.style.opacity = '0';

  const originalTexts = elements.map(e => e.innerText);
  elements.forEach(e => e.innerText = '');

  function animateText(index) {
    if (index >= elements.length) {
      return;
    }

    let e = elements[index];
    let text = originalTexts[index]; 

    new TypeIt(e, {
      strings: text,
      speed: 100,
      waitUntilVisible: true,
      cursor: false,
    })
    .go()
    .exec(() => {
      // When uxDesigner finishes, add the image
      if (e === uxDesigner) {
        let img = document.getElementById('mark');
        setTimeout(() => {
          img.style.opacity = "0"; 
          img.style.transition = "opacity 0.5s ease-in-out"; 

          setTimeout(() => {
            img.style.opacity = "1";
          }, 50);
        }, 50);
      }

      setTimeout(() => {
        animateText(index + 1);
      }, 100); 
    });
  }

  // Start the animation sequence
  animateText(0);
}




textAnimation();
