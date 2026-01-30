/**
 * Servicio para gestionar las preguntas fallidas del usuario.
 * Almacena referencias (preguntaId, moduloId, asignaturaId) en localStorage.
 * Al repasar y acertar, se eliminan de la lista.
 * @module preguntasFallidasService
 */

import { obtenerModuloPorId } from '@/data';
import { shuffleArray, shuffleQuestionOptions } from '@utils/quizUtils';

const STORAGE_KEY = 'quiz_preguntas_fallidas';
const MAX_ENTRIES = 200;

/**
 * Obtiene el array de preguntas fallidas desde localStorage.
 * @returns {Array<{preguntaId: number, moduloId: number, asignaturaId: number, timestamp?: number}>}
 */
export const getPreguntasFallidas = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const list = JSON.parse(raw);
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
};

/**
 * Guarda el array de preguntas fallidas en localStorage (limita a MAX_ENTRIES).
 * @param {Array} list
 */
const savePreguntasFallidas = (list) => {
  const sorted = [...list].sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
  const trimmed = sorted.slice(0, MAX_ENTRIES);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
};

/**
 * Añade referencias de preguntas fallidas (sin duplicar por preguntaId).
 * Si la pregunta ya estaba en la lista (vuelves a fallarla), no se duplica;
 * solo se actualiza el timestamp para mantener el orden por última vez fallada.
 * @param {Array<{preguntaId: number, moduloId: number, asignaturaId: number}>} entradas
 */
export const addPreguntasFallidas = (entradas) => {
  if (!entradas || entradas.length === 0) return;
  const list = getPreguntasFallidas();
  const ids = new Set(list.map((e) => e.preguntaId));
  let changed = false;
  const now = Date.now();
  entradas.forEach((e) => {
    if (e.preguntaId == null) return;
    if (ids.has(e.preguntaId)) {
      // Ya estaba: no duplicar, solo actualizar timestamp (última vez fallada)
      const existing = list.find((x) => x.preguntaId === e.preguntaId);
      if (existing) {
        existing.timestamp = now;
        changed = true;
      }
      return;
    }
    list.push({
      preguntaId: e.preguntaId,
      moduloId: e.moduloId,
      asignaturaId: e.asignaturaId,
      timestamp: now
    });
    ids.add(e.preguntaId);
    changed = true;
  });
  if (changed) {
    savePreguntasFallidas(list);
  }
};

/**
 * Elimina de la lista las preguntas cuyos IDs se indican (acertadas en repaso).
 * @param {number[]} preguntaIds
 */
export const removePreguntasFallidas = (preguntaIds) => {
  if (!preguntaIds || preguntaIds.length === 0) return;
  const set = new Set(preguntaIds.map(Number));
  const list = getPreguntasFallidas().filter((e) => !set.has(e.preguntaId));
  savePreguntasFallidas(list);
};

/**
 * Construye el array de objetos pregunta para repasar (desded módulos/asignaturas).
 * Devuelve preguntas únicas por id, mezcladas y con opciones mezcladas.
 * @returns {Promise<{preguntas: Array, asignatura: Object}>}
 */
export const getPreguntasParaRepaso = () => {
  return new Promise((resolve) => {
    try {
      const list = getPreguntasFallidas();
      if (list.length === 0) {
        resolve({ preguntas: [], asignatura: { id: 'fallidas', nombre: 'Preguntas fallidas' } });
        return;
      }
      const seen = new Set();
      const preguntas = [];
      for (const ref of list) {
        if (seen.has(ref.preguntaId)) continue;
        const modulo = obtenerModuloPorId(ref.moduloId);
        if (!modulo || !modulo.preguntas) continue;
        const pregunta = modulo.preguntas.find((p) => p.id === ref.preguntaId);
        if (pregunta) {
          seen.add(pregunta.id);
          preguntas.push(pregunta);
        }
      }
      const mezcladas = shuffleArray(preguntas).map((p) => shuffleQuestionOptions(p));
      resolve({
        preguntas: mezcladas,
        asignatura: { id: 'fallidas', nombre: 'Preguntas fallidas' }
      });
    } catch (err) {
      console.error('Error getPreguntasParaRepaso:', err);
      resolve({ preguntas: [], asignatura: { id: 'fallidas', nombre: 'Preguntas fallidas' } });
    }
  });
};
