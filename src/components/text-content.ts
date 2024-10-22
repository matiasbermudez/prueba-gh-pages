export function textContentInit(){
class TextContent extends HTMLElement{
    shadow = this.attachShadow({mode : "open"})
    elemento = this.textContent
    constructor(){
        super();
        this.render();

    }
    render(){
        
        this.shadow.innerHTML = `
            ${this.elemento}
        `
    }

    } 
    customElements.define('text-content-el', TextContent)
}