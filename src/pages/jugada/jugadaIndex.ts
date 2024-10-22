import { state } from "../../state";

export function jugadaInit(params : any){
    
    
    const divEl = document.createElement('div');
    divEl.classList.add('contenedor__jugada');
    const oldState = state.getState();
    const largo = (oldState.length - 1);
    divEl.innerHTML = `
        <botones-ppt-el 
           ppt="${oldState[largo].maquina}"
           player="maquina__play"
           class="welcome__botones-ppt"
          > 
        </botones-ppt-el>

        <h1>${oldState[largo].ganador}</h1>

        <botones-ppt-el ppt="${oldState[largo].jugador}" class="jugador__play-jugada "></botones-ppt-el>
    `
    
    let counter = 2;
    function countDownTry (){
        const intervalId = setInterval(()=>{
           counter--;
           const countdownElement = divEl.querySelector('.countdown-circle'); 
           
        if (countdownElement) {
           //LE HAGO TO STRING POR QUE EL TEXTCONTENT NO ADMITE NUMBERS, SOLO STRING
           countdownElement.textContent = counter.toString();
       }
       //SI EL CONTADOR LLEGA A 0 CORTO EL INTERVAL CON CLEARINTERVAL Y EL NOMBRE DEL INTERVAL
       
            if(counter <= 0  ){
                clearInterval(intervalId);
                if(oldState[largo].ganador === "jugador"){
                    params.goTo('/ganaste');
                }else if (oldState[largo].ganador === "maquina"){
                    params.goTo('/perdiste');
                }else{
                    
                    params.goTo('/empate');
                }
            }
        }, 1000);
    };
    countDownTry ()
    
    
    return divEl
}