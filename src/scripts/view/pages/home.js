import contentInitiator from '../../utils/contentInitiator'

const Home = {
  async render () {
    return `
      <content-section></content-section>
    `
  },

  afterRender () {
    contentInitiator.init()
  }
}

export default Home
