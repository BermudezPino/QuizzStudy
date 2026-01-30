/**
 * Datos del módulo Tema 1 perteneciente a la asignatura Módulo Profesional Optativo Segunda Promoción.
 * Contenido según Test Fundamentos Unidad 1.
 */
export const moduloTema1 = {
    id: 1801,
    nombre: "Tema 1 (SP)",
    asignaturaId: 18,
    esExamen: false,
    descripcion: "Paradigmas de programación, Big-O, MVP, refactorización y Clean Code.",
    preguntas: [
        {
            id: 18001,
            moduloId: 1801,
            pregunta: "Cuando hablamos de \"paradigma de programación\", ¿a qué nos estamos refiriendo realmente?",
            opciones: [
                "A) A la versión del lenguaje que estamos usando",
                "B) A la forma de pensar y estructurar soluciones en código, incluyendo cómo modelamos el estado y razonamos sobre la corrección",
                "C) A la cantidad de librerías que tiene un lenguaje",
                "D) A las convenciones de estilo (sangrías, nombres de variables, etc.)"
            ],
            respuestaCorrecta: 1,
            explicacion: "Un paradigma es una forma de pensar y estructurar el código, no solo una cuestión de sintaxis o versión del lenguaje."
        },
        {
            id: 18002,
            moduloId: 1801,
            pregunta: "¿Cuál de las siguientes descripciones encaja mejor con el paradigma imperativo?",
            opciones: [
                "A) Describes el resultado que quieres y el motor decide cómo obtenerlo",
                "B) Defines reglas y hechos, y un motor de inferencia deduce las respuestas",
                "C) Te centras en una secuencia de instrucciones que modifican un estado mediante variables y estructuras",
                "D) Solo utilizas funciones matemáticas sin efectos secundarios"
            ],
            respuestaCorrecta: 2,
            explicacion: "El imperativo se basa en dar pasos que modifican un estado mediante variables y estructuras."
        },
        {
            id: 18003,
            moduloId: 1801,
            pregunta: "¿Por qué se dice que lenguajes como SQL se consideran declarativos?",
            opciones: [
                "A) Porque obligan a declarar todas las variables al principio del programa",
                "B) Porque describen \"qué\" se quiere obtener, dejando que el motor decida el \"cómo\" ejecutarlo",
                "C) Porque no permiten trabajar con bases de datos reales",
                "D) Porque siempre son más rápidos que cualquier enfoque imperativo"
            ],
            respuestaCorrecta: 1,
            explicacion: "En el paradigma declarativo se indica el resultado deseado y el motor decide el plan de ejecución."
        },
        {
            id: 18004,
            moduloId: 1801,
            pregunta: "¿Cuál de las siguientes características es típica del enfoque funcional?",
            opciones: [
                "A) Uso intensivo de variables globales modificables",
                "B) Funciones puras, sin efectos secundarios, y preferencia por estructuras inmutables",
                "C) Dependencia total de bucles for y while para cualquier operación",
                "D) Necesidad de programar siempre en lenguajes de bajo nivel"
            ],
            respuestaCorrecta: 1,
            explicacion: "El enfoque funcional prioriza funciones puras e inmutabilidad, reduciendo efectos secundarios."
        },
        {
            id: 18005,
            moduloId: 1801,
            pregunta: "En un backend moderno, ¿cuál de estas afirmaciones refleja mejor el uso real de los paradigmas?",
            opciones: [
                "A) Se elige un único paradigma y se evita mezclar estilos para no \"contaminar\" el código",
                "B) Se combinan paradigmas (imperativo, declarativo, funcional, lógico) según la capa y el problema a resolver",
                "C) Solo se permite el paradigma funcional por motivos de rendimiento",
                "D) El paradigma lógico se usa para absolutamente toda la aplicación"
            ],
            respuestaCorrecta: 1,
            explicacion: "En la práctica se mezclan paradigmas según la capa: datos, lógica, reglas, orquestación, etc."
        },
        {
            id: 18006,
            moduloId: 1801,
            pregunta: "¿Para qué se utiliza principalmente la notación Big-O en análisis de algoritmos?",
            opciones: [
                "A) Para calcular el tiempo exacto en segundos de ejecución de un programa",
                "B) Para estimar el consumo energético de un algoritmo",
                "C) Para clasificar cómo crece el uso de tiempo o espacio de un algoritmo en función del tamaño de la entrada",
                "D) Para contar cuántas líneas de código tiene un proyecto"
            ],
            respuestaCorrecta: 2,
            explicacion: "Big-O clasifica el crecimiento de tiempo o espacio respecto al tamaño de la entrada (n)."
        },
        {
            id: 18007,
            moduloId: 1801,
            pregunta: "¿Cuál de las siguientes situaciones se corresponde mejor con una complejidad O(n)?",
            opciones: [
                "A) Acceder a un elemento concreto de un array por índice",
                "B) Recorrer todos los elementos de una lista con un único bucle",
                "C) Realizar una búsqueda binaria en una lista ordenada",
                "D) Un algoritmo que compara cada elemento con todos los demás (doble bucle anidado)"
            ],
            respuestaCorrecta: 1,
            explicacion: "Recorrer una lista completa con un bucle simple es el ejemplo típico de complejidad lineal O(n)."
        },
        {
            id: 18008,
            moduloId: 1801,
            pregunta: "¿Qué idea resume mejor el enfoque de diseño incremental con MVP (Producto Mínimo Viable)?",
            opciones: [
                "A) Diseñar toda la aplicación completa en detalle antes de escribir una sola línea de código",
                "B) Construir una versión mínima pero funcional, probarla, recibir feedback y ampliarla paso a paso sin romper lo anterior",
                "C) Publicar directamente la versión más compleja del producto para ahorrar iteraciones",
                "D) Trabajar sin plan ni prioridades, añadiendo funcionalidades según se te ocurran"
            ],
            respuestaCorrecta: 1,
            explicacion: "El diseño incremental con MVP busca tener siempre una versión funcional que se mejora con feedback."
        },
        {
            id: 18009,
            moduloId: 1801,
            pregunta: "Cuando hablamos de \"refactorizar\" código, ¿qué se pretende conseguir?",
            opciones: [
                "A) Cambiar la funcionalidad del programa para añadir nuevas características",
                "B) Mejorar la estructura interna del código sin modificar su comportamiento externo",
                "C) Reducir el número de archivos del proyecto a uno solo",
                "D) Eliminar todos los comentarios para que el código sea más \"limpio\""
            ],
            respuestaCorrecta: 1,
            explicacion: "Refactorizar es mejorar la estructura interna manteniendo la misma funcionalidad observable."
        },
        {
            id: 18010,
            moduloId: 1801,
            pregunta: "¿Qué principio de Clean Code se está aplicando cuando renombramos variables genéricas como x o aux a nombres más expresivos como totalVentas o saldoCuenta?",
            opciones: [
                "A) Evitar duplicación",
                "B) Mantener funciones cortas",
                "C) Usar nombres significativos que expliquen su propósito",
                "D) Eliminar la necesidad de comentarios en el código por completo"
            ],
            respuestaCorrecta: 2,
            explicacion: "Clean Code propone nombres significativos para que el código se entienda casi sin esfuerzo extra."
        }
    ],
};

export default moduloTema1;
