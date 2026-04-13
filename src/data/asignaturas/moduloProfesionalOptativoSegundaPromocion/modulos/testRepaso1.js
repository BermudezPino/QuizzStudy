export const moduloTestRepaso1 = {
    id: 1804,
    nombre: "Test Repaso 1",
    esExamen: false,
    asignaturaId: 18,
    descripcion: "Test de repaso sobre operadores, bucles, arrays, POO y Streams en Java",
    preguntas: [
        {
            id: 18031,
            pregunta: "¿Qué valor tiene la expresión `true && false || true` en Java?",
            opciones: ["false", "Lanza excepción", "null", "true"],
            respuestaCorrecta: 3,
            explicacion: "`&&` tiene mayor precedencia que `||`, por lo que se evalúa como `(true && false) || true` = `false || true` = `true`."
        },
        {
            id: 18032,
            pregunta: "¿Cuál es el resultado de `int x = 10; x += 2 * 3; System.out.println(x);`?",
            opciones: ["16", "19", "6", "Error de compilación"],
            respuestaCorrecta: 0,
            explicacion: "`x += 2 * 3` equivale a `x = x + (2*3)` = `10 + 6` = 16. La multiplicación se evalúa antes que la suma."
        },
        {
            id: 18033,
            pregunta: "En un bucle `for(int i=0; i<5; i++)`, ¿cuántas veces se ejecuta el bloque?",
            opciones: ["4", "5", "6", "Infinito"],
            respuestaCorrecta: 1,
            explicacion: "El bucle itera con i = 0, 1, 2, 3, 4. Cuando i vale 5 la condición i<5 es falsa y se detiene. En total 5 iteraciones."
        },
        {
            id: 18034,
            pregunta: "¿Qué excepción lanza `int[] arr = new int[5]; arr[5] = 10;`?",
            opciones: ["ArrayIndexOutOfBoundsException", "NullPointerException", "ArithmeticException", "Ninguna"],
            respuestaCorrecta: 0,
            explicacion: "El array tiene índices válidos del 0 al 4. Acceder a arr[5] supera el límite y lanza ArrayIndexOutOfBoundsException en tiempo de ejecución."
        },
        {
            id: 18035,
            pregunta: "¿Cuál es el tipo de dato adecuado para almacenar la edad de una persona?",
            opciones: ["double", "String", "int", "boolean"],
            respuestaCorrecta: 2,
            explicacion: "La edad es un número entero sin decimales. `int` es el tipo primitivo adecuado. `double` sería innecesariamente preciso y `String` no permitiría operaciones numéricas."
        },
        {
            id: 18036,
            pregunta: "¿Qué hace `list.stream().filter(x -> x > 5).collect(Collectors.toList())`?",
            opciones: ["Elimina elementos > 5", "Ordena la lista", "Mantiene solo elementos > 5", "Duplica elementos > 5"],
            respuestaCorrecta: 2,
            explicacion: "`filter` conserva únicamente los elementos que cumplen el predicado. El resultado es una nueva lista con solo los valores mayores que 5."
        },
        {
            id: 18037,
            pregunta: "En `for(int i=0; i<10; i++) { if(i%3==0) continue; System.out.print(i); }`, ¿qué imprime?",
            opciones: ["0123456789", "124578", "369", "147"],
            respuestaCorrecta: 1,
            explicacion: "`continue` salta la iteración cuando i es múltiplo de 3 (0, 3, 6, 9). Se imprimen los valores restantes: 1, 2, 4, 5, 7, 8."
        },
        {
            id: 18038,
            pregunta: "En la switch expression de Java 14+: `switch(grado) { case A -> \"Excelente\"; case B -> \"Bien\"; default -> \"Aprobado\"; }`, ¿qué característica tiene?",
            opciones: ["Requiere break", "Solo funciona con números", "Necesita return", "Final de caso automático (no hay fall-through)"],
            respuestaCorrecta: 3,
            explicacion: "La sintaxis con `->` en switch expressions no necesita `break`. Cada rama es independiente y no hay caída al siguiente caso (fall-through automático)."
        },
        {
            id: 18039,
            pregunta: "¿Qué representa una clase en programación orientada a objetos en Java?",
            opciones: ["Método ejecutable independiente", "Contenedor de arrays dinámicos", "Función estática global", "Plantilla reutilizable para crear objetos"],
            respuestaCorrecta: 3,
            explicacion: "Una clase define la estructura y el comportamiento (atributos y métodos) que tendrán los objetos creados a partir de ella. Es una plantilla o molde."
        },
        {
            id: 18040,
            pregunta: "¿En qué escenario concreto se activa el proceso de unboxing automático en Java?",
            opciones: ["Wrapper se convierte en primitivo automáticamente", "Primitivo se pasa a método que espera wrapper", "String se parsea automáticamente a int", "Array primitivo se convierte implícitamente en List"],
            respuestaCorrecta: 0,
            explicacion: "El unboxing convierte un tipo wrapper (como `Integer`) a su primitivo equivalente (`int`) de forma automática cuando el contexto lo requiere. El proceso inverso es el autoboxing."
        }
    ]
};

export default moduloTestRepaso1;
