import { state } from "../../state";

export function historialInit(params : any) {
    const divEl = document.createElement('div');
    let estado = state.getState();

    function renderTable() {
        const tablaHTML = `
            <table class="tabla">
                <tr class="tabla__tr">
                    <td class="tabla__td">Jugador</td>
                    <td class="tabla__td">Maquina</td>
                    <td class="tabla__td">Resultado</td>
                </tr>
                ${estado.map(jugada => `
                    <tr class="tabla__tr">
                        <td class="tabla__td">${jugada.jugador}</td>
                        <td class="tabla__td">${jugada.maquina}</td>
                        <td class="tabla__td">${jugada.ganador}</td>
                    </tr>
                `).join('')}
            </table>
        `;
        
        divEl.querySelector('.tabla')?.remove();
        divEl.insertAdjacentHTML('afterbegin', tablaHTML);
    }

    renderTable();

    state.suscribe(() => {
        estado = state.getState();
        renderTable();
    });

    divEl.innerHTML += `
        <div class="contenedor__historial-botones">
            <boton-azul-el class="boton__jugar">Volver a Jugar</boton-azul-el>
            <button class="boton__borrar">Borrar historial</button>
        </div>
    `;
    const jugarEl = divEl.querySelector('.boton__jugar');
    jugarEl?.addEventListener('click', () => {
        params.goTo('/jugar');
    });

    const botonBorrarEl = divEl.querySelector('.boton__borrar');
    botonBorrarEl?.addEventListener('click', () => {
        state.deleteHistorialLs();
        estado = state.getState(); 
        renderTable();
    });

    return divEl;
}