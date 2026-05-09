export const moduloTestRepaso2 = {
    id: 1808,
    nombre: "Test de Repaso 2",
    asignaturaId: 18,
    esExamen: false,
    descripcion: "Test de repaso sobre tipos de datos, estructuras de control, arrays, objetos y streams en Java.",
    preguntas: [
        {
            id: 18070,
            moduloId: 1808,
            pregunta: "En Java, ¿qué tipo de dato es más adecuado para representar el salario de un trabajador con decimales?",
            opciones: ["int", "boolean", "double", "char"],
            respuestaCorrecta: 2,
            explicacion: "double es el tipo de dato en Java para números con decimales de doble precisión, ideal para representar valores monetarios."
        },
        {
            id: 18071,
            moduloId: 1808,
            pregunta: "¿Qué operador lógico en Java devuelve true solo cuando ambas expresiones son true?",
            opciones: ["||", "&&", "!", "=="],
            respuestaCorrecta: 1,
            explicacion: "El operador && (AND lógico) devuelve true únicamente si ambas expresiones son verdaderas. || devuelve true si al menos una lo es."
        },
        {
            id: 18072,
            moduloId: 1808,
            pregunta: "La palabra reservada static hace referencia a",
            opciones: ["La variable es pública y accesible directamente", "La variable es accesible mediante la instancia de la clase", "La variable es accesible sin necesidad de un objeto", "La variable es accesible directamente con el nombre de la clase tanto si es public como si es private"],
            respuestaCorrecta: 2,
            explicacion: "static indica que el miembro pertenece a la clase y no a una instancia concreta, por lo que se puede acceder sin crear un objeto."
        },
        {
            id: 18073,
            moduloId: 1808,
            pregunta: "¿Qué estructura de control usarías para repetir un bloque de código mientras se cumple una condición booleana?",
            opciones: ["if", "switch", "for", "while"],
            respuestaCorrecta: 3,
            explicacion: "El bucle while repite un bloque de código mientras la condición booleana evaluada sea verdadera."
        },
        {
            id: 18074,
            moduloId: 1808,
            pregunta: "Dado int[] numeros = {2, 4, 6, 8};, ¿qué valor tiene numeros[2]?",
            opciones: ["2", "4", "6", "8"],
            respuestaCorrecta: 2,
            explicacion: "Los arrays en Java usan índice base 0, por lo que numeros[2] accede al tercer elemento, que es 6."
        },
        {
            id: 18075,
            moduloId: 1808,
            pregunta: "¿Qué ocurre si intentas acceder a numeros[10] en un array de tamaño 5?",
            opciones: ["Devuelve 0 automáticamente", "Lanza una ArrayIndexOutOfBoundsException", "Lanza una NullPointerException", "Devuelve el último elemento"],
            respuestaCorrecta: 1,
            explicacion: "Acceder a un índice fuera del rango del array lanza una ArrayIndexOutOfBoundsException en tiempo de ejecución."
        },
        {
            id: 18076,
            moduloId: 1808,
            pregunta: "En Java, ¿qué palabra clave se usa para crear un objeto a partir de una clase?",
            opciones: ["class", "new", "this", "static"],
            respuestaCorrecta: 1,
            explicacion: "La palabra clave new instancia un objeto a partir de una clase, reservando memoria e invocando su constructor."
        },
        {
            id: 18077,
            moduloId: 1808,
            pregunta: "¿Cuál de las siguientes afirmaciones describe mejor un constructor en Java?",
            opciones: ["Es un método que siempre debe ser static", "Es un método especial que se ejecuta al crear un objeto", "Es una variable global de una clase", "Es un método que no puede recibir parámetros"],
            respuestaCorrecta: 1,
            explicacion: "El constructor es un método especial sin tipo de retorno que se invoca automáticamente al crear un objeto con new."
        },
        {
            id: 18078,
            moduloId: 1808,
            pregunta: "Dado ArrayList<String> nombres = new ArrayList<>();, ¿qué hace nombres.add(\"Ana\");?",
            opciones: ["Reemplaza todos los elementos por \"Ana\"", "Añade \"Ana\" en cualquier posición de la lista", "Añade \"Ana\" al final de la lista", "Ordena la lista alfabéticamente"],
            respuestaCorrecta: 2,
            explicacion: "El método add() de ArrayList inserta el elemento al final de la lista por defecto."
        },
        {
            id: 18079,
            moduloId: 1808,
            pregunta: "¿Qué hace el siguiente código con streams? nombres.stream().filter(n -> n.startsWith(\"A\")).toList();",
            opciones: ["Elimina todos los nombres que empiezan por \"A\"", "Devuelve una lista solo con los nombres que empiezan por \"A\"", "Convierte todos los nombres a mayúsculas", "Ordena la lista de nombres"],
            respuestaCorrecta: 1,
            explicacion: "filter() en un stream devuelve únicamente los elementos que cumplen el predicado indicado, en este caso los nombres que empiezan por 'A'."
        }
    ],
};

export default moduloTestRepaso2;
