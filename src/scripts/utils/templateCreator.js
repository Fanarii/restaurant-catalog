const templateCreator = {
  cardsTemplate (item) {
    return `
        <img src="${item.pictureId}" alt="Cafe 1">
        <h2>${item.name}</h2>
        <p>City: ${item.city}</p>
        <p>Rating: ${item.rating}</p>
      `
  }
}

export default templateCreator
