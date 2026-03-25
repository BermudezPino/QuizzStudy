import info from "./info.js";
import moduloTema1 from "./modulos/tema1.js";
import moduloTema2 from "./modulos/tema2.js";

export const basesDeDatosSegundaPromocion = {
    ...info,
    modulos: [
        moduloTema1,
        moduloTema2,
    ],
};

export default basesDeDatosSegundaPromocion;
