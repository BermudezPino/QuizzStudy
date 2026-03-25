import info from "./info.js";
import moduloTema1 from "./modulos/tema1.js";
import moduloTema2 from "./modulos/tema2.js";

export const entornosDesarrolloSegundaPromocion = {
    ...info,
    modulos: [
        moduloTema1,
        moduloTema2,
    ],
};

export default entornosDesarrolloSegundaPromocion;
