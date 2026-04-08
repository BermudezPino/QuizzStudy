import info from "./info.js";
import moduloTema1 from "./modulos/tema1.js";
import moduloTema2 from "./modulos/tema2.js";
import moduloUml from "./modulos/uml.js";

export const entornosDesarrolloSegundaPromocion = {
    ...info,
    modulos: [
        moduloTema1,
        moduloTema2,
        moduloUml,
    ],
};

export default entornosDesarrolloSegundaPromocion;
