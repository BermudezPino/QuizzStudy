/**
 * Datos del módulo Simulacro Examen Final perteneciente a la asignatura Programación Segunda Promoción.
 * Recopila preguntas representativas de los 7 temas del examen:
 * tipos de variables, estructuras de control, almacenamiento, POO, JavaFX, JDBC y flujos I/O.
 */
export const moduloExamen = {
    id: 1609,
    nombre: "Simulacro Examen Final",
    esExamen: true,
    asignaturaId: 16,
    nota: "Simulacro de examen con preguntas de los temas: tipos de variables, estructuras de control, almacenamiento, POO, JavaFX, JDBC y flujos I/O.",
    descripcion: "Simulacro de examen con preguntas de los temas: tipos de variables, estructuras de control, almacenamiento, POO, JavaFX, JDBC y flujos I/O.",
    preguntas: [
        // ── TEMA 1: Tipos de variables ────────────────────────────────────────────
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

        // ── TEMA 2: Estructuras de control ───────────────────────────────────────
        {
            id: 16031,
            moduloId: 1603,
            pregunta: "¿Cuál es la función principal de una estructura if en Java?",
            opciones: [
                "Repetir un bloque de código indefinidamente",
                "Evaluar una expresión booleana y ejecutar código solo si es verdadera",
                "Saltar a una etiqueta específica en el programa",
                "Crear una nueva variable con un valor condicional"
            ],
            respuestaCorrecta: 1,
            explicacion: "if evalúa una condición booleana y ejecuta código solo si es verdadera"
        },
        {
            id: 16034,
            moduloId: 1603,
            pregunta: "¿En qué situación es más recomendable usar switch en lugar de if-else?",
            opciones: [
                "Cuando necesitas comparar una variable contra múltiples valores específicos y discretos",
                "Cuando tienes solo dos opciones",
                "Cuando trabajas con datos de texto muy largos",
                "Cuando necesitas rendimiento máximo sin importar legibilidad"
            ],
            respuestaCorrecta: 0,
            explicacion: "switch es óptimo para comparar contra múltiples valores específicos y discretos"
        },
        {
            id: 16036,
            moduloId: 1603,
            pregunta: "Si ejecutas el siguiente código: int i = 5; while(i < 3) { System.out.println(i); i++; } ¿Cuántas veces se ejecutará el bloque de código?",
            opciones: ["0 veces", "2 veces", "5 veces", "Infinitamente"],
            respuestaCorrecta: 0,
            explicacion: "Como i=5 no es menor que 3, la condición es falsa desde el inicio, nunca se ejecuta"
        },
        {
            id: 16037,
            moduloId: 1603,
            pregunta: "¿Cuál es la característica principal que distingue do-while de while?",
            opciones: [
                "do-while es más rápido",
                "do-while garantiza que el código se ejecute al menos una vez",
                "do-while no necesita llaves {} para envolver el código",
                "do-while no puede tener incrementos"
            ],
            respuestaCorrecta: 1,
            explicacion: "do-while garantiza al menos una ejecución antes de evaluar la condición"
        },
        {
            id: 16038,
            moduloId: 1603,
            pregunta: "¿Cuál es el contexto ideal para usar un bucle for en lugar de while?",
            opciones: [
                "Cuando no sabes cuántas iteraciones necesitas",
                "Cuando conoces el número exacto de iteraciones o trabajas con rangos específicos",
                "Cuando necesitas leer un archivo línea por línea",
                "Cuando quieres garantizar al menos una ejecución"
            ],
            respuestaCorrecta: 1,
            explicacion: "for es ideal cuando conoces el número exacto de iteraciones o trabajas con rangos"
        },

        // ── TEMA 3: Estructuras de almacenamiento ────────────────────────────────
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
            id: 16066,
            moduloId: 1606,
            pregunta: "En el contexto de colecciones en Java, ¿cuál es la principal limitación de los arrays que las colecciones superan?",
            opciones: [
                "Los arrays no pueden almacenar objetos",
                "Los arrays tienen tamaño fijo y no pueden crecer dinámicamente",
                "Los arrays solo funcionan con tipos primitivos",
                "Los arrays no permiten acceso por índice"
            ],
            respuestaCorrecta: 1,
            explicacion: "Los arrays tienen tamaño fijo que debe definirse al crearlos, mientras las colecciones crecen dinámicamente según necesidad"
        },
        {
            id: 16068,
            moduloId: 1606,
            pregunta: "¿Para qué se utiliza principalmente la colección Map en Java?",
            opciones: [
                "Para mantener listas ordenadas automáticamente",
                "Para asociar claves únicas con valores (pares clave-valor), como un diccionario",
                "Para eliminar duplicados de arrays",
                "Para reemplazar los bucles for en el código"
            ],
            respuestaCorrecta: 1,
            explicacion: "Los Map almacenan pares clave-valor, permitiendo asociar claves únicas con sus valores correspondientes (como un diccionario)"
        },
        {
            id: 16069,
            moduloId: 1606,
            pregunta: "¿Cuándo es más recomendable usar ArrayList en lugar de LinkedList?",
            opciones: [
                "Cuando necesitas inserciones y eliminaciones frecuentes en medio de la lista",
                "Cuando el acceso por índice y los recorridos secuenciales son frecuentes",
                "Cuando trabajas exclusivamente con tipos primitivos",
                "Siempre, porque LinkedList está obsoleto"
            ],
            respuestaCorrecta: 1,
            explicacion: "ArrayList es más eficiente para acceso por índice y recorridos, mientras que LinkedList es mejor para inserciones/eliminaciones frecuentes"
        },

        // ── TEMA 4: POO ──────────────────────────────────────────────────────────
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

        // ── TEMA 5: JavaFX ───────────────────────────────────────────────────────
        {
            id: 16082,
            moduloId: 1608,
            pregunta: "En la arquitectura de JavaFX, ¿qué componente representa la ventana principal de la aplicación?",
            opciones: [
                "Scene",
                "Node",
                "Stage",
                "Layout"
            ],
            respuestaCorrecta: 2,
            explicacion: "Stage representa la ventana principal de la aplicación"
        },
        {
            id: 16083,
            moduloId: 1608,
            pregunta: "¿Qué elemento de JavaFX actúa como el contenedor donde se colocan los componentes visuales?",
            opciones: [
                "Scene",
                "Stage",
                "Event",
                "Handler"
            ],
            respuestaCorrecta: 0,
            explicacion: "Scene funciona como el lienzo donde se colocan los elementos de la interfaz"
        },
        {
            id: 16084,
            moduloId: 1608,
            pregunta: "¿Cómo se denominan los elementos visuales de una interfaz en JavaFX, como Button o Label?",
            opciones: [
                "Frames",
                "Nodes",
                "Streams",
                "Panels"
            ],
            respuestaCorrecta: 1,
            explicacion: "Los componentes visuales en JavaFX se denominan Nodes"
        },
        {
            id: 16085,
            moduloId: 1608,
            pregunta: "¿Cuál es la función principal de un event handler en una interfaz gráfica?",
            opciones: [
                "Crear componentes visuales",
                "Definir la apariencia de la interfaz",
                "Ejecutar código cuando ocurre una acción del usuario",
                "Compilar la aplicación"
            ],
            respuestaCorrecta: 2,
            explicacion: "Un event handler define qué ocurre cuando el usuario realiza una acción"
        },
        {
            id: 16088,
            moduloId: 1608,
            pregunta: "¿Qué método se utiliza en JavaFX para registrar un listener de eventos?",
            opciones: [
                "addEventListener()",
                "setOnAction()",
                "registerEvent()",
                "onClickHandler()"
            ],
            respuestaCorrecta: 1,
            explicacion: "setOnAction() registra eventos en JavaFX"
        },

        // ── TEMA 6: JDBC ─────────────────────────────────────────────────────────
        {
            id: 16091,
            moduloId: 1609,
            pregunta: "¿Qué es JDBC y para qué se utiliza en Java?",
            opciones: [
                "Un framework para construir interfaces gráficas en Java",
                "Una API estándar de Java que permite conectar y ejecutar operaciones sobre bases de datos relacionales",
                "Un protocolo de red para comunicar aplicaciones Java entre sí",
                "Una librería para serializar objetos Java a formato JSON"
            ],
            respuestaCorrecta: 1,
            explicacion: "JDBC (Java Database Connectivity) es la API estándar de Java para conectarse a bases de datos relacionales y ejecutar consultas SQL"
        },
        {
            id: 16092,
            moduloId: 1609,
            pregunta: "¿Cuál es la diferencia principal entre Statement, PreparedStatement y CallableStatement en JDBC?",
            opciones: [
                "Statement ejecuta SQL estático, PreparedStatement ejecuta SQL precompilado con parámetros, y CallableStatement invoca procedimientos almacenados",
                "Statement es para SELECT, PreparedStatement para INSERT y CallableStatement para DELETE",
                "No hay diferencia funcional; solo cambia el rendimiento",
                "Statement y PreparedStatement son equivalentes; CallableStatement está obsoleto"
            ],
            respuestaCorrecta: 0,
            explicacion: "Statement ejecuta SQL directo, PreparedStatement precompila la consulta permitiendo parámetros, y CallableStatement invoca procedimientos almacenados en la BD"
        },
        {
            id: 16093,
            moduloId: 1609,
            pregunta: "¿Cuál es la ventaja principal de usar PreparedStatement frente a Statement en JDBC?",
            opciones: [
                "Permite abrir más conexiones simultáneas a la base de datos",
                "Evita ataques de inyección SQL y mejora el rendimiento al precompilar la consulta",
                "Solo funciona con bases de datos Oracle",
                "Genera automáticamente el esquema de la base de datos"
            ],
            respuestaCorrecta: 1,
            explicacion: "PreparedStatement separa el código SQL de los datos, impidiendo inyección SQL, y la precompilación mejora el rendimiento en ejecuciones repetidas"
        },
        {
            id: 16094,
            moduloId: 1609,
            pregunta: "¿Qué es un ResultSet en JDBC y cómo se recorre?",
            opciones: [
                "Es la conexión activa con la base de datos; se cierra con close()",
                "Es un objeto que representa el resultado de una consulta SELECT; se itera llamando a next() y se leen los valores con métodos como getString() o getInt()",
                "Es una lista de errores devueltos por la base de datos tras ejecutar una consulta",
                "Es un tipo especial de PreparedStatement para consultas de solo lectura"
            ],
            respuestaCorrecta: 1,
            explicacion: "ResultSet contiene las filas devueltas por una consulta SELECT; next() avanza fila a fila y getXxx(columna) recupera el valor de cada columna"
        },
        {
            id: 16095,
            moduloId: 1609,
            pregunta: "¿Cuál es el orden correcto de los pasos para conectar a una base de datos y ejecutar una consulta con JDBC?",
            opciones: [
                "executeQuery() → createStatement() → DriverManager.getConnection() → next()",
                "DriverManager.getConnection() → createStatement() → executeQuery() → next() sobre el ResultSet",
                "PreparedStatement → ResultSet → Connection → DriverManager",
                "Class.forName() → executeQuery() → getConnection() → createStatement()"
            ],
            respuestaCorrecta: 1,
            explicacion: "El flujo JDBC es: obtener Connection con DriverManager.getConnection(), crear Statement/PreparedStatement, ejecutar la consulta con executeQuery() y recorrer el ResultSet con next()"
        },

        // ── TEMA 7: Flujos (I/O) ─────────────────────────────────────────────────
        {
            id: 16071,
            moduloId: 1607,
            pregunta: "¿Cuál de los siguientes representa la entrada estándar en Java?",
            opciones: [
                "System.out",
                "System.err",
                "System.in",
                "FileReader"
            ],
            respuestaCorrecta: 2,
            explicacion: "System.in representa la entrada estándar normalmente asociada al teclado"
        },
        {
            id: 16072,
            moduloId: 1607,
            pregunta: "¿Qué concepto describe una secuencia de datos que fluye entre el programa y el sistema operativo?",
            opciones: [
                "Buffer",
                "Stream",
                "Registro",
                "Compilador"
            ],
            respuestaCorrecta: 1,
            explicacion: "Un stream es una secuencia de datos que fluye entre el programa y el sistema"
        },
        {
            id: 16077,
            moduloId: 1607,
            pregunta: "¿Qué clase de Java representa un archivo o ruta del sistema pero no permite leer su contenido directamente?",
            opciones: [
                "File",
                "FileReader",
                "BufferedReader",
                "FileInputStream"
            ],
            respuestaCorrecta: 0,
            explicacion: "File representa rutas y archivos pero no realiza lectura directa"
        },
        {
            id: 16078,
            moduloId: 1607,
            pregunta: "¿Qué clase mejora el rendimiento de lectura de texto al utilizar un buffer en memoria?",
            opciones: [
                "FileReader",
                "BufferedReader",
                "Scanner",
                "PrintStream"
            ],
            respuestaCorrecta: 1,
            explicacion: "BufferedReader permite leer texto utilizando un buffer para mejorar el rendimiento"
        },
        {
            id: 16079,
            moduloId: 1607,
            pregunta: "¿Qué tipo de clases se utilizan para manejar datos binarios como imágenes o archivos comprimidos?",
            opciones: [
                "FileReader y FileWriter",
                "BufferedReader y BufferedWriter",
                "FileInputStream y FileOutputStream",
                "Scanner y File"
            ],
            respuestaCorrecta: 2,
            explicacion: "Los streams de entrada y salida manejan datos binarios en bytes"
        }
    ]
};

export default moduloExamen;
