class Pokemon extends HTMLElement {
    constructor () {
        super();

        const shadow = this.attachShadow({mode: "open"});
        //base
        
        shadow.appendChild(build())
        shadow.appendChild(styles())

    }
    build() {
        const componentRoot = document.createElement("li")
        componentRoot.setAttribute("class", `pokemon ${this.getAttribute('mainType')}`)
        componentRoot.appendChild(pokemonNumber)
        componentRoot.appendChild(pokemonName)
        componentRoot.appendChild(pokemonDetail)

        const pokemonNumber = document.createElement("span")
        pokemonNumber.setAttribute("class", `number`)
        pokemonNumber.textContent("#" + (this.getAttribute('pokemon-number') || '???'))
        
        const pokemonName = document.createElement("span")
        pokemonName.setAttribute("class", `name`)
        pokemonName.textContent((this.getAttribute('pokemon-name') || '???'))
        
        const pokemonDetail = document.createElement ("div")
        pokemonDetail.setAttribute("class", `details`)
        pokemonDetail.appendChild(pokemonTypes)
        pokemonDetail.appendChild(pokemonImage)

        const pokemonTypes = document.createElement("ol")
        pokemonTypes.setAttribute("class", `types`)
        pokemonTypes.innerHTML((this.getAttribute('pokemon-types') || ''))

        const pokemonImage = document.createElement("img")
        pokemonImage.src = ((this.getAttribute('pokemon-imagem') || '???'))


    }
    styles(){`
    <link rel="stylesheet" href="./src/css/card.css">`}

}

customElements.define('Pokemon-card', Pokemon);
