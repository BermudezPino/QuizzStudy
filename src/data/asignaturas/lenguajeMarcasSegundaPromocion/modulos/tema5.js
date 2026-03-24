export const moduloTema5 = {
    id: 1705,
    nombre: "Tema 5: CSS Grid (SP)",
    esExamen: false,
    asignaturaId: 17,
    descripcion: "CSS Grid: columnas, filas, áreas, alineación y diseño responsivo.",
    preguntas: [
        {
            id: 17121,
            moduloId: 1705,
            pregunta: "¿Qué propiedad convierte un contenedor en un contenedor Grid?",
            opciones: ["display:grid", "layout:grid", "grid:true", "display:flex"],
            respuestaCorrecta: 0,
            explicacion: "display:grid activa el modelo de diseño CSS Grid para el elemento."
        },
        {
            id: 17122,
            moduloId: 1705,
            pregunta: "¿Qué propiedad define las columnas de un grid?",
            opciones: ["grid-columns", "grid-template-columns", "grid-layout-columns", "grid-columns-template"],
            respuestaCorrecta: 1,
            explicacion: "grid-template-columns define el número y tamaño de las columnas del grid."
        },
        {
            id: 17123,
            moduloId: 1705,
            pregunta: "¿Qué propiedad define las filas de un grid?",
            opciones: ["grid-template-columns", "grid-row-template", "grid-template-rows", "grid-rows"],
            respuestaCorrecta: 2,
            explicacion: "grid-template-rows define la estructura de filas en un grid."
        },
        {
            id: 17124,
            moduloId: 1705,
            pregunta: "¿Qué unidad en Grid representa una fracción del espacio disponible?",
            opciones: ["px", "%", "em", "fr"],
            respuestaCorrecta: 3,
            explicacion: "La unidad fr representa una fracción del espacio disponible dentro del grid."
        },
        {
            id: 17125,
            moduloId: 1705,
            pregunta: "¿Qué propiedad define espacios entre filas y columnas en Grid?",
            opciones: ["gap", "margin-grid", "grid-spacing", "space-grid"],
            respuestaCorrecta: 0,
            explicacion: "gap define la separación entre filas y columnas dentro del grid."
        },
        {
            id: 17126,
            moduloId: 1705,
            pregunta: "¿Qué propiedad permite definir áreas con nombres en un layout grid?",
            opciones: ["grid-layout", "grid-template-areas", "grid-area-layout", "grid-template-map"],
            respuestaCorrecta: 1,
            explicacion: "grid-template-areas permite crear layouts declarativos usando nombres de áreas."
        },
        {
            id: 17127,
            moduloId: 1705,
            pregunta: "¿Qué propiedad asigna un elemento a un área definida en grid-template-areas?",
            opciones: ["grid-place", "grid-layout", "grid-area", "grid-position"],
            respuestaCorrecta: 2,
            explicacion: "grid-area asigna un elemento a una zona del grid definida previamente."
        },
        {
            id: 17128,
            moduloId: 1705,
            pregunta: "¿Qué propiedad permite que un elemento ocupe varias columnas?",
            opciones: ["grid-span", "grid-width", "grid-column", "column-span"],
            respuestaCorrecta: 2,
            explicacion: "grid-column permite controlar cuántas columnas ocupa un elemento en un grid."
        },
        {
            id: 17129,
            moduloId: 1705,
            pregunta: "¿Qué propiedad permite que un elemento ocupe varias filas?",
            opciones: ["grid-row", "row-span", "grid-height", "grid-expand"],
            respuestaCorrecta: 0,
            explicacion: "grid-row controla la posición o expansión vertical del elemento."
        },
        {
            id: 17130,
            moduloId: 1705,
            pregunta: "¿Qué función permite repetir columnas automáticamente en Grid?",
            opciones: ["repeat()", "copy()", "duplicate()", "loop()"],
            respuestaCorrecta: 0,
            explicacion: "repeat() permite definir varias columnas o filas de forma más sencilla."
        },
        {
            id: 17131,
            moduloId: 1705,
            pregunta: "¿Qué función permite definir un tamaño mínimo y máximo para una columna?",
            opciones: ["limit()", "minmax()", "range()", "size()"],
            respuestaCorrecta: 1,
            explicacion: "minmax() permite establecer un tamaño mínimo y máximo flexible."
        },
        {
            id: 17132,
            moduloId: 1705,
            pregunta: "¿Qué valor crea tantas columnas como quepan en el contenedor?",
            opciones: ["auto-fit", "auto-fill", "auto-grid", "auto-layout"],
            respuestaCorrecta: 0,
            explicacion: "auto-fit calcula cuántas columnas caben y ajusta las existentes."
        },
        {
            id: 17133,
            moduloId: 1705,
            pregunta: "¿Qué valor mantiene columnas incluso si no hay suficientes elementos?",
            opciones: ["auto-grid", "auto-fill", "auto-expand", "auto-size"],
            respuestaCorrecta: 1,
            explicacion: "auto-fill mantiene las pistas del grid aunque no haya suficientes elementos."
        },
        {
            id: 17134,
            moduloId: 1705,
            pregunta: "¿Qué propiedad define la altura automática de las filas generadas?",
            opciones: ["grid-row-height", "grid-auto-columns", "grid-auto-rows", "grid-rows-auto"],
            respuestaCorrecta: 2,
            explicacion: "grid-auto-rows establece el tamaño de las filas generadas automáticamente."
        },
        {
            id: 17135,
            moduloId: 1705,
            pregunta: "¿Qué propiedad permite centrar contenido horizontal y verticalmente en Grid?",
            opciones: ["align-center", "grid-center", "center-items", "place-items"],
            respuestaCorrecta: 3,
            explicacion: "place-items es un atajo para justify-items y align-items."
        },
        {
            id: 17136,
            moduloId: 1705,
            pregunta: "¿Qué propiedad controla la alineación vertical de elementos en un grid?",
            opciones: ["align-items", "justify-items", "align-content", "justify-content"],
            respuestaCorrecta: 0,
            explicacion: "align-items controla la alineación vertical de los elementos dentro de las celdas."
        },
        {
            id: 17137,
            moduloId: 1705,
            pregunta: "¿Qué propiedad controla la alineación horizontal de elementos en un grid?",
            opciones: ["align-items", "justify-items", "justify-align", "grid-align"],
            respuestaCorrecta: 1,
            explicacion: "justify-items controla la alineación horizontal dentro de las celdas."
        },
        {
            id: 17138,
            moduloId: 1705,
            pregunta: "¿Qué propiedad controla la alineación del grid completo dentro del contenedor?",
            opciones: ["align-content", "justify-content", "align-grid", "grid-align"],
            respuestaCorrecta: 0,
            explicacion: "align-content controla la alineación vertical del conjunto del grid."
        },
        {
            id: 17139,
            moduloId: 1705,
            pregunta: "¿Qué propiedad centra el grid horizontalmente dentro del contenedor?",
            opciones: ["justify-content", "align-items", "grid-center", "justify-grid"],
            respuestaCorrecta: 0,
            explicacion: "justify-content controla cómo se distribuye el grid en el eje horizontal."
        },
        {
            id: 17140,
            moduloId: 1705,
            pregunta: "¿Qué propiedad permite que una imagen no se deforme dentro de un contenedor?",
            opciones: ["object-fit", "image-fit", "img-resize", "fit-image"],
            respuestaCorrecta: 0,
            explicacion: "object-fit controla cómo se ajusta la imagen dentro de su contenedor."
        },
        {
            id: 17141,
            moduloId: 1705,
            pregunta: "¿Qué valor de object-fit rellena el contenedor recortando la imagen?",
            opciones: ["contain", "fill", "cover", "scale"],
            respuestaCorrecta: 2,
            explicacion: "cover llena todo el contenedor recortando la imagen si es necesario."
        },
        {
            id: 17142,
            moduloId: 1705,
            pregunta: "¿Qué propiedad permite aplicar estilos según el ancho de pantalla?",
            opciones: ["@responsive", "@media", "@screen", "@display"],
            respuestaCorrecta: 1,
            explicacion: "@media permite aplicar estilos condicionales según el tamaño del dispositivo."
        },
        {
            id: 17143,
            moduloId: 1705,
            pregunta: "¿Qué propiedad limita el ancho máximo de un elemento?",
            opciones: ["max-width", "width-limit", "limit-width", "max-size"],
            respuestaCorrecta: 0,
            explicacion: "max-width establece el ancho máximo que puede tener un elemento."
        },
        {
            id: 17144,
            moduloId: 1705,
            pregunta: "¿Qué propiedad permite centrar un elemento horizontalmente con margen?",
            opciones: ["margin:auto", "margin:center", "align:center", "center:block"],
            respuestaCorrecta: 0,
            explicacion: "margin:auto en los lados permite centrar un bloque horizontalmente."
        },
        {
            id: 17145,
            moduloId: 1705,
            pregunta: "¿Qué propiedad define variables reutilizables en CSS?",
            opciones: ["var()", ":root", "const", "css-var"],
            respuestaCorrecta: 1,
            explicacion: ":root suele usarse para declarar variables CSS globales."
        },
        {
            id: 17146,
            moduloId: 1705,
            pregunta: "¿Cómo se utiliza una variable CSS?",
            opciones: ["value()", "use()", "var()", "get()"],
            respuestaCorrecta: 2,
            explicacion: "var(--nombre) permite usar una variable CSS."
        },
        {
            id: 17147,
            moduloId: 1705,
            pregunta: "¿Qué propiedad añade esquinas redondeadas?",
            opciones: ["border-style", "border-radius", "corner-style", "round-border"],
            respuestaCorrecta: 1,
            explicacion: "border-radius permite redondear los bordes de un elemento."
        },
        {
            id: 17148,
            moduloId: 1705,
            pregunta: "¿Qué propiedad crea una sombra alrededor de un elemento?",
            opciones: ["shadow", "box-shadow", "border-shadow", "element-shadow"],
            respuestaCorrecta: 1,
            explicacion: "box-shadow permite aplicar sombras a elementos HTML."
        },
        {
            id: 17149,
            moduloId: 1705,
            pregunta: "¿Qué propiedad controla el interlineado del texto?",
            opciones: ["line-height", "text-gap", "font-spacing", "word-height"],
            respuestaCorrecta: 0,
            explicacion: "line-height controla el espacio entre líneas de texto."
        },
        {
            id: 17150,
            moduloId: 1705,
            pregunta: "¿Qué propiedad define el color de fondo de un elemento?",
            opciones: ["background", "color-background", "background-color", "bg"],
            respuestaCorrecta: 2,
            explicacion: "background-color define específicamente el color de fondo."
        },
    ]
};

export default moduloTema5;
