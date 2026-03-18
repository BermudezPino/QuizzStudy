

/**
 * Componente para mostrar imágenes en las preguntas.
 * Solo acepta rutas relativas (p. ej. /images/...) por seguridad (evitar javascript: o data:).
 *
 * @component
 * @param {Object} props 
 * @param {string} props.src 
 * @param {string} props.alt 
 * @param {string} [props.className] 
 * @returns {JSX.Element|null}
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