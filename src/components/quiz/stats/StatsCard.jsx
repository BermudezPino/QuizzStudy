/**
 * Botón de "Mis secciones" para acceder a la página de estadísticas del usuario.
 * Muestra el total de tests realizados y navega a /estadisticas.
 */
import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@components/common';

export default function StatsCard() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const loadCount = useCallback(() => {
    try {
      const historico = JSON.parse(localStorage.getItem('quiz_historico') || '[]');
      setCount(historico.length);
    } catch {
      setCount(0);
    }
  }, []);

  useEffect(() => {
    loadCount();
    const interval = setInterval(loadCount, 3000);
    return () => clearInterval(interval);
  }, [loadCount]);

  return (
    <Button
      onClick={() => navigate('/estadisticas')}
      variant="secondary"
      size="medium"
      className=""
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
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
      Estadísticas {count > 0 && `(${count})`}
    </Button>
  );
}
