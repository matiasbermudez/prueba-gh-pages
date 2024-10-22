import { botonAzulInit } from "../../components/boton-azul";

export function explicacionInit(params:any) {
    const divEl = document.createElement('div');
  
    divEl.innerHTML = `
    <div class="explicacion__contenedor">
     <h2 class="explicacion__texto">
        Presioná jugar
        y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.
     </h2>
        <boton-azul-el class="boton__jugar">Jugar!</boton-azul-el>
    </div>
    `
    const botonJugarEl = divEl.querySelector('.boton__jugar');
    botonJugarEl?.addEventListener('click', ()=>{
        params.goTo('/jugar')
    })
    return divEl
}