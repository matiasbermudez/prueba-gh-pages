
export function botonAzulInit(){
    class BotonAzul extends HTMLElement{
        shadow = this.attachShadow({mode : "open"})
        texto = this.textContent
        constructor(){
            super();
            this.render();
            
        }
        render(){
            
            this.shadow.innerHTML = `
                <button class="boton__azul">${this.texto}</button>
                
            `
            const style = document.createElement('style');
            style.textContent = `
                .boton__azul{
                       width: 320px;
                       height: 87px;
                       background-color: #006CFC;
                       border: solid 6px #001997;
                       border-radius: 6px;
                       color: white;
                       font-size: 45px;
                       font-weight: 400;
                       font-family: "Odibee Sans";
                       letter-spacing: 4px;
                       margin-top: 20px;
                }
               
            `
            this.shadow.append(style)
        }
        
        } 
        customElements.define('boton-azul-el', BotonAzul)
    }