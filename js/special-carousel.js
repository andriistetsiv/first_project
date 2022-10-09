
    const slides = [
        `<div class="product__slide">
           <img src="img/sectionspecial/costa.png">
        </div>`,
        `<div class="product__slide">
           <img src="img/sectionspecial/Folgers.png">
        </div>`,
        `<div class="product__slide">
           <img src="img/sectionspecial/Frontier.png">
        </div>`,
        `<div class="product__slide">
           <img src="img/sectionspecial/Green Mountain.png">
        </div>`,
        `<div class="product__slide">
           <img src="img/sectionspecial/Lavazza.png">
        </div>`,
        `<div class="product__slide">
           <img src="img/sectionspecial/melitta.png">
        </div>`,
        `<div class="product__slide">
          <img src="img/sectionspecial/monarch.png">
        </div>`
      ];

    let currentSlideIdx = 0;    

    function renderCarousel() {
      const sliderContainer = document.querySelector('.products-carousel__slides');
      sliderContainer.innerHTML = slides[currentSlideIdx];
    }
    function next() {
      currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
      renderCarousel();
    }
    setInterval(next, 3000);

    renderCarousel()
