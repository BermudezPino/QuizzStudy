export const moduloTestRepaso3 = {
    id: 1809,
    nombre: "Test de Repaso 3",
    asignaturaId: 18,
    esExamen: false,
    descripcion: "Test de repaso sobre tipos de datos, bucles, ArrayList, clases, encapsulamiento, streams e interfaces en Java.",
    preguntas: [
        {
            id: 18080,
            moduloId: 1809,
            pregunta: "¿Qué tipo de dato es más adecuado para una variable que solo puede valer true o false en Java?",
            opciones: ["int", "String", "boolean", "char"],
            respuestaCorrecta: 2,
            explicacion: "boolean es el tipo de dato en Java que solo puede almacenar los valores true o false."
        },
        {
            id: 18081,
            moduloId: 1809,
            pregunta: "¿Qué resultado tiene la expresión 10 / 3 usando tipos int en Java?",
            opciones: ["3.33", "3", "4", "Error de compilación"],
            respuestaCorrecta: 1,
            explicacion: "La división entera en Java trunca el resultado decimal; 10 / 3 con enteros devuelve 3, descartando los decimales."
        },
        {
            id: 18082,
            moduloId: 1809,
            pregunta: "¿Qué hace la instrucción break dentro de un bucle for?",
            opciones: ["Salta a la siguiente iteración", "Termina el bucle por completo", "Reinicia el contador del bucle", "No tiene ningún efecto"],
            respuestaCorrecta: 1,
            explicacion: "break termina el bucle inmediatamente, saliendo de él sin completar las iteraciones restantes."
        },
        {
            id: 18083,
            moduloId: 1809,
            pregunta: "¿Cuántas veces se ejecuta el bloque del siguiente bucle? for (int i = 0; i <= 3; i+=2) { ... }",
            opciones: ["4", "3", "2", "Ninguna, ya que el incremento está mal expresado"],
            respuestaCorrecta: 2,
            explicacion: "El bucle comienza en i=0 (ejecuta), luego i=2 (ejecuta), y cuando i=4 ya no cumple i<=3, por lo que se ejecuta exactamente 2 veces."
        },
        {
            id: 18084,
            moduloId: 1809,
            pregunta: "¿Qué ventaja principal tiene un ArrayList frente a un array en Java?",
            opciones: ["Es más rápido en todos los casos", "Puede cambiar de tamaño dinámicamente", "No necesita importar ninguna clase", "Solo admite números enteros"],
            respuestaCorrecta: 1,
            explicacion: "ArrayList ajusta su tamaño automáticamente al añadir o eliminar elementos, a diferencia de los arrays cuyo tamaño es fijo."
        },
        {
            id: 18085,
            moduloId: 1809,
            pregunta: "¿Cuál de las siguientes instrucciones crea correctamente un objeto de la clase Estudiante en Java?",
            opciones: ["Estudiante e = Estudiante();", "Estudiante e = new Estudiante;", "new Estudiante e = Estudiante.new Estudiante();", "Estudiante e = new Estudiante();"],
            respuestaCorrecta: 3,
            explicacion: "La sintaxis correcta para instanciar un objeto en Java es: TipoClase nombreVariable = new TipoClase();"
        },
        {
            id: 18086,
            moduloId: 1809,
            pregunta: "¿Qué significa que un atributo de una clase sea private?",
            opciones: ["Solo se puede usar desde otras clases", "Solo se puede usar desde la propia clase", "Solo se puede usar desde paquetes externos", "Es igual que public"],
            respuestaCorrecta: 1,
            explicacion: "Un atributo private solo es accesible desde dentro de la propia clase, encapsulando los datos y protegiéndolos del exterior."
        },
        {
            id: 18087,
            moduloId: 1809,
            pregunta: "Que un método retorne algo, indica que",
            opciones: ["Solo puede tener retorno, sin posibilidad a tener ninguna línea de código dentro del método", "Puede tener la palabra reservada return como última línea del método", "Indica el valor que el método dará, pudiendo ser utilizado cuando el método sea llamado", "Puede tener la palabra reservada return en cualquier parte del método"],
            respuestaCorrecta: 2,
            explicacion: "Un método con tipo de retorno devuelve un valor al llamador que puede ser usado en expresiones, asignaciones u otras operaciones."
        },
        {
            id: 18088,
            moduloId: 1809,
            pregunta: "¿Qué hace este código con streams? numeros.stream().map(n -> n + 1).toList();",
            opciones: ["Elimina todos los elementos de la lista", "Devuelve una lista con cada número aumentado en 1", "Devuelve solo los números impares", "Ordena la lista de números"],
            respuestaCorrecta: 1,
            explicacion: "map() transforma cada elemento del stream aplicando la función lambda, devolviendo una nueva lista con los valores modificados."
        },
        {
            id: 18089,
            moduloId: 1809,
            pregunta: "¿Qué representa una interfaz en Java?",
            opciones: ["Un tipo especial de bucle", "Una plantilla que define métodos sin implementación", "Una clase que no puede tener atributos", "Una clase final y no heredable"],
            respuestaCorrecta: 1,
            explicacion: "Una interfaz define un contrato con métodos abstractos (sin implementación) que las clases que la implementen deben definir obligatoriamente."
        }
    ],
};

export default moduloTestRepaso3;
