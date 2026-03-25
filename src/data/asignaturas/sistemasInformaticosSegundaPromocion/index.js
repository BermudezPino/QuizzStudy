import info from "./info.js";
import moduloTema1 from "./modulos/tema1.js";
import moduloTema2 from "./modulos/tema2.js";
import moduloTema3 from "./modulos/tema3.js";

export const sistemasInformaticosSegundaPromocion = {
    ...info,
    modulos: [
        moduloTema1,
        moduloTema2,
        moduloTema3,
    ],
};

export default sistemasInformaticosSegundaPromocion;
