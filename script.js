const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page4Animation (){
    var elemC = document.querySelector(`#elem-container`);
    var image = document.querySelector(`#fixed-image`)
   
    elemC.addEventListener(`mouseenter`, ()=>{
       image.style.display = `block`
    })
    elemC.addEventListener(`mouseleave`, ()=>{
       image.style.display = `none`
    })
   
   
   let elements = document.querySelectorAll(`#elem1`)
   elements.forEach( (e)=>{
       e.addEventListener("mouseenter", ()=>{
           let img = e.getAttribute("data-image")
           image.style.backgroundImage = `url(${img})`
       })
   })
}

function swipperAnimation (){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: false,
        // screenLeft: false,
        spaceBetween: 100,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}
swipperAnimation();
page4Animation();