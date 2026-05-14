export const repaso14Mayo = {
    id: 1610,
    nombre: "Repaso 14/05",
    esExamen: true,
    asignaturaId: 16,
    descripcion: "Repaso de programación - 14 de mayo",
    preguntas: [
        {
            id: 16096,
            moduloId: 1610,
            pregunta: "Si una variable se declara dentro de un bloque if, ¿dónde puede usarse?",
            opciones: [
                "En toda la clase",
                "Solo dentro de ese bloque",
                "En cualquier método de la clase",
                "Solo si es public"
            ],
            respuestaCorrecta: 1,
            explicacion: "El ámbito de una variable local se limita al bloque {} donde fue declarada"
        },
        {
            id: 16097,
            moduloId: 1610,
            pregunta: "¿Qué indica el modificador final de una variable?",
            opciones: [
                "Que se puede duplicar",
                "Que su valor no puede reasignarse",
                "Que es visible desde cualquier paquete",
                "Que se elimina al terminar el método"
            ],
            respuestaCorrecta: 1,
            explicacion: "final hace que la variable sea una constante: una vez asignado el valor no puede cambiar"
        },
        {
            id: 16098,
            moduloId: 1610,
            pregunta: "¿Cuándo existe sobrecarga de métodos en Java?",
            opciones: [
                "Cuando dos métodos tienen el mismo nombre y distinta lista de parámetros",
                "Cuando un método hereda de otro",
                "Cuando un método es private",
                "Cuando un método devuelve void"
            ],
            respuestaCorrecta: 0,
            explicacion: "La sobrecarga (overloading) requiere el mismo nombre pero diferente firma (número o tipo de parámetros)"
        },
        {
            id: 16099,
            moduloId: 1610,
            pregunta: "Si un atributo está declarado como protected, ¿quién puede acceder a él directamente?",
            opciones: [
                "Solo la propia clase y las subclases",
                "Cualquier clase del proyecto sin restricciones",
                "Solo clases con static",
                "Nadie, siempre necesita getter"
            ],
            respuestaCorrecta: 0,
            explicacion: "protected permite el acceso desde la propia clase, las subclases y las clases del mismo paquete"
        },
        {
            id: 16100,
            moduloId: 1610,
            pregunta: "¿Qué mostraría este código si x=8? if (x>10) System.out.println(\"mayor\"); else System.out.println(\"menor o igual\");",
            opciones: [
                "mayor",
                "menor o igual",
                "error de compilación",
                "No muestra nada"
            ],
            respuestaCorrecta: 1,
            explicacion: "8 no es mayor que 10, por lo que la condición es falsa y se ejecuta el bloque else"
        },
        {
            id: 16101,
            moduloId: 1610,
            pregunta: "¿Para qué sirve continue dentro de un bucle?",
            opciones: [
                "Terminar completamente el programa",
                "Salir del bucle",
                "Saltar a la siguiente iteración",
                "Reiniciar la variable del contador"
            ],
            respuestaCorrecta: 2,
            explicacion: "continue interrumpe la iteración actual y pasa directamente a la siguiente sin salir del bucle"
        },
        {
            id: 16102,
            moduloId: 1610,
            pregunta: "En for(int i=1; i<=5; i+=2), ¿qué valores toma i?",
            opciones: [
                "1,2,3,4,5",
                "1,3,5",
                "0,2,4",
                "2,4,6"
            ],
            respuestaCorrecta: 1,
            explicacion: "Empieza en 1 y suma 2 en cada iteración: 1, 3, 5. En la siguiente i=7 que ya supera 5"
        },
        {
            id: 16103,
            moduloId: 1610,
            pregunta: "¿Qué ocurre si en un switch falta break al final de un case?",
            opciones: [
                "El programa se detiene",
                "Se produce error obligatorio",
                "La ejecución continúa en el siguiente case",
                "Se repite el mismo case"
            ],
            respuestaCorrecta: 2,
            explicacion: "Sin break se produce fall-through: la ejecución cae al siguiente case y lo ejecuta también"
        },
        {
            id: 16104,
            moduloId: 1610,
            pregunta: "¿Cuál es una forma correcta de crear un array de 3 enteros en Java?",
            opciones: [
                "int array= new int(3);",
                "int [] array = new int[3];",
                "array int [] = 3;",
                "int [3] array = new int [];"
            ],
            respuestaCorrecta: 1,
            explicacion: "La sintaxis correcta en Java es: tipo[] nombre = new tipo[tamaño];"
        },
        {
            id: 16105,
            moduloId: 1610,
            pregunta: "¿Qué devuelve lista.size() en un ArrayList?",
            opciones: [
                "La capacidad máxima",
                "El número de elementos almacenados",
                "El último índice válido",
                "El tipo de datos de la lista"
            ],
            respuestaCorrecta: 1,
            explicacion: "size() devuelve el número de elementos actualmente almacenados en la lista"
        },
        {
            id: 16106,
            moduloId: 1610,
            pregunta: "¿Qué método añade un elemento al final de un ArrayList?",
            opciones: [
                "put()",
                "insert()",
                "add()",
                "push()"
            ],
            respuestaCorrecta: 2,
            explicacion: "add() es el método estándar de ArrayList para añadir elementos al final de la lista"
        },
        {
            id: 16107,
            moduloId: 1610,
            pregunta: "En un HashMap<String, Integer>, ¿qué representa la clave?",
            opciones: [
                "El valor repetido",
                "El identificador usado para localizar un valor",
                "El índice numérico automático",
                "El tamaño del mapa"
            ],
            respuestaCorrecta: 1,
            explicacion: "La clave (key) es el identificador único que se utiliza para recuperar el valor asociado"
        },
        {
            id: 16108,
            moduloId: 1610,
            pregunta: "Si se inserta en un HashMap una clave que ya existía, ¿qué sucede normalmente?",
            opciones: [
                "Se crean dos entradas con la misma clave",
                "El mapa lanza error siempre",
                "El valor anterior se reemplaza",
                "La clave cambia de tipo"
            ],
            respuestaCorrecta: 2,
            explicacion: "HashMap no permite claves duplicadas; si la clave ya existe, el nuevo valor sobreescribe al anterior"
        },
        {
            id: 16109,
            moduloId: 1610,
            pregunta: "En JavaFX, ¿qué es un Stage?",
            opciones: [
                "Un botón interactivo",
                "La ventana principal o contenedor superior",
                "Un tipo de base de datos",
                "Un evento de teclado"
            ],
            respuestaCorrecta: 1,
            explicacion: "Stage representa la ventana principal de la aplicación JavaFX; es el contenedor de nivel superior"
        },
        {
            id: 16110,
            moduloId: 1610,
            pregunta: "En JavaFX, ¿cuál de estos elementos es un control final de interfaz de usuario?",
            opciones: [
                "Button",
                "BorderPane",
                "Scanner",
                "Thread"
            ],
            respuestaCorrecta: 0,
            explicacion: "Button es un control de interfaz de usuario en JavaFX; BorderPane es un layout, Scanner y Thread no son componentes JavaFX"
        }
    ]
};

export default repaso14Mayo;
