//** ===================== === Template === ============================ */
class myTemplate extends HTMLElement {
  constructor() {
    super();
  }

  getTemplate() {
    const template = document.createElement(`template`);
    template.innerHTML = ` 
            <section>
                <h1>Hello World Again</h1>
                <div>
                    <h3>My New World Plus!</h3>
                </div>
            </section>
            ${this.getStyle()}
    `;
    return template;
  }

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
    </style>
    `;
  }

  render() {
    this.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define(`my-template`, myTemplate);
