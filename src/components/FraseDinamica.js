class FraseDinamica extends HTMLElement {
    constructor () {
        super();

        const shadow = this.attachShadow({mode: "open"});
        //base
        const componentRoot = document.createElement("h2")
        componentRoot.textContent=this.getAttribute('frase');
        //style
        const style = document.createElement("style")
        style.textContent = `
        h2{
            color: red;
        }
        `;

        // envia para shadow
        shadow.appendChild(componentRoot)
        shadow.appendChild(style)

    }
}

customElements.define('frase-dinamica', FraseDinamica);