import navbarInitiator from '../utils/navbarInitiator'
import navTemplate from '../view/templates/navbarTemplate'

class NavBar extends HTMLElement {
  constructor () {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
    this.initNavbar()
  }

  render () {
    this.shadowDOM.innerHTML = navTemplate
  }

  initNavbar () {
    const hamburger = this.shadowDOM.querySelector('.hamburger')
    const menu = this.shadowDOM.querySelector('nav ul')

    navbarInitiator.init({ hamburger, menu })
  }
}

customElements.define('nav-bar', NavBar)

export default NavBar
