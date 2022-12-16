//** === === === === <= Web Components >= === === ===  ===  */
//**TODO ==> Variable & Constant === */
//const style = document.createElement(`style`);
const img = document.createElement(`img`);
img.setAttribute(`class`, 'img-Component');
let imgUrl;

//**TODO ==> Create Template === */
const template = document.createElement(`div`);
template.innerHTML = `

<style>
    .template-component {
        width: 100%;
        margin: 1rem auto;
    }

    p {
        letter-spacing: 0.5px;
        font-weight: 500;
    }
    .template-component--text {
        font-size: 14px;
    }
    .template-component--textPlus
    {
        font-size: 12px;
    }
    .img-Component 
    {
        width: 350px;
        height: 200px;
        object-fit: cover;
        border-radius: 20px;
    }
</style>

    <div class="template-component">
        <p class="template-component--text">Component Web Plus</p>
        <p class="template-component--textPlus">Hello World! Component New Plus</p>
    </div>

`;

//** === >>> Component <<<< === */
class myElement extends HTMLElement {
  constructor() {
    super();
    console.log('Hello World!');
    this.p = document.createElement(`p`);
    this.p.setAttribute(`class`, `text`);

    if (this.hasAttribute(`img`)) {
      imgUrl = this.getAttribute(`img`);
    } else {
      imgUrl = `https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80`;
    }
    img.src = imgUrl;
  }

  connectedCallback() {
    this.p.textContent = "Hello World! I'm a Paragraph";
    this.appendChild(this.p);
    this.appendChild(img);
    this.appendChild(template);
    //this.appendChild(style);
  }
}

customElements.define(`my-element`, myElement);
