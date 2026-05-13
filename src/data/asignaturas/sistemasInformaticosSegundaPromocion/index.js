import info from "./info.js";
import moduloTema1 from "./modulos/tema1.js";
import moduloTema2 from "./modulos/tema2.js";
import moduloTema3 from "./modulos/tema3.js";
import moduloComandosLinux from "./modulos/comandosLinux.js";
import moduloComandosWindows from "./modulos/comandosWindows.js";
import moduloTestRepaso11Mayo from "./modulos/testRepaso11Mayo.js";

export const sistemasInformaticosSegundaPromocion = {
    ...info,
    modulos: [
        moduloTema1,
        moduloTema2,
        moduloTema3,
        moduloComandosLinux,
        moduloComandosWindows,
        moduloTestRepaso11Mayo,
    ],
};

export default sistemasInformaticosSegundaPromocion;
