/**
 * Datos del módulo Tema 3 perteneciente a la asignatura Módulo Profesional Optativo Segunda Promoción.
 * Contenido según Test Fundamentos Unidad 3.
 */
export const moduloTema3 = {
    id: 1803,
    nombre: "Tema 3 (SP)",
    asignaturaId: 18,
    esExamen: false,
    descripcion: "Switch expression, enum, break/continue/return, FSM y depuración.",
    preguntas: [
        {
            id: 18021,
            moduloId: 1803,
            pregunta: "¿Cuál de las siguientes afirmaciones describe mejor la diferencia entre el switch clásico y el switch moderno (switch expression) en Java?",
            opciones: [
                "A) El switch moderno es igual que el clásico, solo cambia la palabra clave",
                "B) El switch moderno permite devolver valores directamente, usa la sintaxis con -> y elimina la necesidad de break en cada caso",
                "C) El switch moderno solo funciona con números enteros",
                "D) El switch moderno es más lento y por eso no se recomienda en código profesional"
            ],
            respuestaCorrecta: 1,
            explicacion: "El switch moderno devuelve valores, usa case -> y elimina la necesidad de break en cada caso."
        },
        {
            id: 18022,
            moduloId: 1803,
            pregunta: "¿Por qué se consideran buena práctica los enum cuando se combinan con switch?",
            opciones: [
                "A) Porque hacen que el código ocupe menos memoria",
                "B) Porque evitan errores de escritura en cadenas literales, permiten autocompletado y ayudan al compilador a detectar casos no manejados",
                "C) Porque obligan a que todos los métodos sean estáticos",
                "D) Porque solo se pueden usar en proyectos pequeños"
            ],
            respuestaCorrecta: 1,
            explicacion: "Los enum evitan errores tipográficos, mejoran autocompletado y permiten que el compilador detecte casos no cubiertos."
        },
        {
            id: 18023,
            moduloId: 1803,
            pregunta: "¿Qué ventaja concreta aporta usar un switch expression frente a una cadena larga de if/else if sobre la misma variable?",
            opciones: [
                "A) Ninguna, ambos son exactamente iguales en legibilidad",
                "B) El switch expression suele producir código más compacto, declarativo y con menor complejidad ciclomática",
                "C) El switch expression impide usar enum",
                "D) El switch expression obliga a usar siempre valores por defecto (default)"
            ],
            respuestaCorrecta: 1,
            explicacion: "El switch expression reduce líneas, hace el código más declarativo y baja la complejidad ciclomática frente a if/else."
        },
        {
            id: 18024,
            moduloId: 1803,
            pregunta: "¿Cuál es la relación correcta entre break, continue y return en estructuras de control?",
            opciones: [
                "A) break y continue son equivalentes; return solo se puede usar en bucles while",
                "B) break rompe el bucle actual, continue salta a la siguiente iteración y return termina la ejecución completa del método",
                "C) return solo sale del bucle más interno, nunca del método",
                "D) continue detiene el programa por completo"
            ],
            respuestaCorrecta: 1,
            explicacion: "break sale del bucle actual, continue salta la iteración y return termina el método entero."
        },
        {
            id: 18025,
            moduloId: 1803,
            pregunta: "¿Para qué sirven las etiquetas (labels) cuando se usan junto con break o continue?",
            opciones: [
                "A) Para cambiar el nombre de las variables dentro del bucle",
                "B) Para indicar al compilador qué método debe ejecutarse primero",
                "C) Para poder salir explícitamente de un bucle externo o saltar directamente a la siguiente iteración de un bucle etiquetado en estructuras anidadas",
                "D) Para hacer el código más lento pero más seguro"
            ],
            respuestaCorrecta: 2,
            explicacion: "Las etiquetas permiten dirigir break/continue hacia bucles externos en estructuras anidadas."
        },
        {
            id: 18026,
            moduloId: 1803,
            pregunta: "¿Qué se entiende por \"código espagueti\" en el contexto de estructuras de control?",
            opciones: [
                "A) Código con muchos comentarios y poca funcionalidad",
                "B) Código con demasiados niveles de anidación (if anidados, bucles dentro de bucles) que resulta difícil de leer, mantener y modificar",
                "C) Código que solo usa switch en lugar de if",
                "D) Código que no compila por errores de sintaxis"
            ],
            respuestaCorrecta: 1,
            explicacion: "\"Código espagueti\" es código con anidación excesiva y lógica enredada, difícil de leer y mantener."
        },
        {
            id: 18027,
            moduloId: 1803,
            pregunta: "En el siguiente pseudocódigo simplificado: ¿Qué buena práctica se está aplicando principalmente?",
            opciones: [
                "A) Uso de etiquetas para romper bucles",
                "B) Uso de recursividad para simplificar el flujo",
                "C) Retornos tempranos (return) para evitar niveles extra de anidación y hacer la lógica más clara",
                "D) Sustitución de switch por if/else"
            ],
            respuestaCorrecta: 2,
            explicacion: "Se usan retornos tempranos para validar condiciones y evitar anidar if innecesariamente."
        },
        {
            id: 18028,
            moduloId: 1803,
            pregunta: "¿Cuál es la idea principal de una máquina de estados finita (FSM) aplicada al control de flujo?",
            opciones: [
                "A) Permitir que un programa tenga infinitos estados sin restricciones",
                "B) Organizar el comportamiento del sistema en un conjunto finito de estados bien definidos, con transiciones claras entre ellos según eventos o condiciones",
                "C) Reemplazar todas las estructuras de control por un único while(true)",
                "D) Eliminar la necesidad de depurar, ya que los errores dejan de existir"
            ],
            respuestaCorrecta: 1,
            explicacion: "Una FSM organiza el sistema en estados finitos con transiciones bien definidas."
        },
        {
            id: 18029,
            moduloId: 1803,
            pregunta: "¿Por qué es preferible usar un enum EstadoSesion { INICIO, LOGUEADO, SALIDA } en lugar de varias variables booleanas como isInicio, isLogueado, isSalida?",
            opciones: [
                "A) Porque los enum son automáticamente más rápidos que los booleanos",
                "B) Porque un enum obliga a usar switch y bloquea el uso de if",
                "C) Porque un enum define un único estado coherente en cada momento y evita combinaciones imposibles (por ejemplo, estar \"logueado y salido\" a la vez)",
                "D) Porque los booleanos no se pueden depurar con un IDE"
            ],
            respuestaCorrecta: 2,
            explicacion: "Un enum garantiza un único estado válido, evitando combinaciones lógicas imposibles que sí ocurren con múltiples booleanos."
        },
        {
            id: 18030,
            moduloId: 1803,
            pregunta: "En la depuración de bucles y condicionales, ¿qué combinación de prácticas se considera más profesional?",
            opciones: [
                "A) Usar solo System.out.println y nunca un depurador",
                "B) Poner un try/catch enorme alrededor de todo el código y confiar en la excepción",
                "C) Usar breakpoints del IDE, inspeccionar variables, añadir logs informativos y, cuando sea necesario, aislar el bloque problemático en un método y cubrirlo con tests unitarios",
                "D) Reescribir todo el módulo cada vez que aparece un bug"
            ],
            respuestaCorrecta: 2,
            explicacion: "La combinación debugger + logs + aislamiento + tests es la estrategia estándar de depuración profesional."
        }
    ],
};

export default moduloTema3;
