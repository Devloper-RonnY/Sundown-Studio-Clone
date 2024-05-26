const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

 var elemC = document.querySelector(`#elem-container`);
 var image = document.querySelector(`#fixed-image`)

 elemC.addEventListener(`mouseenter`, ()=>{
    image.style.display = `block`
 })
 elemC.addEventListener(`mouseleave`, ()=>{
    image.style.display = `none`
 })

//  var elements = document.querySelector(`#elem1`)
//  elements.addEventListener(`mouseenter`, ()=>{
//     let image1 = elements.getAttribute(`data-image`)
//     image.style.backgroundImage = `url(${image1})`
//  })

let elements = document.querySelectorAll(`#elem1`)
elements.forEach( (e)=>{
    e.addEventListener("mouseenter", ()=>{
        let img = e.getAttribute("data-image")
        image.style.backgroundImage = `url(${img})`
    })
})
