// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav'),
  hamburgerMenu = document.querySelector('#hamburger-menu'),
  searchButton = document.querySelector('#search-button'),
  shoppingCartButton = document.querySelector('#shopping-cart-button')

hamburgerMenu.onclick = () => {
  navbarNav.classList.toggle('active')
}
// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form'),
  searchBox = document.querySelector('#search-box')

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus()
  e.preventDefault()
}

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart')

document.querySelector('#shopping-cart-button').onclick = () => {
  shoppingCart.classList.toggle('active');
}

// Modal box
const itemDetailModal = document.querySelector('#item-detail-modal'),
  itemDetailClose = document.querySelector('.close-icon'),
  itemDetailButtons = document.querySelectorAll('.item-detail-button')

itemDetailButtons.forEach(button => {
  button.onclick = (e) => {
    itemDetailModal.style.display = 'flex'
    e.preventDefault()
  }
});

// Klik tombol close modal
document.querySelector('.close-icon').onclick = () => {
  itemDetailModal.style.display = 'none'
  e.preventDefault();
}

// Klik di luar sidebar untuk menghilangkan nav
document.addEventListener('click', function(e) {
  if(!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active')
    e.preventDefault()
  }

  if(!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active')
  }

  if(!shoppingCartButton.contains(e.target) && !shoppingCartButton.contains(e.target)) {
    shoppingCart.classList.remove('active')
  }
})

// Klik di luar modal
window.onclick = (event) => {
  if (event.target === itemDetailModal) {
    itemDetailModal.style.display = 'none'
  }
}
