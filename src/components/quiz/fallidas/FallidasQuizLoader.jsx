/**
 * Loader para cargar el quiz de preguntas fallidas.
 * Obtiene las preguntas desde preguntasFallidasService y las prepara para el quiz.
 */
import { useEffect, useRef } from 'react';
import { LoadingSpinner } from '@components/common';
import { getPreguntasParaRepaso } from '@services/preguntasFallidasService';
import { useQuizContext } from '@hooks';

export default function FallidasQuizLoader() {
  const mounted = useRef(true);
  const {
    setCargando,
    setPreguntas,
    setAsignatura,
    setModulo,
    setTipoQuiz,
    setError
  } = useQuizContext();

  useEffect(() => {
    mounted.current = true;
    setCargando(true);

    const loadFallidasQuiz = async () => {
      try {
        const { preguntas, asignatura } = await getPreguntasParaRepaso();

        if (!mounted.current) return;

        if (preguntas && preguntas.length > 0) {
          setPreguntas(preguntas);
          setAsignatura(asignatura);
          setModulo({ id: 'fallidas', nombre: 'Preguntas fallidas', esExamen: false });
          setTipoQuiz('fallidas');
          setCargando(false);
          sessionStorage.removeItem('start_fallidas_quiz');
        } else {
          setError('No tienes preguntas fallidas para repasar. Completa tests y falla algunas para añadirlas aquí.');
          setCargando(false);
        }
      } catch (err) {
        console.error('Error al cargar quiz de preguntas fallidas:', err);
        if (mounted.current) {
          setError('Error al cargar las preguntas fallidas. ' + (err.message || ''));
          setCargando(false);
        }
      }
    };

    loadFallidasQuiz();

    return () => {
      mounted.current = false;
    };
  }, [setCargando, setPreguntas, setAsignatura, setModulo, setTipoQuiz, setError]);

  return (
    <div className="py-12 flex flex-col items-center">
      <LoadingSpinner />
      <p className="text-gray-600 dark:text-gray-300 mt-4">Cargando preguntas fallidas...</p>
    </div>
  );
}
