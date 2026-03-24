# QuizzStudy

> Aplicación educativa de cuestionarios para el ciclo formativo DAM, organizada por asignaturas, años y promociones. Sin base de datos, sin backend: todo el contenido vive en el código.
[![Netlify Status](https://api.netlify.com/api/v1/badges/ec326eee-270c-43f9-bf24-2bf0a9975e29/deploy-status)](https://app.netlify.com/projects/quizzstudyy/deploys)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![PWA](https://img.shields.io/badge/PWA-instalable-5A0FC8)](https://web.dev/progressive-web-apps/)
[![Licencia MIT](https://img.shields.io/badge/Licencia-MIT-yellow)](./LICENSE)

---

## Autoría y licencia

- **Proyecto original:** Angel C. — licencia MIT (ver [LICENSE](./LICENSE), no se modifica).
- **Esta versión:** copia adaptada y mantenida por BermudezPino con fines exclusivamente educativos. No se reclama autoría del proyecto base.

**Gracias a Angel C.** por publicar el proyecto bajo licencia MIT. Sin su trabajo y generosidad, esta versión no existiría.

---

## Características

- Contenido organizado por **asignaturas, años y promociones** (Primera / Segunda).
- Preguntas con orden aleatorio; soporte para recursos adjuntos: imágenes y bloques de código con resaltado de sintaxis.
- Explicaciones detalladas tras cada respuesta.
- Modos **examen** (preguntas mixtas) y **práctica por tema**.
- Secciones personales: tests pendientes, preguntas favoritas y repaso de preguntas fallidas.
- Historial de resultados y exportación a PDF.
- Modo claro / oscuro y diseño responsive (móvil y escritorio).
- **PWA instalable:** funciona offline una vez instalada.

---

## Tecnologías

| Capa | Herramienta |
|------|-------------|
| UI | React 19, React Router 7 |
| Estilos | Tailwind CSS 4 |
| Build | Vite 6 |
| PWA | vite-plugin-pwa 1 |
| PDF | @react-pdf/renderer 4 |
| Código | react-syntax-highlighter 16 |
| Tests | Vitest 3, Testing Library 16 |
| Linting | ESLint 9 |
| Despliegue | Netlify (rama `main`) |

---

## Requisitos previos

- Node.js 18 o superior
- npm (o pnpm / yarn)

---

## Desarrollo local

```bash
# 1. Instalar dependencias
npm install

# 2. Arrancar el servidor de desarrollo (http://localhost:5174)
npm run dev
```

### Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo con HMR |
| `npm run build` | Build de producción en `dist/` |
| `npm run preview` | Vista previa del build de producción |
| `npm run lint` | Análisis estático del código |
| `npm test` | Ejecutar tests (Vitest) |
| `npm run test:watch` | Tests en modo watch |
| `npm run test:coverage` | Cobertura de tests |

---

## Estructura del proyecto

```
public/                  # Estáticos: iconos, imágenes, manifest PWA
src/
  components/            # Componentes UI (common, layout, quiz)
  context/               # React Context (tema claro/oscuro)
  data/                  # Única fuente de verdad del contenido
    index.js             # Registro central de asignaturas por año
    asignaturas/         # Una carpeta por asignatura (info, módulos, preguntas)
  hooks/                 # Hooks personalizados (navegación, progreso, dispositivo)
  pages/                 # Páginas (Home, Módulos, Quiz, Resultados, About, 404)
  services/              # Lógica de datos, favoritos, preguntas fallidas, SW
  styles/                # CSS global (theme, componentes, features)
  utils/                 # Utilidades (puntuación, formateo, etc.)
docs/                    # Guías de contribución y testing
scripts/                 # Scripts de build y verificación de versión
config/                  # Configuración de ESLint y Vitest
```

### Organización del contenido (`src/data`)

El contenido no usa base de datos. Toda la información vive en `src/data` y se importa en tiempo de build.

| Grupo | Clave en `asignaturasPorAno` | Asignaturas actuales |
|-------|------------------------------|----------------------|
| Primer Año \| Primera Promoción | `1` | Sistemas Informáticos, Bases de Datos, Programación, Lenguaje de Marcas, Entornos de Desarrollo, Itinerario Empleabilidad, Módulo Optativo |
| Segundo Año \| Primera Promoción | `2` | Despliegue Web, Digitalización, Diseño Interfaces, Entorno Cliente, Entorno Servidor, Itinerario Empleabilidad 2, Sostenibilidad |
| Primer Año \| Segunda Promoción | `3` | Programación SP, Lenguaje Marcas SP, Módulo Optativo SP, Sistemas Informáticos SP, Bases de Datos SP, Entornos de Desarrollo SP |

Los favoritos y preguntas fallidas se persisten en `localStorage` del navegador.

---

## Añadir contenido (asignaturas, módulos y preguntas)

El proceso completo está documentado en [`GUIA_USO.txt`](./GUIA_USO.txt). Resumen rápido:

### 1. Crear la asignatura

```
src/data/asignaturas/nombreAsignatura/
  info.js        ← id, nombre, descripción
  index.js       ← ensambla info + módulos
  modulos/       ← un archivo .js por tema/test
```

**`info.js` mínimo:**
```js
export const info = {
  id: 20,                        // siguiente ID disponible (último usado: 19)
  nombre: "Nombre Asignatura",
  descripcion: "Descripción breve",
};
export default info;
```

> Si es Segunda Promoción, añade `" | Segunda Promoción"` al nombre. La app lo oculta en pantalla automáticamente.

### 2. Crear un módulo (tema/test)

```js
// src/data/asignaturas/nombreAsignatura/modulos/tema1.js
export const moduloTema1 = {
  id: 2001,           // patrón: [asignaturaId][número]
  nombre: "Tema 1",
  asignaturaId: 20,
  descripcion: "Descripción del tema",
  esExamen: false,    // true lo marca visualmente como examen
  preguntas: [ /* ver paso 3 */ ]
};
export default moduloTema1;
```

### 3. Estructura de una pregunta

```js
{
  id: 20001,             // patrón: [moduloId][número con 2 dígitos]
  moduloId: 2001,
  pregunta: "¿Cuál es la respuesta?",
  opciones: ["Opción A", "Opción B", "Opción C", "Opción D"],
  respuestaCorrecta: 0,  // índice base 0 (0–3)
  explicacion: "Explicación de la respuesta correcta."
}
```

Para adjuntar una **imagen:**
```js
recurso: {
  tipo: "imagen",
  contenido: "/images/nombreModulo/pregunta1.png",  // relativo a public/
  altText: "Descripción accesible"
}
```

Para adjuntar **código:**
```js
recurso: {
  tipo: "codigo",
  contenido: `console.log("hola");`,
  lenguaje: "javascript"   // javascript, python, java, html, css, sql, etc.
}
```

### 4. Registrar en `src/data/index.js`

```js
import nombreAsignatura from "./asignaturas/nombreAsignatura";

const asignaturasSegundoAno = [
  // ... asignaturas existentes
  nombreAsignatura,
];
```

### 5. Verificar antes de hacer commit

```bash
npm run lint          # sin errores de estilo
npm test -- --run     # todos los tests en verde
npm run build         # build de producción sin errores
```

Para la guía completa con ejemplos paso a paso y el checklist de IDs, consulta [`GUIA_USO.txt`](./GUIA_USO.txt).

---

## Despliegue

- Despliegue continuo en **Netlify** desde la rama `main`.
- Comando de build: `npm run build` (genera `dist/`).
- El script `scripts/netlify-postbuild.js` se ejecuta automáticamente tras el build.
- Cabeceras de seguridad y redirecciones SPA configuradas en [`netlify.toml`](./netlify.toml).

---

## Documentación adicional

- [Añadir contenido: guía completa](./GUIA_USO.txt)
- [Guía detallada de contenido en docs](./docs/adding-content.md)
- [Testing](./docs/TESTING.md)
- [Contribución](.github/CONTRIBUTING.md)
- [Código de conducta](.github/CODE_OF_CONDUCT.md)
- [Seguridad](.github/SECURITY.md)

---

## Licencia

[MIT](./LICENSE) — proyecto original de Angel C. Este archivo no se modifica.
Versión editada y mantenida por **BermudezPino**. Uso exclusivamente educativo.
