// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav'),
  hamburgerMenu = document.querySelector('#hamburger-menu'),
  searchButton = document.querySelector('#search-button'),
  shoppingCartButton = document.querySelector('#shopping-cart-button')

hamburgerMenu.onclick = () => {
  navbarNav.classList.toggle('active');
}
// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form'),
  searchBox = document.querySelector('#search-box')

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
}

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart')

document.querySelector('#shopping-cart-button').onclick = () => {
  shoppingCart.classList.toggle('active');
}

// Klik di luar sidebar untuk menghilangkan nav
document.addEventListener('click', function(e) {
  if(!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active')
    e.preventDefault();
  }

  if(!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }

  if(!shoppingCartButton.contains(e.target) && !shoppingCartButton.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }
})
