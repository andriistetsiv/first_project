(function (){

    const slide = [
       `<div class="select_cm">
          <img class="image__cm-carousel" src="/img/sectioncoffeemachine/first__cm.png" alt="coffee machine">
          <h6 class="nameof__cm">FROST Coffee Machine</h6>
          <br>
          <div class="priceof__cm">499.00USD</div>
          <a class="button__cm" href="#">Add to Cart</a>
        </div>`,
        `<div class="select_cm">
          <img class="image__cm-carousel" src="/img/sectioncoffeemachine/second_cm.png" alt="coffee machine">
          <h6 class="nameof__cm">SMIK 2 Coffe Machine</h6>
          <br>
          <div class="priceof__cm">499.00USD</div>
          <a class="button__cm" href="#">Add to Cart</a>
        </div>`,
        `<div class="select_cm">
          <img class="image__cm-carousel" src="/img/sectioncoffeemachine/third__cm.png" alt="coffee machine">
          <h6 class="nameof__cm">ORGANIK Coffee Machine</h6>
          <br>
          <div class="priceof__cm">499.00USD</div>
          <a class="button__cm" href="#">Add to Cart</a>
        </div>`,
        `<div class="select_cm">
          <img class="image__cm-carousel" src="/img/sectioncoffeemachine/fourth_cm.png" alt="coffee machine">
          <h6 class="nameof__cm">SMIK Coffee Machine</h6>
          <br>
          <div class="priceof__cm">499.00USD</div>
          <a class="button__cm" href="#">Add to Cart</a>
        </div>`,
        `<div class="select_cm">
          <img class="image__cm-carousel" src="/img/sectioncoffeemachine/fifth_cm.png" alt="coffee machine">
          <h6 class="nameof__cm">La Spezia Coffee Machine</h6>
          <br>
          <div class="priceof__cm">499.00USD</div>
         <a class="button__cm" href="#">Add to Cart</a>
        </div>`
    ];

    let currentSlideIdx = 0

    function renderCarousel () {
        const sliderContainer = document.querySelector('.coffee-mashine__slides');
        sliderContainer.innerHTML = slide[currentSlideIdx];
        if (window.innerWidth > 767) {
          const secondSlideIdx = currentSlideIdx + 1 >= slide.length ? 0 : currentSlideIdx + 1;
          sliderContainer.innerHTML += slide[secondSlideIdx]; 
          if (window.innerWidth > 980) {
            const fourthSlideIdx = secondSlideIdx + 2 >= slide.length ? 0 : secondSlideIdx + 2;
            sliderContainer.innerHTML += slide[fourthSlideIdx];
            if (window.innerWidth > 1100) {
              const fifthSlideIdx = fourthSlideIdx + 1 >= slide.length ? 0 : fourthSlideIdx + 1;
              sliderContainer.innerHTML += slide[fifthSlideIdx];
            }
          }
        }
    }

    function next () {
      currentSlideIdx = currentSlideIdx + 1 >= slide.length ? 0 : currentSlideIdx + 1;
      renderCarousel();
    }

    function prev () {
      currentSlideIdx = currentSlideIdx -1 < 0 ? slide.length -1 : currentSlideIdx -1;
      renderCarousel();
    }

    const next__button_cf = document.querySelector('.next__button_cf');
    next__button_cf.addEventListener('click', next);

    const prev__button_cf = document.querySelector('.prev__button_cf');
    prev__button_cf.addEventListener('click', prev);


   
    renderCarousel()
    
    window.addEventListener('resize', renderCarousel)

})()


