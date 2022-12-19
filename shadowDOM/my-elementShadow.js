//** === === Shadow DOM & ROOT === ===  */

//**TODO === === Web Component & Shadow DOM === === */
class myElementShadow extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // => Shadow
  }

  getTemplateShadow() {
    const shadowTemplate = document.createElement(`template`);

    shadowTemplate.innerHTML = ` 
        <section>
            <h2 class="title">Hello World!!</h2>
            <div>
                <h3 class="title-text">Shadow DOM & Web Component!</h3>
            </div>
        </section>
        ${this.getStyle()};
     `;
    return shadowTemplate;
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
            font-size: 15px;
            font-weight: 700;
        }
        h3 {
            color: red;
            font-size: 12px;
            font-weight: 700;
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

customElements.define(`my-element`, myElementShadow);
