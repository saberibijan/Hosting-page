let icon = document.querySelector(".menu-icon");
let menu = document.querySelector(".main-menu");

console.log(icon);
console.log(menu);

icon.addEventListener("click",function () {
    if (icon.classList.contains("fa-bars")){
        menu.style.left = 0;
        icon.classList = "fa fa-times menu-icon";
    } else {
        menu.style.left = "-250px";
        icon.classList = "fa fa-bars menu-icon";
    }
})

// -------------------------------------------------------------------------

let link = document.querySelectorAll('.menu-item_navi');


for(let i=0; i< link.length; i++){
    link[i].addEventListener('click', function(){
       for(let j=0; j< link.length; j++){
        link[j].classList.remove('active')
       }
       link[i].classList.add('active')
    })
}
// ----------------------------------------------------------------------------

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    // autoplay: true,
    navText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            // dots: false,
        },
        768:{
            items:1,
            nav:true
        },
        992:{
            items: 2,
            nav:true
        }
    }
})