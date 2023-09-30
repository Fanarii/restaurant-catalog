import axios from "axios";

class ContentSection extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.getData();
        this.render();

        this.shadowDOM.querySelector('#closeModal').addEventListener('click', () => {
            const modal = this.shadowDOM.querySelector('.modal');
            modal.style.display = 'none';
        });
    }

    async getData() {
        try {
            const response = await axios.get('../data/DATA.json');
            const data = response.data.restaurants;
            this.renderCards(data);
        } catch (error) {
            console.log(error)
        }
    }

    renderCards(data) {
        const wrapper = this.shadowDOM.querySelector('.card-wrapper');
        wrapper.innerHTML = ''

        data.forEach((item) => {
            const card = document.createElement('button')
            card.classList.add('card');

            card.innerHTML = `
                <img src="${item.pictureId}" alt="Cafe 1">
                <h2>${item.name}</h2>
                <p>City: ${item.city}</p>
                <p>Rating: ${item.rating}</p>
            `;

            card.addEventListener('click', () => {
                const modal = this.shadowDOM.querySelector('.modal');
                const modalDescription = this.shadowDOM.querySelector('#modalDescription');
                const modalTitle = this.shadowDOM.querySelector('#modalTitle');
                modalDescription.textContent = item.description;
                modalTitle.textContent = item.name;
                modal.style.display = 'block';
            });

            wrapper.appendChild(card)
        })
    }

    render() {
        this.shadowDOM.innerHTML = `
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
                <span class="close" id="closeModal">&times;</span>
                <h3 id="modalTitle"></h3>
                <p id="modalDescription"></p>
            </div>
        </div>
        `;
    }
}

customElements.define('content-section', ContentSection);