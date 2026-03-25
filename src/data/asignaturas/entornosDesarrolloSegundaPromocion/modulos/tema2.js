const moduloTema2 = {
    id: 2102,
    nombre: "TEST SEMANA SANTA",
    esExamen: false,
    asignaturaId: 21,
    descripcion: "Actividad evaluable de Semana Santa: control de versiones, refactorización, testing, metodologías ágiles y patrones de diseño.",
    preguntas: [
        {
            id: 21031,
            moduloId: 2102,
            pregunta: "¿Qué es un sistema de control de versiones como Git?",
            opciones: [
                "Un programa para diseñar interfaces gráficas",
                "Un sistema que guarda cambios en archivos y permite trabajar en equipo",
                "Un compilador de código",
                "Un sistema operativo"
            ],
            respuestaCorrecta: 1,
            explicacion: "Git guarda el historial de cambios y permite la colaboración entre desarrolladores."
        },
        {
            id: 21032,
            moduloId: 2102,
            pregunta: "¿Qué hace el comando git commit?",
            opciones: [
                "Borra archivos del proyecto",
                "Guarda una versión del proyecto con un mensaje",
                "Descarga cambios del repositorio remoto",
                "Crea una rama nueva"
            ],
            respuestaCorrecta: 1,
            explicacion: "git commit crea un punto de guardado en el historial del repositorio."
        },
        {
            id: 21033,
            moduloId: 2102,
            pregunta: "¿Qué es la refactorización?",
            opciones: [
                "Añadir nuevas funcionalidades",
                "Corregir errores del sistema",
                "Mejorar el código sin cambiar su comportamiento",
                "Compilar el programa"
            ],
            respuestaCorrecta: 2,
            explicacion: "Refactorizar mejora la legibilidad y estructura del código sin alterar lo que hace."
        },
        {
            id: 21034,
            moduloId: 2102,
            pregunta: "¿Qué es un \"code smell\"?",
            opciones: [
                "Un error que rompe el programa",
                "Un síntoma de mal diseño del código",
                "Un lenguaje de programación",
                "Un test automático"
            ],
            respuestaCorrecta: 1,
            explicacion: "Un code smell es una señal de que el código puede tener problemas de diseño aunque funcione."
        },
        {
            id: 21035,
            moduloId: 2102,
            pregunta: "¿Qué diferencia hay entre verificación y validación?",
            opciones: [
                "No hay diferencia",
                "Verificación comprueba el código; validación si cumple necesidades del usuario",
                "Validación es solo para tests automáticos",
                "Verificación es posterior al desarrollo"
            ],
            respuestaCorrecta: 1,
            explicacion: "Verificación = ¿construimos el producto correctamente? Validación = ¿construimos el producto correcto?"
        },
        {
            id: 21036,
            moduloId: 2102,
            pregunta: "En el ciclo de vida del software, ¿por qué se dice que programar NO es lo más importante?",
            opciones: [
                "Porque no es necesario programar",
                "Porque lo importante es el hardware",
                "Porque el software incluye análisis, diseño, pruebas y mantenimiento",
                "Porque solo importa el resultado final"
            ],
            respuestaCorrecta: 2,
            explicacion: "El desarrollo de software abarca muchas fases más allá de la codificación."
        },
        {
            id: 21037,
            moduloId: 2102,
            pregunta: "¿Cuál es la principal diferencia entre un lenguaje de alto nivel y uno de bajo nivel?",
            opciones: [
                "Los de bajo nivel son más fáciles",
                "Los de alto nivel son más cercanos al lenguaje humano",
                "No hay diferencia",
                "Los de alto nivel son más rápidos"
            ],
            respuestaCorrecta: 1,
            explicacion: "Los lenguajes de alto nivel usan sintaxis más cercana al lenguaje humano, abstrayendo el hardware."
        },
        {
            id: 21038,
            moduloId: 2102,
            pregunta: "En metodologías de desarrollo, ¿qué problema tiene el modelo en cascada frente a los ágiles?",
            opciones: [
                "Es demasiado rápido",
                "No tiene fases",
                "Es poco flexible ante cambios",
                "No se usa en empresas"
            ],
            respuestaCorrecta: 2,
            explicacion: "El modelo en cascada es rígido; una vez terminada una fase es difícil volver atrás."
        },
        {
            id: 21039,
            moduloId: 2102,
            pregunta: "¿Qué significa que Git sea un sistema de control de versiones distribuido?",
            opciones: [
                "Que solo funciona en Internet",
                "Que cada desarrollador tiene una copia completa del proyecto",
                "Que no guarda historial",
                "Que solo hay un servidor central"
            ],
            respuestaCorrecta: 1,
            explicacion: "En un sistema distribuido, cada clon es un repositorio completo con todo el historial."
        },
        {
            id: 21040,
            moduloId: 2102,
            pregunta: "¿Por qué el historial de commits es fundamental en proyectos profesionales?",
            opciones: [
                "Porque ocupa poco espacio",
                "Porque permite saber quién hizo cada cambio y por qué",
                "Porque ejecuta el código",
                "Porque elimina errores automáticamente"
            ],
            respuestaCorrecta: 1,
            explicacion: "El historial de commits permite trazabilidad, auditoría y reversión de cambios."
        },
        {
            id: 21041,
            moduloId: 2102,
            pregunta: "¿Cuál es la función principal del Product Owner en Scrum?",
            opciones: [
                "Programar",
                "Gestionar servidores",
                "Priorizar el trabajo según el valor para el cliente",
                "Hacer testing"
            ],
            respuestaCorrecta: 2,
            explicacion: "El Product Owner gestiona y prioriza el Product Backlog en función del valor de negocio."
        },
        {
            id: 21042,
            moduloId: 2102,
            pregunta: "En Kanban, ¿por qué es importante limitar el trabajo en curso (WIP)?",
            opciones: [
                "Para hacer más tareas a la vez",
                "Para evitar sobrecarga y mejorar la calidad",
                "Para eliminar tareas",
                "Para trabajar más lento"
            ],
            respuestaCorrecta: 1,
            explicacion: "Limitar el WIP reduce la multitarea, mejora el flujo y la calidad del trabajo entregado."
        },
        {
            id: 21043,
            moduloId: 2102,
            pregunta: "¿Por qué los patrones de diseño son importantes en desarrollo de software?",
            opciones: [
                "Porque sustituyen al código",
                "Porque son soluciones reutilizables a problemas comunes",
                "Porque hacen el código más corto siempre",
                "Porque evitan errores automáticamente"
            ],
            respuestaCorrecta: 1,
            explicacion: "Los patrones de diseño son soluciones probadas y documentadas para problemas recurrentes."
        },
        {
            id: 21044,
            moduloId: 2102,
            pregunta: "En testing, ¿por qué es importante combinar pruebas de caja negra y caja blanca?",
            opciones: [
                "Porque una sustituye a la otra",
                "Porque ambas analizan cosas diferentes y se complementan",
                "Porque son obligatorias",
                "Porque reducen el código"
            ],
            respuestaCorrecta: 1,
            explicacion: "Caja negra evalúa comportamiento externo; caja blanca la estructura interna. Juntas ofrecen cobertura completa."
        },
        {
            id: 21045,
            moduloId: 2102,
            pregunta: "¿Qué caracteriza a las pruebas unitarias dentro del proceso de testing?",
            opciones: [
                "Analizan todo el sistema completo",
                "Evalúan módulos pequeños de forma aislada",
                "Solo las realiza el cliente",
                "No son automáticas"
            ],
            respuestaCorrecta: 1,
            explicacion: "Las pruebas unitarias verifican el comportamiento de unidades individuales de código de forma aislada."
        },
        {
            id: 21046,
            moduloId: 2102,
            pregunta: "¿Qué se busca principalmente en las pruebas de aceptación?",
            opciones: [
                "Validar el código fuente",
                "Verificar algoritmos",
                "Confirmar que el sistema cumple las necesidades del cliente",
                "Analizar rendimiento"
            ],
            respuestaCorrecta: 2,
            explicacion: "Las pruebas de aceptación confirman que el sistema satisface los requisitos del usuario final."
        },
        {
            id: 21047,
            moduloId: 2102,
            pregunta: "En pruebas de caja blanca, ¿qué se analiza principalmente?",
            opciones: [
                "Interfaz de usuario",
                "Entradas del usuario",
                "Estructura interna del código",
                "Experiencia del cliente"
            ],
            respuestaCorrecta: 2,
            explicacion: "En caja blanca el tester conoce y analiza el código interno, rutas, condiciones y bucles."
        },
        {
            id: 21048,
            moduloId: 2102,
            pregunta: "¿Qué son las pruebas de regresión?",
            opciones: [
                "Pruebas iniciales",
                "Pruebas para validar interfaz",
                "Pruebas que aseguran que cambios no rompen funcionalidades existentes",
                "Pruebas de compilación"
            ],
            respuestaCorrecta: 2,
            explicacion: "Las pruebas de regresión se ejecutan tras cambios para asegurar que nada que funcionaba ha dejado de funcionar."
        },
        {
            id: 21049,
            moduloId: 2102,
            pregunta: "¿Qué ventaja ofrece el patrón Strategy?",
            opciones: [
                "Cambiar algoritmos sin modificar el código principal",
                "Borrar código",
                "Ejecutar código",
                "Crear repositorios"
            ],
            respuestaCorrecta: 0,
            explicacion: "El patrón Strategy permite intercambiar algoritmos en tiempo de ejecución sin cambiar el código cliente."
        },
        {
            id: 21050,
            moduloId: 2102,
            pregunta: "¿Para qué sirve el Daily Scrum?",
            opciones: [
                "Evaluar código",
                "Sincronizar al equipo diariamente",
                "Programar",
                "Diseñar"
            ],
            respuestaCorrecta: 1,
            explicacion: "El Daily Scrum es una reunión diaria de 15 minutos para sincronizar el equipo e identificar impedimentos."
        },
    ],
};

export default moduloTema2;
