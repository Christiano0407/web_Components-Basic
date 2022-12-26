//**TODO ====  === Second Component === ====  */
//** API Key */
import { API_KEY } from '../secrets/secrets.js';
//** Variable */
const API_POPULAR = `https://api.themoviedb.org/3/movie/popular/?page=1&api_key=${API_KEY}`;

//** === Component */
class myMovie extends HTMLElement {
  constructor() {
    super();

    let shadow = this.attachShadow({ mode: 'open' });

    this.divHeader = document.createElement('div');
    this.divContent = document.createElement('div');
    this.modePicture = false;

    shadow.appendChild(this.divHeader);
    shadow.appendChild(this.divContent);
  }

  connectedCallback() {
    this.divHeader.innerHTML = `<strong>
            ${this.getAttribute('data-title')}
        </strong>`;

    let url = this.getAttribute('data-url');
    let field = this.getAttribute('data-field');
    if (this.getAttribute('modePicture')) {
      this.modePicture = this.getAttribute('modePicture');
    }

    console.log(this.modePicture);

    this.divContent.innerHTML = '';
    fetch(API_POPULAR)
      .then((response) => response.json())
      .then((json) =>
        json.forEach((element) => {
          if (this.modePicture === 'true') {
            this.divContent.innerHTML += `
             <img
                src="https://image.tmdb.org/t/p/w500/${movies.poster_path}"
                class="moviePopular-img"
                alt="movies-Popular"
             />
            `;
          } else {
            this.divContent.innerHTML += `<div>
                ${element[field]}
                </div>`;
          }
        })
      );
  }
}

//** === Render On HTML === */
customElements.define('movies-component', myMovie);
