/**
 * Datos del módulo Tema 3 perteneciente a la asignatura Programación Segunda Promoción.
 * Contenido según Test Programación Unidad 3.
 */
export const moduloTema3 = {
    id: 1603,
    nombre: "Tema 3 (SP)",
    asignaturaId: 16,
    esExamen: false,
    descripcion: "Test Programación Unidad 3: if, if-else, switch, while, do-while, for, for-each, anidamiento.",
    preguntas: [
        {
            id: 16031,
            moduloId: 1603,
            pregunta: "¿Cuál es la función principal de una estructura if en Java?",
            opciones: [
                "Repetir un bloque de código indefinidamente",
                "Evaluar una expresión booleana y ejecutar código solo si es verdadera",
                "Saltar a una etiqueta específica en el programa",
                "Crear una nueva variable con un valor condicional"
            ],
            respuestaCorrecta: 1,
            explicacion: "if evalúa una condición booleana y ejecuta código solo si es verdadera"
        },
        {
            id: 16032,
            moduloId: 1603,
            pregunta: "¿Cuál es la diferencia fundamental entre if-else e if simple?",
            opciones: [
                "if-else es más rápido que if simple",
                "if-else solo funciona con números",
                "if-else proporciona una alternativa para cuando la condición es falsa",
                "if-else puede evaluar múltiples condiciones simultáneamente"
            ],
            respuestaCorrecta: 2,
            explicacion: "if-else proporciona una alternativa (else) cuando la condición es falsa"
        },
        {
            id: 16033,
            moduloId: 1603,
            pregunta: "¿Cuándo es más apropiado usar una cadena if-else-if en lugar de múltiples if independientes?",
            opciones: [
                "Cuando necesitas evaluar múltiples condiciones mutuamente excluyentes de forma ordenada",
                "Cuando quieres que todas las condiciones se evalúen siempre",
                "Cuando necesitas mejor rendimiento de compilación",
                "Cuando trabajas con valores de punto flotante"
            ],
            respuestaCorrecta: 0,
            explicacion: "if-else-if evalúa múltiples condiciones mutuamente excluyentes de forma ordenada"
        },
        {
            id: 16034,
            moduloId: 1603,
            pregunta: "¿En qué situación es más recomendable usar switch en lugar de if-else?",
            opciones: [
                "Cuando necesitas comparar una variable contra múltiples valores específicos y discretos",
                "Cuando tienes solo dos opciones",
                "Cuando trabajas con datos de texto muy largos",
                "Cuando necesitas rendimiento máximo sin importar legibilidad"
            ],
            respuestaCorrecta: 0,
            explicacion: "switch es óptimo para comparar contra múltiples valores específicos y discretos"
        },
        {
            id: 16035,
            moduloId: 1603,
            pregunta: "¿Cuál es la principal ventaja de las switch expressions introducidas en Java 14?",
            opciones: [
                "Permiten eliminar la necesidad de break statements",
                "Son mucho más rápidas que switch tradicionales",
                "Funcionan solo con números enteros",
                "Permiten más de 100 casos simultáneamente"
            ],
            respuestaCorrecta: 0,
            explicacion: "Las switch expressions eliminan la necesidad de break, haciendo código más seguro y conciso"
        },
        {
            id: 16036,
            moduloId: 1603,
            pregunta: "Si ejecutas el siguiente código: int i = 5; while(i < 3) { System.out.println(i); i++; } ¿Cuántas veces se ejecutará el bloque de código?",
            opciones: ["0 veces", "2 veces", "5 veces", "Infinitamente"],
            respuestaCorrecta: 0,
            explicacion: "Como i=5 no es menor que 3, la condición es falsa desde el inicio, nunca se ejecuta"
        },
        {
            id: 16037,
            moduloId: 1603,
            pregunta: "¿Cuál es la característica principal que distingue do-while de while?",
            opciones: [
                "do-while es más rápido",
                "do-while garantiza que el código se ejecute al menos una vez",
                "do-while no necesita llaves {} para envolver el código",
                "do-while no puede tener incrementos"
            ],
            respuestaCorrecta: 1,
            explicacion: "do-while garantiza al menos una ejecución antes de evaluar la condición"
        },
        {
            id: 16038,
            moduloId: 1603,
            pregunta: "¿Cuál es el contexto ideal para usar un bucle for en lugar de while?",
            opciones: [
                "Cuando no sabes cuántas iteraciones necesitas",
                "Cuando conoces el número exacto de iteraciones o trabajas con rangos específicos",
                "Cuando necesitas leer un archivo línea por línea",
                "Cuando quieres garantizar al menos una ejecución"
            ],
            respuestaCorrecta: 1,
            explicacion: "for es ideal cuando conoces el número exacto de iteraciones o trabajas con rangos"
        },
        {
            id: 16039,
            moduloId: 1603,
            pregunta: "¿Cuál es la ventaja principal del bucle for-each (introducido en Java 5) sobre un for tradicional?",
            opciones: [
                "Es significativamente más rápido",
                "Simplifica la iteración sobre colecciones y evita errores como IndexOutOfBoundsException",
                "Permite modificar elementos de la colección durante la iteración",
                "Solo funciona con arrays"
            ],
            respuestaCorrecta: 1,
            explicacion: "for-each simplifica iteración sobre colecciones y evita errores de índice comunes"
        },
        {
            id: 16040,
            moduloId: 1603,
            pregunta: "¿Cuál es la recomendación general de buenas prácticas para limitar la profundidad de anidamiento en estructuras de control?",
            opciones: [
                "No hay límite, cuanto más anidamiento mejor",
                "Máximo 1 nivel de anidamiento",
                "No más de 3-4 niveles, extrayendo lógica a métodos separados cuando sea necesario",
                "Máximo 10 niveles de anidamiento"
            ],
            respuestaCorrecta: 2,
            explicacion: "La recomendación es máximo 3-4 niveles de anidamiento para mantener legibilidad"
        }
    ],
};

export default moduloTema3;
