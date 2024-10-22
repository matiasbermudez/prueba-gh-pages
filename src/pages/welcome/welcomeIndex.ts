export function welcomeInit(params) {
    const divEl = document.createElement('div');
    divEl.innerHTML = `
    <div class="welcome__contenedor">
     <div class="welcome__titulo">
        <h2>Piedra</h2>
        <h2>Papel ó</h2>
        <h2>Tijera</h2>
    </div>
        <boton-azul-el class="boton__principal">Empezar</boton-azul-el>
       
    </div>
    `

    const empezarEl = divEl.querySelector('.boton__principal');
    
    empezarEl?.addEventListener('click', ()=>{
        params.goTo('/explicacion')
    })
    return divEl
}