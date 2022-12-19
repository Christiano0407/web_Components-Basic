//** === === === ============================================== Disconnected Callback ================================================ === === ===  */

class myCustomElement extends HTMLElement {
  constructor() {
    super();
    // 1)
    console.log('Hello World! ==> Exist on Memory');
  }
  // 2)
  connectedCallback() {
    console.log('Hello World!! ===> Exist on DOM');
  }

  // 3)
  disconnectedCallback() {
    console.log('Hello World!!!  >= Out Of DOM');
  }
}
//** === Call Element */
customElements.define('my-custom-element', myCustomElement);
//** >= >= Delete */
document.querySelector(`my-custom-element`).remove();
