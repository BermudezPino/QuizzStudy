# Guía para añadir contenido (asignaturas, módulos y preguntas)

Esta guía explica cómo ampliar QuizzStudy creando nuevas asignaturas, módulos y preguntas, y cómo añadir recursos (imágenes y bloques de código) de forma consistente.

> Nota: Sigue las convenciones de estilo indicadas en [CONTRIBUTING.md](../.github/CONTRIBUTING.md) (IDs únicos, nombres claros, imports ordenados, etc.).

## 1) Dónde viven los datos

**Fuente de verdad:** `src/data/index.js`. Ahí se exportan `asignaturasPorAno` (organizado por años 1, 2 y 3) y `obtenerAsignaturaPorId` / `obtenerModuloPorId`. Toda asignatura nueva debe **importarse y registrarse** en este archivo.

Estructura relevante:

```
src/
  data/
    index.js                     # ÚNICA fuente de verdad: asignaturasPorAno, obtenerAsignaturaPorId, etc.
    asignaturas.js               # Lista básica (deprecada; la app usa index.js)
    asignaturas/
      <asignatura>/              # Carpeta de cada asignatura (nombre en camelCase)
        info.js                  # Metadatos: id, nombre, descripcion (y opc. imagen, objetivos)
        index.js                 # Export de la asignatura (info + modulos)
        modulos/
          <modulo>.js            # Módulos con preguntas
public/
  images/
    <modulo>/                    # Imágenes por módulo (rutas en preguntas)
```

- **Año 1:** Primer Año | Primera Promoción  
- **Año 2:** Segundo Año | Primera Promoción  
- **Año 3:** Primer Año | Segunda Promoción (segunda promoción)

## 2) Formato de las preguntas

Cada pregunta es un objeto con esta forma mínima:

```js
{
  id: 1001,                         // ID único de la pregunta (número entero)
  moduloId: 101,                    // Debe coincidir con el id del módulo
  pregunta: "Texto de la pregunta",
  opciones: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"],
  respuestaCorrecta: 2,             // Índice base 0 de la opción correcta
  explicacion: "Explicación de la respuesta"
}
```

Además, puedes adjuntar recursos con la propiedad opcional `recurso`.

### 2.1) Recurso: imagen

```js
{
  // ...campos base
  recurso: {
    tipo: "imagen",
    contenido: "/images/<modulo>/pregunta1.png", // ruta relativa a public/
    altText: "Descripción accesible"
  }
}
```

Coloca los ficheros en `public/images/<modulo>/`.

### 2.2) Recurso: bloque de código

```js
{
  // ...campos base
  recurso: {
    tipo: "codigo",
    contenido: `function sumar(a, b) {\n  return a + b;\n}\nconsole.log(sumar(5, 3));`,
    lenguaje: "javascript" // para el resaltado de sintaxis
  }
}
```

Lenguajes comunes: `javascript`, `python`, `java`, `html`, `css`, `bash`, `sql`, `csharp`, `php`, `ruby`.

## 3) Crear un módulo nuevo

Crea un archivo en `src/data/asignaturas/<asignatura>/modulos/<modulo>.js`:

```js
// src/data/asignaturas/sistemasInformaticos/modulos/hardware.js

export const moduloHardware = {
  id: 103,                        // ID único del módulo
  nombre: "Hardware",
  asignaturaId: 1,                // Debe coincidir con la asignatura
  descripcion: "Fundamentos de hardware",
  esExamen: false,                // opcional; marca en rojo y habilita prácticas de examen si true
  preguntas: [
    {
      id: 10301,
      moduloId: 103,
      pregunta: "¿Qué componente…?",
      opciones: ["CPU", "RAM", "SSD", "GPU"],
      respuestaCorrecta: 0,
      explicacion: "La CPU …"
    }
    // más preguntas…
  ]
};

export default moduloHardware;
```

### 3.1) Registrar el módulo en la asignatura

Edita `src/data/asignaturas/<asignatura>/index.js` para importar y añadir el módulo a la lista:

```js
import info from "./info.js";
import moduloHardware from "./modulos/hardware.js";
// importa aquí otros módulos…

export const sistemasInformaticos = {
  ...info,
  modulos: [
    // otros módulos…
    moduloHardware
  ]
};

export default sistemasInformaticos;
```

## 4) Módulos de examen

Para marcar un módulo como examen, usa `esExamen: true` en el objeto del módulo.

Efectos en la app:
- Se muestra con estilo distintivo (rojo)
- Aparecen flujos/botones específicos de práctica de examen

## 5) Crear una asignatura nueva

1. **Crea la carpeta** `src/data/asignaturas/<nombreAsignatura>/` (nombre en camelCase, p. ej. `programacionWeb`).

2. **Crea `info.js`** con los metadatos de la asignatura:

```js
// src/data/asignaturas/programacionWeb/info.js
export const info = {
  id: 8,
  nombre: "Programación Web",
  descripcion: "Desarrollo de aplicaciones y sitios web",
  imagen: "/img/asignaturas/programacionWeb.jpg",  // opcional
  objetivos: [ "Objetivo 1", "Objetivo 2" ]        // opcional
};
export default info;
```

