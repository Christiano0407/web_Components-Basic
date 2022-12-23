//**todo === === ========================== Movie API REST Component =============================== === ===  */
//** === API KEY */
import { API_KEY } from '../secrets/secrets.js';
const API_POPULAR = `https://api.themoviedb.org/3/movie/popular/?page=1&api_key=${API_KEY}`;
let popularMoviesNew = ``;

//** === Component */

class myElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: `open` });
  }

  static get observedAttributes() {
    return [`img`, `title`, 'movie', `movies`];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === 'img' && oldVal !== newVal) {
      this.img = newVal;
    }

    if (attr === 'movie' && oldVal !== newVal) {
      this.movie = newVal;
    }

    if (attr === `movies`) {
      this.movies = newVal;
    }
  }

  getTemplate() {
    const template = document.createElement(`template`);

    template.innerHTML = `
          <section class="movie_section">
                <div class="movie_container">
                    <img class="movie__container--img" src="${
                      this.img
                    }" alt="movie-DB">
                </div>
                <div>
                    <img src="${this.movie}"
                      class="moviePopular-img"
                      alt="movies-Popular"
                    />
                </div>
          </section>
      ${this.getStyle()}
      `;
    return template;
  }

  getMovies() {
    const templateNew = document.createElement(`template`);

    const getMovie = async () => {
      try {
        const response = await fetch(API_POPULAR, {
          method: `GET`,
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const dataPopular = await response.json();
        console.log(dataPopular);

        dataPopular.forEach((movies) => {
          templateNew.innerHTML = `
              <section>
                  <div class="moviesPopular-container">
                      <img
                        src="https://image.tmdb.org/t/p/w500/${movies.poster_path}"
                        class="moviePopular-img"
                        alt="movies-Popular"
                      />
                  </div>
              </section>
            `;
        });
      } catch (error) {
        console.log('We have Error!');
      }
    };
    getMovie();
    return templateNew;
  }
  // https://image.tmdb.org/t/p/w500/${movies.poster_path
  getStyle() {
    return `
    <style>
        :host {
          --background-color: #ffffff;
          --background-color-white: #f2f2f2;
          --color-base: #333;
          --primary-color:  #5a6cb2;
          --color-primary: #264653;
          --color-primary-plus: #1d3557;
          --gradient-color: background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
          --gradient-color-plus: background-image: linear-gradient(to top, #48c6ef 0%, #6f86d6 100%);
          --font-family-orbitron: 'Orbitron', sans-serif;
          width: 100%;
          margin: 0 auto;
        }
        .movie_section {
          width: 100%;
          padding: 10px;
          margin: 10px auto;
        }
        .movie_container, .moviesPopular-container {
          width: 100%;
          padding: 10px;
          margin: 10px auto;
        }
        .movie__container--img, .moviePopular-img {
          width: 400px;
          height: 200px;
          border-radius: 20px;
          object-fit: cover;
        }

        @media (max-width: 1080px) {
          .movie__container {
            width: auto;
          }
        }
    </style>
    
    `;
  }

  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    this.shadowRoot.append(this.getMovies().content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define(`practice-api`, myElement);
