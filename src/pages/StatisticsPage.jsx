/**
 * Página de estadísticas del usuario que muestra el rendimiento global y por asignatura.
 *
 * @component
 * @returns {JSX.Element} Componente StatisticsPage renderizado
 *
 * @example
 * // En un componente Router
 * <Route path="/estadisticas" element={<StatisticsPage />} />
 */
import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, PageHeader } from '@components/layout';
import { Button, Card } from '@components/common';
import { obtenerAsignaturaPorId, obtenerModuloPorId } from '@/data';
import { formatAsignaturaNombreForDisplay, formatModuloNombreForDisplay } from '@utils/quizUtils';

/**
 * Devuelve clases de color para el porcentaje de acierto.
 * @param {number} porcentaje - Porcentaje de acierto (0-100)
 * @returns {string} Clases CSS de Tailwind
 */
function colorPorcentaje(porcentaje) {
  if (porcentaje >= 80) return 'text-green-600 dark:text-green-400';
  if (porcentaje >= 50) return 'text-yellow-600 dark:text-yellow-400';
  return 'text-red-600 dark:text-red-400';
}

/**
 * Devuelve clases de fondo para la barra de progreso según el porcentaje.
 * @param {number} porcentaje - Porcentaje de acierto (0-100)
 * @returns {string} Clases CSS de Tailwind
 */
function barraColorPorcentaje(porcentaje) {
  if (porcentaje >= 80) return 'bg-green-500 dark:bg-green-400';
  if (porcentaje >= 50) return 'bg-yellow-500 dark:bg-yellow-400';
  return 'bg-red-500 dark:bg-red-400';
}

/**
 * Obtiene el nombre de una asignatura por ID, usando los datos locales.
 * @param {number|string} asignaturaId - ID de la asignatura
 * @returns {string} Nombre formateado de la asignatura
 */
function getNombreAsignatura(asignaturaId) {
  if (!asignaturaId && asignaturaId !== 0) return 'Asignatura desconocida';
  const asignatura = obtenerAsignaturaPorId(parseInt(asignaturaId, 10));
  if (asignatura?.nombre) {
    return formatAsignaturaNombreForDisplay(asignatura.nombre);
  }
  return `Asignatura ${asignaturaId}`;
}

/**
 * Obtiene el nombre de un módulo por ID y asignaturaId.
 * @param {number|string} moduloId - ID del módulo
 * @param {number|string} asignaturaId - ID de la asignatura (para contexto)
 * @returns {string} Nombre formateado del módulo
 */
function _getNombreModulo(moduloId, asignaturaId) {
  if (moduloId === 'todos') return 'Todos los módulos';
  if (moduloId === 'examen') return 'Modo examen';
  if (moduloId === 'favoritos') return 'Preguntas favoritas';
  if (!moduloId && moduloId !== 0) return 'Módulo desconocido';

  // Intentar buscar el módulo en los datos
  try {
    const asignatura = obtenerAsignaturaPorId(parseInt(asignaturaId, 10));
    if (asignatura?.modulos) {
      const modulo = asignatura.modulos.find(m => m.id === parseInt(moduloId, 10));
      if (modulo?.nombre) {
        return formatModuloNombreForDisplay(modulo.nombre);
      }
    }
    // Fallback con obtenerModuloPorId
    const moduloGlobal = obtenerModuloPorId(parseInt(moduloId, 10));
    if (moduloGlobal?.nombre) {
      return formatModuloNombreForDisplay(moduloGlobal.nombre);
    }
  } catch {
    // silenciar errores de búsqueda
  }

  return `Módulo ${moduloId}`;
}


