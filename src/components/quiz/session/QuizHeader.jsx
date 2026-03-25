/**
 * Componente para mostrar la cabecera del quiz
 * Incluye título, subtítulo, breadcrumbs y botón de salida
 *
 * @param {Object} props - Propiedades del componente
 * @param {function} props.getNombreModulo - Función para obtener nombre del módulo
 * @param {function} props.handleExit - Función para manejar salida del quiz
 * @param {string} props.asignaturaId - ID de la asignatura
 * @returns {JSX.Element} Componente QuizHeader
 */
import React from 'react';
import { PageHeader } from '@components/layout';
import { Button } from '@components/common';
import { useQuizContext } from '@hooks';
import { formatAsignaturaNombreForDisplay } from '@utils/quizUtils';
import { clearPreguntasFallidas } from '@services/preguntasFallidasService';

export default function QuizHeader({ getNombreModulo, handleExit, asignaturaId }) {
  const { asignatura, tipoQuiz } = useQuizContext();

  const handleClearFallidas = () => {
    const confirmed = window.confirm('¿Seguro que quieres limpiar todas las preguntas falladas?');
    if (confirmed) {
      clearPreguntasFallidas();
      handleExit();
    }
  };

  // Generar breadcrumbs para la navegación
  const breadcrumbs = [
    { label: 'Inicio', to: '/' },
    { label: formatAsignaturaNombreForDisplay(asignatura?.nombre) || 'Asignatura', to: `/asignaturas/${asignaturaId}` },
    { label: getNombreModulo() }
  ];

  return (
    <PageHeader
      title={`Quiz - ${getNombreModulo()}`}
      subtitle="Selecciona la respuesta correcta para cada pregunta"
      breadcrumbs={breadcrumbs}
      actions={
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {tipoQuiz === 'fallidas' && (
            <Button onClick={handleClearFallidas} variant="secondary">
              Limpiar preguntas falladas
            </Button>
          )}
          <Button onClick={handleExit} variant="secondary">
            Salir del quiz
          </Button>
        </div>
      }
    />
  );
}