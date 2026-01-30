/**
 * Datos del módulo Tema 1 perteneciente a la asignatura Lenguaje de Marcas Segunda Promoción.
 * Incluye información del módulo y sus preguntas asociadas para el quiz.
 * Contenido según cuestionario LM TEST1 (escueladeinformatica.com/LM/TEST1/).
 *
 * @type {Object}
 * @property {number} id - Identificador único del módulo
 * @property {string} nombre - Nombre del módulo
 * @property {boolean} esExamen - Indica si el módulo es un examen
 * @property {number} asignaturaId - ID de la asignatura a la que pertenece
 * @property {string} [descripcion] - Breve descripción del contenido del módulo (opcional)
 * @property {Array<Object>} preguntas - Lista de preguntas para el quiz de este módulo
 */
export const moduloTema1 = {
    id: 1701,
    nombre: "Tema 1 (SP)",
    asignaturaId: 17,
    esExamen: false,
    descripcion: "CSS: color, selectores, inline/interno/externo, padding, margin, propiedades y unidades.",
    preguntas: [
        {
            id: 17001,
            moduloId: 1701,
            pregunta: "¿Qué propiedad controla el color del texto?",
            opciones: [
                "font-color",
                "text-style",
                "color",
                "text-color"
            ],
            respuestaCorrecta: 2,
            explicacion: "La propiedad 'color' define el color del texto."
        },
        {
            id: 17002,
            moduloId: 1701,
            pregunta: "¿Qué selector aplica estilos a todos los elementos?",
            opciones: ["*", "#all", "html", "body"],
            respuestaCorrecta: 0,
            explicacion: "El selector universal * aplica estilos globales."
        },
        {
            id: 17003,
            moduloId: 1701,
            pregunta: "¿Cuál es la forma correcta de usar CSS inline?",
            opciones: [
                "style=\"color:red\" en el elemento",
                "<link> en head",
                "<style> en head",
                "class=\"estilo\""
            ],
            respuestaCorrecta: 0,
            explicacion: "CSS inline usa el atributo style."
        },
        {
            id: 17004,
            moduloId: 1701,
            pregunta: "¿Qué propiedad controla el espacio interior?",
            opciones: ["padding", "margin", "border-spacing", "outline"],
            respuestaCorrecta: 0,
            explicacion: "Padding es el espacio interno."
        },
        {
            id: 17005,
            moduloId: 1701,
            pregunta: "¿Dónde debe colocarse la etiqueta <style>?",
            opciones: [
                "En <head>",
                "En <body>",
                "En cualquier lugar",
                "En <style> dentro de head o body"
            ],
            respuestaCorrecta: 3,
            explicacion: "El CSS interno va dentro de <style>."
        },
        {
            id: 17006,
            moduloId: 1701,
            pregunta: "¿Qué archivo se usa para escribir CSS externo?",
            opciones: ["archivo.css", "archivo.js", "archivo.html", "archivo.java"],
            respuestaCorrecta: 0,
            explicacion: "Los estilos externos usan archivos .css."
        },
        {
            id: 17007,
            moduloId: 1701,
            pregunta: "¿Qué hace cursor: pointer?",
            opciones: [
                "Oculta el cursor",
                "Muestra una mano al pasar",
                "Hace clic automáticamente",
                "Reduce el botón"
            ],
            respuestaCorrecta: 1,
            explicacion: "pointer indica que el elemento es clicable."
        },
        {
            id: 17008,
            moduloId: 1701,
            pregunta: "¿Qué propiedad redondea las esquinas?",
            opciones: ["border", "border-radius", "border-curve", "background-radius"],
            respuestaCorrecta: 1,
            explicacion: "border-radius redondea esquinas."
        },
        {
            id: 17009,
            moduloId: 1701,
            pregunta: "¿Cuál de estos NO es un color válido en CSS?",
            opciones: ["#ff0000", "blue", "rgb(0,0,0)", "color(azul)"],
            respuestaCorrecta: 3,
            explicacion: "color(azul) no existe en CSS."
        },
        {
            id: 17010,
            moduloId: 1701,
            pregunta: "¿Qué etiqueta enlaza un archivo CSS externo?",
            opciones: ["<style>", "<script>", "<link>", "<css>"],
            respuestaCorrecta: 2,
            explicacion: "Se usa <link>."
        },
        {
            id: 17011,
            moduloId: 1701,
            pregunta: "¿Qué propiedad define el color de fondo?",
            opciones: ["bg", "background-color", "background-text", "color-background"],
            respuestaCorrecta: 1,
            explicacion: "background-color define el color del fondo."
        },
        {
            id: 17012,
            moduloId: 1701,
            pregunta: "¿Qué hace la propiedad text-align?",
            opciones: [
                "Cambia el color del texto",
                "Alinea el texto dentro de su contenedor",
                "Modifica el tamaño del texto",
                "Elimina el subrayado del texto"
            ],
            respuestaCorrecta: 1,
            explicacion: "text-align controla la alineación del texto: left, center, right o justify."
        },
        {
            id: 17013,
            moduloId: 1701,
            pregunta: "¿Qué hace overflow: hidden?",
            opciones: [
                "Genera scroll",
                "Oculta contenido que sobresale",
                "Hace zoom",
                "Invierte el fondo"
            ],
            respuestaCorrecta: 1,
            explicacion: "Oculta el contenido fuera del contenedor."
        },
        {
            id: 17014,
            moduloId: 1701,
            pregunta: "¿Qué valor mantiene la proporción de una imagen?",
            opciones: ["height:100%", "width:auto", "height:auto", "resize:keep"],
            respuestaCorrecta: 2,
            explicacion: "height:auto conserva la proporción al cambiar el ancho."
        },
        {
            id: 17015,
            moduloId: 1701,
            pregunta: "¿Para qué sirve border-collapse en una tabla?",
            opciones: [
                "Hace la tabla más grande",
                "Fusiona los bordes de las celdas en uno solo",
                "Elimina los bordes de la tabla",
                "Añade color automáticamente"
            ],
            respuestaCorrecta: 1,
            explicacion: "border-collapse: collapse une los bordes internos para que no queden dobles."
        },
        {
            id: 17016,
            moduloId: 1701,
            pregunta: "¿Qué propiedad controla el interlineado?",
            opciones: ["font-size", "line-height", "text-gap", "spacing"],
            respuestaCorrecta: 1,
            explicacion: "line-height ajusta la altura entre líneas."
        },
        {
            id: 17017,
            moduloId: 1701,
            pregunta: "¿Qué hace a:hover?",
            opciones: [
                "Cambia el color cuando recibe clic",
                "Cambia el estilo al pasar el ratón",
                "Subraya siempre",
                "Cambia el tamaño del enlace"
            ],
            respuestaCorrecta: 1,
            explicacion: "hover detecta el puntero encima."
        },
        {
            id: 17018,
            moduloId: 1701,
            pregunta: "¿Qué tipo de selector es input[type='email']?",
            opciones: ["Universal", "ID", "Clase", "Atributo"],
            respuestaCorrecta: 3,
            explicacion: "Selecciona por atributo."
        },
        {
            id: 17019,
            moduloId: 1701,
            pregunta: "¿Qué hace box-shadow?",
            opciones: ["Añade sombras", "Cambia fuente", "Modifica ancho", "Desactiva relleno"],
            respuestaCorrecta: 0,
            explicacion: "Agrega una sombra alrededor del elemento."
        },
        {
            id: 17020,
            moduloId: 1701,
            pregunta: "¿Qué propiedad controla el espacio exterior?",
            opciones: ["border", "padding", "margin", "outline"],
            respuestaCorrecta: 2,
            explicacion: "margin controla el espacio exterior."
        },
        {
            id: 17021,
            moduloId: 1701,
            pregunta: "¿Qué hace width:100% en un input?",
            opciones: [
                "Lo esconde",
                "Lo hace ocupar todo el ancho del contenedor",
                "Lo hace cuadrado",
                "Lo centra automáticamente"
            ],
            respuestaCorrecta: 1,
            explicacion: "width:100% lo expande a todo el ancho."
        },
        {
            id: 17022,
            moduloId: 1701,
            pregunta: "¿Qué hace la propiedad background-color?",
            opciones: [
                "Cambia el color del fondo de un elemento",
                "Modifica el color del texto",
                "Ajusta el tamaño del borde",
                "Oculta el contenido del elemento"
            ],
            respuestaCorrecta: 0,
            explicacion: "background-color sirve para definir el color del fondo de cualquier elemento HTML."
        },
        {
            id: 17023,
            moduloId: 1701,
            pregunta: "¿Cuál es la forma correcta de CSS interno?",
            opciones: [
                "<style> h1{color:red;} </style>",
                "<link> h1{color:red;} </link>",
                "<script> h1{color:red;} </script>",
                "<css> h1{color:red;} </css>"
            ],
            respuestaCorrecta: 0,
            explicacion: "CSS interno se escribe dentro de <style>."
        },
        {
            id: 17024,
            moduloId: 1701,
            pregunta: "¿Qué propiedad elimina el contorno azul en inputs?",
            opciones: ["outline:none", "border:none", "padding:0", "focus:0"],
            respuestaCorrecta: 0,
            explicacion: "outline:none elimina el contorno predeterminado."
        },
        {
            id: 17025,
            moduloId: 1701,
            pregunta: "¿Qué significa rem?",
            opciones: [
                "Relativo al viewport",
                "Relativo al elemento html",
                "Relativo al body",
                "Valor absoluto"
            ],
            respuestaCorrecta: 1,
            explicacion: "1rem = font-size del html."
        },
        {
            id: 17026,
            moduloId: 1701,
            pregunta: "¿Qué hace max-width: 100% en una imagen?",
            opciones: [
                "Permite que la imagen se reduzca pero no se agrande más que su contenedor",
                "Fija la imagen a 100px",
                "Hace que la imagen se deforme",
                "Ignora completamente el tamaño del contenedor"
            ],
            respuestaCorrecta: 0,
            explicacion: "max-width:100% hace que la imagen sea flexible sin superar el ancho del contenedor."
        },
        {
            id: 17027,
            moduloId: 1701,
            pregunta: "¿Qué etiqueta es correcta para enlazar CSS externo?",
            opciones: [
                "<style>",
                "<script>",
                "<link rel=\"stylesheet\" href=\"estilo.css\">",
                "<import>"
            ],
            respuestaCorrecta: 2,
            explicacion: "La etiqueta correcta es <link>."
        },
        {
            id: 17028,
            moduloId: 1701,
            pregunta: "¿Cuál es el display por defecto de un <p>?",
            opciones: ["inline", "inline-block", "block", "flex"],
            respuestaCorrecta: 2,
            explicacion: "Los párrafos son elementos block."
        },
        {
            id: 17029,
            moduloId: 1701,
            pregunta: "¿Qué propiedad hace que una imagen no sobrepase su contenedor?",
            opciones: ["size-limit", "width:auto", "max-width:100%", "contain:yes"],
            respuestaCorrecta: 2,
            explicacion: "max-width:100% hace que se ajuste al contenedor."
        },
        {
            id: 17030,
            moduloId: 1701,
            pregunta: "¿Cuál de estos NO es un método de incluir CSS?",
            opciones: [
                "CSS inline",
                "CSS interno con <style>",
                "CSS externo con <link>",
                "CSS dentro de <script>"
            ],
            respuestaCorrecta: 3,
            explicacion: "CSS no se escribe en <script>."
        }
    ],
};

export default moduloTema1;
