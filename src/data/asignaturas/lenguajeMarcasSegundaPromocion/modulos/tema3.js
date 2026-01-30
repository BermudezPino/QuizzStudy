/**
 * Datos del módulo Tema 3 perteneciente a la asignatura Lenguaje de Marcas Segunda Promoción.
 * Incluye información del módulo y sus preguntas asociadas para el quiz.
 * Contenido según cuestionario LM TEST3 (escueladeinformatica.com/LM/TEST3/).
 *
 * @type {Object}
 * @property {number} id - Identificador único del módulo
 * @property {string} nombre - Nombre del módulo
 * @property {boolean} esExamen - Indica si el módulo es un examen
 * @property {number} asignaturaId - ID de la asignatura a la que pertenece
 * @property {string} [descripcion] - Breve descripción del contenido del módulo (opcional)
 * @property {Array<Object>} preguntas - Lista de preguntas para el quiz de este módulo
 */
export const moduloTema3 = {
    id: 1703,
    nombre: "Tema 3 (SP)",
    asignaturaId: 17,
    esExamen: false,
    descripcion: "CSS: color, selectores, padding, margin, display, pseudo-clases, fuentes, rem, box-sizing, sombras.",
    preguntas: [
        {
            id: 17061,
            moduloId: 1703,
            pregunta: "¿Qué propiedad CSS define el color del texto?",
            opciones: ["font-color", "text-style", "color", "text-color"],
            respuestaCorrecta: 2,
            explicacion: "La propiedad color define el color del texto."
        },
        {
            id: 17062,
            moduloId: 1703,
            pregunta: "¿Qué selector aplica estilos a todos los elementos de la página?",
            opciones: ["*", "body", "html", "all"],
            respuestaCorrecta: 0,
            explicacion: "El selector universal * se aplica a todos los elementos."
        },
        {
            id: 17063,
            moduloId: 1703,
            pregunta: "¿Qué propiedad controla el espacio interior de un elemento?",
            opciones: ["margin", "padding", "border", "outline"],
            respuestaCorrecta: 1,
            explicacion: "padding controla el espacio interior del elemento."
        },
        {
            id: 17064,
            moduloId: 1703,
            pregunta: "¿Qué propiedad controla el espacio exterior de un elemento?",
            opciones: ["padding", "border", "margin", "spacing"],
            respuestaCorrecta: 2,
            explicacion: "margin controla el espacio exterior."
        },
        {
            id: 17065,
            moduloId: 1703,
            pregunta: "¿Qué propiedad redondea las esquinas de un elemento?",
            opciones: ["border", "border-radius", "corner-radius", "round"],
            respuestaCorrecta: 1,
            explicacion: "border-radius redondea las esquinas."
        },
        {
            id: 17066,
            moduloId: 1703,
            pregunta: "¿Qué valor de display hace que un elemento ocupe toda la línea?",
            opciones: ["inline", "inline-block", "block", "none"],
            respuestaCorrecta: 2,
            explicacion: "display:block hace que el elemento ocupe toda la línea."
        },
        {
            id: 17067,
            moduloId: 1703,
            pregunta: "¿Qué valor de display permite poner elementos en línea pero con ancho y alto?",
            opciones: ["inline", "block", "none", "inline-block"],
            respuestaCorrecta: 3,
            explicacion: "inline-block combina comportamiento en línea con tamaño propio."
        },
        {
            id: 17068,
            moduloId: 1703,
            pregunta: "¿Qué propiedad elimina el subrayado de un enlace?",
            opciones: ["text-decoration", "underline", "link-style", "decoration"],
            respuestaCorrecta: 0,
            explicacion: "text-decoration:none elimina el subrayado."
        },
        {
            id: 17069,
            moduloId: 1703,
            pregunta: "¿Qué pseudo-clase se aplica al pasar el ratón?",
            opciones: ["active", "focus", "hover", "visited"],
            respuestaCorrecta: 2,
            explicacion: ":hover se activa al pasar el ratón."
        },
        {
            id: 17070,
            moduloId: 1703,
            pregunta: "¿Qué propiedad cambia el cursor a una mano?",
            opciones: ["pointer", "cursor", "cursor:pointer", "hand"],
            respuestaCorrecta: 2,
            explicacion: "cursor:pointer cambia el cursor a una mano."
        },
        {
            id: 17071,
            moduloId: 1703,
            pregunta: "¿Qué propiedad define el tipo de letra?",
            opciones: ["font-style", "font-family", "font-type", "text-font"],
            respuestaCorrecta: 1,
            explicacion: "font-family define la familia tipográfica."
        },
        {
            id: 17072,
            moduloId: 1703,
            pregunta: "¿Qué unidad es relativa al tamaño de letra del html?",
            opciones: ["em", "px", "%", "rem"],
            respuestaCorrecta: 3,
            explicacion: "rem es relativo al tamaño del html."
        },
        {
            id: 17073,
            moduloId: 1703,
            pregunta: "¿Qué propiedad controla el interlineado del texto?",
            opciones: ["line-height", "letter-spacing", "word-spacing", "font-size"],
            respuestaCorrecta: 0,
            explicacion: "line-height controla el espacio entre líneas."
        },
        {
            id: 17074,
            moduloId: 1703,
            pregunta: "¿Qué propiedad define el color de fondo?",
            opciones: ["background", "color", "background-color", "bgcolor"],
            respuestaCorrecta: 2,
            explicacion: "background-color define el color de fondo."
        },
        {
            id: 17075,
            moduloId: 1703,
            pregunta: "¿Qué valor permite que una imagen no se deforme?",
            opciones: ["width:100%", "height:auto", "resize:none", "fit:contain"],
            respuestaCorrecta: 1,
            explicacion: "height:auto mantiene la proporción."
        },
        {
            id: 17076,
            moduloId: 1703,
            pregunta: "¿Qué propiedad evita que el padding aumente el ancho total?",
            opciones: ["box-sizing", "overflow", "display", "outline"],
            respuestaCorrecta: 0,
            explicacion: "box-sizing:border-box mantiene el tamaño total."
        },
        {
            id: 17077,
            moduloId: 1703,
            pregunta: "¿Qué propiedad añade una sombra a un elemento?",
            opciones: ["text-shadow", "box-shadow", "shadow", "border-shadow"],
            respuestaCorrecta: 1,
            explicacion: "box-shadow añade sombra al contenedor."
        },
        {
            id: 17078,
            moduloId: 1703,
            pregunta: "¿Qué propiedad oculta el contenido que sobresale?",
            opciones: ["display:none", "visibility:hidden", "overflow:hidden", "clip"],
            respuestaCorrecta: 2,
            explicacion: "overflow:hidden oculta el contenido sobrante."
        },
        {
            id: 17079,
            moduloId: 1703,
            pregunta: "¿Qué selector selecciona solo inputs de tipo email?",
            opciones: ["input.email", "input[type='email']", "#email", ".email"],
            respuestaCorrecta: 1,
            explicacion: "Es un selector por atributo."
        },
        {
            id: 17080,
            moduloId: 1703,
            pregunta: "¿Qué propiedad elimina el contorno azul en inputs?",
            opciones: ["border:none", "outline:none", "focus:none", "shadow:none"],
            respuestaCorrecta: 1,
            explicacion: "outline:none elimina el contorno del navegador."
        },
        {
            id: 17081,
            moduloId: 1703,
            pregunta: "¿Qué propiedad centra un bloque horizontalmente con margin?",
            opciones: ["margin:auto", "margin:0", "text-align:center", "align:center"],
            respuestaCorrecta: 0,
            explicacion: "margin:auto centra horizontalmente."
        },
        {
            id: 17082,
            moduloId: 1703,
            pregunta: "¿Qué propiedad controla la alineación del texto?",
            opciones: ["align", "text-align", "font-align", "justify"],
            respuestaCorrecta: 1,
            explicacion: "text-align controla la alineación del texto."
        },
        {
            id: 17083,
            moduloId: 1703,
            pregunta: "¿Qué propiedad hace que un elemento no se muestre?",
            opciones: ["visibility:hidden", "opacity:0", "display:none", "hidden"],
            respuestaCorrecta: 2,
            explicacion: "display:none elimina el elemento del flujo."
        },
        {
            id: 17084,
            moduloId: 1703,
            pregunta: "¿Qué propiedad define el grosor del borde?",
            opciones: ["border-style", "border-radius", "border-width", "border-color"],
            respuestaCorrecta: 2,
            explicacion: "border-width define el grosor del borde."
        },
        {
            id: 17085,
            moduloId: 1703,
            pregunta: "¿Qué selector selecciona un elemento por su clase?",
            opciones: ["#clase", ".clase", "clase", "*clase"],
            respuestaCorrecta: 1,
            explicacion: "Las clases se seleccionan con punto."
        },
        {
            id: 17086,
            moduloId: 1703,
            pregunta: "¿Qué selector selecciona un elemento por su id?",
            opciones: [".id", "#id", "id", "*id"],
            respuestaCorrecta: 1,
            explicacion: "Los id se seleccionan con #."
        },
        {
            id: 17087,
            moduloId: 1703,
            pregunta: "¿Qué propiedad controla el espacio entre letras?",
            opciones: ["letter-spacing", "word-spacing", "line-height", "font-weight"],
            respuestaCorrecta: 0,
            explicacion: "letter-spacing ajusta el espacio entre letras."
        },
        {
            id: 17088,
            moduloId: 1703,
            pregunta: "¿Qué propiedad hace el texto más grueso?",
            opciones: ["font-style", "font-weight", "text-decoration", "bold"],
            respuestaCorrecta: 1,
            explicacion: "font-weight controla el grosor del texto."
        },
        {
            id: 17089,
            moduloId: 1703,
            pregunta: "¿Qué propiedad controla el ancho máximo de un elemento?",
            opciones: ["width", "min-width", "max-width", "size"],
            respuestaCorrecta: 2,
            explicacion: "max-width limita el ancho máximo."
        },
        {
            id: 17090,
            moduloId: 1703,
            pregunta: "¿Qué propiedad define el estilo del borde?",
            opciones: ["border-size", "border-color", "border-style", "border-type"],
            respuestaCorrecta: 2,
            explicacion: "border-style define si el borde es sólido, punteado, etc."
        }
    ],
};

export default moduloTema3;
