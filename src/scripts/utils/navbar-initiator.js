const navbarInitiator = {
  init ({ hamburger, menu }) {
    hamburger.addEventListener('click', () => {
      menu.classList.toggle('show')
    })
  }
}

export default navbarInitiator
