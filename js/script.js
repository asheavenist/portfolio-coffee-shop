// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav'),
  hamburgerMenu = document.querySelector('#hamburger-menu'),
  searchButton = document.querySelector('#search-button')

hamburgerMenu.onclick = () => {
  navbarNav.classList.toggle('active');
}
// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form'),
  searchBox = document.querySelector('#search-box')
  // searchLabel = document.querySelector('.search-label');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
  // searchLabel.classList.toggle('active');
}

// Klik di luar sidebar untuk menghilangkan nav
document.addEventListener('click', function(e) {
  if(!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }

  if(!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }
})