export default function StatisticsPage() {
  const navigate = useNavigate();
  const [historico, setHistorico] = useState([]);
  const [cargando, setCargando] = useState(true);

  const cargarHistorico = useCallback(() => {
    try {
      const datos = JSON.parse(localStorage.getItem('quiz_historico') || '[]');
      setHistorico(datos);
    } catch {
      setHistorico([]);
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => {
    cargarHistorico();
  }, [cargarHistorico]);

  // Calcular estadísticas globales
  const totalTests = historico.length;
  const mediaAciertos = totalTests > 0
    ? Math.round(historico.reduce((acc, r) => {
        const pct = r.puntuacion?.porcentaje ?? 0;
        return acc + pct;
      }, 0) / totalTests)
    : 0;
  const testsPerfectos = historico.filter(r => (r.puntuacion?.porcentaje ?? 0) === 100).length;

  // Estadísticas agrupadas por asignatura
  const statsPorAsignatura = Object.values(
    historico.reduce((acc, r) => {
      const id = r.asignaturaId;
      if (!acc[id]) {
        acc[id] = {
          id,
          nombre: getNombreAsignatura(id),
          tests: 0,
          totalPct: 0,
          mejorPct: 0,
        };
      }
      const pct = r.puntuacion?.porcentaje ?? 0;
      acc[id].tests += 1;
      acc[id].totalPct += pct;
      acc[id].mejorPct = Math.max(acc[id].mejorPct, pct);
      return acc;
    }, {})
  )
    .map(s => ({ ...s, mediaPct: Math.round(s.totalPct / s.tests) }))
    .sort((a, b) => b.tests - a.tests);

  const breadcrumbs = [
    { label: 'Inicio', to: '/' },
    { label: 'Estadísticas' }
  ];

  return (
    <Layout>
      <PageHeader
        title="Mis estadísticas"
        subtitle="Historial completo de quizzes realizados y tu rendimiento global."
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">

        {/* Tarjetas de resumen global */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <Card className="text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Tests realizados</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{totalTests}</p>
          </Card>
          <Card className="text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Media de aciertos</p>
            <p className={`text-3xl font-bold ${colorPorcentaje(mediaAciertos)}`}>
              {totalTests > 0 ? `${mediaAciertos}%` : '—'}
            </p>
          </Card>
          <Card className="text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Tests perfectos (100%)</p>
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">{testsPerfectos}</p>
          </Card>
        </div>

        {/* Estadísticas por asignatura */}
        {cargando ? (
          <div className="py-12 text-center text-gray-500 dark:text-gray-400">
            Cargando historial...
          </div>
        ) : totalTests === 0 ? (
          <Card className="text-center py-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-gray-400 dark:text-gray-600 mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">Aún no has realizado ningún quiz</p>
            <p className="text-gray-500 dark:text-gray-500 text-sm mb-6">
              Completa un quiz para empezar a ver tus estadísticas aquí.
            </p>
            <Button variant="primary" onClick={() => navigate('/')}>
              Ir a las asignaturas
            </Button>
          </Card>
        ) : (
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Por asignatura
            </h2>
            <div className="space-y-3">
              {statsPorAsignatura.map(s => (
                <div
                  key={s.id}
                  className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-gray-900 dark:text-white text-sm truncate flex-1 mr-4">
                      {s.nombre}
                    </p>
                    <div className="flex items-center gap-4 shrink-0 text-sm">
                      <span className="text-gray-500 dark:text-gray-400">
                        {s.tests} {s.tests === 1 ? 'test' : 'tests'}
                      </span>
                      <span className={`font-bold ${colorPorcentaje(s.mediaPct)}`}>
                        Media {s.mediaPct}%
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        Mejor {s.mejorPct}%
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                    <div
                      className={`h-1.5 rounded-full transition-all ${barraColorPorcentaje(s.mediaPct)}`}
                      style={{ width: `${s.mediaPct}%` }}
                      role="progressbar"
                      aria-valuenow={s.mediaPct}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Botón de volver */}
        <div className="mt-8">
          <Button variant="secondary" onClick={() => navigate('/')}>
            Volver al inicio
          </Button>
        </div>
      </div>
    </Layout>
  );
}
