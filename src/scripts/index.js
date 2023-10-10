import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'

import './components/nav-bar.js'
import './components/hero-section.js'
import './components/content-section.js'
import './components/foot-bar.js'

import App from './view/app'

const mainContent = document.querySelector('#main-content')

const app = new App({
  content: mainContent
})

window.addEventListener('hashchange', () => {
  app.renderPege()
})

window.addEventListener('load', () => {
  app.renderPege()
})
