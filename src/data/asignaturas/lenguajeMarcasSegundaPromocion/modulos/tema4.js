export const moduloTema4 = {
    id: 1704,
    nombre: "Tema 4: Flexbox (SP)",
    esExamen: false,
    asignaturaId: 17,
    descripcion: "CSS Flexbox: contenedor, ejes, alineación y propiedades de elementos flex.",
    preguntas: [
        {
            id: 17091,
            moduloId: 1704,
            pregunta: "¿Qué propiedad convierte un contenedor en un contenedor Flexbox?",
            opciones: ["display:flex", "flex-container:true", "flex-direction:row", "layout:flex"],
            respuestaCorrecta: 0,
            explicacion: "display:flex convierte un elemento en un contenedor Flexbox y permite aplicar el modelo flex a sus hijos."
        },
        {
            id: 17092,
            moduloId: 1704,
            pregunta: "¿Cuál es el eje principal por defecto en Flexbox?",
            opciones: ["Vertical", "Horizontal", "Diagonal", "Ninguno"],
            respuestaCorrecta: 1,
            explicacion: "Por defecto, flex-direction es row, por lo que el eje principal es horizontal."
        },
        {
            id: 17093,
            moduloId: 1704,
            pregunta: "¿Qué propiedad controla la dirección del eje principal en Flexbox?",
            opciones: ["flex-axis", "direction", "flex-direction", "justify-direction"],
            respuestaCorrecta: 2,
            explicacion: "flex-direction define la dirección del eje principal (row, column, etc.)."
        },
        {
            id: 17094,
            moduloId: 1704,
            pregunta: "¿Qué valor de flex-direction coloca los elementos en columna?",
            opciones: ["vertical", "column", "stack", "down"],
            respuestaCorrecta: 1,
            explicacion: "El valor column hace que los elementos se distribuyan verticalmente."
        },
        {
            id: 17095,
            moduloId: 1704,
            pregunta: "¿Qué propiedad permite que los elementos flex pasen a otra línea si no caben?",
            opciones: ["flex-overflow", "flex-wrap", "wrap-content", "justify-wrap"],
            respuestaCorrecta: 1,
            explicacion: "flex-wrap permite que los elementos se distribuyan en varias líneas si no caben en una sola."
        },
        {
            id: 17096,
            moduloId: 1704,
            pregunta: "¿Qué valor evita que los elementos flex pasen a otra línea?",
            opciones: ["nowrap", "no-wrap", "flex-none", "single-line"],
            respuestaCorrecta: 0,
            explicacion: "nowrap es el valor por defecto y mantiene todos los elementos en una sola línea."
        },
        {
            id: 17097,
            moduloId: 1704,
            pregunta: "¿Qué propiedad alinea los elementos en el eje principal?",
            opciones: ["align-items", "justify-items", "justify-content", "align-content"],
            respuestaCorrecta: 2,
            explicacion: "justify-content controla la distribución de los elementos a lo largo del eje principal."
        },
        {
            id: 17098,
            moduloId: 1704,
            pregunta: "¿Qué valor de justify-content distribuye los elementos con espacio entre ellos?",
            opciones: ["center", "space-between", "around", "stretch"],
            respuestaCorrecta: 1,
            explicacion: "space-between coloca el primer elemento al inicio, el último al final y reparte el espacio entre ellos."
        },
        {
            id: 17099,
            moduloId: 1704,
            pregunta: "¿Qué propiedad alinea los elementos en el eje secundario?",
            opciones: ["justify-content", "align-items", "align-content", "align-flex"],
            respuestaCorrecta: 1,
            explicacion: "align-items controla la alineación de los elementos en el eje transversal."
        },
        {
            id: 17100,
            moduloId: 1704,
            pregunta: "¿Qué valor centra los elementos en el eje transversal?",
            opciones: ["middle", "center-flex", "align-middle", "center"],
            respuestaCorrecta: 3,
            explicacion: "El valor center en align-items centra los elementos en el eje transversal."
        },
        {
            id: 17101,
            moduloId: 1704,
            pregunta: "¿Qué propiedad controla cuánto crece un elemento si sobra espacio?",
            opciones: ["flex-grow", "flex-increase", "flex-scale", "flex-expand"],
            respuestaCorrecta: 0,
            explicacion: "flex-grow define cuánto crece un elemento respecto a los demás cuando hay espacio disponible."
        },
        {
            id: 17102,
            moduloId: 1704,
            pregunta: "Si un elemento tiene flex-grow:2 y otro flex-grow:1, ¿qué ocurre?",
            opciones: ["Crecen igual", "El primero crece el doble", "El segundo crece más", "Ninguno crece"],
            respuestaCorrecta: 1,
            explicacion: "flex-grow:2 indica que el elemento crecerá el doble que otro con flex-grow:1."
        },
        {
            id: 17103,
            moduloId: 1704,
            pregunta: "¿Qué propiedad define cuánto puede encogerse un elemento?",
            opciones: ["flex-reduce", "flex-collapse", "flex-shrink", "flex-size"],
            respuestaCorrecta: 2,
            explicacion: "flex-shrink define cuánto puede reducirse un elemento cuando no hay suficiente espacio."
        },
        {
            id: 17104,
            moduloId: 1704,
            pregunta: "¿Qué propiedad define el tamaño base de un elemento flex?",
            opciones: ["flex-base", "flex-width", "flex-origin", "flex-basis"],
            respuestaCorrecta: 3,
            explicacion: "flex-basis establece el tamaño inicial del elemento antes de aplicar grow o shrink."
        },
        {
            id: 17105,
            moduloId: 1704,
            pregunta: "¿Qué propiedad cambia el orden visual de los elementos flex?",
            opciones: ["flex-order", "order", "position", "sort"],
            respuestaCorrecta: 1,
            explicacion: "order permite cambiar el orden visual de los elementos dentro del contenedor flex."
        },
        {
            id: 17106,
            moduloId: 1704,
            pregunta: "¿Cuál es el valor por defecto de la propiedad order?",
            opciones: ["0", "1", "-1", "auto"],
            respuestaCorrecta: 0,
            explicacion: "El valor por defecto de order es 0 para todos los elementos."
        },
        {
            id: 17107,
            moduloId: 1704,
            pregunta: "¿Qué propiedad es un atajo para flex-grow, flex-shrink y flex-basis?",
            opciones: ["flex", "flexbox", "flex-layout", "flex-control"],
            respuestaCorrecta: 0,
            explicacion: "La propiedad flex permite definir grow, shrink y basis en una sola declaración."
        },
        {
            id: 17108,
            moduloId: 1704,
            pregunta: "¿Qué suele ocurrir al usar flex:1 en un elemento?",
            opciones: ["Hace el elemento invisible", "Permite crecer y ocupar el espacio disponible", "Desactiva flexbox", "Cambia la dirección"],
            respuestaCorrecta: 1,
            explicacion: "flex:1 permite que el elemento crezca y ocupe el espacio disponible dentro del contenedor."
        },
        {
            id: 17109,
            moduloId: 1704,
            pregunta: "¿Qué propiedad añade espacio entre elementos flex sin usar márgenes?",
            opciones: ["margin-gap", "spacing", "gap", "flex-gap"],
            respuestaCorrecta: 2,
            explicacion: "gap define el espacio entre los elementos dentro de un contenedor flex o grid."
        },
        {
            id: 17110,
            moduloId: 1704,
            pregunta: "¿Qué propiedad controla el espacio interior de un elemento?",
            opciones: ["padding", "margin", "gap", "border"],
            respuestaCorrecta: 0,
            explicacion: "padding define el espacio entre el contenido y el borde del elemento."
        },
        {
            id: 17111,
            moduloId: 1704,
            pregunta: "¿Qué propiedad controla el espacio exterior de un elemento?",
            opciones: ["padding", "margin", "gap", "spacing"],
            respuestaCorrecta: 1,
            explicacion: "margin define el espacio exterior alrededor de un elemento."
        },
        {
            id: 17112,
            moduloId: 1704,
            pregunta: "¿Qué propiedad redondea las esquinas de un elemento?",
            opciones: ["border-round", "corner-radius", "border-style", "border-radius"],
            respuestaCorrecta: 3,
            explicacion: "border-radius permite redondear las esquinas de un elemento."
        },
        {
            id: 17113,
            moduloId: 1704,
            pregunta: "¿Qué propiedad añade una sombra a un elemento?",
            opciones: ["shadow", "element-shadow", "box-shadow", "shadow-box"],
            respuestaCorrecta: 2,
            explicacion: "box-shadow permite añadir sombras a elementos HTML."
        },
        {
            id: 17114,
            moduloId: 1704,
            pregunta: "¿Qué propiedad define el color del texto?",
            opciones: ["text-color", "font-color", "color", "text-style"],
            respuestaCorrecta: 2,
            explicacion: "La propiedad color define el color del texto en CSS."
        },
        {
            id: 17115,
            moduloId: 1704,
            pregunta: "¿Qué propiedad controla el tipo de letra?",
            opciones: ["font-family", "font-type", "text-font", "letter-type"],
            respuestaCorrecta: 0,
            explicacion: "font-family define la tipografía utilizada para mostrar el texto."
        },
        {
            id: 17116,
            moduloId: 1704,
            pregunta: "¿Qué propiedad controla el interlineado del texto?",
            opciones: ["line-height", "text-spacing", "letter-height", "font-spacing"],
            respuestaCorrecta: 0,
            explicacion: "line-height controla el espacio vertical entre líneas de texto."
        },
        {
            id: 17117,
            moduloId: 1704,
            pregunta: "¿Qué propiedad controla el espacio entre letras?",
            opciones: ["word-spacing", "letter-spacing", "text-gap", "char-spacing"],
            respuestaCorrecta: 1,
            explicacion: "letter-spacing controla el espacio entre caracteres."
        },
        {
            id: 17118,
            moduloId: 1704,
            pregunta: "¿Qué propiedad cambia el color de fondo?",
            opciones: ["color-background", "background", "background-color", "bg-color"],
            respuestaCorrecta: 2,
            explicacion: "background-color define el color de fondo de un elemento."
        },
        {
            id: 17119,
            moduloId: 1704,
            pregunta: "¿Qué unidad es relativa al tamaño de la fuente raíz del documento?",
            opciones: ["em", "px", "rem", "%"],
            respuestaCorrecta: 2,
            explicacion: "rem es relativa al tamaño de fuente del elemento raíz (html)."
        },
        {
            id: 17120,
            moduloId: 1704,
            pregunta: "¿Qué propiedad permite aplicar una animación suave al cambiar estilos?",
            opciones: ["animation-delay", "transition", "motion", "transform"],
            respuestaCorrecta: 1,
            explicacion: "transition permite definir cambios suaves entre estados CSS."
        },
    ]
};

export default moduloTema4;
