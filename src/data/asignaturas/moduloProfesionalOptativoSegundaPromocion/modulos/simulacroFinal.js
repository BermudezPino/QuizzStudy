export const moduloSimulacroFinalMPO = {
    id: 1810,
    nombre: "Simulacro Final - MPO",
    asignaturaId: 18,
    esExamen: true,
    descripcion: "Simulacro de examen con preguntas de todos los temas: JDK/JVM/JRE, MVC, variables, tipos de datos, estructuras de control, estructuras de datos, POO, streams, excepciones, JSON, flujos I/O y recursividad.",
    nota: "Test de repaso creado recopilando los tests ya realizados hasta ahora y basándome en los temas indicados para estudiar de cara al examen. No es un examen oficial.",
    preguntas: [

        // ── TEMA 1: Concepto de programación Java / JDK · JVM · JRE · Compilador ──

        {
            id: 18090,
            moduloId: 1810,
            pregunta: "¿Cuál es la diferencia principal entre JDK y JRE en Java?",
            opciones: [
                "Son exactamente lo mismo, solo cambia el nombre",
                "El JDK incluye el JRE más herramientas de desarrollo como el compilador (javac), mientras que el JRE solo contiene lo necesario para ejecutar programas",
                "El JRE incluye el JDK y herramientas adicionales de desarrollo",
                "El JDK es solo para desarrollo web y el JRE para aplicaciones de escritorio"
            ],
            respuestaCorrecta: 1,
            explicacion: "El JDK (Java Development Kit) es el kit completo para desarrollar: incluye el JRE más el compilador javac y otras herramientas. El JRE (Java Runtime Environment) solo permite ejecutar programas Java ya compilados."
        },
        {
            id: 18091,
            moduloId: 1810,
            pregunta: "¿Qué es la JVM (Java Virtual Machine) y cuál es su función principal?",
            opciones: [
                "Un editor de código fuente para escribir programas Java",
                "Una máquina física especializada para ejecutar Java",
                "Un entorno virtual que ejecuta el bytecode de Java, haciendo que los programas sean independientes del sistema operativo",
                "Una herramienta que convierte código Java directamente a C++"
            ],
            respuestaCorrecta: 2,
            explicacion: "La JVM es una máquina virtual que interpreta y ejecuta el bytecode (.class). Gracias a ella, el mismo programa Java compila una sola vez y se ejecuta en cualquier sistema operativo que tenga una JVM instalada."
        },
        {
            id: 18092,
            moduloId: 1810,
            pregunta: "¿Qué produce el compilador javac al procesar un archivo .java?",
            opciones: [
                "Un archivo ejecutable .exe listo para correr en Windows",
                "Un archivo de bytecode .class que puede ejecutarse en cualquier JVM",
                "Un archivo de código máquina específico para cada procesador",
                "Un archivo HTML con la documentación del código"
            ],
            respuestaCorrecta: 1,
            explicacion: "javac compila el código fuente .java y genera archivos .class con bytecode. Ese bytecode es interpretado por la JVM en tiempo de ejecución, independientemente del sistema operativo."
        },

        // ── TEMA 2: Estructura de programa / MVC ──

        {
            id: 18093,
            moduloId: 1810,
            pregunta: "¿Qué significa el patrón de diseño MVC?",
            opciones: [
                "Método-Variable-Clase",
                "Módulo-Vista-Controlador",
                "Modelo-Vista-Controlador",
                "Memoria-Vector-Componente"
            ],
            respuestaCorrecta: 2,
            explicacion: "MVC son las siglas de Modelo-Vista-Controlador. Es un patrón arquitectónico que separa la lógica de negocio (Modelo), la interfaz de usuario (Vista) y la gestión de eventos (Controlador)."
        },
        {
            id: 18094,
            moduloId: 1810,
            pregunta: "En el patrón MVC, ¿cuál es la responsabilidad del Modelo?",
            opciones: [
                "Gestionar la interfaz de usuario y lo que el usuario ve",
                "Gestionar los datos de la aplicación, la lógica de negocio y las reglas",
                "Intermediar entre la Vista y los datos recibidos del usuario",
                "Definir el diseño visual y los estilos de la aplicación"
            ],
            respuestaCorrecta: 1,
            explicacion: "El Modelo contiene los datos y la lógica de negocio. Es independiente de la interfaz y no sabe cómo se van a mostrar los datos."
        },
        {
            id: 18095,
            moduloId: 1810,
            pregunta: "En el patrón MVC, ¿qué papel tiene el Controlador?",
            opciones: [
                "Almacenar los datos de la aplicación en la base de datos",
                "Renderizar la interfaz gráfica de usuario",
                "Procesar las entradas del usuario, interactuar con el Modelo y actualizar la Vista",
                "Definir las clases y atributos de los objetos del sistema"
            ],
            respuestaCorrecta: 2,
            explicacion: "El Controlador actúa como intermediario: recibe los eventos del usuario desde la Vista, llama al Modelo para procesar los datos y le indica a la Vista qué mostrar."
        },

        // ── TEMA 3: Definición de variables ──

        {
            id: 18096,
            moduloId: 1810,
            pregunta: "¿Cuál es el tipo de dato más adecuado para almacenar la edad de una persona en Java?",
            opciones: ["double", "String", "int", "boolean"],
            respuestaCorrecta: 2,
            explicacion: "La edad es un número entero sin decimales. int es el tipo primitivo adecuado para valores enteros en rangos habituales como la edad de una persona."
        },
        {
            id: 18097,
            moduloId: 1810,
            pregunta: "¿Qué significa que una variable sea static en Java?",
            opciones: [
                "La variable es pública y accesible directamente desde cualquier clase",
                "La variable es accesible mediante la instancia de la clase",
                "La variable pertenece a la clase y es accesible sin necesidad de crear un objeto",
                "La variable solo puede ser modificada una vez"
            ],
            respuestaCorrecta: 2,
            explicacion: "static indica que el miembro pertenece a la clase, no a una instancia concreta. Se puede acceder directamente con el nombre de la clase sin instanciar ningún objeto."
        },

        // ── TEMA 4: Definición de tipos de datos ──

        {
            id: 18098,
            moduloId: 1810,
            pregunta: "En Java, ¿cuál es la diferencia principal entre un tipo primitivo (int) y su clase envoltorio (Integer)?",
            opciones: [
                "No hay diferencia real, solo cambian las mayúsculas",
                "El primitivo guarda el valor directamente y es más ligero; el wrapper es un objeto con métodos adicionales y puede ser null",
                "El primitivo solo se usa en proyectos pequeños y el wrapper en proyectos grandes",
                "El wrapper siempre es más rápido que el primitivo"
            ],
            respuestaCorrecta: 1,
            explicacion: "Los tipos primitivos almacenan el valor directamente en el stack y son más eficientes. Los wrappers son objetos en el heap con métodos útiles (parseInt, compareTo…) y pueden almacenar null, necesario para colecciones genéricas."
        },
        {
            id: 18099,
            moduloId: 1810,
            pregunta: "¿Qué tipo de dato es más adecuado para una variable que solo puede valer true o false?",
            opciones: ["int", "String", "boolean", "char"],
            respuestaCorrecta: 2,
            explicacion: "boolean es el tipo primitivo de Java diseñado exclusivamente para valores lógicos true o false. Usarlo en lugar de int o String hace el código más claro y semánticamente correcto."
        },
        {
            id: 18100,
            moduloId: 1810,
            pregunta: "¿Qué resultado tiene la expresión 10 / 3 cuando ambos operandos son de tipo int en Java?",
            opciones: ["3.33", "3", "4", "Error de compilación"],
            respuestaCorrecta: 1,
            explicacion: "La división entera en Java trunca la parte decimal. 10 / 3 con enteros devuelve 3, descartando los decimales. Para obtener 3.33 habría que usar double: 10.0 / 3."
        },

        // ── TEMA 5: Estructuras de control ──

        {
            id: 18101,
            moduloId: 1810,
            pregunta: "¿Cuál de las siguientes afirmaciones describe mejor el switch moderno (switch expression) frente al clásico?",
            opciones: [
                "El switch moderno es igual que el clásico, solo cambia la palabra clave",
                "El switch moderno permite devolver valores directamente, usa la sintaxis con -> y elimina el fall-through automático",
                "El switch moderno solo funciona con números enteros",
                "El switch moderno es más lento y no se recomienda en código profesional"
            ],
            respuestaCorrecta: 1,
            explicacion: "El switch expression (Java 14+) usa -> para cada caso, no necesita break, evita el fall-through accidental y puede devolver un valor directamente, haciendo el código más conciso y seguro."
        },
        {
            id: 18102,
            moduloId: 1810,
            pregunta: "¿Cuál es la relación correcta entre break, continue y return?",
            opciones: [
                "break y continue son equivalentes; return solo se puede usar en bucles while",
                "break rompe el bucle actual, continue salta a la siguiente iteración y return termina la ejecución del método completo",
                "return solo sale del bucle más interno, nunca del método",
                "continue detiene el programa por completo"
            ],
            respuestaCorrecta: 1,
            explicacion: "break detiene el bucle en el que está. continue salta las instrucciones restantes de la iteración actual y pasa a la siguiente. return sale del método completo, devolviendo un valor si lo tiene."
        },
        {
            id: 18103,
            moduloId: 1810,
            pregunta: "¿Qué hace la instrucción break dentro de un bucle for?",
            opciones: [
                "Salta a la siguiente iteración sin ejecutar el resto del bloque",
                "Termina el bucle por completo, saliendo de él inmediatamente",
                "Reinicia el contador del bucle a su valor inicial",
                "No tiene ningún efecto en bucles for"
            ],
            respuestaCorrecta: 1,
            explicacion: "break termina el bucle inmediatamente. Ninguna iteración posterior se ejecutará, y el flujo continúa con la primera instrucción después del bloque del bucle."
        },

        // ── TEMA 6: Estructuras de datos (Array, ArrayList, HashMap) ──

        {
            id: 18104,
            moduloId: 1810,
            pregunta: "¿Cuál es la principal diferencia estructural entre un array y un ArrayList en Java?",
            opciones: [
                "Los arrays son dinámicos y los ArrayList tienen tamaño fijo",
                "Los arrays tienen tamaño fijo definido en la declaración; los ArrayList son dinámicos y pueden crecer o reducirse",
                "Ambos tienen exactamente el mismo rendimiento y características",
                "Los ArrayList solo pueden almacenar tipos primitivos"
            ],
            respuestaCorrecta: 1,
            explicacion: "Un array tiene un tamaño fijo que no puede cambiar tras su creación. ArrayList implementa una lista dinámica que redimensiona su capacidad automáticamente al añadir o eliminar elementos."
        },
        {
            id: 18105,
            moduloId: 1810,
            pregunta: "¿Qué ventaja principal tiene un ArrayList frente a un array en Java?",
            opciones: [
                "Es más rápido en todos los casos de uso",
                "Puede cambiar de tamaño dinámicamente sin necesidad de redeclararlo",
                "No necesita importar ninguna clase del framework de colecciones",
                "Solo admite números enteros como tipo de elemento"
            ],
            respuestaCorrecta: 1,
            explicacion: "La ventaja clave del ArrayList es su tamaño dinámico: crece automáticamente al añadir elementos y puede reducirse al eliminarlos, sin que el programador gestione esa memoria manualmente."
        },
        {
            id: 18106,
            moduloId: 1810,
            pregunta: "¿Qué es el hashing en el contexto de HashMap en Java?",
            opciones: [
                "Un método para ordenar alfabéticamente las claves del mapa",
                "Una técnica que convierte una clave en un índice numérico mediante una función hash, permitiendo acceso en tiempo promedio O(1)",
                "Un algoritmo para eliminar duplicados en listas enlazadas",
                "Una forma de convertir colecciones en arrays de forma automática"
            ],
            respuestaCorrecta: 1,
            explicacion: "La función hash convierte la clave en un índice de bucket. Esto permite encontrar, insertar y eliminar entradas en tiempo promedio O(1), independientemente del número de elementos almacenados."
        },

        // ── TEMA 7: Conceptos de POO (encapsulación, herencia, polimorfismo) ──

        {
            id: 18107,
            moduloId: 1810,
            pregunta: "¿Qué significa que un atributo de una clase sea private en Java?",
            opciones: [
                "Solo se puede usar desde otras clases del mismo paquete",
                "Solo se puede usar desde la propia clase, protegiendo los datos del acceso externo",
                "Solo se puede usar desde paquetes externos al proyecto",
                "Es equivalente a public, solo es una convención de nombre"
            ],
            respuestaCorrecta: 1,
            explicacion: "private es el modificador de acceso más restrictivo. Garantiza la encapsulación: los datos internos de la clase solo son accesibles desde dentro de ella, y el acceso externo se controla mediante getters y setters."
        },
        {
            id: 18108,
            moduloId: 1810,
            pregunta: "¿Qué es la herencia en Java?",
            opciones: [
                "Un mecanismo por el que una clase puede tener varios constructores con distinta firma",
                "Un mecanismo que permite que una clase hija adquiera los atributos y métodos de una clase padre, reutilizando y extendiendo su funcionalidad",
                "La capacidad de una clase de implementar múltiples interfaces a la vez",
                "El proceso de ocultar los detalles internos de una clase mediante private"
            ],
            respuestaCorrecta: 1,
            explicacion: "La herencia (extends) permite que una subclase reutilice el código de la superclase y lo extienda o especialice. Reduce la duplicación y modela relaciones 'es un/a' entre clases."
        },
        {
            id: 18109,
            moduloId: 1810,
            pregunta: "¿Qué es el polimorfismo en Java?",
            opciones: [
                "La capacidad de una clase de tener múltiples constructores",
                "La capacidad de heredar de varias clases padre simultáneamente",
                "La capacidad de un objeto de tomar diferentes formas, permitiendo que un mismo método se comporte de forma diferente según el tipo real del objeto en tiempo de ejecución",
                "El proceso de encapsular los datos en atributos privados con getters y setters"
            ],
            respuestaCorrecta: 2,
            explicacion: "El polimorfismo permite tratar objetos de distintas subclases a través de una referencia del tipo padre. En tiempo de ejecución, Java invoca el método correspondiente al tipo real del objeto (dynamic dispatch)."
        },
        {
            id: 18110,
            moduloId: 1810,
            pregunta: "¿Qué representa una clase en programación orientada a objetos?",
            opciones: [
                "Un método ejecutable de forma independiente",
                "Un contenedor de arrays dinámicos",
                "Una función estática global compartida por todo el programa",
                "Una plantilla reutilizable que define los atributos y comportamientos de los objetos que se creen a partir de ella"
            ],
            respuestaCorrecta: 3,
            explicacion: "Una clase es el molde o plantilla: define qué datos (atributos) y qué operaciones (métodos) tendrán los objetos. Cada objeto es una instancia concreta creada a partir de esa clase."
        },

        // ── TEMA 8: Funciones stream (BiFunction) ──

        {
            id: 18111,
            moduloId: 1810,
            pregunta: "¿Qué hace el método filter() en un stream de Java?",
            opciones: [
                "Transforma cada elemento del stream en otro valor",
                "Elimina todos los elementos de la colección original",
                "Devuelve un nuevo stream con solo los elementos que cumplen el predicado indicado",
                "Ordena los elementos del stream de menor a mayor"
            ],
            respuestaCorrecta: 2,
            explicacion: "filter() aplica un predicado (función que devuelve boolean) a cada elemento y devuelve un stream solo con los que lo cumplen. No modifica la colección original."
        },
        {
            id: 18112,
            moduloId: 1810,
            pregunta: "¿Qué hace el método map() en un stream de Java?",
            opciones: [
                "Filtra los elementos según una condición booleana",
                "Combina todos los elementos en un único resultado acumulado",
                "Transforma cada elemento del stream aplicando una función, devolviendo un nuevo stream con los valores resultantes",
                "Ordena los elementos del stream alfabéticamente"
            ],
            respuestaCorrecta: 2,
            explicacion: "map() aplica una función de transformación a cada elemento del stream y devuelve un nuevo stream con los resultados. Por ejemplo, .map(n -> n * 2) duplica cada número."
        },
        {
            id: 18113,
            moduloId: 1810,
            pregunta: "¿Qué es una BiFunction<T, U, R> en Java?",
            opciones: [
                "Una función que recibe un parámetro y devuelve un booleano",
                "Una interfaz funcional que acepta dos argumentos (tipos T y U) y devuelve un resultado de tipo R",
                "Una función que itera sobre dos listas de forma simultánea",
                "Un operador binario que compara dos objetos y devuelve el mayor"
            ],
            respuestaCorrecta: 1,
            explicacion: "BiFunction<T,U,R> es una interfaz funcional del paquete java.util.function. Su método abstracto apply(T t, U u) recibe dos argumentos de tipos distintos y devuelve un resultado, útil para lambdas con dos entradas."
        },

        // ── TEMA 9: Excepciones ──

        {
            id: 18114,
            moduloId: 1810,
            pregunta: "¿Qué es una excepción en Java?",
            opciones: [
                "Un error de compilación que impide que el programa se ejecute",
                "Un evento anómalo que ocurre durante la ejecución y que interrumpe el flujo normal si no se gestiona",
                "Una advertencia del compilador sobre código ineficiente",
                "Un tipo especial de variable para almacenar códigos de error"
            ],
            respuestaCorrecta: 1,
            explicacion: "Una excepción es un objeto que representa una situación anormal en tiempo de ejecución (división entre cero, índice fuera de rango, archivo no encontrado…). Si no se captura con try-catch, el programa termina con un error."
        },
        {
            id: 18115,
            moduloId: 1810,
            pregunta: "¿Cuál es la estructura correcta de un bloque try-catch-finally en Java?",
            opciones: [
                "finally { } try { } catch(Exception e) { }",
                "try { código arriesgado } catch(Exception e) { gestión del error } finally { siempre se ejecuta }",
                "catch { } try { } finally { }",
                "try { código } finally { gestión } catch(Exception e) { siempre se ejecuta }"
            ],
            respuestaCorrecta: 1,
            explicacion: "El orden es siempre try → catch → finally. El bloque finally es opcional pero, si existe, se ejecuta siempre (tanto si hubo excepción como si no), ideal para liberar recursos."
        },
        {
            id: 18116,
            moduloId: 1810,
            pregunta: "¿Cuál es la diferencia entre una excepción checked y una unchecked en Java?",
            opciones: [
                "Las checked son más graves y siempre detienen el programa",
                "Las checked deben declararse o capturarse obligatoriamente (IOException, SQLException); las unchecked son subclases de RuntimeException y no es obligatorio gestionarlas",
                "Las unchecked solo ocurren en tiempo de compilación",
                "No hay ninguna diferencia real, son nombres sinónimos"
            ],
            respuestaCorrecta: 1,
            explicacion: "Checked exceptions (IOException, SQLException…) obligan al programador a usar try-catch o throws. Unchecked exceptions (NullPointerException, ArrayIndexOutOfBoundsException…) son subclases de RuntimeException y no es obligatorio capturarlas, aunque sí recomendable."
        },

        // ── TEMA 10: JSON ──

        {
            id: 18117,
            moduloId: 1810,
            pregunta: "¿Qué es JSON?",
            opciones: [
                "Un lenguaje de programación orientado a objetos para backends",
                "Un formato de texto ligero para el intercambio de datos basado en pares clave-valor, legible tanto por humanos como por máquinas",
                "Una base de datos relacional usada en aplicaciones web",
                "Un protocolo de comunicación entre servidores web"
            ],
            respuestaCorrecta: 1,
            explicacion: "JSON (JavaScript Object Notation) es un formato estándar de intercambio de datos. Aunque nació en el ecosistema JavaScript, hoy es el formato más usado en APIs REST independientemente del lenguaje."
        },
        {
            id: 18118,
            moduloId: 1810,
            pregunta: "¿Cómo se representa correctamente en JSON un objeto con los campos nombre y edad?",
            opciones: [
                "[nombre: \"Ana\", edad: 25]",
                "<nombre>Ana</nombre><edad>25</edad>",
                "{\"nombre\": \"Ana\", \"edad\": 25}",
                "(nombre=\"Ana\", edad=25)"
            ],
            respuestaCorrecta: 2,
            explicacion: "Un objeto JSON se encierra entre llaves {}. Cada campo es un par \"clave\": valor separado por comas. Las claves siempre van entre comillas dobles; los strings también, pero los números no."
        },
        {
            id: 18119,
            moduloId: 1810,
            pregunta: "¿Qué librería de Java se usa habitualmente para parsear y generar JSON?",
            opciones: [
                "java.util.Scanner",
                "Gson (Google) o Jackson",
                "java.io.FileReader",
                "java.sql.Connection"
            ],
            respuestaCorrecta: 1,
            explicacion: "Gson (de Google) y Jackson son las dos librerías más populares para trabajar con JSON en Java. Permiten serializar objetos Java a JSON y deserializar JSON a objetos Java con pocas líneas de código."
        },

        // ── TEMA 11: Flujos I/O ──

        {
            id: 18120,
            moduloId: 1810,
            pregunta: "¿Qué clase de Java se utiliza habitualmente para leer el contenido de un archivo de texto línea por línea?",
            opciones: [
                "FileOutputStream",
                "ObjectInputStream",
                "BufferedReader junto con FileReader",
                "PrintWriter"
            ],
            respuestaCorrecta: 2,
            explicacion: "FileReader abre el archivo y BufferedReader lo envuelve añadiendo un buffer y el método readLine(), que permite leer el archivo línea a línea de forma eficiente."
        },
        {
            id: 18121,
            moduloId: 1810,
            pregunta: "¿Para qué sirve BufferedReader en Java al trabajar con ficheros?",
            opciones: [
                "Para escribir datos binarios en un archivo de forma secuencial",
                "Para añadir un buffer que mejora el rendimiento de lectura y permite leer líneas completas con readLine()",
                "Para serializar objetos Java directamente a disco",
                "Para leer exclusivamente archivos en formato XML"
            ],
            respuestaCorrecta: 1,
            explicacion: "BufferedReader envuelve un Reader (como FileReader) y añade un buffer interno. Esto reduce el número de accesos al disco y proporciona el método readLine() para leer el archivo línea a línea cómodamente."
        },
        {
            id: 18122,
            moduloId: 1810,
            pregunta: "¿Qué clase usarías en Java para escribir texto en un archivo?",
            opciones: [
                "FileReader",
                "BufferedInputStream",
                "ObjectOutputStream",
                "FileWriter o BufferedWriter"
            ],
            respuestaCorrecta: 3,
            explicacion: "FileWriter escribe caracteres en un archivo. BufferedWriter lo envuelve para añadir buffer y mejorar el rendimiento. Para operaciones de solo lectura se usa FileReader; para escritura, FileWriter/BufferedWriter."
        },

        // ── TEMA 12: Recursividad ──

        {
            id: 18123,
            moduloId: 1810,
            pregunta: "¿Qué es la recursividad en programación?",
            opciones: [
                "Un tipo de bucle que se repite un número fijo de veces",
                "Una técnica donde una función se llama a sí misma para resolver un problema dividiéndolo en subproblemas más simples",
                "Un método para ordenar arrays de forma automática",
                "Una estructura de datos similar a las listas enlazadas"
            ],
            respuestaCorrecta: 1,
            explicacion: "La recursividad consiste en que una función se invoca a sí misma con una entrada más pequeña o más simple, hasta llegar al caso base que detiene las llamadas. Es especialmente útil para problemas con estructura jerárquica."
        },
        {
            id: 18124,
            moduloId: 1810,
            pregunta: "¿Cuáles son los dos elementos esenciales que toda función recursiva debe tener?",
            opciones: [
                "Bucle for y bucle while",
                "Entrada y salida de datos",
                "Caso base y llamada recursiva",
                "Un array y una lista de resultados"
            ],
            respuestaCorrecta: 2,
            explicacion: "El caso base detiene la recursión cuando se cumple una condición (por ejemplo, n == 0). La llamada recursiva reduce el problema acercándolo al caso base. Sin caso base, se produce un StackOverflowError."
        },
        {
            id: 18125,
            moduloId: 1810,
            pregunta: "¿Cuándo es más recomendable usar recursividad en lugar de iteración?",
            opciones: [
                "Siempre que sea posible, porque la recursividad es siempre más rápida",
                "Cuando el problema tiene una estructura jerárquica o auto-similar, como árboles, grafos o directorios anidados",
                "Solo cuando trabajamos con arrays de números enteros",
                "Nunca; la iteración es siempre la mejor opción"
            ],
            respuestaCorrecta: 1,
            explicacion: "La recursividad encaja de forma natural en problemas con estructura árbol o jerárquica (recorrer directorios, calcular factorial, recorridos en árboles binarios). Para bucles simples, la iteración es más eficiente en memoria."
        }
    ],
};

export default moduloSimulacroFinalMPO;
