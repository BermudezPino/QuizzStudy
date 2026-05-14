const moduloTema3 = {
    id: 2003,
    nombre: "Test SQL - Consultas y Sentencias",
    esExamen: false,
    asignaturaId: 20,
    descripcion: "Test completo de SQL: DDL, DML, consultas SELECT, JOINs, funciones agregadas, transacciones y administración.",
    preguntas: [
        {
            id: 20051,
            moduloId: 2003,
            pregunta: "¿Qué instrucción crea una base de datos?",
            opciones: [
                "MAKE DATABASE tienda;",
                "CREATE DATABASE tienda;",
                "NEW DATABASE tienda;",
                "BUILD DATABASE tienda;"
            ],
            respuestaCorrecta: 1,
            explicacion: "La instrucción correcta en SQL para crear una base de datos es CREATE DATABASE, que es parte del DDL (Data Definition Language)."
        },
        {
            id: 20052,
            moduloId: 2003,
            pregunta: "¿Qué tipo de dato es más recomendable para teléfonos?",
            opciones: [
                "INT",
                "FLOAT",
                "VARCHAR",
                "BOOLEAN"
            ],
            respuestaCorrecta: 2,
            explicacion: "VARCHAR es el tipo más adecuado para teléfonos porque permite almacenar cadenas de texto que pueden incluir prefijos internacionales, guiones o el cero inicial, valores que se perderían con INT."
        },
        {
            id: 20053,
            moduloId: 2003,
            pregunta: "¿Qué hace UNIQUE?",
            opciones: [
                "Permite duplicados",
                "Hace obligatorio el campo",
                "Evita valores repetidos",
                "Borra filas duplicadas"
            ],
            respuestaCorrecta: 2,
            explicacion: "La restricción UNIQUE garantiza que todos los valores de una columna sean distintos, evitando que se inserten valores repetidos en esa columna."
        },
        {
            id: 20054,
            moduloId: 2003,
            pregunta: "¿Cuál es la sintaxis correcta para insertar un registro?",
            opciones: [
                "INSERT clientes VALUES ('Ana');",
                "INSERT INTO clientes VALUES ('Ana');",
                "ADD INTO clientes VALUES ('Ana');",
                "CREATE INTO clientes VALUES ('Ana');"
            ],
            respuestaCorrecta: 1,
            explicacion: "La sintaxis correcta del DML para insertar registros es INSERT INTO tabla VALUES (...). La palabra INTO es obligatoria en SQL estándar."
        },
        {
            id: 20055,
            moduloId: 2003,
            pregunta: "¿Qué falla en esta sentencia? VALUES (6, Ana, ana@email.com, 20);",
            opciones: [
                "El número 20",
                "Faltan comillas en textos",
                "Sobran paréntesis",
                "El VALUES está mal escrito"
            ],
            respuestaCorrecta: 1,
            explicacion: "Los valores de texto como Ana y ana@email.com deben ir entre comillas simples en SQL. Sin comillas el motor los interpreta como identificadores de columna y produce un error."
        },
        {
            id: 20056,
            moduloId: 2003,
            pregunta: "¿Qué hace esta consulta? SELECT * FROM clientes;",
            opciones: [
                "Borra clientes",
                "Actualiza clientes",
                "Muestra todos los registros",
                "Crea una tabla"
            ],
            respuestaCorrecta: 2,
            explicacion: "SELECT * FROM tabla recupera y muestra todas las columnas y filas de la tabla indicada. Es la forma más básica de consulta en SQL."
        },
        {
            id: 20057,
            moduloId: 2003,
            pregunta: "¿Qué hace WHERE?",
            opciones: [
                "Ordena filas",
                "Filtra resultados",
                "Une tablas",
                "Cuenta registros"
            ],
            respuestaCorrecta: 1,
            explicacion: "La cláusula WHERE filtra las filas que cumplen una condición determinada, limitando los registros que devuelve o afecta una consulta SELECT, UPDATE o DELETE."
        },
        {
            id: 20058,
            moduloId: 2003,
            pregunta: "¿Qué peligro tiene UPDATE sin WHERE?",
            opciones: [
                "Borra la tabla",
                "Cambia todas las filas",
                "No funciona",
                "Duplica datos"
            ],
            respuestaCorrecta: 1,
            explicacion: "Un UPDATE sin cláusula WHERE aplica la modificación a todas las filas de la tabla, lo que puede producir una pérdida masiva de datos difícil de revertir."
        },
        {
            id: 20059,
            moduloId: 2003,
            pregunta: "¿Qué hace esta consulta? DELETE FROM clientes WHERE id = 3;",
            opciones: [
                "Borra toda la tabla",
                "Borra el cliente con id 3",
                "Actualiza el cliente 3",
                "Crea un cliente nuevo"
            ],
            respuestaCorrecta: 1,
            explicacion: "DELETE FROM con WHERE id = 3 elimina únicamente la fila cuyo identificador es 3. Sin la cláusula WHERE se borrarían todos los registros de la tabla."
        },
        {
            id: 20060,
            moduloId: 2003,
            pregunta: "¿Qué devuelve un INNER JOIN?",
            opciones: [
                "Todas las filas de ambas tablas",
                "Solo coincidencias entre tablas",
                "Solo filas de la izquierda",
                "Solo filas de la derecha"
            ],
            respuestaCorrecta: 1,
            explicacion: "INNER JOIN devuelve únicamente las filas que tienen valores coincidentes en la columna de unión en ambas tablas, descartando las filas sin correspondencia."
        },
        {
            id: 20061,
            moduloId: 2003,
            pregunta: "¿Qué muestra un LEFT JOIN?",
            opciones: [
                "Solo coincidencias",
                "Toda la tabla izquierda y coincidencias",
                "Solo tabla derecha",
                "Ninguna coincidencia"
            ],
            respuestaCorrecta: 1,
            explicacion: "LEFT JOIN devuelve todas las filas de la tabla izquierda más las filas coincidentes de la tabla derecha. Las filas sin coincidencia en la derecha aparecen con NULL."
        },
        {
            id: 20062,
            moduloId: 2003,
            pregunta: "¿Qué conserva siempre un RIGHT JOIN?",
            opciones: [
                "Tabla izquierda",
                "Solo coincidencias",
                "Tabla derecha",
                "Ninguna tabla"
            ],
            respuestaCorrecta: 2,
            explicacion: "RIGHT JOIN garantiza que aparezcan todas las filas de la tabla derecha, rellenando con NULL los campos de la tabla izquierda cuando no hay coincidencia."
        },
        {
            id: 20063,
            moduloId: 2003,
            pregunta: "¿Para qué sirve GROUP BY?",
            opciones: [
                "Borrar grupos",
                "Agrupar filas para aplicar funciones agregadas",
                "Crear tablas",
                "Actualizar columnas"
            ],
            respuestaCorrecta: 1,
            explicacion: "GROUP BY agrupa filas con el mismo valor en una o varias columnas, permitiendo aplicar funciones agregadas como COUNT, SUM, AVG, MAX o MIN a cada grupo."
        },
        {
            id: 20064,
            moduloId: 2003,
            pregunta: "¿Qué hace COUNT(*)?",
            opciones: [
                "Suma valores",
                "Cuenta filas",
                "Calcula medias",
                "Ordena resultados"
            ],
            respuestaCorrecta: 1,
            explicacion: "COUNT(*) es una función agregada que cuenta el número total de filas de un grupo o tabla, incluyendo las que tienen valores NULL."
        },
        {
            id: 20065,
            moduloId: 2003,
            pregunta: "¿Cuál es la diferencia principal entre WHERE y HAVING?",
            opciones: [
                "Son iguales",
                "WHERE trabaja con filas y HAVING con grupos",
                "HAVING solo sirve para DELETE",
                "WHERE solo funciona con JOIN"
            ],
            respuestaCorrecta: 1,
            explicacion: "WHERE filtra filas individuales antes de agrupar; HAVING filtra grupos resultantes del GROUP BY. Por eso HAVING puede usar funciones agregadas y WHERE no."
        },
        {
            id: 20066,
            moduloId: 2003,
            pregunta: "¿Qué ocurre en MySQL con FULL JOIN?",
            opciones: [
                "Funciona normalmente",
                "No existe nativamente",
                "Solo funciona con WHERE",
                "Sustituye INNER JOIN"
            ],
            respuestaCorrecta: 1,
            explicacion: "MySQL no soporta FULL OUTER JOIN de forma nativa. Para obtener el mismo resultado se debe combinar un LEFT JOIN y un RIGHT JOIN mediante UNION."
        },
        {
            id: 20067,
            moduloId: 2003,
            pregunta: "¿Qué hace ROLLBACK?",
            opciones: [
                "Guarda cambios",
                "Borra tablas",
                "Revierte cambios de la transacción",
                "Crea una vista"
            ],
            respuestaCorrecta: 2,
            explicacion: "ROLLBACK deshace todas las operaciones realizadas desde el inicio de la transacción actual o desde el último SAVEPOINT, restaurando el estado anterior de los datos."
        },
        {
            id: 20068,
            moduloId: 2003,
            pregunta: "¿Qué significa la A de ACID?",
            opciones: [
                "Access",
                "Atomicidad",
                "Automatización",
                "Asociación"
            ],
            respuestaCorrecta: 1,
            explicacion: "La A de ACID significa Atomicidad: una transacción es atómica, lo que implica que se ejecuta completa o no se ejecuta en absoluto, sin estados intermedios."
        },
        {
            id: 20069,
            moduloId: 2003,
            pregunta: "¿Qué comando da permisos a un usuario?",
            opciones: [
                "REVOKE",
                "SHOW",
                "GRANT",
                "ACCESS"
            ],
            respuestaCorrecta: 2,
            explicacion: "GRANT es el comando DCL (Data Control Language) que otorga privilegios sobre objetos de la base de datos a un usuario o rol. Su opuesto es REVOKE, que retira permisos."
        },
        {
            id: 20070,
            moduloId: 2003,
            pregunta: "¿Qué comando ejecuta un procedimiento almacenado?",
            opciones: [
                "RUN",
                "EXECUTE",
                "CALL",
                "START"
            ],
            respuestaCorrecta: 2,
            explicacion: "En MySQL el comando para invocar un procedimiento almacenado es CALL nombre_procedimiento(...). En otros SGBD como SQL Server también se puede usar EXECUTE."
        },
    ],
};

export default moduloTema3;
