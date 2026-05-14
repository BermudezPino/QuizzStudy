/**
 * Componente que permite al usuario seleccionar un módulo específico o todos los módulos
 * de una asignatura para iniciar un quiz.
 *
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {Array<Object>} props.modulos - Lista de módulos disponibles para seleccionar
 * @param {string|number} props.modulos[].id - Identificador único del módulo
 * @param {string} props.modulos[].nombre - Nombre del módulo
 * @param {Array} props.modulos[].preguntas - Array de preguntas del módulo
 * @param {boolean} props.modulos[].esExamen - Indica si el módulo es de examen
 * @param {string|number} props.asignaturaId - Identificador de la asignatura actual
 * @returns {JSX.Element} Componente ModuleSelector renderizado
 */
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from '@components/common';
import Dialog from '@components/common/dialogs/Dialog';
import { formatModuloNombreForDisplay } from '@utils/quizUtils';

function EstudioToggle({ value, onChange }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        Modo Estudio
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={value}
        onClick={() => onChange(!value)}
        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${
          value
            ? 'bg-brand-600 dark:bg-brand-500'
            : 'bg-gray-200 dark:bg-gray-700'
        }`}
      >
        <span
          className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow ring-0 transition-transform duration-200 ${
            value ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
      {value && (
        <span className="text-xs text-brand-600 dark:text-brand-400 font-medium">
          Activo
        </span>
      )}
    </div>
  );
}

/**
 * Returns a Set of moduloId values that have been completed with 100% score
 * for the given asignaturaId, reading directly from localStorage.
 * @param {string|number} asignaturaId
 * @returns {Set<string>}
 */
function getPerfectModulos(asignaturaId) {
  try {
    const historico = JSON.parse(localStorage.getItem('quiz_historico') || '[]');
    const perfectIds = new Set();
    for (const entry of historico) {
      if (String(entry.asignaturaId) === String(asignaturaId) && entry.puntuacion?.porcentaje === 100) {
        perfectIds.add(String(entry.moduloId));
      }
    }
    return perfectIds;
  } catch {
    return new Set();
  }
}

export default function ModuleSelector({ modulos, asignaturaId }) {
  const navigate = useNavigate();
  const [notaDialogOpen, setNotaDialogOpen] = useState(false);
  const [moduloPendiente, setModuloPendiente] = useState(null);
  const [estudioActivo, setEstudioActivo] = useState(false);

  // Compute which modules have ever been completed with a perfect score
  const perfectModulos = useMemo(() => getPerfectModulos(asignaturaId), [asignaturaId]);

  // Separamos los módulos regulares y los de examen
  const modulosExamen = modulos.filter(modulo => modulo.esExamen);

  // Calculamos el total de preguntas en todos los módulos
  const totalPreguntas = modulos.reduce(
    (sum, modulo) => sum + modulo.preguntas.length,
    0
  );

  // Calculamos el total de preguntas en módulos de examen
  const totalPreguntasExamen = modulosExamen.reduce(
    (sum, modulo) => sum + modulo.preguntas.length,
    0
  );

  const estudioSuffix = estudioActivo ? '?estudio=true' : '';

  const handleSelectModule = (modulo) => {
    if (modulo.nota) {
      setModuloPendiente(modulo);
      setNotaDialogOpen(true);
    } else {
      navigate(`/quiz/${asignaturaId}/${modulo.id}${estudioSuffix}`);
    }
  };

  const handleConfirmNota = () => {
    setNotaDialogOpen(false);
    navigate(`/quiz/${asignaturaId}/${moduloPendiente.id}${estudioSuffix}`);
    setModuloPendiente(null);
  };

  const handleCancelNota = () => {
    setNotaDialogOpen(false);
    setModuloPendiente(null);
  };

  const handleSelectAllModules = () => {
    navigate(`/quiz/${asignaturaId}/todos`);
  };

  const handleSelectExamenModules = () => {
    navigate(`/quiz/${asignaturaId}/examen`);
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="space-y-6">
      <Card title="Selecciona un módulo">
        <div className="flex justify-end mb-4">
          <EstudioToggle value={estudioActivo} onChange={setEstudioActivo} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {modulos.map(modulo => {
            const isPerfect = perfectModulos.has(String(modulo.id));
            return (
              <div key={modulo.id} className="relative">
                <Button
                  title={formatModuloNombreForDisplay(modulo.nombre)}
                  onClick={() => handleSelectModule(modulo)}
                  variant={modulo.esExamen ? "danger" : "primary"}
                  fullWidth
                >
                  <div className="flex flex-col">
                    <span className="font-semibold">
                      {formatModuloNombreForDisplay(modulo.nombre)}
                    </span>
                    <span className="text-sm opacity-80">
                      {modulo.preguntas.length} preguntas
                    </span>
                  </div>
                </Button>
                {isPerfect && (
                  <span
                    className="absolute top-1 right-1 flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white text-xs font-bold shadow pointer-events-none"
                    title="Completado con puntuación perfecta"
                    aria-label="Módulo completado con puntuación perfecta"
                  >
                    ✓
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </Card>
      <Card title="O selecciona">
        <div className="space-y-4">
          {/* Botón para todos los módulos */}
          <Button
            variant="primary"
            fullWidth
            onClick={handleSelectAllModules}
          >
            Todas las preguntas de todos los módulos
          </Button>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 text-center">
            {`Se seleccionarán todas las ${totalPreguntas} preguntas disponibles en orden aleatorio`}
          </p>

          {/* Botón para solo módulos de examen, solo si hay alguno */}
          {modulosExamen.length > 0 && (
            <>
            <Button
              variant="primary"
              fullWidth
              rainbow
              className="bg-red-600 hover:bg-red-700 focus:ring-red-500 dark:bg-red-700 dark:hover:bg-red-800"
              onClick={handleSelectExamenModules}
            >
              Todas las preguntas de test de examen
            </Button>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 text-center">
              {`Se seleccionarán todas las ${totalPreguntasExamen} preguntas disponibles en orden aleatorio (solo módulos de examen)`}
            </p>
            </>
          )}
        </div>
      </Card>

      <Button
        variant="secondary"
        fullWidth
        onClick={handleBack}
      >
        Volver a asignaturas
      </Button>

      <Dialog
        open={notaDialogOpen}
        title="Aviso antes de empezar"
        message={moduloPendiente?.nota}
        confirmLabel="Entendido"
        cancelLabel="Cancelar"
        onConfirm={handleConfirmNota}
        onCancel={handleCancelNota}
        variant="primary"
        size="medium"
      />
    </div>
  );
}