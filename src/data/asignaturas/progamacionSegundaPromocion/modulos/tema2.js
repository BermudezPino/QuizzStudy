/**
 * Datos del módulo Tema 2 perteneciente a la asignatura Programación Segunda Promoción.
 * Contenido según Test Programación Unidad 2.
 */
export const moduloTema2 = {
    id: 1602,
    nombre: "Tema 2 (SP)",
    asignaturaId: 16,
    esExamen: false,
    descripcion: "Test Programación Unidad 2: punto de entrada, tipificación, constantes, operadores, tipos, casting, Javadoc, convenciones.",
    preguntas: [
        {
            id: 16021,
            moduloId: 1602,
            pregunta: "¿Cuál es el método obligatorio que actúa como punto de entrada en toda aplicación Java?",
            opciones: [
                "public void inicio()",
                "public static void main(String[] args)",
                "public static main(String args)",
                "private static void init()"
            ],
            respuestaCorrecta: 1,
            explicacion: "public static void main(String[] args) es el punto de entrada obligatorio"
        },
        {
            id: 16022,
            moduloId: 1602,
            pregunta: "¿Qué significa que Java sea un lenguaje de tipificación fuerte?",
            opciones: [
                "Todos los programas deben ser compilados antes de ejecutarse",
                "Requiere declarar el tipo de cada variable antes de usarla",
                "Solo admite variables privadas en las clases",
                "Las variables no pueden cambiar de valor durante la ejecución"
            ],
            respuestaCorrecta: 1,
            explicacion: "Requiere declarar explícitamente el tipo de cada variable"
        },
        {
            id: 16023,
            moduloId: 1602,
            pregunta: "¿Cómo se declara correctamente una constante en Java?",
            opciones: [
                "var PI = 3.14159;",
                "static PI = 3.14159;",
                "final double PI = 3.14159;",
                "double final PI = 3.14159;"
            ],
            respuestaCorrecta: 2,
            explicacion: "Se utiliza la palabra clave final con mayúsculas por convención"
        },
        {
            id: 16024,
            moduloId: 1602,
            pregunta: "Si ejecutas el código int resultado = 17 % 5;, ¿qué valor almacenará la variable resultado?",
            opciones: ["3", "2", "17", "5"],
            respuestaCorrecta: 1,
            explicacion: "17 mod 5 = 2 (el operador % devuelve el residuo)"
        },
        {
            id: 16025,
            moduloId: 1602,
            pregunta: "¿Cuál de los siguientes operadores se utiliza para verificar si dos valores NO son iguales?",
            opciones: ["==", "=", "!=", "<>"],
            respuestaCorrecta: 2,
            explicacion: "El operador != verifica desigualdad"
        },
        {
            id: 16026,
            moduloId: 1602,
            pregunta: "¿Cuál de estos es un tipo de referencia en Java?",
            opciones: ["int", "double", "String", "boolean"],
            respuestaCorrecta: 2,
            explicacion: "String es un tipo de referencia; int, double y boolean son primitivos"
        },
        {
            id: 16027,
            moduloId: 1602,
            pregunta: "¿Cuál de estas conversiones de tipos Java realiza automáticamente sin necesidad de casting explícito?",
            opciones: [
                "double a int",
                "int a long",
                "String a int",
                "float a boolean"
            ],
            respuestaCorrecta: 1,
            explicacion: "Java convierte automáticamente int a long sin pérdida de datos"
        },
        {
            id: 16028,
            moduloId: 1602,
            pregunta: "Si tienes double valor = 3.99; y ejecutas int numero = (int) valor;, ¿qué valor contendrá numero?",
            opciones: ["3", "4", "3.99", "Genera un error de compilación"],
            respuestaCorrecta: 0,
            explicacion: "El casting explícito (int) trunca la parte decimal: 3.99 → 3"
        },
        {
            id: 16029,
            moduloId: 1602,
            pregunta: "¿Cuál de estos comentarios genera automáticamente documentación HTML mediante Javadoc?",
            opciones: [
                "// Este es un comentario de línea",
                "/* Este es un bloque de comentario",
                "/** Este es un comentario Javadoc */",
                "# Este es un comentario especial"
            ],
            respuestaCorrecta: 2,
            explicacion: "Los comentarios /** */ se procesan con Javadoc"
        },
        {
            id: 16030,
            moduloId: 1602,
            pregunta: "¿Cuál es la convención correcta para nombrar una variable que almacene el salario mensual de un empleado?",
            opciones: [
                "SalarioMensual",
                "salario_mensual",
                "SALARIO_MENSUAL",
                "salarioMensual"
            ],
            respuestaCorrecta: 3,
            explicacion: "camelCase es la convención para variables (salarioMensual)"
        }
    ],
};

export default moduloTema2;
