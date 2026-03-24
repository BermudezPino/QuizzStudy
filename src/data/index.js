// src/data/index.js

// Importación de la lista básica de asignaturas
import { asignaturas } from "./asignaturas";

// Importación de la asignatura Sistemas Informáticos (completa con módulos)
import sistemasInformaticos from "./asignaturas/sistemasInformaticos";
import programacion from "./asignaturas/programacion";
import basesDeDatos from "./asignaturas/basesDeDatos";
import entornosDeDesarrollo from "./asignaturas/entornosDeDesarrollo";
import lenguajesMarcas from "./asignaturas/lenguajeDeMarcas";
import itinerarioEmpleabilidad from "./asignaturas/itinerarioParaLaEmpleabilidad";
import moduloProfesionalOptativo from "./asignaturas/moduloProfesionalOptativo";
import programacionSegundaPromocion from "./asignaturas/progamacionSegundaPromocion";
import lenguajeMarcasSegundaPromocion from "./asignaturas/lenguajeMarcasSegundaPromocion";
import moduloProfesionalOptativoSegundaPromocion from "./asignaturas/moduloProfesionalOptativoSegundaPromocion";
import sistemasInformaticosSegundaPromocion from "./asignaturas/sistemasInformaticosSegundaPromocion";
import despliegueDeAplicacionesWeb from "./asignaturas/despliegueDeAplicacionesWeb";
import digitalizacion from "./asignaturas/digitalizacion";
import disenoInterfaces from "./asignaturas/disenoInterfaces";
import entornoCliente from "./asignaturas/entornoCliente";
import entornoServidor from "./asignaturas/entornoServidor";
import itinearioParaLaEmpleabilidad2 from "./asignaturas/itinearioParaLaEmpleabilidad2";
import sostenibilidad from "./asignaturas/sostenibilidad";
import basesDeDatosSegundaPromocion from "./asignaturas/basesDeDatosSegundaPromocion";
import entornosDesarrolloSegundaPromocion from "./asignaturas/entornosDesarrolloSegundaPromocion";

// Asignaturas de primer año (las actuales)
const asignaturasPrimerAno = [
  sistemasInformaticos,
  basesDeDatos,
  programacion,
  lenguajesMarcas,
  entornosDeDesarrollo,
  itinerarioEmpleabilidad,
  moduloProfesionalOptativo,
];

// Asignaturas de segundo año
const asignaturasSegundoAno = [
  despliegueDeAplicacionesWeb,
  digitalizacion,
  disenoInterfaces,
  entornoCliente,
  entornoServidor,
  itinearioParaLaEmpleabilidad2,
  sostenibilidad,
];

// Asignaturas de Primer Año | Segunda Promoción (año 3)
const asignaturasSegundaPromocion = [
  programacionSegundaPromocion,
  lenguajeMarcasSegundaPromocion,
  moduloProfesionalOptativoSegundaPromocion,
  sistemasInformaticosSegundaPromocion,
  basesDeDatosSegundaPromocion,
  entornosDesarrolloSegundaPromocion,
];

// Exporta la lista simple de asignaturas (solo metadatos)
export { asignaturas };

// Exporta las asignaturas completas con sus módulos (retrocompatibilidad)
export const asignaturasCompletas = asignaturasPrimerAno;

// Nueva estructura organizada por años
export const asignaturasPorAno = {
  1: {
    nombre: "Primer Año | Primera Promoción",
    asignaturas: asignaturasPrimerAno,
    disponible: true
  },
  2: {
    nombre: "Segundo Año | Primera Promoción",
    asignaturas: asignaturasSegundoAno,
    disponible: true
  },
  3: {
    nombre: "Primer Año | Segunda Promoción",
    asignaturas: asignaturasSegundaPromocion,
    disponible: true
  }
};

// Función auxiliar para obtener una asignatura por su ID (busca en todos los años)
export const obtenerAsignaturaPorId = (id) => {
  // Buscar en todas las asignaturas de todos los años
  for (const ano of Object.values(asignaturasPorAno)) {
    const asignatura = ano.asignaturas.find((asignatura) => asignatura.id === id);
    if (asignatura) return asignatura;
  }
  return null;
};

// Función auxiliar para obtener un módulo por su ID (busca en todos los años)
export const obtenerModuloPorId = (moduloId) => {
  for (const ano of Object.values(asignaturasPorAno)) {
    for (const asignatura of ano.asignaturas) {
      const modulo = asignatura.modulos.find((m) => m.id === moduloId);
      if (modulo) return modulo;
    }
  }
  return null;
};

// Función para obtener todos los módulos de una asignatura
export const obtenerModulosPorAsignatura = (asignaturaId) => {
  const asignatura = obtenerAsignaturaPorId(asignaturaId);
  return asignatura ? asignatura.modulos : [];
};

// Función para obtener asignaturas de un año específico
export const obtenerAsignaturasPorAno = (ano) => {
  return asignaturasPorAno[ano] || null;
};

// Función para obtener todos los años disponibles
export const obtenerAnosDisponibles = () => {
  return Object.keys(asignaturasPorAno).map(ano => ({
    numero: parseInt(ano),
    ...asignaturasPorAno[ano]
  }));
};

// Crea un objeto estructurado para acceso fácil
export const quizData = {
  asignaturas: asignaturasCompletas, // Retrocompatibilidad
  asignaturasPorAno,
  obtenerAsignaturaPorId,
  obtenerModuloPorId,
  obtenerModulosPorAsignatura,
  obtenerAsignaturasPorAno,
  obtenerAnosDisponibles,
};

export default quizData;