import { state } from "../../state";
import empate_estrella from '../../imgs/resultado_empate.png'
export function empateInit(params: any) {
    const divEl = document.createElement('div');
    const jugador_puntaje:number = state.getResultado('jugador');
    const maquina_puntaje:number = state.getResultado('maquina');
    console.log("Ultimo state: ",state.getState())
    divEl.innerHTML = `
    <div class="resultado__contenedor resultado__empate">

        <img src="${empate_estrella}" alt="estrella empate" width="255" height="260" >

        <article class="article__resultado article__empate">
            <h2 class="article__score">Score</h2>
            <h3 class="article__vos">Vos: ${jugador_puntaje}</h3>
            <h3 class="article__maquina">Maquina: ${maquina_puntaje}</h3>
         </article>
        <boton-azul-el class="boton__jugar">Volver a Jugar</boton-azul-el>
        <boton-azul-el class="boton__historial">Historial</boton-azul-el>

    </div>
    `
    const jugarEl = divEl.querySelector('.boton__jugar');
    jugarEl?.addEventListener('click', ()=>{
        params.goTo('/jugar')
    } )
    const historialEl = divEl.querySelector('.boton__historial');
    historialEl?.addEventListener('click', ()=>{
            params.goTo('/historial')
    })
    
    return divEl
}