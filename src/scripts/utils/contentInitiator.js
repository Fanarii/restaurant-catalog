import axios from 'axios'
import templateCreator from './templateCreator'

const contentInitiator = {
  async init (shadowDOM) {
    try {
      const data = await this._getData()
      this._renderCards(shadowDOM, data)
    } catch (error) {
      console.log(error)
    }
  },

  async _getData () {
    try {
      const response = await axios.get('../data/DATA.json')
      return response.data.restaurants
    } catch (error) {
      console.log(error)
      return []
    }
  },

  _renderCards (shadowDOM, data) {
    const wrapper = shadowDOM.querySelector('.card-wrapper')
    wrapper.innerHTML = ''
    data.forEach((item) => {
      const card = document.createElement('button')
      card.classList.add('card')
      card.innerHTML = templateCreator.cardsTemplate(item)

      card.addEventListener('click', () => {

      })

      wrapper.appendChild(card)
    })
  }
}

export default contentInitiator
