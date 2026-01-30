/**
 * Datos del módulo Tema 4 perteneciente a la asignatura Programación Segunda Promoción.
 * Contenido según Test Programación Unidad 4.
 */
export const moduloTema4 = {
    id: 1604,
    nombre: "Tema 4 (SP)",
    asignaturaId: 16,
    esExamen: false,
    descripcion: "Test Programación Unidad 4: arrays, índices, String, equals, trim, StringBuilder.",
    preguntas: [
        {
            id: 16041,
            moduloId: 1604,
            pregunta: "¿Cuál de las siguientes afirmaciones describe mejor un array unidimensional en Java?",
            opciones: [
                "Una colección de elementos de distintos tipos almacenados en posiciones aleatorias",
                "Una secuencia ordenada y contigua de memoria con elementos del mismo tipo",
                "Una estructura dinámica que cambia de tamaño automáticamente",
                "Un conjunto de variables sin índice asociado"
            ],
            respuestaCorrecta: 1,
            explicacion: "Un array unidimensional es una secuencia contigua de elementos homogéneos en memoria"
        },
        {
            id: 16042,
            moduloId: 1604,
            pregunta: "Si declaramos int[] numeros = new int[5];, ¿cuál es el índice del último elemento?",
            opciones: ["4", "5", "6", "Depende de los valores almacenados"],
            respuestaCorrecta: 0,
            explicacion: "Con tamaño 5, los índices van de 0 a 4; el último índice es 4"
        },
        {
            id: 16043,
            moduloId: 1604,
            pregunta: "¿Qué ocurre si intentamos acceder a numeros[5] en el array del ejercicio anterior?",
            opciones: [
                "Devuelve siempre 0",
                "El compilador muestra un error y no deja ejecutar el programa",
                "Se produce una excepción en tiempo de ejecución (ArrayIndexOutOfBoundsException)",
                "El acceso se redirige automáticamente a la última posición válida"
            ],
            respuestaCorrecta: 2,
            explicacion: "Acceder fuera de rango lanza ArrayIndexOutOfBoundsException en tiempo de ejecución"
        },
        {
            id: 16044,
            moduloId: 1604,
            pregunta: "Dado el array int[][] matriz = new int[3][4];, ¿qué representa la expresión matriz[1][2]?",
            opciones: [
                "La tercera fila y la segunda columna",
                "La segunda fila y la tercera columna",
                "La primera fila y la tercera columna",
                "La segunda fila completa"
            ],
            respuestaCorrecta: 1,
            explicacion: "El primer índice es la fila (1 → segunda), el segundo es la columna (2 → tercera)"
        },
        {
            id: 16045,
            moduloId: 1604,
            pregunta: "¿Cuál de las siguientes sentencias obtiene correctamente la longitud de un array unidimensional llamado datos?",
            opciones: ["datos.length()", "length(datos)", "datos.length", "size(datos)"],
            respuestaCorrecta: 2,
            explicacion: "En Java la longitud del array se obtiene con la propiedad length, sin paréntesis"
        },
        {
            id: 16046,
            moduloId: 1604,
            pregunta: "¿Cuál es la forma correcta de declarar e inicializar un array de enteros con los valores 1, 2, 3, 4 y 5?",
            opciones: [
                "int[] numeros = (1, 2, 3, 4, 5);",
                "int[] numeros = new int(1, 2, 3, 4, 5);",
                "int[] numeros = {1, 2, 3, 4, 5};",
                "int numeros[] = [1, 2, 3, 4, 5];"
            ],
            respuestaCorrecta: 2,
            explicacion: "La sintaxis {1, 2, 3, 4, 5} es la forma correcta de inicialización literal"
        },
        {
            id: 16047,
            moduloId: 1604,
            pregunta: "¿Qué significa que los objetos de tipo String en Java sean inmutables?",
            opciones: [
                "Que no se pueden comparar entre sí",
                "Que su contenido no puede cambiar una vez creado; cualquier \"cambio\" genera un nuevo objeto",
                "Que solo se pueden crear dentro del método main",
                "Que ocupan siempre la misma cantidad de memoria"
            ],
            respuestaCorrecta: 1,
            explicacion: "Cualquier operación que \"modifica\" un String crea un nuevo objeto en memoria"
        },
        {
            id: 16048,
            moduloId: 1604,
            pregunta: "Dadas las sentencias: String a = \"Hola\"; String b = new String(\"Hola\"); ¿Qué instrucción compara correctamente el contenido de ambas cadenas?",
            opciones: ["a == b", "a.equals(b)", "a = b", "compare(a, b)"],
            respuestaCorrecta: 1,
            explicacion: "equals() compara el contenido de las cadenas; == compara referencias"
        },
        {
            id: 16049,
            moduloId: 1604,
            pregunta: "¿Qué método utilizarías para eliminar espacios en blanco al principio y al final de una cadena llamada texto?",
            opciones: [
                "texto.clean()",
                "texto.trim()",
                "texto.stripSpaces()",
                "texto.remove(\" \")"
            ],
            respuestaCorrecta: 1,
            explicacion: "trim() elimina espacios en blanco al inicio y al final de la cadena"
        },
        {
            id: 16050,
            moduloId: 1604,
            pregunta: "¿Por qué se recomienda usar StringBuilder cuando se realizan muchas concatenaciones de texto dentro de un bucle?",
            opciones: [
                "Porque convierte automáticamente todas las cadenas a mayúsculas",
                "Porque evita la inmutabilidad de String y mejora el rendimiento en concatenaciones repetidas",
                "Porque obliga a que el código sea thread-safe en todos los casos",
                "Porque solo así se puede imprimir por consola"
            ],
            respuestaCorrecta: 1,
            explicacion: "StringBuilder permite modificar el texto sin crear nuevos objetos, mejorando el rendimiento"
        }
    ],
};

export default moduloTema4;
