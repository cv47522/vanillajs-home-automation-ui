const template = document.createElement('template');
template.innerHTML = `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <div class="card">
    <img class="card-img-top mt-2" alt="Card image cap" />
    <div class="card-body">
        <h5 class="card-title"></h5>
        <div id="info" class="mb-2">
            <p class="card-text"><slot name="email" /></p>
            <p class="card-text"><slot name="phone" /></p>
        </div>
        <button type="button" id="toggle-info" class="btn btn-warning">Hide Info</button>
    </div>
    </div>
`;

class UserCard extends HTMLElement {
    constructor() {
        super();
        /* Custom Properties */
        this.showInfo = true;

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h5').innerText = this.getAttribute('name');
        this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
    }

    connectedCallback() {
        this.shadowRoot.querySelector('#toggle-info').addEventListener('click', () => this.toggleInfo());
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector('#toggle-info').removeEventListener();
    }

    toggleInfo() {
        this.showInfo = !this.showInfo;

        const info = this.shadowRoot.querySelector('#info');
        const toggleBtn = this.shadowRoot.querySelector('#toggle-info');

        if(this.showInfo) {
            info.style.display = 'block';
            toggleBtn.innerText = 'Hide Info';
        } else {
            info.style.display = 'none';
            toggleBtn.innerText = 'Show Info';
        }
    }
}

/* Create <user-card></user-card> HTML tag*/
window.customElements.define('user-card', UserCard);