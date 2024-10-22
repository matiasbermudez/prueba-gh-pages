
import { state } from "../../state";

export function jugarInit(params:any){
    // const todosLosBotones = document.querySelectorAll('.welcome__botones-ppt');
    // todosLosBotones.forEach((element) =>{
    //     element.classList.remove('SelectedOff');
    //     element.classList.remove('jugador__play');
    // })
    const piedraEl = document.querySelector('.piedra');
    const papelEl = document.querySelector('.papel');
    const tijeraEl = document.querySelector('.tijera');
    piedraEl?.classList.add('botonOff');
    papelEl?.classList.add('botonOff');
    tijeraEl?.classList.add('botonOff');
    
   let counter = 3;
 
    const divEl = document.createElement('div');
  
    divEl.innerHTML = `
         <div id="countdown" class="countdown-circle">${counter}</div>
         <div class="contenedor__botones-evento">
            <botones-ppt-con-evento-el ppt="piedra" class="jugar__boton-evento piedra"></botones-ppt-con-evento-el>
            <botones-ppt-con-evento-el ppt="papel" class="jugar__boton-evento papel"></botones-ppt-con-evento-el>
            <botones-ppt-con-evento-el ppt="tijera" class="jugar__boton-evento tijera"></botones-ppt-con-evento-el>
         </div>
    `
    let hizoLaJugada = false;
    function countDownTry (){
         const intervalId = setInterval(()=>{
            counter--;
            const countdownElement = divEl.querySelector('.countdown-circle'); 
            
         if (countdownElement) {
            //LE HAGO TO STRING POR QUE EL TEXTCONTENT NO ADMITE NUMBERS, SOLO STRING
            countdownElement.textContent = counter.toString();
        }
        //SI EL CONTADOR LLEGA A 0 CORTO EL INTERVAL CON CLEARINTERVAL Y EL NOMBRE DEL INTERVAL
        
             if(counter <= 0 && hizoLaJugada ){
                 clearInterval(intervalId);
                 params.goTo('/jugada')
             }else if (counter == 0){
                alert('No realizaste la jugada, volvemos a iniciar');
                counter = 4;
             }
         }, 1000);
     };
     countDownTry ()
    
     const botonPiedraEl = divEl.querySelector('.piedra');
     const botonPapelEl = divEl.querySelector('.papel');
     const botonTijeraEl = divEl.querySelector('.tijera');
     
     botonPiedraEl?.addEventListener('click', ()=>{  
        hizoLaJugada = true;
        botonPiedraEl.classList.add('jugador__play')
        botonPapelEl?.classList.add('SelectedOff');
        botonTijeraEl?.classList.add('SelectedOff');
     });
     botonPapelEl?.addEventListener('click', ()=>{  
        hizoLaJugada = true;
        botonPapelEl.classList.add('jugador__play')
        botonPiedraEl?.classList.add('SelectedOff');
        botonTijeraEl?.classList.add('SelectedOff');
     });
     botonTijeraEl?.addEventListener('click', ()=>{  
        hizoLaJugada = true;
        botonTijeraEl.classList.add('jugador__play')
        botonPapelEl?.classList.add('SelectedOff');
        botonPiedraEl?.classList.add('SelectedOff');
     });

    return divEl
}