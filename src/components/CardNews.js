class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build())
    shadow.appendChild(this.style())
  }

  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card")
    
    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card_left")
    
    const cardRigth = document.createElement("div");
    cardRigth.setAttribute("class", "card_right")

    const autor = document.createElement("span")
    autor.textContent="By " +( (this.getAttribute('autor')) || "Anonymous");

    const titulo = document.createElement("a")
    titulo.textContent=(this.getAttribute('titulo') || 'Sem Titulo');
    titulo.href=(this.getAttribute("link-url")) || "#";
   
    const conteudo = document.createElement("p")
    conteudo.textContent=(this.getAttribute('texto')) || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sapiente repellendus eum velit perferendis id officia perspiciatis ducimus recusandae maiores voluptatibus, totam ratione eius.";
   
    const imagem = document.createElement("img")
    imagem.src=(this.getAttribute('img-src')) || "./src/img/default.png"
    imagem.alt=(this.getAttribute('img-alt')) || "Sem descrição"

    cardLeft.appendChild(autor)    
    cardLeft.appendChild(titulo)
    cardLeft.appendChild(conteudo)
    
    cardRigth.appendChild(imagem)

    componentRoot.appendChild(cardLeft)
    componentRoot.appendChild(cardRigth)

    return componentRoot;
  }
  
  style(){
    const style = document.createElement("link")
    style.rel="stylesheet"
    style.href="./src/css/card.css"
    return style
  }


}


customElements.define("card-news", CardNews);
