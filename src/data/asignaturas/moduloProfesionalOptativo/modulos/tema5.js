export const moduloTema5 = {
    id: 709,
    nombre: "Tema 5: Arrays, colecciones, iteración y HashMap",
    esExamen: false,
    asignaturaId: 7,
    descripcion: "Comparativa arrays y colecciones, foreach vs Iterator, clase Collections, hashing y HashMap.",
    preguntas: [
        {
            id: 7751,
            moduloId: 709,
            pregunta: "Cuando comparamos arrays y colecciones en Java, ¿cuál es la principal diferencia estructural entre ambos?",
            opciones: [
                "Los arrays son dinámicos y las colecciones tienen tamaño fijo",
                "Los arrays tienen tamaño fijo y ocupan posiciones contiguas en memoria, mientras que las colecciones son dinámicas y pueden crecer o reducirse",
                "Ambos tienen exactamente el mismo rendimiento y características",
                "Las colecciones solo pueden almacenar tipos primitivos"
            ],
            respuestaCorrecta: 1,
            explicacion: "Los arrays tienen tamaño fijo y memoria contigua con acceso O(1), mientras las colecciones son dinámicas y pueden crecer según necesidad."
        },
        {
            id: 7752,
            moduloId: 709,
            pregunta: "¿En qué escenario es más recomendable usar arrays en lugar de colecciones según el temario?",
            opciones: [
                "Cuando el número de elementos es desconocido y cambia frecuentemente",
                "Cuando el tamaño de los datos es conocido, estable y la prioridad es el máximo rendimiento",
                "Cuando necesitamos métodos integrados como add, remove o sort",
                "Siempre que trabajemos con objetos en lugar de tipos primitivos"
            ],
            respuestaCorrecta: 1,
            explicacion: "Los arrays son ideales cuando el tamaño es conocido y estable, y se prioriza el rendimiento máximo en operaciones intensivas."
        },
        {
            id: 7753,
            moduloId: 709,
            pregunta: "Respecto al bucle foreach y al Iterator, ¿qué diferencia clave los distingue en cuanto a modificación de colecciones?",
            opciones: [
                "Foreach permite eliminar elementos de forma segura durante la iteración, Iterator no",
                "Iterator permite eliminar elementos con remove() de forma segura, mientras que foreach genera ConcurrentModificationException si intentas modificar",
                "Ambos permiten exactamente las mismas operaciones de modificación",
                "Ninguno de los dos puede recorrer colecciones, solo arrays"
            ],
            respuestaCorrecta: 1,
            explicacion: "Iterator permite eliminar elementos de forma segura con remove(), mientras que modificar dentro de foreach provoca ConcurrentModificationException."
        },
        {
            id: 7754,
            moduloId: 709,
            pregunta: "¿Cuál de estas afirmaciones sobre el bucle foreach es correcta?",
            opciones: [
                "Requiere gestionar manualmente hasNext() y next()",
                "Ofrece mayor control que Iterator para operaciones complejas",
                "Simplifica la sintaxis para recorrer colecciones pero internamente usa un Iterator",
                "Es más lento que Iterator porque no optimiza el recorrido"
            ],
            respuestaCorrecta: 2,
            explicacion: "Foreach simplifica la sintaxis y mejora la legibilidad, pero internamente utiliza un Iterator automáticamente."
        },
        {
            id: 7755,
            moduloId: 709,
            pregunta: "¿Para qué sirve la clase java.util.Collections en el framework de colecciones?",
            opciones: [
                "Para crear nuevas instancias de ArrayList y HashMap",
                "Para agrupar métodos estáticos que operan sobre colecciones, como sort, reverse o binarySearch",
                "Para reemplazar completamente el uso de arrays en Java",
                "Para gestionar la memoria automáticamente sin garbage collector"
            ],
            respuestaCorrecta: 1,
            explicacion: "Collections es una clase con métodos estáticos utilitarios (sort, binarySearch, reverse, shuffle, etc.) que operan sobre colecciones."
        },
        {
            id: 7756,
            moduloId: 709,
            pregunta: "Sobre el método Collections.binarySearch, ¿qué condición es imprescindible para que funcione correctamente?",
            opciones: [
                "La lista debe tener menos de 100 elementos",
                "La lista debe estar previamente ordenada según el mismo criterio de comparación",
                "Solo funciona con listas de tipo LinkedList",
                "Los elementos deben ser todos números enteros"
            ],
            respuestaCorrecta: 1,
            explicacion: "binarySearch requiere que la lista esté ordenada previamente; de lo contrario, el resultado será impredecible."
        },
        {
            id: 7757,
            moduloId: 709,
            pregunta: "¿Qué es el hashing en el contexto de estructuras de datos como HashMap?",
            opciones: [
                "Un método para ordenar alfabéticamente las claves",
                "Una técnica que convierte una clave en un índice numérico mediante una función hash, permitiendo acceso en tiempo promedio O(1)",
                "Un algoritmo para eliminar duplicados en listas",
                "Una forma de convertir colecciones en arrays"
            ],
            respuestaCorrecta: 1,
            explicacion: "El hashing convierte claves en índices mediante una función hash, permitiendo acceso casi instantáneo (promedio O(1)) a los valores."
        },
        {
            id: 7758,
            moduloId: 709,
            pregunta: "¿Qué ocurre cuando dos claves diferentes generan el mismo hashcode en un HashMap?",
            opciones: [
                "El programa lanza una excepción y termina",
                "Solo se almacena la primera clave, la segunda se descarta",
                "Se produce una colisión que Java gestiona mediante buckets (listas enlazadas o árboles balanceados)",
                "Automáticamente se reorganiza toda la tabla y se recalculan todos los hash"
            ],
            respuestaCorrecta: 2,
            explicacion: "Las colisiones se gestionan mediante buckets que almacenan múltiples entradas usando listas enlazadas o árboles balanceados internamente."
        },
        {
            id: 7759,
            moduloId: 709,
            pregunta: "¿Por qué es importante sobrescribir correctamente los métodos equals() y hashCode() cuando usamos objetos personalizados como claves en un HashMap?",
            opciones: [
                "Porque si no, el compilador no permite crear el HashMap",
                "Porque HashMap usa hashCode() para ubicar la clave en un bucket y equals() para distinguir entre claves que comparten el mismo hash",
                "Porque ambos métodos solo afectan al rendimiento, no a la corrección del programa",
                "Porque equals() se usa para ordenar las claves alfabéticamente"
            ],
            respuestaCorrecta: 1,
            explicacion: "HashMap usa hashCode() para localizar el bucket correcto y equals() para distinguir entre claves que caen en el mismo bucket."
        }
    ]
};

export default moduloTema5;
