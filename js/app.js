'use strict';
let navButton = document.querySelector('.page-header__toggle');
let nav = document.querySelector('.main-nav');

navButton.addEventListener('click', toggleNav);

function toggleNav() {
	nav.classList.toggle('main-nav--closed');
}
