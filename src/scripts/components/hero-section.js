import heroTemplate from '../view/templates/heroTemplate'

class HeroSection extends HTMLElement {
  constructor () {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadowDOM.innerHTML = heroTemplate
  }
}

customElements.define('hero-section', HeroSection)
