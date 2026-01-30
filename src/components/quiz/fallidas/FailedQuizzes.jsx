/**
 * Botón de "Mis secciones" para acceder al repaso de preguntas fallidas.
 * Navega a /quiz/fallidas/fallidas para iniciar el quiz con las preguntas que el usuario ha fallado.
 */
import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@components/common';
import { getPreguntasFallidas } from '@services/preguntasFallidasService';

export default function FailedQuizzes() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const loadCount = useCallback(() => {
    const list = getPreguntasFallidas();
    const uniqueIds = new Set(list.map((e) => e.preguntaId));
    setCount(uniqueIds.size);
  }, []);

  useEffect(() => {
    loadCount();
    const interval = setInterval(loadCount, 3000);
    return () => clearInterval(interval);
  }, [loadCount]);

  const handleStartRepaso = () => {
    sessionStorage.setItem('start_fallidas_quiz', 'true');
    navigate('/quiz/fallidas/fallidas');
  };

  return (
    <Button
      onClick={handleStartRepaso}
      disabled={count === 0}
      variant="secondary"
      size="medium"
      className="mb-4"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      {count > 0
        ? `Preguntas fallidas (${count})`
        : 'No hay preguntas fallidas'}
    </Button>
  );
}
