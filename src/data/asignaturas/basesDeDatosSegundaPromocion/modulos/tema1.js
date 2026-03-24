const moduloTema1 = {
    id: 2001,
    nombre: "Test Diciembre: UD1–UD4 (SP)",
    esExamen: false,
    asignaturaId: 20,
    descripcion: "Fundamentos de BD, modelo relacional, diseño E-R, normalización y formas normales.",
    preguntas: [
        {
            id: 20001,
            moduloId: 2001,
            pregunta: "Una base de datos es:",
            opciones: [
                "Un programa",
                "Un conjunto de tablas sin relación",
                "Un conjunto organizado de datos relacionados",
                "Un sistema operativo"
            ],
            respuestaCorrecta: 2,
            explicacion: "Una base de datos es un conjunto organizado de datos relacionados entre sí, gestionados de forma estructurada."
        },
        {
            id: 20002,
            moduloId: 2001,
            pregunta: "¿Qué problema resolvieron los SGBD frente a los ficheros planos?",
            opciones: [
                "El coste",
                "La duplicidad e inconsistencia de datos",
                "El uso de SQL",
                "La velocidad de Internet"
            ],
            respuestaCorrecta: 1,
            explicacion: "Los SGBD surgieron para resolver los problemas de duplicidad e inconsistencia de datos que generaban los sistemas de ficheros planos."
        },
        {
            id: 20003,
            moduloId: 2001,
            pregunta: "¿Qué es un SGBD?",
            opciones: [
                "Un lenguaje",
                "Un modelo de datos",
                "Un software para gestionar bases de datos",
                "Una tabla"
            ],
            respuestaCorrecta: 2,
            explicacion: "Un SGBD (Sistema Gestor de Bases de Datos) es un software que permite crear, gestionar y consultar bases de datos de forma eficiente."
        },
        {
            id: 20004,
            moduloId: 2001,
            pregunta: "El modelo relacional fue propuesto por:",
            opciones: [
                "Bill Gates",
                "Edgar F. Codd",
                "Tim Berners-Lee",
                "Oracle"
            ],
            respuestaCorrecta: 1,
            explicacion: "Edgar F. Codd propuso el modelo relacional en 1970, sentando las bases teóricas de los sistemas de bases de datos relacionales."
        },
        {
            id: 20005,
            moduloId: 2001,
            pregunta: "El modelo relacional organiza la información en:",
            opciones: [
                "Árboles",
                "Grafos",
                "Tablas",
                "Documentos"
            ],
            respuestaCorrecta: 2,
            explicacion: "El modelo relacional organiza los datos en tablas (relaciones), compuestas por filas (tuplas) y columnas (atributos)."
        },
        {
            id: 20006,
            moduloId: 2001,
            pregunta: "SQL se utiliza principalmente para:",
            opciones: [
                "Diseñar interfaces",
                "Gestionar y consultar bases de datos",
                "Crear diagramas",
                "Programar servidores"
            ],
            respuestaCorrecta: 1,
            explicacion: "SQL (Structured Query Language) es el lenguaje estándar para gestionar y consultar bases de datos relacionales."
        },
        {
            id: 20007,
            moduloId: 2001,
            pregunta: "La arquitectura ANSI/SPARC se compone de:",
            opciones: [
                "2 niveles",
                "3 niveles",
                "4 niveles",
                "5 niveles"
            ],
            respuestaCorrecta: 1,
            explicacion: "La arquitectura ANSI/SPARC define 3 niveles: externo (vistas de usuario), conceptual (modelo lógico global) e interno (almacenamiento físico)."
        },
        {
            id: 20008,
            moduloId: 2001,
            pregunta: "El nivel externo de ANSI/SPARC representa:",
            opciones: [
                "El almacenamiento físico",
                "El modelo lógico global",
                "Las vistas de usuario",
                "Los índices"
            ],
            respuestaCorrecta: 2,
            explicacion: "El nivel externo de ANSI/SPARC corresponde a las vistas de usuario, es decir, cómo cada usuario o aplicación percibe los datos."
        },
        {
            id: 20009,
            moduloId: 2001,
            pregunta: "El modelo Entidad-Relación se usa para:",
            opciones: [
                "Crear tablas físicas",
                "Representar conceptualmente la realidad",
                "Ejecutar consultas",
                "Optimizar índices"
            ],
            respuestaCorrecta: 1,
            explicacion: "El modelo Entidad-Relación (E-R) es una herramienta de diseño conceptual que permite representar la realidad del dominio del problema antes de implementarla."
        },
        {
            id: 20010,
            moduloId: 2001,
            pregunta: "Una entidad representa:",
            opciones: [
                "Un atributo",
                "Una relación",
                "Un objeto del mundo real",
                "Una clave"
            ],
            respuestaCorrecta: 2,
            explicacion: "Una entidad es cualquier objeto del mundo real con existencia propia sobre el que se almacena información, como un cliente o un producto."
        },
        {
            id: 20011,
            moduloId: 2001,
            pregunta: "En un diagrama E-R, las entidades se representan con:",
            opciones: [
                "Óvalos",
                "Rombos",
                "Rectángulos",
                "Flechas"
            ],
            respuestaCorrecta: 2,
            explicacion: "En los diagramas E-R las entidades se representan con rectángulos, los atributos con óvalos y las relaciones con rombos."
        },
        {
            id: 20012,
            moduloId: 2001,
            pregunta: "La clave primaria sirve para:",
            opciones: [
                "Relacionar tablas",
                "Identificar registros de forma única",
                "Evitar claves foráneas",
                "Crear vistas"
            ],
            respuestaCorrecta: 1,
            explicacion: "La clave primaria (PK) es un atributo o conjunto de atributos que identifica de forma única cada registro (fila) de una tabla."
        },
        {
            id: 20013,
            moduloId: 2001,
            pregunta: "Una relación 1:N se implementa:",
            opciones: [
                "Con una tabla intermedia",
                "Con una FK en el lado N",
                "Con una FK en el lado 1",
                "Con una PK compuesta"
            ],
            respuestaCorrecta: 1,
            explicacion: "En una relación uno a muchos (1:N) se coloca la clave foránea en la tabla del lado N, apuntando a la PK del lado 1."
        },
        {
            id: 20014,
            moduloId: 2001,
            pregunta: "Una relación N:M se transforma en:",
            opciones: [
                "Una FK",
                "Una vista",
                "Una tabla intermedia",
                "Un índice"
            ],
            respuestaCorrecta: 2,
            explicacion: "Las relaciones muchos a muchos (N:M) se resuelven creando una tabla intermedia que contiene las claves foráneas de ambas entidades."
        },
        {
            id: 20015,
            moduloId: 2001,
            pregunta: "La tabla intermedia de una N:M contiene:",
            opciones: [
                "Una PK simple",
                "Solo atributos",
                "Las PK de ambas entidades como FK",
                "Datos duplicados"
            ],
            respuestaCorrecta: 2,
            explicacion: "La tabla intermedia de una relación N:M incluye las claves primarias de ambas entidades relacionadas como claves foráneas, formando generalmente una PK compuesta."
        },
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
            id: 20017,
            moduloId: 2001,
            pregunta: "La integridad referencial garantiza que:",
            opciones: [
                "No haya duplicados",
                "Las FK apunten a valores existentes",
                "Los datos estén ordenados",
                "No existan NULL"
            ],
            respuestaCorrecta: 1,
            explicacion: "La integridad referencial es la restricción que asegura que los valores de una clave foránea siempre correspondan a un valor existente en la tabla referenciada."
        },
        {
            id: 20018,
            moduloId: 2001,
            pregunta: "El diseño lógico consiste en:",
            opciones: [
                "Crear el modelo E-R",
                "Convertir el modelo E-R en tablas",
                "Insertar datos",
                "Optimizar consultas"
            ],
            respuestaCorrecta: 1,
            explicacion: "El diseño lógico transforma el modelo conceptual (E-R) en un esquema de tablas con sus atributos, claves y relaciones, listo para implementarse en un SGBD."
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
            id: 20027,
            moduloId: 2001,
            pregunta: "Una desnormalización controlada se usa para:",
            opciones: [
                "Romper integridad",
                "Reducir coherencia",
                "Mejorar rendimiento",
                "Eliminar tablas"
            ],
            respuestaCorrecta: 2,
            explicacion: "La desnormalización controlada introduce cierta redundancia de forma deliberada para mejorar el rendimiento en consultas frecuentes, sacrificando algo de integridad."
        },
        {
            id: 20028,
            moduloId: 2001,
            pregunta: "Un error común es pensar que:",
            opciones: [
                "Las FK son necesarias",
                "La normalización es útil",
                "Excel sustituye a un SGBD",
                "SQL es estándar"
            ],
            respuestaCorrecta: 2,
            explicacion: "Un error frecuente de principiantes es creer que Excel puede sustituir a un SGBD, cuando en realidad carece de integridad referencial, concurrencia y seguridad adecuadas."
        },
        {
            id: 20029,
            moduloId: 2001,
            pregunta: "Una base de datos bien diseñada es:",
            opciones: [
                "Rígida",
                "Difícil de mantener",
                "Coherente y escalable",
                "Dependiente del hardware"
            ],
            respuestaCorrecta: 2,
            explicacion: "Una base de datos bien diseñada debe ser coherente (sin anomalías ni redundancias) y escalable (capaz de crecer sin rediseñarse desde cero)."
        },
        {
            id: 20030,
            moduloId: 2001,
            pregunta: "Regla fundamental en bases de datos:",
            opciones: [
                "Programar primero",
                "Priorizar integridad y coherencia",
                "Evitar claves",
                "Minimizar tablas"
            ],
            respuestaCorrecta: 1,
            explicacion: "La regla fundamental en el diseño de bases de datos es priorizar siempre la integridad y coherencia de los datos por encima de otras consideraciones."
        },
    ],
};

export default moduloTema1;
