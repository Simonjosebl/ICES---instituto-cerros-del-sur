'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when click on any navbar link
 */

for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

/**
 * addd event on all elements for toggling navbar
 */

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}



/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400 ? header.classList.add("active")
    : header.classList.remove("active");
}); 

/**
* carrusel fotos
*/

const carousels = document.querySelectorAll('.gallery');

class Carousel {
  constructor(container, controls){
    this.carouselContainer = container.querySelector('.gallery-container');
    this.carouselControlsContainer = container.querySelector('.gallery-controls');
    this.carouselControls = controls;
    this.carouselItems = container.querySelectorAll('.gallery-item');
    this.carouselArray = [...this.carouselItems];
  }

  updateGallery(){
    this.carouselArray.forEach(el => {
      el.classList.remove('gallery-item-1');
      el.classList.remove('gallery-item-2');
      el.classList.remove('gallery-item-3');
      el.classList.remove('gallery-item-4');
      el.classList.remove('gallery-item-5');
    });
    
    this.carouselArray.slice(0, 5).forEach((el , i) => {
      el.classList.add(`gallery-item-${i+1}`);
    });
  }
  
  setCurrentState(direction){
    if (direction.className.includes('gallery-controls-previous')){
      this.carouselArray.unshift(this.carouselArray.pop());
    }else{
      this.carouselArray.push(this.carouselArray.shift());
    }
    this.updateGallery();
  }

  setControls() {
    this.carouselControls.forEach(control => {
      const button = document.createElement('button');
      button.className = `gallery-controls-${control}`;
      button.innerText = control;
      this.carouselControlsContainer.appendChild(button);
    });
  }

  useControls(){
    const triggers = [...this.carouselControlsContainer.childNodes];
    triggers.forEach(control => {
      control.addEventListener('click', e => {
        e.preventDefault();
        this.setCurrentState(control);
      });
    });
  }
}

carousels.forEach(carouselElement => {
  const controls = ['previous', 'next'];
  const carouselInstance = new Carousel(carouselElement, controls);
  carouselInstance.setControls();
  carouselInstance.useControls();
});

function ayudanos(){
  location.href ="comoayudar.html"
}
function acerca(){
  location.href="index.html#about"
}
function facebook(){
  location.href="https://www.facebook.com/profile.php?id=100064742769808&mibextid=kFxxJD"
}
function whatsapp(){
  location.href="https://api.whatsapp.com/send?phone=573142990606&text=Hola,%20quisiera%20más%20información%20de%20cómo%20ayudar."
}
function mail(){
  location.href="mailto:colegioices@gmail.com"
}