import piedra from '../imgs/piedra.png'
import papel from '../imgs/papel.png'
import tijera from '../imgs/tijera.png'
import { state } from '../state';
export function botonesPptConEventoInit(){
    class BotonesPptConEvento extends HTMLElement{
        shadow = this.attachShadow({mode : "open"})
        ppt = this.getAttribute('ppt');
        jugador = this.getAttribute('player');
        objetoPpt = {
            piedra : piedra, 
            papel : papel,
            tijera: tijera
        }
        constructor(){
            super();
            this.render();
            
        }
        render(){
            this.shadow.innerHTML = `
                <button class="boton__ppt ">
                    <img src="${this.objetoPpt[this.ppt]}" class="boton__ppt-img">
                </button>
                
            `
            const botonConEvento = this.shadow.querySelector('.boton__ppt');
            botonConEvento?.addEventListener('click', ()=>{
                state.setJugada(`${this.ppt}`);
            })
            
            if(this.jugador == "maquina__play"){
                const button = this.shadow.querySelector('.boton__ppt');
                button?.classList.add('maquina__play')
                
            }
            const style = document.createElement('style');
            style.textContent = `
                .boton__ppt{
                        border: none;
                        cursor: pointer; 
                }
                .boton__ppt-img{
                    height: 150px;
                }
                .boton__ppt-img:hover{
                      height: 185px;   
                }
               .maquina__play{
                     margin-top: 65px;
                    transform: rotate(180deg);
               }
                .maquina__play img{
                 transform: scale(2);
               }
              
            `
            this.shadow.append(style)
        }
        
    
        } 
        customElements.define('botones-ppt-con-evento-el', BotonesPptConEvento)
    }