const moduloTema2 = {
    id: 2002,
    nombre: "TEST SEMANA SANTA",
    esExamen: false,
    asignaturaId: 20,
    descripcion: "Actividad evaluable de Semana Santa: sistemas de archivos, modelo entidad-relación, normalización y restricciones SQL.",
    preguntas: [
        {
            id: 20031,
            moduloId: 2002,
            pregunta: "¿Por qué los sistemas basados en archivos tradicionales generaban problemas en la gestión de la información?",
            opciones: [
                "Porque eran demasiado rápidos",
                "Porque impedían el acceso a los datos",
                "Porque producían redundancia y falta de coherencia entre los datos",
                "Porque no permitían almacenar información"
            ],
            respuestaCorrecta: 2,
            explicacion: "Los sistemas de archivos tradicionales generaban redundancia de datos (misma información repetida en varios archivos) e inconsistencias, ya que no había un mecanismo centralizado que garantizara la coherencia."
        },
        {
            id: 20032,
            moduloId: 2002,
            pregunta: "¿Cuál es la principal función de un Sistema Gestor de Bases de Datos (SGBD)?",
            opciones: [
                "Ejecutar programas",
                "Actuar como intermediario entre usuarios y datos, gestionando su almacenamiento y acceso",
                "Crear sistemas operativos",
                "Eliminar información automáticamente"
            ],
            respuestaCorrecta: 1,
            explicacion: "El SGBD actúa como capa intermedia entre las aplicaciones/usuarios y los datos físicos, gestionando el acceso, almacenamiento, seguridad y consistencia de la información."
        },
        {
            id: 20033,
            moduloId: 2002,
            pregunta: "En el diseño de bases de datos, ¿por qué es importante separar los datos de las aplicaciones que los utilizan?",
            opciones: [
                "Para reducir el tamaño del software",
                "Para mejorar la independencia y facilitar cambios sin afectar a las aplicaciones",
                "Para eliminar el uso de SQL",
                "Para evitar errores de compilación"
            ],
            respuestaCorrecta: 1,
            explicacion: "La independencia entre datos y aplicaciones permite modificar la estructura de la base de datos sin necesidad de reescribir las aplicaciones que la usan, y viceversa."
        },
        {
            id: 20034,
            moduloId: 2002,
            pregunta: "En un modelo Entidad-Relación, ¿qué representa una entidad y por qué es fundamental en el diseño?",
            opciones: [
                "Un tipo de dato",
                "Un objeto del mundo real sobre el que queremos almacenar información",
                "Una relación entre tablas",
                "Un atributo"
            ],
            respuestaCorrecta: 1,
            explicacion: "Una entidad representa cualquier objeto del mundo real (persona, producto, pedido...) con existencia propia sobre el que necesitamos guardar información. Es el elemento central del modelo E-R."
        },
        {
            id: 20035,
            moduloId: 2002,
            pregunta: "¿Qué diferencia existe entre una entidad y un atributo dentro de un modelo E-R?",
            opciones: [
                "No hay diferencia",
                "La entidad es un objeto y el atributo es una característica de ese objeto",
                "El atributo es más importante",
                "La entidad es una tabla"
            ],
            respuestaCorrecta: 1,
            explicacion: "La entidad es el objeto principal (ej: Cliente), mientras que los atributos son las propiedades que describen esa entidad (ej: nombre, DNI, teléfono)."
        },
        {
            id: 20036,
            moduloId: 2002,
            pregunta: "En un diagrama E-R, ¿por qué es importante definir correctamente la cardinalidad de las relaciones?",
            opciones: [
                "Para reducir el número de tablas",
                "Porque determina cómo se relacionan los datos en la base de datos final",
                "Porque elimina atributos",
                "Porque evita usar claves"
            ],
            respuestaCorrecta: 1,
            explicacion: "La cardinalidad (1:1, 1:N, N:M) establece cuántas instancias de una entidad se relacionan con cuántas de otra, lo que afecta directamente al diseño final de las tablas."
        },
        {
            id: 20037,
            moduloId: 2002,
            pregunta: "¿Por qué la clave primaria es un elemento fundamental en una tabla?",
            opciones: [
                "Porque reduce el tamaño",
                "Porque identifica de forma única cada registro",
                "Porque elimina errores automáticamente",
                "Porque mejora el diseño visual"
            ],
            respuestaCorrecta: 1,
            explicacion: "La clave primaria garantiza que cada fila de una tabla sea única e identificable, siendo imprescindible para mantener la integridad de los datos y para establecer relaciones entre tablas."
        },
        {
            id: 20038,
            moduloId: 2002,
            pregunta: "¿Qué papel desempeñan las claves foráneas en una base de datos relacional?",
            opciones: [
                "Crear tablas",
                "Relacionar tablas entre sí",
                "Eliminar datos",
                "Validar código"
            ],
            respuestaCorrecta: 1,
            explicacion: "Las claves foráneas (FOREIGN KEY) son atributos en una tabla que referencian la clave primaria de otra tabla, estableciendo así la relación entre ambas y garantizando la integridad referencial."
        },
        {
            id: 20039,
            moduloId: 2002,
            pregunta: "¿Cómo se implementa una relación N:M en un modelo relacional?",
            opciones: [
                "Eliminándola",
                "Creando una tabla intermedia con claves foráneas",
                "Duplicando tablas",
                "Ignorándola"
            ],
            respuestaCorrecta: 1,
            explicacion: "Las relaciones muchos a muchos (N:M) no pueden representarse directamente en el modelo relacional; se resuelven creando una tabla intermedia (o de unión) que contiene como claves foráneas las claves primarias de ambas tablas relacionadas."
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
        {
            id: 20044,
            moduloId: 2002,
            pregunta: "¿Qué tipo de lenguaje es SQL y qué implica esto?",
            opciones: [
                "Imperativo",
                "Declarativo",
                "Binario",
                "Compilado"
            ],
            respuestaCorrecta: 1,
            explicacion: "SQL es un lenguaje declarativo, lo que significa que el usuario especifica QUÉ datos quiere obtener, no CÓMO obtenerlos. Es el motor del SGBD quien decide la forma óptima de ejecutar la consulta."
        },
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
            id: 20046,
            moduloId: 2002,
            pregunta: "¿Por qué es importante definir correctamente los tipos de datos en SQL?",
            opciones: [
                "Para decorar",
                "Para evitar errores y optimizar almacenamiento",
                "Para compilar",
                "Para ejecutar"
            ],
            respuestaCorrecta: 1,
            explicacion: "Definir el tipo de dato correcto (INT, VARCHAR, DATE...) garantiza que solo se almacenen valores válidos, evita errores en operaciones y optimiza el espacio en disco al usar el formato más adecuado."
        },
        {
            id: 20047,
            moduloId: 2002,
            pregunta: "¿Qué garantiza la restricción NOT NULL?",
            opciones: [
                "Valores únicos",
                "Campo obligatorio",
                "Relación",
                "Eliminación"
            ],
            respuestaCorrecta: 1,
            explicacion: "La restricción NOT NULL obliga a que un campo siempre tenga un valor; no se pueden insertar registros dejando ese campo vacío (NULL). Se usa para campos imprescindibles como el nombre o el DNI."
        },
        {
            id: 20048,
            moduloId: 2002,
            pregunta: "¿Por qué UNIQUE evita errores en una base de datos?",
            opciones: [
                "Porque elimina datos",
                "Porque evita duplicados",
                "Porque crea tablas",
                "Porque valida código"
            ],
            respuestaCorrecta: 1,
            explicacion: "La restricción UNIQUE garantiza que no puedan existir dos registros con el mismo valor en esa columna, evitando duplicados. Es útil para campos como el email o el NIF que deben ser únicos pero no son la clave primaria."
        },
        {
            id: 20049,
            moduloId: 2002,
            pregunta: "¿Qué función tiene la restricción CHECK en SQL?",
            opciones: [
                "Validar reglas o condiciones sobre los datos",
                "Crear tablas",
                "Eliminar datos",
                "Insertar datos"
            ],
            respuestaCorrecta: 0,
            explicacion: "CHECK permite definir una condición que deben cumplir los valores de una columna antes de ser almacenados (ej: CHECK (edad >= 18)). Si el valor no cumple la condición, la operación es rechazada."
        },
        {
            id: 20050,
            moduloId: 2002,
            pregunta: "¿Qué representa una fila dentro de una tabla relacional?",
            opciones: [
                "Columna",
                "Registro",
                "Tabla",
                "Clave"
            ],
            respuestaCorrecta: 1,
            explicacion: "Cada fila (también llamada tupla) en una tabla relacional representa un registro individual, es decir, un conjunto completo de datos de una entidad concreta (ej: los datos de un cliente específico)."
        },
    ],
};

export default moduloTema2;
