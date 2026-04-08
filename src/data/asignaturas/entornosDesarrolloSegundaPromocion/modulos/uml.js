const moduloUml = {
    id: 2103,
    nombre: "UML - Conceptos Teóricos (Test Propio) (SP)",
    esExamen: false,
    asignaturaId: 21,
    descripcion: "Conceptos teóricos puros sobre UML: clases, objetos, relaciones y multiplicidad. Test de elaboración propia.",
    preguntas: [
        {
            id: 210301,
            moduloId: 2103,
            pregunta: "¿Qué es UML?",
            opciones: [
                "Un lenguaje de programación orientado a objetos",
                "Un lenguaje estándar para representar gráficamente sistemas de software",
                "Un framework para desarrollo web",
                "Un tipo de base de datos"
            ],
            respuestaCorrecta: 1,
            explicacion: "UML (Unified Modeling Language) es un lenguaje estándar de modelado que permite representar gráficamente la estructura y el comportamiento de sistemas de software."
        },
        {
            id: 210302,
            moduloId: 2103,
            pregunta: "¿En qué década fue creado UML?",
            opciones: [
                "Años 70",
                "Años 80",
                "Años 90",
                "Años 2000"
            ],
            respuestaCorrecta: 2,
            explicacion: "UML fue creado en los años 90, concretamente fue estandarizado por el OMG en 1997."
        },
        {
            id: 210303,
            moduloId: 2103,
            pregunta: "¿Cuál es el diagrama UML más utilizado para el diseño orientado a objetos?",
            opciones: [
                "Diagrama de secuencia",
                "Diagrama de estados",
                "Diagrama de clases",
                "Diagrama de actividades"
            ],
            respuestaCorrecta: 2,
            explicacion: "El diagrama de clases es el más utilizado en el diseño orientado a objetos, ya que representa la estructura estática del sistema: clases, atributos, métodos y relaciones."
        },
        {
            id: 210304,
            moduloId: 2103,
            pregunta: "¿Qué es una clase en programación orientada a objetos?",
            opciones: [
                "Una instancia concreta de un objeto",
                "Una plantilla que define atributos y comportamientos",
                "Una función que ejecuta acciones",
                "Una variable que almacena datos"
            ],
            respuestaCorrecta: 1,
            explicacion: "Una clase es una plantilla o molde que define los atributos (datos) y métodos (comportamientos) que tendrán los objetos creados a partir de ella."
        },
        {
            id: 210305,
            moduloId: 2103,
            pregunta: "¿Qué es un objeto en programación orientada a objetos?",
            opciones: [
                "Una plantilla genérica del sistema",
                "Un método con parámetros",
                "Una instancia concreta de una clase",
                "Una relación entre dos clases"
            ],
            respuestaCorrecta: 2,
            explicacion: "Un objeto es una instancia concreta de una clase. Por ejemplo, si 'Coche' es la clase, un objeto sería 'miCoche' con valores concretos para sus atributos."
        },
        {
            id: 210306,
            moduloId: 2103,
            pregunta: "¿Qué es un atributo en una clase?",
            opciones: [
                "Una acción que puede realizar la clase",
                "Una relación con otra clase",
                "Una variable que almacena información sobre la clase",
                "Un tipo de herencia"
            ],
            respuestaCorrecta: 2,
            explicacion: "Un atributo es una variable que pertenece a la clase y almacena información sobre sus objetos. Por ejemplo, 'color', 'marca' o 'velocidad' en una clase Coche."
        },
        {
            id: 210307,
            moduloId: 2103,
            pregunta: "¿Qué es un método en una clase?",
            opciones: [
                "Una variable que almacena información",
                "Una función que define las acciones que puede realizar la clase",
                "Una relación de herencia",
                "Un tipo de atributo especial"
            ],
            respuestaCorrecta: 1,
            explicacion: "Un método es una función definida dentro de una clase que determina las acciones u operaciones que pueden realizar sus objetos."
        },
        {
            id: 210308,
            moduloId: 2103,
            pregunta: "¿Qué indica la visibilidad pública de un atributo o método?",
            opciones: [
                "Solo es accesible desde la propia clase",
                "Solo es accesible desde clases hijas",
                "Es accesible desde cualquier clase",
                "No es accesible desde ninguna clase externa"
            ],
            respuestaCorrecta: 2,
            explicacion: "La visibilidad pública (+) indica que el atributo o método es accesible desde cualquier clase, sin restricciones."
        },
        {
            id: 210309,
            moduloId: 2103,
            pregunta: "¿Qué indica la visibilidad privada de un atributo o método?",
            opciones: [
                "Es accesible desde cualquier clase",
                "Solo es accesible desde clases hijas",
                "Solo es accesible desde la propia clase",
                "Es accesible desde el mismo paquete"
            ],
            respuestaCorrecta: 2,
            explicacion: "La visibilidad privada (-) restringe el acceso al atributo o método únicamente a la propia clase donde está definido."
        },
        {
            id: 210310,
            moduloId: 2103,
            pregunta: "¿Qué indica la visibilidad protegida de un atributo o método?",
            opciones: [
                "Es accesible desde cualquier clase",
                "Solo es accesible desde la propia clase",
                "Es accesible desde la propia clase y sus clases hijas",
                "No es accesible desde ninguna clase"
            ],
            respuestaCorrecta: 2,
            explicacion: "La visibilidad protegida (#) permite el acceso desde la propia clase y desde las clases que heredan de ella (clases hijas)."
        },
        {
            id: 210311,
            moduloId: 2103,
            pregunta: "¿Qué es la herencia en orientación a objetos?",
            opciones: [
                "Una relación donde una clase contiene a otra",
                "Una relación donde una clase hija reutiliza características de una clase padre",
                "Una relación general entre dos clases que interactúan",
                "Una relación fuerte donde una clase depende totalmente de otra"
            ],
            respuestaCorrecta: 1,
            explicacion: "La herencia permite que una clase hija reutilice y extienda los atributos y métodos de una clase padre, favoreciendo la reutilización de código."
        },
        {
            id: 210312,
            moduloId: 2103,
            pregunta: "¿Qué es la asociación en UML?",
            opciones: [
                "Una relación fuerte donde una clase depende totalmente de otra",
                "Una relación donde una clase hereda de otra",
                "Una relación general entre dos clases que interactúan",
                "Una relación donde una clase contiene a otra"
            ],
            respuestaCorrecta: 2,
            explicacion: "La asociación es el tipo de relación más general en UML: indica que dos clases se relacionan o interactúan entre sí, sin implicar contenencia ni herencia."
        },
        {
            id: 210313,
            moduloId: 2103,
            pregunta: "¿Qué es la agregación en UML?",
            opciones: [
                "Una relación donde la parte no puede existir sin el todo",
                "Una relación donde una clase hereda de otra",
                "Una relación débil donde una clase contiene a otra pero las partes pueden existir de forma independiente",
                "Una relación general entre dos clases"
            ],
            respuestaCorrecta: 2,
            explicacion: "La agregación representa una relación 'todo-parte' débil: las partes pueden existir de forma independiente aunque el todo desaparezca. Se representa con un rombo vacío."
        },
        {
            id: 210314,
            moduloId: 2103,
            pregunta: "¿Qué es la composición en UML?",
            opciones: [
                "Una relación débil donde las partes pueden existir sin el todo",
                "Una relación fuerte donde las partes no pueden existir sin el todo",
                "Una relación de herencia entre clases",
                "Una relación general entre dos clases"
            ],
            respuestaCorrecta: 1,
            explicacion: "La composición es una relación 'todo-parte' fuerte: las partes no pueden existir sin el todo. Si el todo se destruye, las partes también. Se representa con un rombo relleno."
        },
        {
            id: 210315,
            moduloId: 2103,
            pregunta: "¿Para qué sirve la multiplicidad en UML?",
            opciones: [
                "Para indicar la visibilidad de los atributos",
                "Para indicar cuántos objetos participan en una relación",
                "Para indicar el tipo de herencia",
                "Para indicar el orden de los métodos"
            ],
            respuestaCorrecta: 1,
            explicacion: "La multiplicidad especifica cuántos objetos de cada clase pueden participar en una relación. Por ejemplo, 1..*, 0..1, *, etc."
        },
        {
            id: 210316,
            moduloId: 2103,
            pregunta: "¿Qué significa la multiplicidad \"1\" en una relación UML?",
            opciones: [
                "Cero o muchos",
                "Opcional",
                "Uno o muchos",
                "Exactamente uno"
            ],
            respuestaCorrecta: 3,
            explicacion: "La multiplicidad '1' indica que exactamente un objeto de esa clase participa en la relación, ni más ni menos."
        },
        {
            id: 210317,
            moduloId: 2103,
            pregunta: "¿Qué significa la multiplicidad \"0..1\" en una relación UML?",
            opciones: [
                "Exactamente uno",
                "Uno o muchos",
                "Opcional, cero o uno",
                "Cero o muchos"
            ],
            respuestaCorrecta: 2,
            explicacion: "La multiplicidad '0..1' indica que puede haber cero o un objeto participando en la relación, es decir, es opcional."
        },
        {
            id: 210318,
            moduloId: 2103,
            pregunta: "¿Qué significa la multiplicidad \"1..*\" en una relación UML?",
            opciones: [
                "Exactamente uno",
                "Uno o muchos",
                "Opcional",
                "Cero o muchos"
            ],
            respuestaCorrecta: 1,
            explicacion: "La multiplicidad '1..*' indica que debe haber al menos un objeto participando en la relación, pero puede haber más."
        },
        {
            id: 210319,
            moduloId: 2103,
            pregunta: "¿Cuál es la principal ventaja de modelar antes de programar?",
            opciones: [
                "Genera el código automáticamente",
                "Elimina la necesidad de documentar",
                "Permite detectar errores de diseño antes de escribir código",
                "Sustituye las pruebas del software"
            ],
            respuestaCorrecta: 2,
            explicacion: "Modelar previamente permite identificar problemas de diseño, dependencias incorrectas o lógica mal planteada antes de invertir tiempo en escribir código."
        },
        {
            id: 210320,
            moduloId: 2103,
            pregunta: "¿Qué tipo de error evita principalmente el modelado previo?",
            opciones: [
                "Errores de sintaxis en el código",
                "Duplicar lógica o crear dependencias innecesarias",
                "Errores en la base de datos",
                "Fallos en la interfaz de usuario"
            ],
            respuestaCorrecta: 1,
            explicacion: "El modelado previo ayuda a detectar problemas estructurales como lógica duplicada, dependencias circulares o diseños que dificultarán el mantenimiento."
        },
        {
            id: 210321,
            moduloId: 2103,
            pregunta: "¿Cuál de estos NO es un objetivo de UML?",
            opciones: [
                "Representar sistemas complejos",
                "Ejecutar el código directamente",
                "Servir como lenguaje común entre desarrolladores",
                "Documentar la arquitectura"
            ],
            respuestaCorrecta: 1,
            explicacion: "UML es un lenguaje de modelado, no de programación. No ejecuta código. Sus objetivos son representar, comunicar y documentar, no ejecutar."
        },
        {
            id: 210322,
            moduloId: 2103,
            pregunta: "¿Cuál es la diferencia entre un atributo y un método?",
            opciones: [
                "El atributo ejecuta acciones y el método almacena datos",
                "No hay diferencia, son lo mismo",
                "El atributo almacena información y el método define acciones",
                "El atributo es público y el método siempre privado"
            ],
            respuestaCorrecta: 2,
            explicacion: "El atributo almacena datos o información del objeto, mientras que el método define las operaciones o acciones que el objeto puede realizar."
        },
        {
            id: 210323,
            moduloId: 2103,
            pregunta: "Si tenemos una clase Vehículo y una clase Coche, ¿qué tipo de relación existe entre ellas?",
            opciones: [
                "Composición",
                "Asociación",
                "Agregación",
                "Herencia"
            ],
            respuestaCorrecta: 3,
            explicacion: "Coche hereda de Vehículo porque 'Coche es un Vehículo'. La herencia representa relaciones del tipo 'es un/a'."
        },
        {
            id: 210324,
            moduloId: 2103,
            pregunta: "Si tenemos un Pedido que contiene líneas de pedido, y al eliminar el pedido las líneas también se eliminan, ¿qué tipo de relación es?",
            opciones: [
                "Herencia",
                "Asociación",
                "Agregación",
                "Composición"
            ],
            respuestaCorrecta: 3,
            explicacion: "Es composición porque las líneas de pedido no pueden existir sin el pedido. Es una relación 'todo-parte' fuerte."
        },
        {
            id: 210325,
            moduloId: 2103,
            pregunta: "Si tenemos un Equipo que tiene Jugadores, pero los jugadores pueden existir aunque el equipo desaparezca, ¿qué tipo de relación es?",
            opciones: [
                "Herencia",
                "Composición",
                "Agregación",
                "Asociación"
            ],
            respuestaCorrecta: 2,
            explicacion: "Es agregación porque los jugadores pueden existir de forma independiente aunque el equipo se disuelva. Es una relación 'todo-parte' débil."
        },
    ],
};

export default moduloUml;
