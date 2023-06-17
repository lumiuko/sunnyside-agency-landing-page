const navBtn = document.getElementById('nav-btn')
const mobileNav = document.getElementById('mobile-nav')

let isNavOpen = false

function toggleMenu() {
  isNavOpen = !isNavOpen

  if (isNavOpen) {
    mobileNav.classList.remove('nav-hidden')
  } else {
    mobileNav.classList.add('nav-hidden')
  }

  navBtn.setAttribute('aria-expanded', isNavOpen)
}

navBtn.addEventListener('click', toggleMenu)
