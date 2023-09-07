/* Used for scrolling sidenav on casestudy */

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)



/* Side Nav Active  */

let section = document.querySelectorAll('section');
        let lists = document.querySelectorAll('.list');
        function activeLink(li) {
            lists.forEach((item) => item.classList.remove('active'));
            li.classList.add('active');
        }
        lists.forEach((item) =>
            item.addEventListener('click', function(){
                activeLink(this);
            }));

        window.onscroll = () => {
            section.forEach(sec => {
                let top = window.scrollY;
                let offset = sec.offsetTop;
                let height = sec.offsetHeight;
                let id = sec.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    const target = document.querySelector(`[href='#${id}']`).parentElement;
                    activeLink(target);
                }
            })
        };


        /* Scroll Swap images in case study  */
        // JavaScript function to change the image based on scroll position
       // Function to swap images based on scroll position
       let lastScroll = 0;

       // Function to swap images based on scroll position
       const swapImages = () => {
         const images = document.querySelectorAll('.img-container img');
         const scrollAmount = window.scrollY;
         
         // Calculate image index based on scrolling, with smoother transition
         let imgToShow = (scrollAmount / 200);
         let lowIndex = Math.floor(imgToShow);
         let highIndex = Math.ceil(imgToShow) % images.length;
         let ratio = imgToShow - lowIndex;
         
         // Reset opacity for all images
         images.forEach((img) => {
           img.style.opacity = 0;
           img.classList.remove('show');
         });
       
         // Set opacity based on the ratio between the two images
         images[lowIndex % images.length].style.opacity = 1 - ratio;
         images[highIndex].style.opacity = ratio;
       };
       
       // Listen for scroll events
       window.addEventListener('scroll', swapImages);
       
       // Initialize first image as visible
       document.addEventListener('DOMContentLoaded', () => {
         const firstImage = document.querySelector('.img-container img');
         if (firstImage) {
           firstImage.style.opacity = 1;
         }
       });
       
          


// JavaScript for handling the sticky behavior

// init ScrollMagic Controller
var controller = new ScrollMagic.Controller();

// Scene Handler
var scene1 = new ScrollMagic.Scene({
  triggerElement: "#pinned-trigger1", // point of execution
  duration: $(window).height() - 50, // pin element for the window height - 1
  triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
  reverse: true // allows the effect to trigger when scrolled in the reverse direction
})
.setPin("#pinned-element1") // the element we want to pin
.addTo(controller);





  
