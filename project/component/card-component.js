//**TODO === === ========================================== Card Component ================================================ === ===  */
class myComponent extends HTMLAreaElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  render() {}

  connectedCallback() {}
}

customElements.define(`my-productCard`, myComponent);
