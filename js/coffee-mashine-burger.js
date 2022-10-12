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
          <div class="priceof__cm">499.00USD</div>
         <a class="button__cm" href="#">Add to Cart</a>
        </div>`
    ];

    let currentSlideIdx = 0

    function renderCarousel () {
        const sliderContainer = document.querySelector('.coffee-mashine__slides');
        sliderContainer.innerHTML = slide[currentSlideIdx];
    }

    renderCarousel()
    

})()


