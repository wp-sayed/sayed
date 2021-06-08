(function ($) {
"use strict";

//header
const openNavMenu = document.querySelector(".open-nav-menu"),
  closeNavMenu = document.querySelector(".close-nav-menu"),
  navMenu = document.querySelector(".nav-menu"),
  menuOverlay = document.querySelector(".menu-overlay"),
  mediaSize = 991;

  openNavMenu.addEventListener("click", toggleNav);
  closeNavMenu.addEventListener("click", toggleNav);
  // close the navMenu by clicking outside
  menuOverlay.addEventListener("click", toggleNav);

  function toggleNav() {
    navMenu.classList.toggle("open");
    menuOverlay.classList.toggle("active");
    document.body.classList.toggle("hidden-scrolling");
  }

  navMenu.addEventListener("click", (event) =>{
      if(event.target.hasAttribute("data-toggle") && 
        window.innerWidth <= mediaSize){
        // prevent default anchor click behavior
        event.preventDefault();
        const menuItemHasChildren = event.target.parentElement;
        // if menuItemHasChildren is already expanded, collapse it
        if(menuItemHasChildren.classList.contains("active")){
          collapseSubMenu();
        }
        else{
          // collapse existing expanded menuItemHasChildren
          if(navMenu.querySelector(".menu-item-has-children.active")){
          collapseSubMenu();
          }
          // expand new menuItemHasChildren
          menuItemHasChildren.classList.add("active");
          const subMenu = menuItemHasChildren.querySelector(".sub-menu");
          subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        }
      }
  });
  function collapseSubMenu(){
    navMenu.querySelector(".menu-item-has-children.active .sub-menu")
    .removeAttribute("style");
    navMenu.querySelector(".menu-item-has-children.active")
    .classList.remove("active");
  }
  function resizeFix(){
     // if navMenu is open ,close it
     if(navMenu.classList.contains("open")){
      toggleNav();
     }
     // if menuItemHasChildren is expanded , collapse it
     if(navMenu.querySelector(".menu-item-has-children.active")){
          collapseSubMenu();
     }
  }

  window.addEventListener("resize", function(){
     if(this.innerWidth > mediaSize){
      resizeFix();
     }
  });

  
//owlCarousel Slider
$('.slider-active').owlCarousel({
    items:1,
    loop:true,
    dots: true,
    autoplay:true,
    autoplaySpeed:500,
    nav:true,
    smartSpeed:1000,
    autoplayHoverPause:true,
    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
     0:{
       items:1
     },
     600:{
       items:1
     },
     1000:{
       items:1
     }
   }
});

//sticky header active
$(window).on('scroll',function(){
   let scroll = $(window).scrollTop();
   if(scroll < 20){
      $('.sticky-header').removeClass('sticky');
   }else{
      $('.sticky-header').addClass('sticky');
}});

// WOW js active
new WOW().init();


})(jQuery);