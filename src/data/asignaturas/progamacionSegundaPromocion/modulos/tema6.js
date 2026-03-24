export const moduloTema6 = {
    id: 1606,
    nombre: "Tema 6: Excepciones y Colecciones (SP)",
    esExamen: false,
    asignaturaId: 16,
    descripcion: "Excepciones y Colecciones en Java",
    preguntas: [
        {
            id: 16061,
            moduloId: 1606,
            pregunta: "¿Qué son las excepciones en Java?",
            opciones: [
                "Eventos que interrumpen el flujo normal de ejecución cuando ocurre un error o condición inesperada",
                "Variables especiales que almacenan errores del sistema",
                "Métodos que se ejecutan automáticamente al final del programa",
                "Comentarios que documentan posibles fallos en el código"
            ],
            respuestaCorrecta: 0,
            explicacion: "Las excepciones son eventos que interrumpen el flujo normal cuando ocurre un error, y deben gestionarse para evitar que el programa termine abruptamente"
        },
        {
            id: 16062,
            moduloId: 1606,
            pregunta: "¿Cuál es la función del bloque try-catch en Java?",
            opciones: [
                "Optimizar el rendimiento del programa",
                "Detectar y manejar excepciones: el código susceptible de fallar va en try y la gestión del error en catch",
                "Compilar el código más rápidamente",
                "Crear bucles condicionales avanzados"
            ],
            respuestaCorrecta: 1,
            explicacion: "try-catch es el mecanismo básico: el código que puede fallar va en try y la gestión del error en catch, permitiendo controlar el fallo"
        },
        {
            id: 16063,
            moduloId: 1606,
            pregunta: "¿Qué diferencia hay entre throw y throws en el manejo de excepciones?",
            opciones: [
                "Son exactamente lo mismo, solo cambia la ortografía",
                "throw lanza manualmente una excepción, mientras que throws declara en la firma del método qué excepciones puede lanzar",
                "throw se usa solo con excepciones personalizadas y throws con excepciones estándar",
                "throw es para errores de compilación y throws para errores de ejecución"
            ],
            respuestaCorrecta: 1,
            explicacion: "throw lanza excepciones manualmente, mientras que throws declara en la firma del método qué excepciones pueden producirse"
        },
        {
            id: 16064,
            moduloId: 1606,
            pregunta: "¿Cuándo se ejecuta el bloque finally en una estructura try-catch-finally?",
            opciones: [
                "Solo si ocurre una excepción",
                "Solo si NO ocurre una excepción",
                "Siempre, ocurra o no una excepción, y se usa típicamente para liberar recursos",
                "Únicamente cuando el programa termina completamente"
            ],
            respuestaCorrecta: 2,
            explicacion: "El bloque finally se ejecuta siempre, ocurra o no una excepción, y se usa típicamente para liberar recursos como archivos o conexiones"
        },
        {
            id: 16065,
            moduloId: 1606,
            pregunta: "¿Qué ventaja aportan las excepciones personalizadas frente a las excepciones genéricas?",
            opciones: [
                "Permiten ejecutar el código más rápido",
                "Describen condiciones específicas del dominio de negocio, aportando claridad y contexto al error",
                "Evitan que el programa se detenga en cualquier circunstancia",
                "Reducen el tamaño del archivo compilado"
            ],
            respuestaCorrecta: 1,
            explicacion: "Las excepciones personalizadas (como SaldoInsuficienteException) describen errores específicos del dominio, aportando claridad y contexto"
        },
        {
            id: 16066,
            moduloId: 1606,
            pregunta: "En el contexto de colecciones en Java, ¿cuál es la principal limitación de los arrays que las colecciones superan?",
            opciones: [
                "Los arrays no pueden almacenar objetos",
                "Los arrays tienen tamaño fijo y no pueden crecer dinámicamente",
                "Los arrays solo funcionan con tipos primitivos",
                "Los arrays no permiten acceso por índice"
            ],
            respuestaCorrecta: 1,
            explicacion: "Los arrays tienen tamaño fijo que debe definirse al crearlos, mientras las colecciones crecen dinámicamente según necesidad"
        },
        {
            id: 16067,
            moduloId: 1606,
            pregunta: "¿Qué característica define a las colecciones de tipo Set en Java?",
            opciones: [
                "Mantienen el orden de inserción siempre",
                "Permiten elementos duplicados para facilitar búsquedas",
                "No admiten elementos duplicados, garantizando unicidad",
                "Solo pueden almacenar números enteros"
            ],
            respuestaCorrecta: 2,
            explicacion: "Los Set no admiten elementos duplicados, garantizando que cada elemento sea único en la colección"
        },
        {
            id: 16068,
            moduloId: 1606,
            pregunta: "¿Para qué se utiliza principalmente la colección Map en Java?",
            opciones: [
                "Para mantener listas ordenadas automáticamente",
                "Para asociar claves únicas con valores (pares clave-valor), como un diccionario",
                "Para eliminar duplicados de arrays",
                "Para reemplazar los bucles for en el código"
            ],
            respuestaCorrecta: 1,
            explicacion: "Los Map almacenan pares clave-valor, permitiendo asociar claves únicas con sus valores correspondientes (como un diccionario)"
        },
        {
            id: 16069,
            moduloId: 1606,
            pregunta: "¿Cuándo es más recomendable usar ArrayList en lugar de LinkedList?",
            opciones: [
                "Cuando necesitas inserciones y eliminaciones frecuentes en medio de la lista",
                "Cuando el acceso por índice y los recorridos secuenciales son frecuentes",
                "Cuando trabajas exclusivamente con tipos primitivos",
                "Siempre, porque LinkedList está obsoleto"
            ],
            respuestaCorrecta: 1,
            explicacion: "ArrayList es más eficiente para acceso por índice y recorridos, mientras que LinkedList es mejor para inserciones/eliminaciones frecuentes"
        },
        {
            id: 16070,
            moduloId: 1606,
            pregunta: "¿Qué práctica profesional se recomienda al declarar colecciones en Java?",
            opciones: [
                "Usar siempre la implementación concreta: ArrayList<String> lista = new ArrayList<>()",
                "Declarar usando interfaces: List<String> lista = new ArrayList<>() para facilitar cambios de implementación",
                "Evitar inicializar la capacidad estimada para ahorrar memoria",
                "Usar arrays en lugar de colecciones para mejor rendimiento"
            ],
            respuestaCorrecta: 1,
            explicacion: "Declarar usando interfaces (List, Set, Map) en lugar de implementaciones concretas permite cambiar la implementación sin afectar el código cliente"
        }
    ]
};

export default moduloTema6;
