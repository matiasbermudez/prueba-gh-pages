import { initRouter } from "./routes";


import { textContentInit } from "./components/text-content";
import { botonesPptInit } from "./components/botones-ppt";
import { botonAzulInit } from "./components/boton-azul";
import { botonesPptConEventoInit } from "./components/botonConEvento";

document.addEventListener("DOMContentLoaded", () => {
    (function main() {
        const rootEl = document.querySelector('#root');
        const posibleNullEl = document.createElement('div');
        posibleNullEl.innerText = "No se cargó el rootEl";

        initRouter(rootEl || posibleNullEl);
        textContentInit();
        botonesPptInit();
        botonAzulInit();
        botonesPptConEventoInit();
    })();
});