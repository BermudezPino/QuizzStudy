const testTema4 = {
    id: 1805,
    nombre: "Test Tema 4 - Métodos y Modularización",
    esExamen: false,
    asignaturaId: 18,
    preguntas: [
        {
            id: 18041,
            pregunta: "En Java, cuando pasamos un objeto como parámetro a un método, ¿qué se copia realmente?",
            opciones: [
                "Se copia el objeto completo con todos sus atributos",
                "Se copia la referencia (dirección de memoria) al objeto",
                "Se crea un nuevo objeto idéntico al original",
                "Se pasa directamente el objeto sin copiar nada"
            ],
            respuestaCorrecta: 1,
            explicacion: "En Java todo se pasa por valor, pero cuando es un objeto, se copia la referencia (dirección de memoria), no el objeto completo."
        },
        {
            id: 18042,
            pregunta: "Si dentro de un método modificamos un atributo de un objeto recibido como parámetro, ¿qué ocurre con el objeto original fuera del método?",
            opciones: [
                "El objeto original no se ve afectado, mantiene su valor inicial",
                "El objeto original refleja los cambios realizados dentro del método",
                "Se crea una copia del objeto con los cambios",
                "El método genera un error de compilación"
            ],
            respuestaCorrecta: 1,
            explicacion: "Como se comparte la misma referencia, modificar atributos del objeto dentro del método afecta al objeto original."
        },
        {
            id: 18043,
            pregunta: "¿Cuál de las siguientes afirmaciones sobre la sobrecarga de métodos (overloading) es correcta?",
            opciones: [
                "La sobrecarga depende únicamente del tipo de retorno del método",
                "La sobrecarga permite tener varios métodos con el mismo nombre pero diferente número o tipo de parámetros",
                "La sobrecarga se resuelve en tiempo de ejecución (runtime)",
                "Solo se puede sobrecargar métodos, no constructores"
            ],
            respuestaCorrecta: 1,
            explicacion: "La sobrecarga permite reutilizar nombres de métodos con diferentes firmas (número, tipo u orden de parámetros)."
        },
        {
            id: 18044,
            pregunta: "¿Qué elemento NO forma parte de la firma de un método en Java?",
            opciones: [
                "El nombre del método",
                "El número de parámetros",
                "El tipo de retorno",
                "El tipo de los parámetros"
            ],
            respuestaCorrecta: 2,
            explicacion: "La firma de un método incluye nombre y parámetros, pero NO el tipo de retorno."
        },
        {
            id: 18045,
            pregunta: "En el contexto de modularización de programas, ¿qué significa el principio de 'alta cohesión'?",
            opciones: [
                "Que los módulos dependan mucho entre sí para funcionar correctamente",
                "Que cada módulo se encargue de una única responsabilidad o conjunto relacionado de funciones",
                "Que todos los módulos compartan las mismas variables globales",
                "Que el código esté escrito en un único archivo para facilitar el mantenimiento"
            ],
            respuestaCorrecta: 1,
            explicacion: "Alta cohesión significa que cada módulo tiene una responsabilidad clara y específica, no mezcla funcionalidades dispares."
        },
        {
            id: 18046,
            pregunta: "¿Cuál es la ventaja principal de dividir un programa grande en módulos?",
            opciones: [
                "Hace el programa más rápido en ejecución",
                "Reduce el tamaño del archivo ejecutable",
                "Facilita el mantenimiento, reutilización y permite el trabajo en equipo",
                "Elimina la necesidad de documentar el código"
            ],
            respuestaCorrecta: 2,
            explicacion: "La modularización mejora el mantenimiento, facilita la reutilización del código y permite que equipos trabajen en paralelo."
        },
        {
            id: 18047,
            pregunta: "¿Cuál de las siguientes características es correcta sobre los métodos estáticos (static)?",
            opciones: [
                "Necesitan una instancia de la clase para poder ser invocados",
                "Pueden acceder libremente a variables de instancia de la clase",
                "Se invocan directamente desde la clase sin crear objetos",
                "Se resuelven en tiempo de ejecución según el tipo de objeto"
            ],
            respuestaCorrecta: 2,
            explicacion: "Los métodos estáticos pertenecen a la clase, no a instancias, y se invocan sin crear objetos."
        },
        {
            id: 18048,
            pregunta: "¿Para qué se utilizan principalmente las clases helper (o utility classes)?",
            opciones: [
                "Para almacenar el estado principal de la aplicación",
                "Para agrupar métodos estáticos que realizan operaciones comunes y reutilizables",
                "Para reemplazar completamente la programación orientada a objetos",
                "Para gestionar la conexión con bases de datos exclusivamente"
            ],
            respuestaCorrecta: 1,
            explicacion: "Las clases helper agrupan métodos estáticos utilitarios (validaciones, conversiones, cálculos) que se reutilizan en todo el proyecto."
        },
        {
            id: 18049,
            pregunta: "En Javadoc, ¿qué etiqueta se utiliza para documentar los parámetros de entrada de un método?",
            opciones: [
                "@return",
                "@param",
                "@throws",
                "@input"
            ],
            respuestaCorrecta: 1,
            explicacion: "La etiqueta @param documenta cada parámetro del método, explicando su propósito."
        },
        {
            id: 18050,
            pregunta: "¿Cuál es el propósito principal de documentar código con Javadoc?",
            opciones: [
                "Hacer que el código ocupe más líneas",
                "Generar documentación HTML automática que explique el uso de clases y métodos",
                "Reemplazar los comentarios regulares del código",
                "Ocultar la implementación interna de los métodos"
            ],
            respuestaCorrecta: 1,
            explicacion: "Javadoc genera documentación HTML profesional directamente desde comentarios en el código fuente."
        }
    ]
};

export default testTema4;
