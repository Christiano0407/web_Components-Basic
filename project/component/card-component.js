//**TODO === === ========================================== Card Component ================================================ === ===  */
class myElement extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['img', 'title', 'price', 'description', 'collection'];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === 'img') {
      this.img = newVal;
    }

    if (attr === 'title') {
      this.title = newVal;
    }

    if (attr === 'collection') {
      this.collection = newVal;
    }

    if (attr === 'description') {
      this.description = newVal;
    }

    if (attr === 'price') {
      this.price = newVal;
    }
  }

  getTemplate() {
    const template = document.createElement(`template`);

    template.innerHTML = ` 
    <main class="container">
        <section class="imgBox">
                <img src="${this.img}" alt="card of sports running shoes blue" >
        </section>
        <section class="container_details">
            <div class="details-content">
                <h2>${this.title} <span>${this.collection}</span> </h2>
                <p>${this.description}</p>
                <h3>${this.price}</h3>
                <button>Buy</button>
            </div>
        </section>
    </main>
    ${this.getStyle()}
    `;
    return template;
  }

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

            width: 80%;
            max-width: 900px;
            min-width: 200px;
            margin: 0 auto;
        }
        .container {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 900px;
            height: 600px;
            margin: 20px;
            background-color: var(--background-color-white);
        }

        .container .imgBox {
            position: relative;
            display:flex;
            justify-content: center;
            width: 50%;
            height: 100%;
            background-color: var(--primary-color);
            outline: 2px solid red;
        }

        .container .imgBox::before {
            content: "Nike";
            position: absolute;
            top: 20px;
            left: 20px;
            font-size: 8em;
            font-family: var(--font-family-orbitron);
            font-weight: 900;
            opacity: 0.1;
        }

        .container .imgBox img {
            position: relative;
            top: 100px;
            left: -50px;
            width: 720px;
            height: 480px;
            transform: rotate(-30deg);
        }

        .container .container_details {
            display:flex;
            justify-content: center;
            align-items: center;
            width: 50%;
            height: 100%;
            box-sizing: border-box;
            padding: 40px;
            outline: 2px solid black;
        }

        .container_details h2 {
            margin-bottom: 25px;
            font-size:  2.5em;
            line-height: 1.2em;
            color: #444;
            font-family: var(--font-family-orbitron);
        }

        .container_details h2 span {
            font-size: 1em;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #999;
        }

        .container_details p {
            max-width: 85%;
            margin-left: 10%;
            margin-bottom: 35px;
            color: #333;
            font-size: 14px
        }

        .container_details h3 {
            float: left;
            font-size: 2.5em;
            color: #333;
        }

        .container_details button {
            float: right;
            padding: 10px 20px;
            border: none;
            outline: none;
            background-color: var(--primary-color);
            color: var(--background-color-white);
            font-size: 2.5em;
            font-weight: 700;
            text-transform: uppercase;
            border-radius: 10px;
            cursor: pointer;
            margin: 10px auto
        }
        button:active {
            transform: scale(0.9);
        }

        @media (max-width: 1080px) {
            .container {
                width: auto;
                height: auto;
            }

            .container .imgBox {
                width: 100%;
                padding: 40px;
                box-sizing: border-box;
                height: auto;
            }

            .container .imgBox img {
                width: 100%;
                left: initial;
                object-fit: cover;
                height: auto;
                padding: 20px;
                transform: rotate(0);
            }

            .container .container_details {
                width: 100%;
                height: auto;
                padding: 20px;
            }

            .container .container_details span {
                font-size: 0.8em;
            }

            .container .container_details p {
                max-width: 100%;
                margin-left: 0;
            }

         }

        @media (min-width: 1081px) {

            .container .container_details h2 {
              font-size: 2.7em;
              font-weight: 900;
            }
            
            .container .container_details h2 span {
              font-size: 0.7em;
            }

        }
    </style>
    `;
  }

  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define(`product-card`, myElement);
