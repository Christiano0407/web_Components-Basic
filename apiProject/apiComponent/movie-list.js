//**TODO ====  === Second Component === ====  */
//** API Key */
import { API_KEY } from '../secrets/secrets.js';
//** Variable */
const API_POPULAR = `https://api.themoviedb.org/3/movie/popular/?page=1&api_key=${API_KEY}`;

//** === Component */
class myMovies extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: `open` });
  }

  getTemplate() {}

  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }
}

//** === Render On HTML === */
customElements.define(`movies-component`, myMovies);
