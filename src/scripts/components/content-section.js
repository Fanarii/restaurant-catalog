import contentInitiator from '../utils/contentInitiator'
import contentTemplate from '../view/templates/contentTemplate'

class ContentSection extends HTMLElement {
  constructor () {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.initContent()
    this.render()
  }

  render () {
    this.shadowDOM.innerHTML = contentTemplate
  }

  initContent () {
    contentInitiator.init(this.shadowDOM)
  }
}

customElements.define('content-section', ContentSection)
