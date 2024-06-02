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
      });
}
swipperAnimation();
page4Animation();

var navimg = document.querySelector(`nav img`)
var full = document.querySelector(`#full-scr`)
var menu = document.querySelector(`nav h3`);
var flag = 0
menu.addEventListener(`click`, function(){
    if(flag == 0){
        full.style.top = 0
        navimg.style.opacity = 0
        flag = 1
    } else {
        full.style.top = "-100%"
        navimg.style.opacity = 1
        flag = 0
    }
    
})