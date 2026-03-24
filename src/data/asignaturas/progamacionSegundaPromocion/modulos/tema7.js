export const moduloTema7 = {
    id: 1607,
    nombre: "Tema 7: Entrada/Salida y Archivos (SP)",
    esExamen: false,
    asignaturaId: 16,
    descripcion: "Entrada/Salida (I/O) y Lectura de Archivos en Java",
    preguntas: [
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
            id: 16073,
            moduloId: 1607,
            pregunta: "¿Qué clase de Java se utiliza habitualmente para leer datos desde el teclado de forma sencilla?",
            opciones: [
                "Scanner",
                "BufferedWriter",
                "FileOutputStream",
                "Path"
            ],
            respuestaCorrecta: 0,
            explicacion: "Scanner permite leer datos fácilmente desde distintas fuentes como teclado o archivos"
        },
        {
            id: 16074,
            moduloId: 1607,
            pregunta: "¿Qué método de Scanner se utiliza para leer un número entero?",
            opciones: [
                "nextLine()",
                "nextDouble()",
                "nextInt()",
                "readInt()"
            ],
            respuestaCorrecta: 2,
            explicacion: "nextInt() permite leer valores enteros desde la entrada"
        },
        {
            id: 16075,
            moduloId: 1607,
            pregunta: "¿Cuál es la principal diferencia entre next() y nextLine()?",
            opciones: [
                "next() lee números y nextLine() texto",
                "next() lee hasta el siguiente espacio y nextLine() toda la línea",
                "nextLine() solo funciona con archivos",
                "No existe diferencia"
            ],
            respuestaCorrecta: 1,
            explicacion: "next() lee hasta un espacio mientras que nextLine() captura la línea completa"
        },
        {
            id: 16076,
            moduloId: 1607,
            pregunta: "¿Qué problema común ocurre después de usar nextInt() antes de llamar a nextLine()?",
            opciones: [
                "Se produce un error de compilación",
                "El programa se cierra automáticamente",
                "Queda pendiente el salto de línea en el buffer",
                "Se elimina la variable leída"
            ],
            respuestaCorrecta: 2,
            explicacion: "Después de nextInt() queda el salto de línea pendiente en el buffer"
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
        },
        {
            id: 16080,
            moduloId: 1607,
            pregunta: "¿Cuál es la ventaja principal de utilizar try-with-resources al trabajar con archivos o Scanner?",
            opciones: [
                "Mejora la velocidad del programa",
                "Permite compilar sin errores",
                "Cierra automáticamente los recursos utilizados",
                "Convierte archivos a formato binario"
            ],
            respuestaCorrecta: 2,
            explicacion: "try-with-resources garantiza el cierre automático de recursos como archivos o Scanner"
        }
    ]
};

export default moduloTema7;
