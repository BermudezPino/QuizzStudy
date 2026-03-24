export const moduloTema6 = {
    id: 1706,
    nombre: "Tema 6: Animaciones CSS (SP)",
    esExamen: false,
    asignaturaId: 17,
    descripcion: "Animaciones CSS: @keyframes, propiedades de animación, transitions y transforms.",
    preguntas: [
        {
            id: 17151,
            moduloId: 1706,
            pregunta: "¿Qué regla CSS permite definir una animación personalizada?",
            opciones: ["@animation", "@frames", "@motion", "@keyframes"],
            respuestaCorrecta: 3,
            explicacion: "@keyframes define los fotogramas clave de una animación CSS."
        },
        {
            id: 17152,
            moduloId: 1706,
            pregunta: "¿Qué propiedad CSS aplica una animación a un elemento?",
            opciones: ["animation", "transform", "transition", "animate"],
            respuestaCorrecta: 0,
            explicacion: "La propiedad animation aplica una animación definida con @keyframes."
        },
        {
            id: 17153,
            moduloId: 1706,
            pregunta: "¿Qué subpropiedad define cuánto dura una animación?",
            opciones: ["animation-speed", "animation-duration", "animation-delay", "animation-time"],
            respuestaCorrecta: 1,
            explicacion: "animation-duration define cuánto tiempo dura un ciclo de animación."
        },
        {
            id: 17154,
            moduloId: 1706,
            pregunta: "¿Qué subpropiedad define el retraso antes de que empiece la animación?",
            opciones: ["animation-delay", "animation-start", "animation-time", "animation-wait"],
            respuestaCorrecta: 0,
            explicacion: "animation-delay indica cuánto tiempo espera antes de iniciar."
        },
        {
            id: 17155,
            moduloId: 1706,
            pregunta: "¿Qué propiedad controla cuántas veces se repite una animación?",
            opciones: ["animation-repeat", "animation-count", "animation-iteration-count", "animation-loop"],
            respuestaCorrecta: 2,
            explicacion: "animation-iteration-count controla el número de repeticiones."
        },
        {
            id: 17156,
            moduloId: 1706,
            pregunta: "¿Qué valor permite que una animación se repita indefinidamente?",
            opciones: ["loop", "forever", "repeat", "infinite"],
            respuestaCorrecta: 3,
            explicacion: "El valor infinite hace que la animación se repita sin fin."
        },
        {
            id: 17157,
            moduloId: 1706,
            pregunta: "¿Qué propiedad define la velocidad de aceleración de la animación?",
            opciones: ["animation-timing-function", "animation-speed", "animation-rate", "animation-flow"],
            respuestaCorrecta: 0,
            explicacion: "animation-timing-function define la curva de velocidad."
        },
        {
            id: 17158,
            moduloId: 1706,
            pregunta: "¿Qué valor de timing-function mantiene velocidad constante?",
            opciones: ["ease", "linear", "smooth", "steady"],
            respuestaCorrecta: 1,
            explicacion: "linear mantiene una velocidad constante durante toda la animación."
        },
        {
            id: 17159,
            moduloId: 1706,
            pregunta: "¿Qué propiedad permite indicar el nombre de la animación?",
            opciones: ["animation-keyframe", "animation-style", "animation-name", "animation-id"],
            respuestaCorrecta: 2,
            explicacion: "animation-name vincula el elemento con un bloque @keyframes."
        },
        {
            id: 17160,
            moduloId: 1706,
            pregunta: "¿Qué propiedad controla si la animación se reproduce hacia adelante o alternando?",
            opciones: ["animation-flow", "animation-direction", "animation-rotation", "animation-order"],
            respuestaCorrecta: 1,
            explicacion: "animation-direction permite valores como normal, reverse o alternate."
        },
        {
            id: 17161,
            moduloId: 1706,
            pregunta: "¿Qué valor hace que la animación se reproduzca hacia adelante y luego hacia atrás?",
            opciones: ["reverse", "alternate", "loop", "bounce"],
            respuestaCorrecta: 1,
            explicacion: "alternate reproduce la animación en ambas direcciones."
        },
        {
            id: 17162,
            moduloId: 1706,
            pregunta: "¿Qué propiedad controla qué estilos se mantienen antes o después de la animación?",
            opciones: ["animation-hold", "animation-state", "animation-fill-mode", "animation-finish"],
            respuestaCorrecta: 2,
            explicacion: "animation-fill-mode define cómo se aplican los estilos antes y después."
        },
        {
            id: 17163,
            moduloId: 1706,
            pregunta: "¿Qué valor de fill-mode mantiene el estado final de la animación?",
            opciones: ["backwards", "initial", "running", "forwards"],
            respuestaCorrecta: 3,
            explicacion: "forwards mantiene el estilo final tras terminar la animación."
        },
        {
            id: 17164,
            moduloId: 1706,
            pregunta: "¿Qué propiedad permite pausar o reanudar una animación?",
            opciones: ["animation-stop", "animation-play-state", "animation-pause", "animation-run"],
            respuestaCorrecta: 1,
            explicacion: "animation-play-state permite valores como running o paused."
        },
        {
            id: 17165,
            moduloId: 1706,
            pregunta: "¿Qué propiedad permite mover un elemento durante una animación?",
            opciones: ["position", "translate", "transform", "animation-move"],
            respuestaCorrecta: 2,
            explicacion: "transform permite aplicar translate, rotate, scale, etc."
        },
        {
            id: 17166,
            moduloId: 1706,
            pregunta: "¿Qué función de transform permite mover un elemento horizontalmente?",
            opciones: ["translateX()", "moveX()", "shiftX()", "slideX()"],
            respuestaCorrecta: 0,
            explicacion: "translateX mueve el elemento en el eje horizontal."
        },
        {
            id: 17167,
            moduloId: 1706,
            pregunta: "¿Qué función de transform permite escalar un elemento?",
            opciones: ["resize()", "zoom()", "scale()", "grow()"],
            respuestaCorrecta: 2,
            explicacion: "scale cambia el tamaño del elemento proporcionalmente."
        },
        {
            id: 17168,
            moduloId: 1706,
            pregunta: "¿Qué propiedad permite animar cambios de estilo de forma suave sin @keyframes?",
            opciones: ["animate", "transition", "motion", "transform"],
            respuestaCorrecta: 1,
            explicacion: "transition suaviza cambios entre estados CSS."
        },
        {
            id: 17169,
            moduloId: 1706,
            pregunta: "¿Qué propiedad define cuánto dura una transición?",
            opciones: ["transition-duration", "transition-time", "transition-length", "transition-speed"],
            respuestaCorrecta: 0,
            explicacion: "transition-duration controla la duración de la transición."
        },
        {
            id: 17170,
            moduloId: 1706,
            pregunta: "¿Qué propiedad define qué propiedad CSS será animada en una transición?",
            opciones: ["transition-effect", "transition-property", "transition-target", "transition-name"],
            respuestaCorrecta: 1,
            explicacion: "transition-property indica qué propiedad cambia."
        },
        {
            id: 17171,
            moduloId: 1706,
            pregunta: "¿Qué librería externa de animaciones aparece en el HTML del proyecto?",
            opciones: ["Motion.css", "Anime.js", "Velocity.js", "Animate.css"],
            respuestaCorrecta: 3,
            explicacion: "Animate.css es una librería popular de animaciones predefinidas."
        },
        {
            id: 17172,
            moduloId: 1706,
            pregunta: "¿Qué clase base es obligatoria en Animate.css?",
            opciones: ["animate__animated", "animate-base", "animation-start", "animate-core"],
            respuestaCorrecta: 0,
            explicacion: "animate__animated es necesaria para activar las animaciones."
        },
        {
            id: 17173,
            moduloId: 1706,
            pregunta: "¿Qué clase en Animate.css añade retraso a una animación?",
            opciones: ["animate__wait", "animate__delay-1s", "animate__pause", "animate__sleep"],
            respuestaCorrecta: 1,
            explicacion: "animate__delay-1s retrasa el inicio de la animación."
        },
        {
            id: 17174,
            moduloId: 1706,
            pregunta: "¿Qué clase de Animate.css repite una animación infinitamente?",
            opciones: ["animate__loop", "animate__repeat-3", "animate__cycle", "animate__infinite"],
            respuestaCorrecta: 3,
            explicacion: "animate__infinite hace que la animación no termine."
        },
        {
            id: 17175,
            moduloId: 1706,
            pregunta: "¿Qué propiedad mejora el rendimiento de animaciones indicando cambios futuros?",
            opciones: ["optimize", "will-change", "gpu-mode", "render-hint"],
            respuestaCorrecta: 1,
            explicacion: "will-change permite al navegador optimizar animaciones."
        },
        {
            id: 17176,
            moduloId: 1706,
            pregunta: "¿Qué propiedad puede animarse para crear efectos de aparición?",
            opciones: ["opacity", "display", "visibility", "float"],
            respuestaCorrecta: 0,
            explicacion: "opacity permite crear efectos de fade-in o fade-out."
        },
        {
            id: 17177,
            moduloId: 1706,
            pregunta: "¿Qué propiedad se usa para rotar un elemento?",
            opciones: ["rotate", "spin", "transform", "rotation"],
            respuestaCorrecta: 2,
            explicacion: "rotate se aplica dentro de transform."
        },
        {
            id: 17178,
            moduloId: 1706,
            pregunta: "¿Qué propiedad permite animar un elemento desde transparente a visible?",
            opciones: ["display", "opacity", "visibility", "fade"],
            respuestaCorrecta: 1,
            explicacion: "opacity puede cambiar de 0 a 1 para crear fundidos."
        },
        {
            id: 17179,
            moduloId: 1706,
            pregunta: "¿Qué propiedad permite mover un elemento verticalmente?",
            opciones: ["translateY()", "moveY()", "shiftY()", "slideY()"],
            respuestaCorrecta: 0,
            explicacion: "translateY mueve el elemento en el eje vertical."
        },
        {
            id: 17180,
            moduloId: 1706,
            pregunta: "¿Qué propiedad abreviada permite definir varias subpropiedades de animación a la vez?",
            opciones: ["animate", "animation-set", "animation-group", "animation"],
            respuestaCorrecta: 3,
            explicacion: "animation es la propiedad abreviada que combina nombre, duración, delay, etc."
        },
    ]
};

export default moduloTema6;
