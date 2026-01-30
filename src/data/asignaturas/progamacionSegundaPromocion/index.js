import info from "./info.js";
import moduloTema1 from "./modulos/tema1.js";
import moduloTema2 from "./modulos/tema2.js";
import moduloTema3 from "./modulos/tema3.js";
import moduloTema4 from "./modulos/tema4.js";
import moduloTema5 from "./modulos/tema5.js";


export const programacionSegundaPromocion = {
    ...info,
    modulos: [
        moduloTema1,
        moduloTema2,
        moduloTema3,
        moduloTema4,
        moduloTema5,
    ],
};

export default programacionSegundaPromocion;
