//**todo === === ========================== Movie API REST Component =============================== === ===  */
//** === API KEY */
import { API_KEY } from '../secrets/secrets.js';
const API_POPULAR = `https://api.themoviedb.org/3/movie/popular/?page=1&api_key=${API_KEY}`;

//** === Component */

class myElement extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: `open` });
  }

  static get observedAttribute() {
    return [`img`, `title`];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === 'img' && oldVal !== newVal) {
      this.img = newVal;
    }
  }

  getTemplate() {
    const template = document.createElement(`template`);

    const getMovies = async () => {
      try {
        const response = await fetch(API_POPULAR, {
          method: `GET`,
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const dataPopular = await response.json();

        dataPopular.forEach((movie) => {
          template.innerHTML = `

                  <section>
                        <div>
                            <img  src="https://image.tmdb.org/t/p/w500/${
                              movie.poster_path
                            }"  >
                        </div>
                  </section>
    
            ${this.getStyle()}
            `;
        });

        return template;
      } catch (error) {
        console.log('We have Error!');
      }
    };
    getMovies();
  }

  getStyle() {
    return `
    <style>
        :host {
          width: 100%;
          margin: 0 auto;
        }
    </style>
    
    `;
  }

  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define(`practice-card`, myElement);
