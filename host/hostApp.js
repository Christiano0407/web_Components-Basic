//** === =================================================================== HOST ========================================================= ===  */
class myElementHost extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // => Shadow
    //=== Add Attributes
    /* this.title = this.getAttribute(`title`);
    this.paragraph = this.getAttribute(`paragraph`);
    this.img = this.getAttribute(`img`); */
  }

  // === Observer of Attribute ChangeCallback === 01
  /* static get observedAttributes() {
    return ['title', 'paragraph', 'img', 'image'];
  } */
  // === Attribute ChangeCallback === 02
  /* attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === 'title' && oldVal !== newVal) {
      this.title = newVal;
    }

    if (attr === 'paragraph' && oldVal !== newVal) {
      this.paragraph = newVal;
    }

    if (attr === 'img' && oldVal !== newVal) {
      this.img = newVal;
    }

    if (attr === 'image' && oldVal !== newVal) {
      this.image = newVal;
    }
  } */

  getTemplateShadow() {
    const hostTemplate = document.createElement(`template`);

    hostTemplate.innerHTML = ` 
        <section>
            <h1>
                <slot name="title"></slot>
            </h1>

            <p>
                <slot name="paragraph"></slot>
            </p>
        </section>
        ${this.getStyle()};
     `;
    return hostTemplate;
  }
  // === CSS Styles ===
  getStyle() {
    return `
        <style>
            :host {
                width: 100%;
                display: inline-block;
                border: 4px solid hsl(0deg 100% 50%);
                padding: 1rem;
                min-width: 480px;
                max-width: 780px;
            }

            :host(.blue) {
                border: 6px solid blue;
                min-width: 360px;
                max-width: 1280px;
            }

            :host([yellow]) {
                border: 8px solid yellow;
                min-width: 640px;
                max-width: 1440px;
            }

            :host([yellow]) h1 {
                font-size: 30px;
                font-weight: 900;
            }

            :host([yellow]) p {
                font-size: 18px;
                font-weight: 500;
                color: #333;
            }

            :host-context(article.card) {
                display: flex;
                justify-content: space-between;
                align-items: center;
                max-width: 100%;
                border: 8px solid #333; 
           }
        </style>
        `;
  }
  // === Add "ShadowRoot" ===
  render() {
    this.shadowRoot.appendChild(
      this.getTemplateShadow().content.cloneNode(true)
    );
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define(`my-element`, myElementHost);