3. **Crea `index.js`** de la asignatura (importa `info` y los módulos):

```js
// src/data/asignaturas/programacionWeb/index.js
import info from "./info.js";
import moduloHTML from "./modulos/html.js";

export const programacionWeb = {
  ...info,
  modulos: [ moduloHTML ]
};
export default programacionWeb;
```

4. **Crea los módulos** en `src/data/asignaturas/programacionWeb/modulos/` siguiendo el apartado 3.

5. **Registra la asignatura en `src/data/index.js`** (obligatorio):

- Importa la asignatura al inicio del archivo.
- Añádela al array que corresponda según el año/promoción:
  - **Año 1 (Primera promoción):** `asignaturasPrimerAno`
  - **Año 2 (Primera promoción):** `asignaturasSegundoAno`
  - **Año 3 (Segunda promoción):** `asignaturasSegundaPromocion`

Ejemplo para una asignatura de segundo año:

```js
// Al inicio de src/data/index.js (con el resto de imports)
import programacionWeb from "./asignaturas/programacionWeb";

// Dentro de asignaturasSegundoAno (o el array que toque)
const asignaturasSegundoAno = [
  despliegueDeAplicacionesWeb,
  // ...
  programacionWeb,
];
```

**Importante:** Si no registras la asignatura en `index.js`, no aparecerá en la app.

### 5.1) Asignaturas de Segunda Promoción (Año 3)

Para distinguirlas en datos y en la UI:

- **En `info.js`:** Añade el sufijo `" | Segunda Promoción"` al nombre, p. ej. `nombre: "Programación | Segunda Promoción"`. La app lo oculta en pantalla y muestra solo "Programación".
- **En los módulos (`modulos/temaX.js`):** Usa el sufijo `" (SP)"` en el nombre del módulo, p. ej. `nombre: "Tema 1 (SP)"`. La app lo oculta y muestra "Tema 1".
- **IDs:** Usa IDs que no choquen con la primera promoción (p. ej. asignaturas 16+, módulos con IDs propios y preguntas con IDs únicos globalmente).

## 6) Buenas prácticas y validación

- **IDs únicos globalmente:** Asignatura, módulo y pregunta deben tener IDs que no se repitan en toda la app (incluye todos los años y promociones).
- Mantén `moduloId` en cada pregunta igual al `id` del módulo que la contiene, y `asignaturaId` igual al `id` de la asignatura.
- **Registro en `src/data/index.js`:** Toda asignatura nueva debe importarse y añadirse a `asignaturasPrimerAno`, `asignaturasSegundoAno` o `asignaturasSegundaPromocion`; si no, no aparece en la app.
- Añade `explicacion` útil en todas las preguntas (mejora el valor educativo).
- Para imágenes, rellena `altText` por accesibilidad.
- Guarda los recursos en `public/images/<modulo>/` con nombres claros.
- Revisa que cada asignatura tenga su `index.js` con módulos importados y que esté registrada en `src/data/index.js`.
- Ejecuta comprobaciones rápidas:

```bash
npm run lint
npm test -- --run
npm run build
```

## 7) Ejemplos rápidos

Pregunta con imagen:

```js
{
  id: 20001,
  moduloId: 201,
  pregunta: "¿Qué muestra la siguiente imagen?",
  recurso: {
    tipo: "imagen",
    contenido: "/images/redes/topologia-estrella.png",
    altText: "Topología de red en estrella"
  },
  opciones: ["Bus", "Anillo", "Estrella", "Malla"],
  respuestaCorrecta: 2,
  explicacion: "La topología en estrella …"
}
```

Pregunta con código:

```js
{
  id: 20002,
  moduloId: 201,
  pregunta: "¿Qué imprime el siguiente código?",
  recurso: {
    tipo: "codigo",
    contenido: `const x = [1,2,3].map(n => n*2);\nconsole.log(x.join('-'));`,
    lenguaje: "javascript"
  },
  opciones: ["1-2-3", "2-4-6", "[2,4,6]", "Error"],
  respuestaCorrecta: 1,
  explicacion: "map duplica y join une con guiones => 2-4-6"
}
```

## 8) Checklist antes de abrir PR

- [ ] IDs únicos para asignaturas, módulos y preguntas (en toda la app)
- [ ] Asignatura nueva **registrada en `src/data/index.js`** (import + array correspondiente)
- [ ] Rutas de imágenes bajo `public/images/<modulo>/`
- [ ] `moduloId` y `asignaturaId` consistentes en módulos y preguntas
- [ ] Importación/exportación correcta en el `index.js` de la asignatura
- [ ] Si es Segunda Promoción: nombre con `" | Segunda Promoción"` en info.js y `" (SP)"` en módulos
- [ ] Lint y tests en verde (`npm run lint`, `npm test -- --run`)
- [ ] Build correcto (`npm run build`)
