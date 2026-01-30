/**
 * Datos del módulo Tema 5 perteneciente a la asignatura Programación Segunda Promoción.
 * Contenido según Test Programación Unidad 5.
 */
export const moduloTema5 = {
    id: 1605,
    nombre: "Tema 5 (SP)",
    asignaturaId: 16,
    esExamen: false,
    descripcion: "Test Programación Unidad 5: POO, clase y objeto, constructor, private, herencia, super, polimorfismo, interfaz, @Override, SRP.",
    preguntas: [
        {
            id: 16051,
            moduloId: 1605,
            pregunta: "¿Cuál es la principal diferencia entre la Programación Orientada a Objetos y los modelos procedimentales tradicionales?",
            opciones: [
                "La POO no utiliza funciones, solo variables globales",
                "La POO modela el software como una colección de objetos que representan entidades del mundo real con estado y comportamiento",
                "La POO es más lenta pero más fácil de aprender",
                "La POO solo se puede usar en Java y no en otros lenguajes"
            ],
            respuestaCorrecta: 1,
            explicacion: "La POO modela el software como objetos con estado y comportamiento, diferente del enfoque procedimental tradicional"
        },
        {
            id: 16052,
            moduloId: 1605,
            pregunta: "¿Cuál es la relación correcta entre clase y objeto?",
            opciones: [
                "Ambos términos significan exactamente lo mismo",
                "La clase es una plantilla o molde, mientras que el objeto es una instancia específica creada a partir de esa clase",
                "Un objeto es una colección de clases",
                "La clase solo existe en documentación, el objeto es lo que realmente se ejecuta"
            ],
            respuestaCorrecta: 1,
            explicacion: "La clase es el molde o plantilla; el objeto es la instancia específica creada a partir de esa clase"
        },
        {
            id: 16053,
            moduloId: 1605,
            pregunta: "¿Cuál es la función principal de un constructor en una clase?",
            opciones: [
                "Destruir objetos cuando ya no se necesitan",
                "Inicializar el estado del objeto y garantizar que comienza en condiciones válidas",
                "Convertir un objeto a texto para imprimirlo",
                "Copiar los valores de un objeto a otro"
            ],
            respuestaCorrecta: 1,
            explicacion: "El constructor inicializa el estado del objeto y garantiza condiciones válidas desde su creación"
        },
        {
            id: 16054,
            moduloId: 1605,
            pregunta: "¿Por qué es importante declarar los atributos de una clase como private en lugar de public?",
            opciones: [
                "Porque ocupa menos memoria",
                "Porque el compilador lo obliga",
                "Para proteger el estado interno del objeto y permitir acceso controlado mediante getters y setters, evitando estados inválidos",
                "Para que el código sea más rápido de ejecutar"
            ],
            respuestaCorrecta: 2,
            explicacion: "Declarar atributos como private protege el estado interno y permite acceso controlado mediante getters/setters"
        },
        {
            id: 16055,
            moduloId: 1605,
            pregunta: "¿Cuál de las siguientes afirmaciones describe correctamente la herencia?",
            opciones: [
                "Una subclase no puede tener sus propios atributos, solo hereda los de la superclase",
                "Una clase puede heredar de múltiples clases simultáneamente en Java",
                "La herencia permite crear nuevas clases basadas en otras existentes, reutilizando código y especializando comportamientos",
                "La herencia solo es útil en aplicaciones grandes, no en proyectos pequeños"
            ],
            respuestaCorrecta: 2,
            explicacion: "La herencia permite reutilizar código de una clase base y especializarlo en subclases"
        },
        {
            id: 16056,
            moduloId: 1605,
            pregunta: "¿Cuál es el propósito de utilizar la palabra clave super en una subclase?",
            opciones: [
                "Acceder a atributos privados de la superclase directamente",
                "Crear una instancia de la superclase desde la subclase",
                "Invocar constructores y métodos de la superclase, reutilizando su lógica sin duplicar código",
                "Impedir que la subclase modifique el comportamiento de la superclase"
            ],
            respuestaCorrecta: 2,
            explicacion: "super permite invocar constructores y métodos de la superclase, reutilizando su lógica"
        },
        {
            id: 16057,
            moduloId: 1605,
            pregunta: "¿Qué significa el término \"polimorfismo\" en el contexto de la Programación Orientada a Objetos?",
            opciones: [
                "Tener muchas clases heredando de una sola superclase",
                "Una misma acción puede tener diferentes comportamientos según el tipo real del objeto que la ejecuta (binding dinámico)",
                "La capacidad de una clase de implementar múltiples interfaces",
                "La imposibilidad de crear objetos de una clase abstracta"
            ],
            respuestaCorrecta: 1,
            explicacion: "Polimorfismo significa que la misma acción puede tener distintos comportamientos según el tipo real del objeto (binding dinámico)"
        },
        {
            id: 16058,
            moduloId: 1605,
            pregunta: "¿Cuál es la principal diferencia entre una interfaz y una clase abstracta?",
            opciones: [
                "Las interfaces pueden tener atributos con valores, las clases abstractas no",
                "Una clase puede heredar de múltiples interfaces, pero solo de una clase abstracta. Además, las interfaces definen qué debe hacer una clase, las abstractas definen qué es y cómo comportarse",
                "Las clases abstractas son más modernas que las interfaces",
                "Las interfaces no pueden tener métodos con implementación en ningún caso"
            ],
            respuestaCorrecta: 1,
            explicacion: "Una clase implementa múltiples interfaces pero hereda de una sola clase abstracta. Interfaces definen el qué, abstractas el qué es"
        },
        {
            id: 16059,
            moduloId: 1605,
            pregunta: "¿Cuál es la importancia de usar la anotación @Override al redefinir un método en una subclase?",
            opciones: [
                "Es obligatorio usarla o el compilador no acepta el código",
                "Ayuda al compilador a detectar errores tipográficos en la firma del método y asegura que realmente existe en la clase padre",
                "Hace que el método sea más rápido",
                "Permite que el método tenga un nombre diferente en la subclase"
            ],
            respuestaCorrecta: 1,
            explicacion: "@Override ayuda al compilador a detectar errores en la firma del método y asegura su existencia en la clase padre"
        },
        {
            id: 16060,
            moduloId: 1605,
            pregunta: "¿Qué establece el principio SRP (Single Responsibility Principle) en el diseño de clases?",
            opciones: [
                "Cada clase debe tener exactamente un atributo",
                "Cada clase debe tener exactamente un método público",
                "Cada clase debe tener una única responsabilidad principal, evitando que acumule demasiadas funcionalidades",
                "Cada clase debe heredar de una única superclase"
            ],
            respuestaCorrecta: 2,
            explicacion: "SRP establece que cada clase debe tener una única responsabilidad principal para mejorar mantenibilidad"
        }
    ],
};

export default moduloTema5;
