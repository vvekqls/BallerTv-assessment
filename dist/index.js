// This file is for Logos section left-arrow and right arrow function
const imagesEl = document.querySelector('.logo-showcase')
const slider = document.querySelector('.slider')
// buttons
const btnLeft = document.querySelector('#left-arrow')
const btnRight = document.querySelector('#right-arrow')

// Counter

let counter = 0;
// had to hardcode. because sometimes it's grabbing the desktop version width .
// const size = imagesEl.clientWidth;
const size = 183;


// slider.style.transform = 'translateX(' + (-size * counter) + 'px)'

//Button Listeners

btnRight.addEventListener('click', ()=> {
  if(counter === 2) {
    counter = 0
    
    // slider.style.transition = "transform 0.4 ease-in-out";
    slider.style.transform = 'translateX(' + '28px)'
    return
  }
  // slider.style.transition = "transform 0.4 ease-in-out";
  counter++;
  slider.style.transform = 'translateX(' + (-size * counter) + 'px)'
})

btnLeft.addEventListener('click', () => {
  if (counter === 0) {
    counter = 2
    // slider.style.transition = "transform 0.4 ease-in-out";
    slider.style.transform = 'translateX(' + '-366px)'
    return
  } else if (counter === 1) {
    // slider.style.transition = "transform 0.4 ease-in-out";
    counter--;
    slider.style.transform = 'translateX(' + '28px)'
    return
  }
  // slider.style.transition = "transform 0.4 ease-in-out";
  counter--;
  slider.style.transform = 'translateX(' + (-size * counter) + 'px)'
})


