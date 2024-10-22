type jugadas = "piedra" | "papel" | "tijera";
type jugadores = "jugador" | "maquina"
const state = {
    data : [],
    jugadas : ["piedra","papel","tijera"],
    listeners: [],
    
    getState(){
        this.syncWithLs();
        return this.data;
    },
    setState(newState){
        this.syncWithLs();
        this.data = newState;
        localStorage.removeItem("jugadas-ls")
        localStorage.setItem("jugadas-ls", JSON.stringify(this.data));
        
        for(const cb of this.listeners){
            cb();
        }
    },
    suscribe(callback : ()=> any){
        this.listeners.push(callback)
    },
    syncWithLs(){
        const jugadasLs = localStorage.getItem('jugadas-ls')
        this.data = jugadasLs ? 
                               JSON.parse(jugadasLs)
                              : [];                        
    },
    deleteHistorialLs(){
        localStorage.removeItem('jugadas-ls');
        this.setState([])
    }
    ,
    setMaquinaPlay(){
        //RANDOM QUE RESPONDE 1 JUGADA PIEDRA//PAPEL//TIJERA
        const jugadaPc = this.jugadas[Math.floor(Math.random() * 3)];
        return jugadaPc
    },
    setJugada(jugadaPlayer:jugadas){
        const jugadaMaquina = this.setMaquinaPlay();
        const jugadaCompleta = {
            jugador: jugadaPlayer,
            maquina: jugadaMaquina,
            ganador: this.setGanador(jugadaPlayer, jugadaMaquina)
        }
        const estadoViejo = this.getState();
        const nuevoState = [...estadoViejo, jugadaCompleta];
        console.log("Nuevo Estado: ",nuevoState);

        this.setState(nuevoState)
        
    },
    setGanador(jugadaPlayer: jugadas, jugadaMaquina:jugadas){
        console.log(jugadaMaquina, jugadaPlayer)
        if(jugadaPlayer === jugadaMaquina){
            return "empate"
        }else if (jugadaPlayer === "piedra" && jugadaMaquina === "papel"){
            return "maquina"
        }else if (jugadaPlayer === "piedra" && jugadaMaquina === "tijera"){
            return "jugador"
        }else if (jugadaPlayer === "tijera" && jugadaMaquina === "papel"){
            return "jugador"
        }else if(jugadaPlayer === "tijera" && jugadaMaquina === "piedra"){
            return "maquina"
        }else if (jugadaPlayer === "papel" && jugadaMaquina === "piedra"){
            return "jugador"
        }else if (jugadaPlayer === "papel" && jugadaMaquina === "tijera"){
            return "maquina"
        }
    },
    getResultado(player : jugadores):number{
        //RECORRO EL STATE COMPLETO SI EL RESULTADO EL IGUAL AL PLAYER LE SUMO 1 AL CONTADOR, RETORNO CONTADOR
        const arrayJugadas = this.getState();
        let contador:number = 0;
        arrayJugadas.forEach(jugada => {
            if(jugada.ganador === player){
                contador++
            }
        });
        return contador 
    }
}
export  { state }