class FootBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            footer {
                background-color: rgb(35, 35, 35);
                color: white;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        </style>
        
        <footer>
            <p>Copyright &copy; Sigit Fajar Desfian 2023</p>
        </footer>       
        `;
    }
}

customElements.define('foot-bar', FootBar);