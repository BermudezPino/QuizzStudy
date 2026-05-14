/**
 * Página de actualizaciones que muestra el historial de cambios y novedades de QuizzStudy.
 *
 * @component
 * @returns {JSX.Element} Componente ActualizacionesPage renderizado
 *
 * @example
 * // En un componente Router
 * <Route path="/actualizaciones" element={<ActualizacionesPage />} />
 */
import { Layout, PageHeader } from '@components/layout';
import { Card } from '@components/common';
import { actualizaciones } from '@/data/actualizaciones';

/**
 * Formatea una fecha ISO (YYYY-MM-DD) al formato español legible.
 * @param {string} fechaISO - Fecha en formato ISO
 * @returns {string} Fecha en español, p.ej. "14 de mayo de 2026"
 */
function formatFechaEspanol(fechaISO) {
  const [year, month, day] = fechaISO.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

/**
 * Devuelve clases de color para un tag según su contenido.
 * @param {string} tag - Texto del tag
 * @returns {string} Clases CSS de Tailwind para el badge
 */
function tagColor(tag) {
  const map = {
    'BBDD': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:bg-opacity-40 dark:text-blue-300',
    'SQL': 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:bg-opacity-40 dark:text-cyan-300',
    'Programación': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:bg-opacity-40 dark:text-purple-300',
    'LM': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:bg-opacity-40 dark:text-orange-300',
    'MPO': 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:bg-opacity-40 dark:text-pink-300',
    'Sistemas': 'bg-green-100 text-green-800 dark:bg-green-900 dark:bg-opacity-40 dark:text-green-300',
    'Entornos': 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:bg-opacity-40 dark:text-teal-300',
    '2ª Promoción': 'bg-brand-100 text-brand-800 dark:bg-brand-900 dark:bg-opacity-40 dark:text-brand-300',
    'Nueva función': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:bg-opacity-40 dark:text-yellow-300',
    'Mejora': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:bg-opacity-40 dark:text-indigo-300',
    'General': 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
  };
  return map[tag] || 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
}

export default function ActualizacionesPage() {
  return (
    <Layout>
      <PageHeader
        title="Actualizaciones"
        subtitle="Historial de novedades y cambios en QuizzStudy"
        breadcrumbs={[
          { label: 'Inicio', to: '/' },
          { label: 'Actualizaciones' }
        ]}
      />

      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {actualizaciones.map((item) => (
            <Card key={item.id} className="hover:shadow-xl transition-shadow duration-200">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    {formatFechaEspanol(item.fecha)}
                  </p>
                  <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                    {item.titulo}
                  </h2>
                  <p className="text-sm text-gray-700 dark:text-gray-200 mb-3">
                    {item.descripcion}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${tagColor(tag)}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900 dark:bg-opacity-40 text-brand-700 dark:text-brand-300 text-xs font-bold self-start sm:ml-4">
                  #{item.id}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}