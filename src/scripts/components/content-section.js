import contentTemplate from '../view/templates/contentTemplate'

class ContentSection extends HTMLElement {
  constructor () {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadowDOM.innerHTML = contentTemplate
  }
}

customElements.define('content-section', ContentSection)
export default ContentSection
