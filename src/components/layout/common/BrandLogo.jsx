/**
 * Componente que muestra el logotipo y nombre de la aplicación,
 * actuando como enlace a la página principal.
 * El logo se sirve desde /logo-quizzstudy.png (sin fondo; PNG con transparencia).
 *
 * @component
 * @returns {JSX.Element} Componente BrandLogo renderizado
 *
 * @example
 * <BrandLogo />
 */
import { memo, useState } from 'react';
import { Link } from 'react-router-dom';

const LOGO_SRC = '/logo-quizzstudy.png';

const BrandLogo = memo(function BrandLogo() {
  const [logoError, setLogoError] = useState(false);

  return (
    <div className="flex-shrink-0 flex items-center">
      <Link to="/" className="flex items-center gap-2 no-underline">
        {!logoError && (
          <img
            src={LOGO_SRC}
            alt=""
            className="h-9 w-auto max-h-10 object-contain"
            style={{ background: 'transparent' }}
            onError={() => setLogoError(true)}
          />
        )}
        <span className="font-bold text-xl text-white">QuizzStudy</span>
      </Link>
    </div>
  );
});

export default BrandLogo;