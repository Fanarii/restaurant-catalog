const contentTemplate = `
<style>
.content {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: #E3E3E3;
    text-align: center;
    align-items: center;
  }
  
  .content h1 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .card {
    transition: ease-in-out 0.2s;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    text-align: center;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    width: 250px;
    background-color: #F6F5F5;
    cursor: pointer;
  }
  
  .card img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
  }
  
  .card h2 {
    font-size: 1.2rem;
    margin: 10px 0;
  }
  
  .card p {
    font-size: 1rem;
  }
  
  .card-wrapper {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    max-width: 1000px;
  }

  .card:hover {
    transform: scale(1.1)
  }

  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.7);
  }

  .modal-content {
    background-color: #fff;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }

  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    padding: 10px;
    background-color: transparent;
    min-width: 44px;
    min-height: 44px;
    border: none;
  }

  .modal-content p {
    font-size: 1rem;
    margin-top: 10px;
  }

  .close {
    cursor: pointer;
  }

  @media screen and (min-width: 476px) {
    .card {
        width: 200px;
    }

    .card-wrapper {
        grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (min-width: 768px) {
    .card-wrapper {
        grid-template-columns: repeat(3, 1fr);
    }
  }

  @media screen and (min-width: 1024px) {
    .card-wrapper {
        grid-template-columns: repeat(4, 1fr);
    }
  }
</style>

  
<section class="content">
    <h1>Discover Caffe & Restaurants</h1>
    <div class="card-wrapper">
    </div>
</section>

<div class="modal" id="myModal">
    <div class="modal-content">
        <button class="close" id="closeModal">X</button>
        <h3 id="modalTitle"></h3>
        <p id="modalDescription"></p>
    </div>
</div>
`

export default contentTemplate
