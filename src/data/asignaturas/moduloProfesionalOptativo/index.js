import info from "./info.js";
import moduloPrimerTrimestre from "./modulos/primerTrimestre";
import moduloSegundoTrimestre from "./modulos/segundoTrimestre";
import moduloBiblioteca from "./modulos/biblioteca.js";
import moduloTercerTrimestreUno from "./modulos/tercerTrimestreUno.js";
import moduloTercerTrimestreDos from "./modulos/tercerTrimestreDos.js";
import moduloMopeVL from "./modulos/cientoMolpe.js";
import moduloSimulacroUnoMPO from "./modulos/simulacroUnoMPO.js";
import moduloTema4 from "./modulos/tema4.js";
import moduloTema5 from "./modulos/tema5.js";
import moduloTema6 from "./modulos/tema6.js";

export const moduloProfesionalOptativo = {
    ...info,
    modulos: [
        moduloPrimerTrimestre,
        moduloSegundoTrimestre,
        moduloBiblioteca,
        moduloMopeVL,
        moduloTercerTrimestreUno,
        moduloTercerTrimestreDos,
        moduloSimulacroUnoMPO,
        moduloTema4,
        moduloTema5,
        moduloTema6,
    ],
};
export default moduloProfesionalOptativo;