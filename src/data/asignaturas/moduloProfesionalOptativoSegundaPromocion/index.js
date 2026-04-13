import info from "./info.js";
import moduloTema1 from "./modulos/tema1.js";
import moduloTema2 from "./modulos/tema2.js";
import moduloTema3 from "./modulos/tema3.js";
import moduloTestRepaso1 from "./modulos/testRepaso1.js";

export const moduloProfesionalOptativoSegundaPromocion = {
    ...info,
    modulos: [
        moduloTema1,
        moduloTema2,
        moduloTema3,
        moduloTestRepaso1,
    ],
};

export default moduloProfesionalOptativoSegundaPromocion;
