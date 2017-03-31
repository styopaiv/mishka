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

let indexCartBtn = document.querySelector('.popular-product__buy');
let modalCart = document.querySelector('.modal-cart');
let overlay = document.querySelector('.modal-cart__overlay');

if (indexCartBtn) {
  indexCartBtn.addEventListener('click', function(event) {
    event.preventDefault('');
    modalCart.classList.add('modal-cart--show');
    overlay.classList.add('modal-cart--show');
  });
}

window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    modalCart.classList.remove('modal-cart--show');
    overlay.classList.remove('modal-cart--show');
  }
});

overlay.addEventListener('click', function(event) {
  modalCart.classList.remove('modal-cart--show');
});

let cartBtns = document.querySelectorAll('.catalog-products__buy-button');

if (cartBtns) {
  for (let i = 0; i <= cartBtns.length; i++) {
    cartBtns[i].addEventListener('click', function() {
      event.preventDefault('');
      modalCart.classList.add('modal-cart--show');
      overlay.classList.add('modal-cart--show');
    });
  }
}
