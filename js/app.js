let navMain = document.querySelector('.main-nav__items');
let navToggle = document.querySelector('.main-nav__toggle');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav__items--closed')) {
    navMain.classList.remove('main-nav__items--closed');
    navMain.classList.add('main-nav__items--opened');
    navToggle.classList.remove('main-nav__toggle--closed');
    navToggle.classList.add('main-nav__toggle--opened');
  } else {
    navMain.classList.add('main-nav__items--closed');
    navMain.classList.remove('main-nav__items--opened');
    navToggle.classList.remove('main-nav__toggle--opened');
    navToggle.classList.add('main-nav__toggle--closed');
  }
});

function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: {
      lat: 59.938777,
      lng: 30.323067
    }
  });

  const image = '../img/icon-map-pin.svg';
  const marker = new google.maps.Marker({
    position: {
      lat: 59.938777,
      lng: 30.323067
    },
    map: map,
    icon: image
  });

  marker.setMap(map);
}

// class Slider {
//   constructor({
//     elem
//   }) {
//     this.elem = elem;
//     this.slides = document.querySelector('.reviews__items');
//     this.elems = document.querySelector('.reviews__slides');
//     this.prev = document.querySelector('.reviews__controls--prev')
//     this.next = document.querySelector('.reviews__controls--next');
//
//     this.width = parseInt(getComputedStyle(this.slides).width);
//     this.position = 0;
//
//
//     this.next.onclick = this.clickOnNext.bind(this);
//     this.prev.onclick = this.clickOnPrev.bind(this);
//   }
//
//
//   clickOnNext(event) {
//     this.slideNext();
//   }
//
//   clickOnPrev(event) {
//     this.slidePrev();
//   }
//
//   slidePrev() {
//     this.position += this.width;
//     if (this.position > 0) {
//       this.position = 0;
//     }
//     this.slides.style.marginLeft = this.position + 'px';
//   }
//
//   slideNext() {
//     this.position -= this.width;
//     if (this.position <= this.width - parseInt(getComputedStyle(this.elems).width)) {
//       this.position = this.width - parseInt(getComputedStyle(this.elems).width);
//     }
//     this.slides.style.marginLeft = this.position + 'px';
//   }
// }
//
// let sliderWrapper = document.querySelector('.reviews__container');
//
// let slider = new Slider({
//   elem: sliderWrapper
// });
