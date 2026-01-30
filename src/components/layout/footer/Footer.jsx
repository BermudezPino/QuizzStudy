/**
 * Componente de pie de página que muestra información de copyright, enlaces de navegación
 * y la versión actual de la aplicación.
 * Al hacer clic en el texto de copyright se copia al portapapeles y se muestra un toast.
 *
 * @component
 * @returns {JSX.Element} Componente Footer renderizado
 *
 * @example
 * <Footer />
 */
import { memo, useCallback } from 'react';
import VersionInfo from './VersionInfo';
import FooterNav from './FooterNav';
import { showToast } from '@utils/toastUtils';

const Footer = memo(function Footer() {
  const currentYear = new Date().getFullYear();

  const handleCopyCopyright = useCallback(async () => {
    const text = `© ${currentYear} Angel C. - QuizzStudy - MIT License`;
    try {
      await navigator.clipboard.writeText(text);
      showToast('Copiado al portapapeles', 'success');
    } catch {
      showToast('No se pudo copiar', 'error');
    }
  }, [currentYear]);

  return (
    <footer className="bg-gray-800 text-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm">
              <button
                type="button"
                onClick={handleCopyCopyright}
                className="inline-flex items-baseline gap-1 rounded hover:bg-gray-700 dark:hover:bg-gray-700 px-1 -mx-1 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-gray-800 dark:focus:ring-offset-gray-900"
                title="Clic para copiar"
              >
                &copy; {currentYear} Angel C. · QuizzStudy
              </button>
              <VersionInfo />
            </p>
          </div>

          <FooterNav />
        </div>
      </div>
    </footer>
  );
});

export default Footer;