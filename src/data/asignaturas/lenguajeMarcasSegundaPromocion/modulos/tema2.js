/**
 * Datos del módulo Tema 2 perteneciente a la asignatura Lenguaje de Marcas Segunda Promoción.
 * Incluye información del módulo y sus preguntas asociadas para el quiz.
 * Contenido según cuestionario LM TEST2 (escueladeinformatica.com/LM/TEST2/).
 *
 * @type {Object}
 * @property {number} id - Identificador único del módulo
 * @property {string} nombre - Nombre del módulo
 * @property {boolean} esExamen - Indica si el módulo es un examen
 * @property {number} asignaturaId - ID de la asignatura a la que pertenece
 * @property {string} [descripcion] - Breve descripción del contenido del módulo (opcional)
 * @property {Array<Object>} preguntas - Lista de preguntas para el quiz de este módulo
 */
export const moduloTema2 = {
    id: 1702,
    nombre: "Tema 2 (SP)",
    asignaturaId: 17,
    esExamen: false,
    descripcion: "HTML: estructura, etiquetas semánticas, enlaces, imágenes, listas, tablas, formularios.",
    preguntas: [
        {
            id: 17031,
            moduloId: 1702,
            pregunta: "¿Para qué sirve la etiqueta <html>?",
            opciones: [
                "Define el contenido principal de la página",
                "Contiene todo el documento HTML",
                "Muestra el título en el navegador",
                "Agrupa los enlaces"
            ],
            respuestaCorrecta: 1,
            explicacion: "La etiqueta <html> engloba todo el documento HTML."
        },
        {
            id: 17032,
            moduloId: 1702,
            pregunta: "¿Qué etiqueta se utiliza para definir el título que aparece en la pestaña del navegador?",
            opciones: ["<head>", "<body>", "<title>", "<meta>"],
            respuestaCorrecta: 2,
            explicacion: "La etiqueta <title> define el título de la pestaña del navegador."
        },
        {
            id: 17033,
            moduloId: 1702,
            pregunta: "¿Qué etiqueta contiene metadatos y enlaces a CSS?",
            opciones: ["<body>", "<html>", "<meta>", "<head>"],
            respuestaCorrecta: 3,
            explicacion: "La etiqueta <head> contiene metadatos, enlaces a CSS y scripts."
        },
        {
            id: 17034,
            moduloId: 1702,
            pregunta: "¿Qué etiqueta se usa para crear un enlace?",
            opciones: ["<link>", "<a>", "<url>", "<href>"],
            respuestaCorrecta: 1,
            explicacion: "La etiqueta <a> se utiliza para crear enlaces."
        },
        {
            id: 17035,
            moduloId: 1702,
            pregunta: "¿Qué atributo indica la dirección de un enlace?",
            opciones: ["src", "link", "href", "url"],
            respuestaCorrecta: 2,
            explicacion: "El atributo href indica la URL del enlace."
        },
        {
            id: 17036,
            moduloId: 1702,
            pregunta: "¿Qué etiqueta se usa para insertar una imagen?",
            opciones: ["<img>", "<image>", "<picture>", "<src>"],
            respuestaCorrecta: 0,
            explicacion: "La etiqueta <img> se usa para mostrar imágenes."
        },
        {
            id: 17037,
            moduloId: 1702,
            pregunta: "¿Qué atributo es obligatorio en la etiqueta <img>?",
            opciones: ["title", "alt", "width", "height"],
            respuestaCorrecta: 1,
            explicacion: "El atributo alt es obligatorio por accesibilidad."
        },
        {
            id: 17038,
            moduloId: 1702,
            pregunta: "¿Qué etiqueta se utiliza para un párrafo?",
            opciones: ["<div>", "<span>", "<p>", "<par>"],
            respuestaCorrecta: 2,
            explicacion: "La etiqueta <p> define un párrafo."
        },
        {
            id: 17039,
            moduloId: 1702,
            pregunta: "¿Cuál es la etiqueta correcta para el encabezado más importante?",
            opciones: ["<h2>", "<h3>", "<header>", "<h1>"],
            respuestaCorrecta: 3,
            explicacion: "<h1> representa el encabezado más importante."
        },
        {
            id: 17040,
            moduloId: 1702,
            pregunta: "¿Qué etiqueta crea una lista no ordenada?",
            opciones: ["<ol>", "<ul>", "<li>", "<list>"],
            respuestaCorrecta: 1,
            explicacion: "<ul> crea una lista no ordenada."
        },
        {
            id: 17041,
            moduloId: 1702,
            pregunta: "¿Qué etiqueta define cada elemento de una lista?",
            opciones: ["<ul>", "<li>", "<ol>", "<item>"],
            respuestaCorrecta: 1,
            explicacion: "<li> define cada elemento de una lista."
        },
        {
            id: 17042,
            moduloId: 1702,
            pregunta: "¿Qué etiqueta se usa para texto en línea sin salto de línea?",
            opciones: ["<div>", "<p>", "<span>", "<inline>"],
            respuestaCorrecta: 2,
            explicacion: "<span> es una etiqueta en línea."
        },
        {
            id: 17043,
            moduloId: 1702,
            pregunta: "¿Qué etiqueta se usa para agrupar contenido en bloques?",
            opciones: ["<span>", "<div>", "<section>", "<block>"],
            respuestaCorrecta: 1,
            explicacion: "<div> agrupa contenido en bloques."
        },
        {
            id: 17044,
            moduloId: 1702,
            pregunta: "¿Qué atributo se usa para indicar el idioma del documento?",
            opciones: ["lang", "charset", "type", "meta"],
            respuestaCorrecta: 0,
            explicacion: "El atributo lang indica el idioma del documento."
        },
        {
            id: 17045,
            moduloId: 1702,
            pregunta: "¿Qué etiqueta se utiliza para definir una tabla?",
            opciones: ["<table>", "<tr>", "<td>", "<tab>"],
            respuestaCorrecta: 0,
            explicacion: "<table> define una tabla."
        },
        {
            id: 17046,
            moduloId: 1702,
            pregunta: "¿Qué etiqueta define una fila de una tabla?",
            opciones: ["<table>", "<td>", "<tr>", "<row>"],
            respuestaCorrecta: 2,
            explicacion: "<tr> define una fila de la tabla."
        },
        {
            id: 17047,
            moduloId: 1702,
            pregunta: "¿Qué etiqueta define una celda de datos?",
            opciones: ["<tr>", "<td>", "<th>", "<cell>"],
            respuestaCorrecta: 1,
            explicacion: "<td> define una celda de datos."
        },
        {
            id: 17048,
            moduloId: 1702,
            pregunta: "¿Qué etiqueta se usa para un encabezado de tabla?",
            opciones: ["<td>", "<tr>", "<th>", "<header>"],
            respuestaCorrecta: 2,
            explicacion: "<th> define una celda de encabezado."
        },
        {
            id: 17049,
            moduloId: 1702,
            pregunta: "¿Qué etiqueta representa el contenido principal del documento?",
            opciones: ["<body>", "<main>", "<section>", "<content>"],
            respuestaCorrecta: 1,
            explicacion: "<main> contiene el contenido principal."
        },
        {
            id: 17050,
            moduloId: 1702,
            pregunta: "¿Qué etiqueta se utiliza para un formulario?",
            opciones: ["<input>", "<form>", "<submit>", "<fieldset>"],
            respuestaCorrecta: 1,
            explicacion: "<form> define un formulario."
        },
        {
            id: 17051,
            moduloId: 1702,
            pregunta: "¿Qué atributo indica dónde se envían los datos del formulario?",
            opciones: ["method", "name", "action", "target"],
            respuestaCorrecta: 2,
            explicacion: "El atributo action indica el destino de los datos."
        },
        {
            id: 17052,
            moduloId: 1702,
            pregunta: "¿Qué etiqueta se asocia a un campo de formulario?",
            opciones: ["<label>", "<input>", "<field>", "<caption>"],
            respuestaCorrecta: 0,
            explicacion: "<label> se usa para describir un campo."
        },
        {
            id: 17053,
            moduloId: 1702,
            pregunta: "¿Qué atributo hace obligatorio un campo?",
            opciones: ["disabled", "checked", "required", "readonly"],
            respuestaCorrecta: 2,
            explicacion: "required obliga a rellenar el campo."
        },
        {
            id: 17054,
            moduloId: 1702,
            pregunta: "¿Qué etiqueta se usa para un botón?",
            opciones: ["<input>", "<submit>", "<button>", "<click>"],
            respuestaCorrecta: 2,
            explicacion: "<button> crea un botón."
        },
        {
            id: 17055,
            moduloId: 1702,
            pregunta: "¿Qué etiqueta indica un texto importante?",
            opciones: ["<b>", "<strong>", "<em>", "<important>"],
            respuestaCorrecta: 1,
            explicacion: "<strong> indica importancia semántica."
        },
        {
            id: 17056,
            moduloId: 1702,
            pregunta: "¿Qué etiqueta enfatiza un texto?",
            opciones: ["<b>", "<em>", "<i>", "<emphasis>"],
            respuestaCorrecta: 1,
            explicacion: "<em> indica énfasis semántico."
        },
        {
            id: 17057,
            moduloId: 1702,
            pregunta: "¿Qué etiqueta se usa para comentarios en HTML?",
            opciones: [
                "// comentario",
                "<!-- comentario -->",
                "/* comentario */",
                "# comentario"
            ],
            respuestaCorrecta: 1,
            explicacion: "Los comentarios HTML usan <!-- -->."
        },
        {
            id: 17058,
            moduloId: 1702,
            pregunta: "¿Qué etiqueta agrupa contenido relacionado dentro del body?",
            opciones: ["<section>", "<div>", "<article>", "<group>"],
            respuestaCorrecta: 0,
            explicacion: "<section> agrupa contenido relacionado."
        },
        {
            id: 17059,
            moduloId: 1702,
            pregunta: "¿Qué etiqueta se usa para el pie de página?",
            opciones: ["<header>", "<bottom>", "<footer>", "<foot>"],
            respuestaCorrecta: 2,
            explicacion: "<footer> define el pie de página."
        },
        {
            id: 17060,
            moduloId: 1702,
            pregunta: "¿Qué atributo especifica la codificación de caracteres?",
            opciones: ["lang", "type", "charset", "encoding"],
            respuestaCorrecta: 2,
            explicacion: "charset indica la codificación, normalmente UTF-8."
        }
    ],
};

export default moduloTema2;
