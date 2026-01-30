/**
 * Datos del módulo Tema 1 perteneciente a la asignatura Programación Segunda Promoción.
 * Incluye información del módulo y sus preguntas asociadas para el quiz.
 * Contenido según Test Programación Unidad 1.
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
    id: 1601,
    nombre: "Tema 1 (SP)",
    asignaturaId: 16,
    esExamen: false,
    descripcion: "Test Programación Unidad 1: JDK, LTS, IDEs, Git, algoritmos, Böhm-Jacopini, compilación Java, IDEs y Git.",
    preguntas: [
        {
            id: 16001,
            moduloId: 1601,
            pregunta: "¿Cuál de los siguientes NO es un componente fundamental del JDK (Java Development Kit)?",
            opciones: [
                "El compilador javac que transforma código fuente en bytecode",
                "La máquina virtual JVM que ejecuta el bytecode",
                "Un navegador web integrado para ejecutar applets Java",
                "Bibliotecas de clases que proporcionan funcionalidades básicas"
            ],
            respuestaCorrecta: 2,
            explicacion: "Un navegador web integrado NO es componente del JDK"
        },
        {
            id: 16002,
            moduloId: 1601,
            pregunta: "¿Cuál es la característica principal de las versiones LTS (Long Term Support) de Java?",
            opciones: [
                "Ofrecen la mayor velocidad de ejecución comparadas con otras versiones",
                "Son versiones de prueba gratuitas limitadas a estudiantes",
                "Proporcionan estabilidad y soporte a largo plazo, fundamentales para proyectos empresariales",
                "Incluyen automáticamente todas las herramientas de desarrollo gráfico"
            ],
            respuestaCorrecta: 2,
            explicacion: "Proporcionan estabilidad y soporte a largo plazo"
        },
        {
            id: 16003,
            moduloId: 1601,
            pregunta: "¿Cuál de estos IDEs destaca específicamente por su inteligencia artificial integrada que sugiere correcciones y refactorizaciones automáticas?",
            opciones: [
                "Eclipse, por su arquitectura de plugins empresariales",
                "IntelliJ IDEA, con IA integrada para sugerencias avanzadas",
                "VSCode, por su extrema ligereza",
                "NetBeans, por su compatibilidad universal"
            ],
            respuestaCorrecta: 1,
            explicacion: "IntelliJ IDEA destaca por IA integrada"
        },
        {
            id: 16004,
            moduloId: 1601,
            pregunta: "¿Cuál es el propósito principal de Git en el desarrollo de software moderno?",
            opciones: [
                "Compilar automáticamente el código Java",
                "Ejecutar tests unitarios de forma simultánea",
                "Rastrear cambios en el código, crear ramas y coordinar trabajo en equipo",
                "Optimizar el rendimiento de las aplicaciones"
            ],
            respuestaCorrecta: 2,
            explicacion: "Git rastrea cambios y coordina trabajo en equipo"
        },
        {
            id: 16005,
            moduloId: 1601,
            pregunta: "Según el material de estudio, ¿cuál es la definición correcta de un algoritmo?",
            opciones: [
                "Un programa que se ejecuta en la terminal",
                "Una secuencia lógica, finita y no ambigua de pasos diseñada para resolver un problema específico",
                "Un archivo de código compilado en bytecode",
                "Una herramienta para depuración de aplicaciones"
            ],
            respuestaCorrecta: 1,
            explicacion: "Secuencia lógica, finita y no ambigua de pasos"
        },
        {
            id: 16006,
            moduloId: 1601,
            pregunta: "Según el teorema de Böhm-Jacopini, ¿cuáles son las tres estructuras fundamentales suficientes para expresar cualquier algoritmo computable?",
            opciones: [
                "Bucles, funciones y variables",
                "Clases, interfaces y métodos",
                "Secuencia, selección e iteración",
                "Entrada, procesamiento y salida"
            ],
            respuestaCorrecta: 2,
            explicacion: "Secuencia, selección e iteración"
        },
        {
            id: 16007,
            moduloId: 1601,
            pregunta: "¿Cuál es el orden correcto para compilar y ejecutar un programa Java desde la terminal?",
            opciones: [
                "java NombreClase.java → javac NombreClase.class",
                "javac NombreClase.java → java NombreClase",
                "java -compile NombreClase.java → java NombreClase",
                "compile NombreClase.java → run NombreClase"
            ],
            respuestaCorrecta: 1,
            explicacion: "javac compila, java ejecuta"
        },
        {
            id: 16008,
            moduloId: 1601,
            pregunta: "¿Cuál es una ventaja principal que ofrecen los IDEs modernos respecto a la ejecución en terminal?",
            opciones: [
                "Compilación más rápida del código",
                "Depuración paso a paso con puntos de interrupción e inspección de variables",
                "Eliminación automática de bugs sin intervención del programador",
                "Reducción obligatoria del tamaño del ejecutable"
            ],
            respuestaCorrecta: 1,
            explicacion: "Depuración paso a paso con puntos de interrupción"
        },
        {
            id: 16009,
            moduloId: 1601,
            pregunta: "¿Cuál de estos comandos Git se utiliza para guardar una versión del código en el repositorio local?",
            opciones: [
                "git init",
                "git push",
                "git commit",
                "git pull"
            ],
            respuestaCorrecta: 2,
            explicacion: "git commit guarda una versión"
        }
    ],
};

export default moduloTema1;
