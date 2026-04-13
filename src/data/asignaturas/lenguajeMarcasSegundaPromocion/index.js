import info from "./info.js";
import moduloTema1 from "./modulos/tema1.js";
import moduloTema2 from "./modulos/tema2.js";
import moduloTema3 from "./modulos/tema3.js";
import moduloTema4 from "./modulos/tema4.js";
import moduloTema5 from "./modulos/tema5.js";
import moduloTema6 from "./modulos/tema6.js";
import moduloTest7XmlDtdXsd from "./modulos/test7XmlDtdXsd.js";


export const lenguajeMarcasSegundaPromocion = {
    ...info,
    modulos: [
        moduloTema1,
        moduloTema2,
        moduloTema3,
        moduloTema4,
        moduloTema5,
        moduloTema6,
        moduloTest7XmlDtdXsd,
    ],
};

export default lenguajeMarcasSegundaPromocion;
