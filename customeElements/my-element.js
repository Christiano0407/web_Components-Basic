//** === Web Components ===  */

class myElement extends HTMLElement {
  constructor() {
    super();
    console.log('Hello World!');
    this.p = document.createElement(`p`);
    this.p.setAttribute(`class`, `text`);
  }
  connectedCallback() {
    this.p.textContent = "Hello World! I'm a Paragraph";
    this.appendChild(this.p);
  }
}

customElements.define(`my-element`, myElement);
