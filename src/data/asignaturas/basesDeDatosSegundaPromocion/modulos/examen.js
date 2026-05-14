export const moduloExamen = {
    id: 2004,
    nombre: "Simulacro Examen Final",
    esExamen: true,
    asignaturaId: 20,
    descripcion: "Preguntas de examen: SQL, DDL/DML, normalización y dependencias funcionales",
    nota: "Simulacro de examen con preguntas de los temas: SQL, DDL/DML, comodines, ORDER BY, normalización y dependencias funcionales.",
    preguntas: [
        // ── FORMAS NORMALES ──────────────────────────────────────────────────
        {
            id: 20016,
            moduloId: 2001,
            pregunta: "Un atributo multivaluado:",
            opciones: [
                "Cumple 1FN",
                "Viola 1FN",
                "Viola 2FN",
                "Viola 3FN"
            ],
            respuestaCorrecta: 1,
            explicacion: "Un atributo multivaluado (que puede tener varios valores para un mismo registro) viola la Primera Forma Normal, que exige valores atómicos."
        },
        {
            id: 20019,
            moduloId: 2001,
            pregunta: "Normalizar una base de datos sirve para:",
            opciones: [
                "Aumentar redundancia",
                "Evitar anomalías",
                "Reducir claves",
                "Eliminar relaciones"
            ],
            respuestaCorrecta: 1,
            explicacion: "La normalización es el proceso de organizar las tablas para eliminar redundancias y evitar anomalías de inserción, actualización y borrado."
        },
        {
            id: 20020,
            moduloId: 2001,
            pregunta: "La 1ª Forma Normal (1FN) exige:",
            opciones: [
                "Claves compuestas",
                "Valores atómicos",
                "No dependencias transitivas",
                "PK simples"
            ],
            respuestaCorrecta: 1,
            explicacion: "La Primera Forma Normal (1FN) requiere que todos los atributos contengan valores atómicos (indivisibles) y que no haya grupos repetidos."
        },
        {
            id: 20021,
            moduloId: 2001,
            pregunta: "La 2ª Forma Normal (2FN) elimina:",
            opciones: [
                "Listas",
                "Dependencias transitivas",
                "Dependencias parciales",
                "Claves foráneas"
            ],
            respuestaCorrecta: 2,
            explicacion: "La Segunda Forma Normal (2FN) elimina las dependencias parciales, es decir, atributos no clave que dependen solo de parte de una clave primaria compuesta."
        },
        {
            id: 20022,
            moduloId: 2001,
            pregunta: "La 3ª Forma Normal (3FN) elimina:",
            opciones: [
                "Dependencias parciales",
                "Dependencias transitivas",
                "Valores atómicos",
                "PK compuestas"
            ],
            respuestaCorrecta: 1,
            explicacion: "La Tercera Forma Normal (3FN) elimina las dependencias transitivas, donde un atributo no clave depende de otro atributo no clave."
        },
        {
            id: 20024,
            moduloId: 2001,
            pregunta: "Una tabla en 3FN:",
            opciones: [
                "Siempre cumple BCNF",
                "Nunca cumple BCNF",
                "Puede no cumplir BCNF",
                "No tiene dependencias"
            ],
            respuestaCorrecta: 2,
            explicacion: "Una tabla en 3FN puede no cumplir BCNF si existe algún determinante que no sea clave candidata, aunque sí elimine las dependencias transitivas."
        },
        {
            id: 20025,
            moduloId: 2001,
            pregunta: "BCNF es:",
            opciones: [
                "Inferior a 3FN",
                "Igual que 2FN",
                "Más estricta que 3FN",
                "Solo teórica"
            ],
            respuestaCorrecta: 2,
            explicacion: "La Forma Normal de Boyce-Codd (BCNF) es más estricta que 3FN: exige que todo determinante sea una clave candidata, sin excepciones."
        },
        {
            id: 20026,
            moduloId: 2001,
            pregunta: "Una tabla cumple BCNF si:",
            opciones: [
                "No tiene FK",
                "Cada determinante es clave candidata",
                "No tiene PK compuesta",
                "Está normalizada"
            ],
            respuestaCorrecta: 1,
            explicacion: "Una tabla está en BCNF cuando para toda dependencia funcional X→Y, X es una superclave (clave candidata) de la tabla."
        },
        {
            id: 20040,
            moduloId: 2002,
            pregunta: "¿Cuál es el objetivo principal de la normalización en bases de datos?",
            opciones: [
                "Aumentar el número de tablas",
                "Reducir redundancia y mejorar integridad",
                "Reducir código",
                "Eliminar relaciones"
            ],
            respuestaCorrecta: 1,
            explicacion: "La normalización es el proceso de organizar los datos para reducir redundancias, eliminar anomalías de actualización/inserción/borrado y mejorar la integridad de los datos."
        },
        {
            id: 20041,
            moduloId: 2002,
            pregunta: "¿Qué caracteriza a la Primera Forma Normal (1FN)?",
            opciones: [
                "Tablas grandes",
                "Valores atómicos",
                "Claves compuestas",
                "Relaciones"
            ],
            respuestaCorrecta: 1,
            explicacion: "Una tabla está en 1FN cuando todos sus atributos contienen valores atómicos (indivisibles), es decir, no hay grupos repetitivos ni atributos multivaluados dentro de una misma celda."
        },
        // ── TIPO DE DEPENDENCIA ──────────────────────────────────────────────
        {
            id: 20023,
            moduloId: 2001,
            pregunta: "Una dependencia transitiva ocurre cuando:",
            opciones: [
                "Un atributo depende de la PK",
                "Un atributo depende de otro no clave",
                "Hay FK",
                "Hay una N:M"
            ],
            respuestaCorrecta: 1,
            explicacion: "Una dependencia transitiva ocurre cuando un atributo no clave depende funcionalmente de otro atributo no clave, en lugar de depender directamente de la PK."
        },
        {
            id: 20042,
            moduloId: 2002,
            pregunta: "¿Qué problema elimina la Segunda Forma Normal (2FN)?",
            opciones: [
                "Redundancia total",
                "Dependencias parciales",
                "Relaciones",
                "Claves"
            ],
            respuestaCorrecta: 1,
            explicacion: "La 2FN requiere que la tabla esté en 1FN y que todos los atributos no clave dependan completamente de la clave primaria completa, eliminando las dependencias parciales (solo aplica cuando hay clave compuesta)."
        },
        {
            id: 20043,
            moduloId: 2002,
            pregunta: "¿Qué son las dependencias transitivas que elimina la 3FN?",
            opciones: [
                "Dependencias directas",
                "Dependencias indirectas entre atributos no clave",
                "Claves",
                "Relaciones"
            ],
            respuestaCorrecta: 1,
            explicacion: "Una dependencia transitiva ocurre cuando un atributo no clave depende de otro atributo no clave (en vez de depender directamente de la clave primaria). La 3FN elimina estas dependencias indirectas."
        },
        // ── DDL y DML ────────────────────────────────────────────────────────
        {
            id: 20045,
            moduloId: 2002,
            pregunta: "¿Qué diferencia hay entre DDL y DML en SQL?",
            opciones: [
                "Ninguna",
                "DDL define estructura y DML manipula datos",
                "DML crea tablas",
                "DDL elimina datos"
            ],
            respuestaCorrecta: 1,
            explicacion: "DDL (Data Definition Language) incluye comandos como CREATE, ALTER, DROP para definir la estructura de la base de datos. DML (Data Manipulation Language) incluye SELECT, INSERT, UPDATE, DELETE para trabajar con los datos."
        },
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
        // ── WHERE ────────────────────────────────────────────────────────────
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
        // ── COUNT ────────────────────────────────────────────────────────────
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
            id: 20071,
            moduloId: 2004,
            pregunta: "¿Cuál es la sintaxis correcta para ordenar resultados en SQL?",
            opciones: ["SORT BY nombre ASC", "ORDER BY nombre ASC", "ARRANGE BY nombre ASC", "ORDERBY nombre ASC"],
            respuestaCorrecta: 1,
            explicacion: "La cláusula ORDER BY es la sintaxis estándar SQL para ordenar el resultado de una consulta."
        },
        {
            id: 20072,
            moduloId: 2004,
            pregunta: "¿Qué diferencia hay entre ORDER BY nombre ASC y ORDER BY nombre DESC?",
            opciones: ["ASC ordena de mayor a menor; DESC de menor a mayor", "ASC ordena de menor a mayor (A→Z, 1→9); DESC de mayor a menor (Z→A, 9→1)", "Ambos ordenan igual por defecto", "DESC solo funciona con números"],
            respuestaCorrecta: 1,
            explicacion: "ASC (ascendente) es el orden por defecto. DESC invierte el orden."
        },
        {
            id: 20073,
            moduloId: 2004,
            pregunta: "¿Qué hace: SELECT * FROM empleados ORDER BY departamento ASC, salario DESC?",
            opciones: ["Ordena solo por salario", "Ordena primero por departamento (A→Z) y dentro de cada departamento por salario (mayor a menor)", "Ordena por dos columnas de forma independiente", "Produce un error de sintaxis"],
            respuestaCorrecta: 1,
            explicacion: "ORDER BY con múltiples columnas aplica los criterios en orden: primero departamento y en caso de empate, salario descendente."
        },
        {
            id: 20074,
            moduloId: 2004,
            pregunta: "¿Se puede usar un alias definido en el SELECT dentro de ORDER BY?",
            opciones: ["No, ORDER BY solo acepta nombres de columna reales", "Sí, ORDER BY puede referenciar alias definidos en el SELECT", "Solo si la columna es numérica", "Solo en MySQL"],
            respuestaCorrecta: 1,
            explicacion: "En la mayoría de SGBD ORDER BY puede usar alias del SELECT porque se evalúa después de la proyección."
        },
        {
            id: 20075,
            moduloId: 2004,
            pregunta: "¿Cuál es la diferencia clave entre ORDER BY y GROUP BY?",
            opciones: ["Son sinónimos", "ORDER BY ordena filas; GROUP BY agrupa filas para funciones agregadas", "GROUP BY ordena los datos; ORDER BY los agrupa", "ORDER BY solo funciona con SELECT *"],
            respuestaCorrecta: 1,
            explicacion: "ORDER BY cambia el orden de presentación. GROUP BY colapsa filas en grupos para usar COUNT, SUM, AVG, etc."
        },
        {
            id: 20076,
            moduloId: 2004,
            pregunta: "¿Para qué sirve el operador LIKE en SQL?",
            opciones: ["Para comparar valores exactos", "Para buscar patrones dentro de cadenas de texto", "Para unir tablas", "Para ordenar resultados"],
            respuestaCorrecta: 1,
            explicacion: "LIKE permite filtrar filas cuyo valor coincide con un patrón usando comodines % y _."
        },
        {
            id: 20077,
            moduloId: 2004,
            pregunta: "¿Qué devuelve WHERE nombre LIKE 'A%'?",
            opciones: ["Nombres que contienen 'A' en cualquier posición", "Nombres que empiezan por 'A' seguidos de cualquier cadena", "Nombres de exactamente dos caracteres empezando por 'A'", "Nombres que terminan en 'A'"],
            respuestaCorrecta: 1,
            explicacion: "El comodín % representa cualquier secuencia de cero o más caracteres. 'A%' busca cadenas que empiecen por 'A'."
        },
        {
            id: 20078,
            moduloId: 2004,
            pregunta: "¿Qué diferencia hay entre % y _ en LIKE?",
            opciones: ["% representa exactamente un carácter; _ representa cualquier cadena", "% representa cualquier cadena (0 o más caracteres); _ representa exactamente un carácter", "Son equivalentes", "_ solo se usa con números"],
            respuestaCorrecta: 1,
            explicacion: "% sustituye a cero o más caracteres. _ sustituye a exactamente un carácter."
        },
        {
            id: 20079,
            moduloId: 2004,
            pregunta: "¿Qué hace WHERE nombre NOT LIKE 'M%'?",
            opciones: ["Devuelve solo los nombres que empiezan por 'M'", "Devuelve todos los nombres que NO empiezan por 'M'", "Produce un error de sintaxis", "Devuelve nombres que contienen 'M'"],
            respuestaCorrecta: 1,
            explicacion: "NOT LIKE es la negación: filtra filas cuyo valor NO coincide con el patrón."
        },
        {
            id: 20080,
            moduloId: 2004,
            pregunta: "¿Cuál de estas consultas busca clientes cuya ciudad contenga 'Madrid' en cualquier posición?",
            opciones: ["WHERE ciudad = 'Madrid'", "WHERE ciudad LIKE '%Madrid%'", "WHERE ciudad LIKE 'Madrid'", "WHERE ciudad CONTAINS 'Madrid'"],
            respuestaCorrecta: 1,
            explicacion: "'%Madrid%' usa % antes y después para buscar la subcadena 'Madrid' en cualquier posición del campo."
        },
    ],
};

export default moduloExamen;
