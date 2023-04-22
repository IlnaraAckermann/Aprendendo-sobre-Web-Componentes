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
    autor.textContent="By " + (this.getAttribute('autor')) || "Anonymous";

    const titulo = document.createElement("a")
    titulo.textContent=(this.getAttribute('titulo') || 'Sem Titulo');
    titulo.href=(this.getAttribute("link-url")) || "#";
   
    const conteudo = document.createElement("p")
    conteudo.textContent=(this.getAttribute('texto')) || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sapiente repellendus eum velit perferendis id officia perspiciatis ducimus recusandae maiores voluptatibus, totam ratione eius.";
   
    const imagem = document.createElement("img")
    imagem.src=(this.getAttribute('img-src')) || "./src/img/default.jpg"
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
    const style = document.createElement('style');
    style.textContent = `
    .card {
        
        width: 80%;
        
        box-shadow: 8px 8px 27px 0px rgba(0,0,0,0.5);
        -webkit-box-shadow: 8px 8px 27px 0px rgba(0,0,0,0.5);
        -moz-box-shadow: 8px 8px 27 0px rgba(0,0,0,0.5);
    
        display: flex;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        justify-content: space-between;
        margin: 20px auto;

    }
    
    .card_left{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0.5rem;
    }
    
    .card_left a {
        margin: 1rem 0 0.2rem;
        font-size: 1.5rem;
        font-weight: 700;
        transition: 0.3s ease-in-out;
    }
    
    .card_left a:hover{
        font-weight: 900;
    }
    
    .card_left span {
        font-size: 0.75rem;
        font-weight: 700;
        color: #606060;
    }
    .card_left p {
        color: #606060;
    }
    
    .card_right{
        display: flex;
        justify-content: center;
    }
    
    .card_right img {
        width: 300px;
        height: 200px;
        object-fit: cover;    
    }
    `
    return style;
  }


}


customElements.define("card-news", CardNews);
