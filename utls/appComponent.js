//** === ==== ======================================================= WEB COMPONENT ( LEGO ) ======================================================== === */

class myComponent extends HTMLAreaElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  render() {}

  connectedCallback() {}
}

customElements.define(`my-element`, myComponent);
