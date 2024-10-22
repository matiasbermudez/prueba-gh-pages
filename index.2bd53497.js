function t(t){return t&&t.__esModule?t.default:t}var e=globalThis,a={},o={},n=e.parcelRequire0eff;null==n&&((n=function(t){if(t in a)return a[t].exports;if(t in o){var e=o[t];delete o[t];var n={id:t,exports:{}};return a[t]=n,e.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){o[t]=e},e.parcelRequire0eff=n),(0,n.register)("27Lyk",function(t,e){Object.defineProperty(t.exports,"register",{get:()=>a,set:t=>a=t,enumerable:!0,configurable:!0});var a,o=new Map;a=function(t,e){for(var a=0;a<e.length-1;a+=2)o.set(e[a],{baseUrl:t,path:e[a+1]})}}),n("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["dZpbI","index.2bd53497.js","3EzTf","resultado_empate.48d79673.png","GgFSd","resultado_ganaste.35a165ed.png","kB39R","resultado_perdiste.f5dea3aa.png","i5x2n","piedra.daae8faf.png","5zVQO","papel.ecd345c9.png","8qmmu","tijera.b21a41be.png"]'));const r={data:[],jugadas:["piedra","papel","tijera"],listeners:[],getState(){return this.syncWithLs(),this.data},setState(t){for(let e of(this.syncWithLs(),this.data=t,localStorage.removeItem("jugadas-ls"),localStorage.setItem("jugadas-ls",JSON.stringify(this.data)),this.listeners))e()},suscribe(t){this.listeners.push(t)},syncWithLs(){let t=localStorage.getItem("jugadas-ls");this.data=t?JSON.parse(t):[]},deleteHistorialLs(){localStorage.removeItem("jugadas-ls"),this.setState([])},setMaquinaPlay(){return this.jugadas[Math.floor(3*Math.random())]},setJugada(t){let e=this.setMaquinaPlay(),a={jugador:t,maquina:e,ganador:this.setGanador(t,e)},o=[...this.getState(),a];console.log("Nuevo Estado: ",o),this.setState(o)},setGanador(t,e){if(console.log(e,t),t===e)return"empate";if("piedra"===t&&"papel"===e)return"maquina";if("piedra"===t&&"tijera"===e||"tijera"===t&&"papel"===e)return"jugador";if("tijera"===t&&"piedra"===e)return"maquina";if("papel"===t&&"piedra"===e)return"jugador";if("papel"===t&&"tijera"===e)return"maquina"},getResultado(t){let e=this.getState(),a=0;return e.forEach(e=>{e.ganador===t&&a++}),a}};var s={};s=new URL("resultado_empate.48d79673.png",import.meta.url).toString();var l={};l=new URL("resultado_ganaste.35a165ed.png",import.meta.url).toString();var i={};i=new URL("resultado_perdiste.f5dea3aa.png",import.meta.url).toString();const c=[{path:/\/welcome/,component:function(t){let e=document.createElement("div");e.innerHTML=`
    <div class="welcome__contenedor">
     <div class="welcome__titulo">
        <h2>Piedra</h2>
        <h2>Papel \xf3</h2>
        <h2>Tijera</h2>
    </div>
        <boton-azul-el class="boton__principal">Empezar</boton-azul-el>
       
    </div>
    `;let a=e.querySelector(".boton__principal");return a?.addEventListener("click",()=>{t.goTo("/explicacion")}),e}},{path:/\/explicacion/,component:function(t){let e=document.createElement("div");e.innerHTML=`
    <div class="explicacion__contenedor">
     <h2 class="explicacion__texto">
        Presion\xe1 jugar
        y eleg\xed: piedra, papel o tijera antes de que pasen los 3 segundos.
     </h2>
        <boton-azul-el class="boton__jugar">Jugar!</boton-azul-el>
    </div>
    `;let a=e.querySelector(".boton__jugar");return a?.addEventListener("click",()=>{t.goTo("/jugar")}),e}},{path:/\/jugar/,component:function(t){let e=document.querySelector(".piedra"),a=document.querySelector(".papel"),o=document.querySelector(".tijera");e?.classList.add("botonOff"),a?.classList.add("botonOff"),o?.classList.add("botonOff");let n=3,r=document.createElement("div");r.innerHTML=`
         <div id="countdown" class="countdown-circle">${n}</div>
         <div class="contenedor__botones-evento">
            <botones-ppt-con-evento-el ppt="piedra" class="jugar__boton-evento piedra"></botones-ppt-con-evento-el>
            <botones-ppt-con-evento-el ppt="papel" class="jugar__boton-evento papel"></botones-ppt-con-evento-el>
            <botones-ppt-con-evento-el ppt="tijera" class="jugar__boton-evento tijera"></botones-ppt-con-evento-el>
         </div>
    `;let s=!1;!function(){let e=setInterval(()=>{n--;let a=r.querySelector(".countdown-circle");a&&(a.textContent=n.toString()),n<=0&&s?(clearInterval(e),t.goTo("/jugada")):0==n&&(alert("No realizaste la jugada, volvemos a iniciar"),n=4)},1e3)}();let l=r.querySelector(".piedra"),i=r.querySelector(".papel"),c=r.querySelector(".tijera");return l?.addEventListener("click",()=>{s=!0,l.classList.add("jugador__play"),i?.classList.add("SelectedOff"),c?.classList.add("SelectedOff")}),i?.addEventListener("click",()=>{s=!0,i.classList.add("jugador__play"),l?.classList.add("SelectedOff"),c?.classList.add("SelectedOff")}),c?.addEventListener("click",()=>{s=!0,c.classList.add("jugador__play"),i?.classList.add("SelectedOff"),l?.classList.add("SelectedOff")}),r}},{path:/\/jugada/,component:function(t){let e=document.createElement("div");e.classList.add("contenedor__jugada");let a=r.getState(),o=a.length-1;e.innerHTML=`
        <botones-ppt-el 
           ppt="${a[o].maquina}"
           player="maquina__play"
           class="welcome__botones-ppt"
          > 
        </botones-ppt-el>

        <h1>${a[o].ganador}</h1>

        <botones-ppt-el ppt="${a[o].jugador}" class="jugador__play-jugada "></botones-ppt-el>
    `;let n=2;return!function(){let r=setInterval(()=>{n--;let s=e.querySelector(".countdown-circle");s&&(s.textContent=n.toString()),n<=0&&(clearInterval(r),"jugador"===a[o].ganador?t.goTo("/ganaste"):"maquina"===a[o].ganador?t.goTo("/perdiste"):t.goTo("/empate"))},1e3)}(),e}},{path:/\/ganaste/,component:function(e){let a=document.createElement("div"),o=r.getResultado("jugador"),n=r.getResultado("maquina");a.innerHTML=`
    <div class="resultado__contenedor">

        <img src="${/*@__PURE__*/t(l)}" alt="estrella ganaste" width="255" height="260" >

        <article class="article__resultado article__ganaste">
            <h2 class="article__score">Score</h2>
            <h3 class="article__vos">Vos: ${o}</h3>
            <h3 class="article__maquina">Maquina: ${n}</h3>
         </article>
        <boton-azul-el class="boton__jugar">Volver a Jugar</boton-azul-el>
        <boton-azul-el class="boton__historial">Historial</boton-azul-el>
    </div>
    `;let s=a.querySelector(".boton__jugar"),i=a.querySelector(".boton__historial");return s?.addEventListener("click",()=>{e.goTo("/jugar")}),i?.addEventListener("click",()=>{e.goTo("/historial")}),a}},{path:/\/perdiste/,component:function(e){let a=document.createElement("div"),o=r.getResultado("jugador"),n=r.getResultado("maquina");a.innerHTML=`
    <div class="resultado__contenedor">

        <img src="${/*@__PURE__*/t(i)}" alt="estrella perdiste" width="255" height="260" >

        <article class="article__resultado article__perdiste">
            <h2 class="article__score">Score</h2>
            <h3 class="article__vos">Vos: ${o}</h3>
            <h3 class="article__maquina">Maquina: ${n}</h3>
         </article>
        <boton-azul-el class="boton__jugar">Volver a Jugar</boton-azul-el>
         <boton-azul-el class="boton__historial">Historial</boton-azul-el>

    </div>
    `;let s=a.querySelector(".boton__jugar");s?.addEventListener("click",()=>{e.goTo("/jugar")});let l=a.querySelector(".boton__historial");return l?.addEventListener("click",()=>{e.goTo("/historial")}),a}},{path:/\/empate/,component:function(e){let a=document.createElement("div"),o=r.getResultado("jugador"),n=r.getResultado("maquina");console.log("Ultimo state: ",r.getState()),a.innerHTML=`
    <div class="resultado__contenedor resultado__empate">

        <img src="${/*@__PURE__*/t(s)}" alt="estrella empate" width="255" height="260" >

        <article class="article__resultado article__empate">
            <h2 class="article__score">Score</h2>
            <h3 class="article__vos">Vos: ${o}</h3>
            <h3 class="article__maquina">Maquina: ${n}</h3>
         </article>
        <boton-azul-el class="boton__jugar">Volver a Jugar</boton-azul-el>
        <boton-azul-el class="boton__historial">Historial</boton-azul-el>

    </div>
    `;let l=a.querySelector(".boton__jugar");l?.addEventListener("click",()=>{e.goTo("/jugar")});let i=a.querySelector(".boton__historial");return i?.addEventListener("click",()=>{e.goTo("/historial")}),a}},{path:/\/historial/,component:function(t){let e=document.createElement("div"),a=r.getState();function o(){let t=`
            <table class="tabla">
                <tr class="tabla__tr">
                    <td class="tabla__td">Jugador</td>
                    <td class="tabla__td">Maquina</td>
                    <td class="tabla__td">Resultado</td>
                </tr>
                ${a.map(t=>`
                    <tr class="tabla__tr">
                        <td class="tabla__td">${t.jugador}</td>
                        <td class="tabla__td">${t.maquina}</td>
                        <td class="tabla__td">${t.ganador}</td>
                    </tr>
                `).join("")}
            </table>
        `;e.querySelector(".tabla")?.remove(),e.insertAdjacentHTML("afterbegin",t)}o(),r.suscribe(()=>{a=r.getState(),o()}),e.innerHTML+=`
        <div class="contenedor__historial-botones">
            <boton-azul-el class="boton__jugar">Volver a Jugar</boton-azul-el>
            <button class="boton__borrar">Borrar historial</button>
        </div>
    `;let n=e.querySelector(".boton__jugar");n?.addEventListener("click",()=>{t.goTo("/jugar")});let s=e.querySelector(".boton__borrar");return s?.addEventListener("click",()=>{r.deleteHistorialLs(),a=r.getState(),o()}),e}}],d="/20-desafio-ppt";function u(){return location.host.includes("github.io")}var p={};p=new URL("piedra.daae8faf.png",import.meta.url).toString();var _={};_=new URL("papel.ecd345c9.png",import.meta.url).toString();var g={};g=new URL("tijera.b21a41be.png",import.meta.url).toString(),document.addEventListener("DOMContentLoaded",()=>{!function(){let e=document.querySelector("#root"),a=document.createElement("div");a.innerText="No se cargó el rootEl",function(t){function e(t){let e=u()?d+t:t;history.pushState({},"",e),a(e)}function a(a){let o=u()?a.replace(d,""):a;for(let a of c)if(a.path.test(o)){let o=a.component({goTo:e});t.firstChild&&t.firstChild.remove(),t.append(o)}}"/"==location.pathname?e("/welcome"):a(location.pathname)}(e||a),function(){class t extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.elemento=this.textContent,this.render()}render(){this.shadow.innerHTML=`
            ${this.elemento}
        `}}customElements.define("text-content-el",t)}(),function(){class e extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.ppt=this.getAttribute("ppt"),this.jugador=this.getAttribute("player"),this.objetoPpt={piedra:/*@__PURE__*/t(p),papel:/*@__PURE__*/t(_),tijera:/*@__PURE__*/t(g)},this.render()}render(){if(this.shadow.innerHTML=`
                <button class="boton__ppt ">
                    <img src="${this.objetoPpt[this.ppt]}" class="boton__ppt-img">
                </button>
                
            `,"maquina__play"==this.jugador){let t=this.shadow.querySelector(".boton__ppt");t?.classList.add("maquina__play")}let t=document.createElement("style");t.textContent=`
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
              
            `,this.shadow.append(t)}}customElements.define("botones-ppt-el",e)}(),function(){class t extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.texto=this.textContent,this.render()}render(){this.shadow.innerHTML=`
                <button class="boton__azul">${this.texto}</button>
                
            `;let t=document.createElement("style");t.textContent=`
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
               
            `,this.shadow.append(t)}}customElements.define("boton-azul-el",t)}(),function(){class e extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.ppt=this.getAttribute("ppt"),this.jugador=this.getAttribute("player"),this.objetoPpt={piedra:/*@__PURE__*/t(p),papel:/*@__PURE__*/t(_),tijera:/*@__PURE__*/t(g)},this.render()}render(){this.shadow.innerHTML=`
                <button class="boton__ppt ">
                    <img src="${this.objetoPpt[this.ppt]}" class="boton__ppt-img">
                </button>
                
            `;let t=this.shadow.querySelector(".boton__ppt");if(t?.addEventListener("click",()=>{r.setJugada(`${this.ppt}`)}),"maquina__play"==this.jugador){let t=this.shadow.querySelector(".boton__ppt");t?.classList.add("maquina__play")}let e=document.createElement("style");e.textContent=`
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
              
            `,this.shadow.append(e)}}customElements.define("botones-ppt-con-evento-el",e)}()}()});
//# sourceMappingURL=index.2bd53497.js.map
