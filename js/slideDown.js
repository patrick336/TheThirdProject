
// ##### VERSION 1.0 #####

var navBtn = document.querySelector('#js-nav-btn');
var slide = document.querySelector('#js-slide');

function maxHeightSlide() {

  if(slide.classList.contains('slideDown')) {
    slide.classList.remove('slideDown');
    slide.classList.add('slideUp');
  }
  else {
    slide.classList.remove('slideUp');
    slide.classList.add('slideDown');
  }
  return false;
}

// Nasłuchiwanie zdarzeń
navBtn.addEventListener('click',maxHeightSlide,false);
