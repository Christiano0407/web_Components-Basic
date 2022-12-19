//** === === ===  =================================================== Attributes / Shadow DOM ========================================== === === ===  */
//**TODO ===  Attribute & Attribute ChangedCallback === */
class myElementAttribute extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // => Shadow
    //=== Add Attributes
    /* this.title = this.getAttribute(`title`);
    this.paragraph = this.getAttribute(`paragraph`);
    this.img = this.getAttribute(`img`); */
  }

  // === Attribute ChangeCallback ===
  static get observedAttributes() {
    return ['title', 'paragraph', 'img'];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === 'title' && oldVal !== newVal) {
      this.title = newVal;
    }

    if (attr === 'paragraph' && oldVal !== newVal) {
      this.paragraph = newVal;
    }

    if (attr === 'img' && oldVal !== newVal) {
      this.img = newVal;
    }
  }

  getTemplateShadow() {
    const attributeTemplate = document.createElement(`template`);

    attributeTemplate.innerHTML = ` 
        <section>
            <h2 class="title">Hello World!!</h2>
            <div>
                <h3 class="title-text">Shadow DOM & Web Component!</h3>
            </div>
        </section>
        <section>
            <h2>${this.title}</h2>
            <div>
                <p>${this.paragraph}</p>
                <img src="${this.img}">
                <img src="${this.img}">
            </div>
        </section>
        ${this.getStyle()};
     `;
    return attributeTemplate;
  }
  // === CSS Styles ===
  getStyle() {
    return `
    <style>
        section {
            width: 100%;
            margin: 1rem auto;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        div {
            width: 100%;
        }
        h2 {
          color: blue;
            font-size: 24px;
            font-weight: 700;
        }
        h3 {
            color: red;
            font-size: 12px;
            font-weight: 700;
        }
        p {
            letter-spacing: .5px;
            font-size: 12px;
            font-weight: 500;
            color: #333;
        }
        img {
            object-fit: cover;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            border-radius: 10px;
            height: 400px;
            width: 200px;
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

customElements.define(`my-element`, myElementAttribute);
