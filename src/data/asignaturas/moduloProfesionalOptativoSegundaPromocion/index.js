import info from "./info.js";
import moduloTema1 from "./modulos/tema1.js";
import moduloTema2 from "./modulos/tema2.js";
import moduloTema3 from "./modulos/tema3.js";
import moduloTestRepaso1 from "./modulos/testRepaso1.js";
import moduloTestTema4 from "./modulos/testTema4.js";
import moduloTestTema5 from "./modulos/testTema5.js";
import moduloTestTema6 from "./modulos/testTema6.js";

export const moduloProfesionalOptativoSegundaPromocion = {
    ...info,
    modulos: [
        moduloTema1,
        moduloTema2,
        moduloTema3,
        moduloTestRepaso1,
        moduloTestTema4,
        moduloTestTema5,
        moduloTestTema6,
    ],
};

export default moduloProfesionalOptativoSegundaPromocion;
