

/**
 * Componente para mostrar imágenes en las preguntas.
 * Solo acepta rutas relativas (p. ej. /images/...) por seguridad (evitar javascript: o data:).
 *
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {string} props.src - URL de la imagen (debe empezar por /)
 * @param {string} props.alt - Texto alternativo para accesibilidad
 * @param {string} [props.className] - Clases CSS adicionales
 * @returns {JSX.Element|null} Componente ImageResource o null si src no es segura
 */
import React from 'react';

const isSafeImageSrc = (src) =>
  typeof src === 'string' && src.startsWith('/') && !src.toLowerCase().startsWith('//');

export default function ImageResource({ src, alt, className = '' }) {
  if (!isSafeImageSrc(src)) return null;
  return (
    <div className={`${className}`}>
      <img
        src={src}
        alt={alt || "Imagen de la pregunta"}
        className="max-w-full rounded-lg border border-gray-200 dark:border-gray-700 shadow-md hover:opacity-95 transition-opacity"
      />
    </div>
  );
}