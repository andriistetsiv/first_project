
    const slides = [
        `<div class="product__slide">
           <img class="img_carousel" src="img/sectionspecial/costa.png">
        </div>`,
        `<div class="product__slide">
           <img class="img_carousel" src="img/sectionspecial/Folgers.png">
        </div>`,
        `<div class="product__slide">
           <img class="img_carousel" src="img/sectionspecial/Frontier.png">
        </div>`,
        `<div class="product__slide">
           <img class="img_carousel" src="img/sectionspecial/Green Mountain.png">
        </div>`,
        `<div class="product__slide">
           <img class="img_carousel" src="img/sectionspecial/Lavazza.png">
        </div>`,
        `<div class="product__slide">
           <img class="img_carousel" src="img/sectionspecial/melitta.png">
        </div>`,
        `<div class="product__slide">
          <img class="img_carousel" src="img/sectionspecial/monarch.png">
        </div>`
      ];

    let currentSlideIdx = 0;    

    function renderCarousel() {
      const sliderContainer = document.querySelector('.products-carousel__slides');
      sliderContainer.innerHTML = slides[currentSlideIdx];
      if (window.innerWidth > 479) {
         const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
         sliderContainer.innerHTML += slides[secondSlideIdx];
         if (window.innerWidth > 767) {
            const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
            sliderContainer.innerHTML += slides[thirdSlideIdx];
         }
      }
    }
    function next() {
      currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
      renderCarousel();
    }

    function prev() {
      currentSlideIdx = currentSlideIdx -1  < 0 ? slides.length -1 : currentSlideIdx - 1;
      renderCarousel();
    }

    const nextButton = document.querySelector('.next_button')
    nextButton.addEventListener('click', next);

    const prevButton = document.querySelector('.prev__button')
    prevButton.addEventListener('click', prev)

    renderCarousel()

    window. addEventListener('resize', renderCarousel)
