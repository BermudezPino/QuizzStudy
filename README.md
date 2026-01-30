# QuizzStudy

Aplicación educativa de cuestionarios para DAM, organizada por asignaturas y módulos. Construida con React, Vite y Tailwind CSS, con soporte PWA (instalable y offline).

> Proyecto sin ánimo de lucro y con fines exclusivamente educativos.

---

## Autoría y licencia

- **Proyecto original:** Angel C. (licencia MIT).
- **Este repositorio:** copia de la versión original, adaptada y mantenida con fines educativos. No se reclama autoría del proyecto base.
- **Archivo de licencia:** [LICENSE](./LICENSE) — **no se modifica**; contiene el copyright del autor original.
- **Esta versión:** editada y mantenida por BermudezPino (contenido, temas y mejoras sobre el proyecto base).

---

## Agradecimientos

**Gracias a Angel C.**, autor original del proyecto, por crear y publicar la aplicación bajo licencia MIT. Sin su trabajo y su generosidad al compartir el código, esta versión no existiría. Le damos las gracias por el esfuerzo, el diseño y la base que hemos podido reutilizar y adaptar con fines educativos.

---

## Características

- Organización por asignaturas, años y promociones (Primera / Segunda).
- Preguntas con orden aleatorio, recursos (imágenes, código) y explicaciones.
- Modo claro/oscuro y diseño responsive.
- Resultados con explicaciones, historial y exportación a PDF.
- Módulos tipo “examen” y práctica por tema.
- **Mis secciones:** tests pendientes, preguntas favoritas y **preguntas fallidas** (repaso de fallos).
- PWA instalable (escritorio y móvil) y funcionamiento offline.

---

## Requisitos

- Node.js 18+
- npm (o pnpm/yarn)

---

## Empezar

```bash
# Instalar dependencias
npm install

# Desarrollo (http://localhost:5174 por defecto)
npm run dev

# Build de producción
npm run build
npm run preview
```

### Scripts

| Comando              | Descripción              |
|----------------------|--------------------------|
| `npm run dev`        | Servidor de desarrollo   |
| `npm run build`      | Build de producción      |
| `npm run preview`    | Vista previa del build   |
| `npm run lint`       | Lint del proyecto        |
| `npm test`           | Pruebas (Vitest)         |
| `npm run test:watch` | Pruebas en modo watch    |
| `npm run test:coverage` | Cobertura de pruebas  |

---

## Estructura del proyecto

```
public/              # Estáticos: imágenes, manifest PWA, iconos
src/
  components/        # UI: common, layout, quiz (selectores, preguntas, resultados, favoritas, fallidas)
  context/           # React context (tema claro/oscuro)
  data/              # Backend de contenido: única fuente de verdad
  hooks/             # Hooks (navegación, progreso, dispositivo)
  pages/             # Páginas (Home, Módulos, Quiz, Resultados, About, 404)
  services/          # Servicios (datos, favoritos, preguntas fallidas, SW)
  styles/            # CSS (theme, componentes, features)
  utils/             # Utilidades (puntuación, formateo, etc.)
docs/                # Guías (añadir contenido, testing)
scripts/             # Scripts de build y verificación
```

---

## Datos y “backend” (contenido)

El contenido (asignaturas, módulos y preguntas) **no usa base de datos**: vive en **`src/data`** y es la única fuente de verdad.

- **`src/data/index.js`** — Exporta `asignaturasPorAno` y `obtenerAsignaturaPorId`. Aquí se registran todas las asignaturas por año/promoción.
- **`src/data/asignaturas/<nombre>/`** — Cada asignatura tiene `info.js`, `index.js` y la carpeta `modulos/` con los archivos de temas (preguntas).
- **Servicios** — `quizDataService.js` lee desde `src/data`. Los favoritos y las preguntas fallidas se guardan en `localStorage`.

Para **añadir nuevos temas o asignaturas** (cuando te vayan dando tests), sigue la guía:

- **[docs/adding-content.md](./docs/adding-content.md)** — Estructura de preguntas, recursos, imágenes y cómo registrar módulos/asignaturas en `src/data/index.js`.

---

## PWA

- Configuración en `vite.config.js` (VitePWA).
- Iconos y manifest en `public/` (`site.webmanifest`).
- Instalable y funciona offline.

---

## Despliegue

- Build con Vite; despliegue en Netlify desde la rama `main`.
- Configuración: `netlify.toml`, scripts en `scripts/` (`verify-version.js`, `netlify-postbuild.js`).

---

## Documentación

- [Añadir contenido (temas, asignaturas, preguntas)](./docs/adding-content.md)
- [Testing](./docs/TESTING.md)
- [Contribución](.github/CONTRIBUTING.md)
- [Seguridad](.github/SECURITY.md)
- [Código de conducta](.github/CODE_OF_CONDUCT.md)

---

## Licencia y contacto

- **Licencia:** [LICENSE](./LICENSE) (MIT, proyecto original de Angel C.). Este archivo no se modifica.
- **Aclaración:** Este repositorio es una copia de la versión original; se mantiene con fines educativos y no se reclama autoría del proyecto base.
- **Mantenimiento de esta versión:** BermudezPino.
- Dudas o propuestas: issues del repositorio o contactos en [CONTRIBUTING.md](.github/CONTRIBUTING.md).
