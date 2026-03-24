export const moduloTema6 = {
    id: 710,
    nombre: "Tema 6: Recursividad",
    esExamen: false,
    asignaturaId: 7,
    descripcion: "Recursividad: caso base, call stack, Fibonacci, memoización y comparativa con iteración.",
    preguntas: [
        {
            id: 7760,
            moduloId: 710,
            pregunta: "¿Qué es la recursividad en programación?",
            opciones: [
                "Un tipo de bucle que se repite un número fijo de veces",
                "Una técnica donde una función se llama a sí misma para resolver un problema dividiéndolo en versiones más simples",
                "Un método para ordenar arrays de forma automática",
                "Una estructura de datos similar a las listas enlazadas"
            ],
            respuestaCorrecta: 1,
            explicacion: "La recursividad consiste en que una función se llame a sí misma para resolver versiones más pequeñas del mismo problema."
        },
        {
            id: 7761,
            moduloId: 710,
            pregunta: "¿Cuáles son los dos elementos esenciales que toda función recursiva debe tener?",
            opciones: [
                "Bucle for y bucle while",
                "Entrada y salida",
                "Caso base y llamada recursiva",
                "Array y lista"
            ],
            respuestaCorrecta: 2,
            explicacion: "Toda función recursiva necesita un caso base (condición de parada) y una llamada recursiva que reduzca el problema."
        },
        {
            id: 7762,
            moduloId: 710,
            pregunta: "¿Qué ocurre si una función recursiva no tiene un caso base correctamente definido?",
            opciones: [
                "El programa se ejecuta más rápido",
                "Se produce un bucle infinito que provoca un StackOverflowError",
                "Java optimiza automáticamente la función",
                "La función devuelve siempre el valor 0"
            ],
            respuestaCorrecta: 1,
            explicacion: "Sin caso base, la función no tiene punto de parada y genera recursión infinita que agota la pila, provocando StackOverflowError."
        },
        {
            id: 7763,
            moduloId: 710,
            pregunta: "¿Qué estructura de memoria utiliza Java para gestionar las llamadas recursivas?",
            opciones: [
                "El heap (montículo)",
                "La pila de llamadas (call stack) con comportamiento LIFO",
                "Una cola FIFO",
                "El registro de variables globales"
            ],
            respuestaCorrecta: 1,
            explicacion: "Java utiliza la pila de llamadas (call stack) con comportamiento LIFO para almacenar los marcos de cada llamada recursiva."
        },
        {
            id: 7764,
            moduloId: 710,
            pregunta: "En el problema clásico de Fibonacci recursivo, ¿qué tipo de recursión se produce?",
            opciones: [
                "Recursión simple con una sola llamada",
                "Recursión doble, donde cada llamada genera dos llamadas más",
                "Recursión iterativa sin apilar llamadas",
                "Recursión de cola optimizada automáticamente"
            ],
            respuestaCorrecta: 1,
            explicacion: "Fibonacci genera recursión doble porque F(n) = F(n-1) + F(n-2), es decir, cada llamada produce dos nuevas llamadas."
        },
        {
            id: 7765,
            moduloId: 710,
            pregunta: "¿Cuál es el principal problema de eficiencia en la implementación recursiva básica de Fibonacci?",
            opciones: [
                "Consume demasiada memoria en el heap",
                "Recalcula los mismos valores repetidamente, generando complejidad exponencial",
                "No puede calcular valores mayores que 10",
                "Requiere usar tipos de datos especiales"
            ],
            respuestaCorrecta: 1,
            explicacion: "La versión básica recalcula los mismos valores miles de veces, generando complejidad exponencial O(2^n) muy ineficiente."
        },
        {
            id: 7766,
            moduloId: 710,
            pregunta: "¿Cuándo es más recomendable usar recursividad en lugar de iteración?",
            opciones: [
                "Siempre que sea posible, porque es más rápida",
                "Cuando el problema tiene una estructura jerárquica o auto-similar (árboles, grafos, carpetas anidadas)",
                "Solo cuando trabajamos con arrays de números enteros",
                "Nunca, la iteración es siempre mejor opción"
            ],
            respuestaCorrecta: 1,
            explicacion: "La recursión es más natural y legible para estructuras jerárquicas como árboles, grafos, directorios anidados o XML."
        },
        {
            id: 7767,
            moduloId: 710,
            pregunta: "¿Cuál es la principal ventaja de la iteración frente a la recursividad?",
            opciones: [
                "Permite expresar mejor los problemas matemáticos",
                "Es más eficiente en memoria porque no genera marcos en la pila de llamadas",
                "Funciona mejor con estructuras jerárquicas",
                "Permite resolver problemas que la recursión no puede"
            ],
            respuestaCorrecta: 1,
            explicacion: "La iteración no genera marcos en la pila, reutiliza el mismo bloque de código, siendo más eficiente en memoria."
        },
        {
            id: 7768,
            moduloId: 710,
            pregunta: "¿Qué técnica se puede aplicar para optimizar Fibonacci recursivo y evitar recalcular valores?",
            opciones: [
                "Usar bucles for en lugar de recursión",
                "Aplicar memoización (guardar resultados previos en un array o mapa)",
                "Aumentar el tamaño de la pila del sistema",
                "Usar solo tipos primitivos en lugar de objetos"
            ],
            respuestaCorrecta: 1,
            explicacion: "La memoización almacena resultados ya calculados, convirtiendo la complejidad de O(2^n) a O(n)."
        },
        {
            id: 7769,
            moduloId: 710,
            pregunta: "Según el temario, ¿qué enfoque es más natural para recorrer una estructura de directorios con carpetas anidadas?",
            opciones: [
                "Iteración con bucle while",
                "Recursividad, porque cada carpeta puede contener otras carpetas (estructura jerárquica)",
                "No se puede hacer ni con iteración ni con recursión",
                "Arrays bidimensionales"
            ],
            respuestaCorrecta: 1,
            explicacion: "Las estructuras de directorios son jerárquicas (carpetas dentro de carpetas), por lo que la recursión es el enfoque más natural."
        }
    ]
};

export default moduloTema6;
