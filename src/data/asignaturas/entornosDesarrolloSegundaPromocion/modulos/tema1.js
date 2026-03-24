const moduloTema1 = {
    id: 2101,
    nombre: "Test Diciembre: UD1–UD4 (SP)",
    esExamen: false,
    asignaturaId: 21,
    descripcion: "Software, IDEs, Git, metodologías ágiles (Scrum, Kanban, XP) y patrones de diseño.",
    preguntas: [
        {
            id: 21001,
            moduloId: 2101,
            pregunta: "El software se define como:",
            opciones: [
                "La parte física del ordenador",
                "Programas, instrucciones y datos",
                "Solo aplicaciones de usuario",
                "Hardware lógico"
            ],
            respuestaCorrecta: 1,
            explicacion: "El software comprende todos los programas, instrucciones y datos que permiten al hardware realizar tareas útiles."
        },
        {
            id: 21002,
            moduloId: 2101,
            pregunta: "Eclipse o VS Code son ejemplos de:",
            opciones: [
                "Lenguajes",
                "Sistemas operativos",
                "Entornos de desarrollo (IDE)",
                "Frameworks"
            ],
            respuestaCorrecta: 2,
            explicacion: "Eclipse y VS Code son IDEs (Entornos de Desarrollo Integrado), herramientas que integran editor de código, depurador y otras funcionalidades para el desarrollo de software."
        },
        {
            id: 21003,
            moduloId: 2101,
            pregunta: "Un lenguaje de alto nivel se caracteriza por:",
            opciones: [
                "Cercanía al hardware",
                "Uso de ceros y unos",
                "Mayor abstracción y legibilidad",
                "Dependencia del procesador"
            ],
            respuestaCorrecta: 2,
            explicacion: "Los lenguajes de alto nivel se caracterizan por su mayor abstracción respecto al hardware y su mayor legibilidad para los programadores, alejándose del código máquina."
        },
        {
            id: 21004,
            moduloId: 2101,
            pregunta: "Git es un sistema de control de versiones:",
            opciones: [
                "Centralizado",
                "Distribuido",
                "Exclusivo online",
                "Propietario"
            ],
            respuestaCorrecta: 1,
            explicacion: "Git es un sistema de control de versiones distribuido (DVCS), donde cada desarrollador tiene una copia completa del repositorio en local."
        },
        {
            id: 21005,
            moduloId: 2101,
            pregunta: "Una ventaja clave de Git es:",
            opciones: [
                "Depender del servidor",
                "No guardar historial",
                "Copia completa del repositorio en local",
                "No permitir ramas"
            ],
            respuestaCorrecta: 2,
            explicacion: "La principal ventaja de Git frente a sistemas centralizados es que cada desarrollador tiene una copia completa del repositorio, permitiendo trabajar sin conexión al servidor."
        },
        {
            id: 21006,
            moduloId: 2101,
            pregunta: "Un commit representa:",
            opciones: [
                "Una rama",
                "Un conflicto",
                "Una instantánea del proyecto",
                "Un repositorio"
            ],
            respuestaCorrecta: 2,
            explicacion: "Un commit en Git es una instantánea del estado del proyecto en un momento dado, guardando los cambios realizados junto con un mensaje descriptivo."
        },
        {
            id: 21007,
            moduloId: 2101,
            pregunta: "El comando que prepara archivos para commit es:",
            opciones: [
                "git commit",
                "git push",
                "git add",
                "git status"
            ],
            respuestaCorrecta: 2,
            explicacion: "git add añade los archivos modificados al área de preparación (staging area), paso previo necesario antes de hacer un commit."
        },
        {
            id: 21008,
            moduloId: 2101,
            pregunta: "El archivo .gitignore sirve para:",
            opciones: [
                "Guardar credenciales",
                "Eliminar archivos",
                "Excluir archivos del versionado",
                "Crear ramas"
            ],
            respuestaCorrecta: 2,
            explicacion: "El archivo .gitignore especifica los archivos y carpetas que Git debe ignorar y no incluir en el control de versiones, como archivos de configuración local o dependencias."
        },
        {
            id: 21009,
            moduloId: 2101,
            pregunta: "Scrum es:",
            opciones: [
                "Un lenguaje",
                "Un framework ágil",
                "Una herramienta",
                "Un patrón de diseño"
            ],
            respuestaCorrecta: 1,
            explicacion: "Scrum es un framework ágil para gestionar proyectos de desarrollo de software, basado en sprints, roles definidos y ceremonias específicas."
        },
        {
            id: 21010,
            moduloId: 2101,
            pregunta: "Los sprints en Scrum suelen durar:",
            opciones: [
                "1 día",
                "1–4 semanas",
                "2–6 meses",
                "Sin límite"
            ],
            respuestaCorrecta: 1,
            explicacion: "Los sprints en Scrum son iteraciones de duración fija, generalmente entre 1 y 4 semanas, al final de las cuales se entrega un incremento de producto funcional."
        },
        {
            id: 21011,
            moduloId: 2101,
            pregunta: "El Product Owner es responsable de:",
            opciones: [
                "Programar",
                "Facilitar reuniones",
                "Priorizar el Product Backlog",
                "Resolver conflictos técnicos"
            ],
            respuestaCorrecta: 2,
            explicacion: "El Product Owner es el responsable de definir y priorizar el Product Backlog, maximizando el valor del producto y siendo el enlace entre el equipo y los stakeholders."
        },
        {
            id: 21012,
            moduloId: 2101,
            pregunta: "La Daily Scrum dura como máximo:",
            opciones: [
                "5 minutos",
                "10 minutos",
                "15 minutos",
                "30 minutos"
            ],
            respuestaCorrecta: 2,
            explicacion: "La Daily Scrum es una reunión diaria de sincronización del equipo con una duración máxima de 15 minutos, donde cada miembro comparte lo que hizo, lo que hará y los impedimentos."
        },
        {
            id: 21013,
            moduloId: 2101,
            pregunta: "Kanban se basa principalmente en:",
            opciones: [
                "Sprints cerrados",
                "Roles fijos",
                "Flujo continuo y visualización",
                "Entregas trimestrales"
            ],
            respuestaCorrecta: 2,
            explicacion: "Kanban es una metodología basada en el flujo continuo de trabajo y su visualización mediante un tablero, sin iteraciones fijas ni roles predefinidos."
        },
        {
            id: 21014,
            moduloId: 2101,
            pregunta: "Un límite WIP sirve para:",
            opciones: [
                "Aumentar tareas",
                "Evitar sobrecarga de trabajo",
                "Medir velocidad",
                "Eliminar backlog"
            ],
            respuestaCorrecta: 1,
            explicacion: "El límite WIP (Work In Progress) en Kanban restringe el número máximo de tareas en curso simultáneamente, evitando la sobrecarga y mejorando el flujo."
        },
        {
            id: 21015,
            moduloId: 2101,
            pregunta: "XP pone especial énfasis en:",
            opciones: [
                "Documentación extensa",
                "Calidad técnica del código",
                "Jerarquía",
                "Entregas anuales"
            ],
            respuestaCorrecta: 1,
            explicacion: "Extreme Programming (XP) se enfoca en la calidad técnica del código mediante prácticas como TDD, programación en parejas, integración continua y refactoring."
        },
        {
            id: 21016,
            moduloId: 2101,
            pregunta: "Un patrón de diseño es:",
            opciones: [
                "Código reutilizable",
                "Una librería",
                "Una solución reutilizable a un problema común",
                "Un framework"
            ],
            respuestaCorrecta: 2,
            explicacion: "Un patrón de diseño es una solución general y reutilizable a un problema recurrente en el diseño de software, no es código concreto sino una plantilla o guía."
        },
        {
            id: 21017,
            moduloId: 2101,
            pregunta: "Singleton garantiza:",
            opciones: [
                "Varias instancias",
                "Herencia múltiple",
                "Una única instancia",
                "Bajo acoplamiento siempre"
            ],
            respuestaCorrecta: 2,
            explicacion: "El patrón Singleton garantiza que una clase tenga una única instancia en todo el sistema y proporciona un punto de acceso global a ella."
        },
        {
            id: 21018,
            moduloId: 2101,
            pregunta: "El patrón Factory se usa para:",
            opciones: [
                "Añadir funcionalidades",
                "Crear objetos sin exponer la lógica",
                "Notificar cambios",
                "Cambiar estados"
            ],
            respuestaCorrecta: 1,
            explicacion: "El patrón Factory centraliza la creación de objetos, ocultando la lógica de instanciación al cliente y permitiendo crear objetos de distintas clases bajo una interfaz común."
        },
        {
            id: 21019,
            moduloId: 2101,
            pregunta: "Adapter sirve para:",
            opciones: [
                "Crear objetos",
                "Traducir interfaces incompatibles",
                "Encapsular acciones",
                "Gestionar estados"
            ],
            respuestaCorrecta: 1,
            explicacion: "El patrón Adapter (adaptador) permite que clases con interfaces incompatibles trabajen juntas, traduciendo la interfaz de una clase a otra esperada por el cliente."
        },
        {
            id: 21020,
            moduloId: 2101,
            pregunta: "Decorator permite:",
            opciones: [
                "Cambiar algoritmos",
                "Añadir funcionalidades dinámicamente",
                "Crear instancias únicas",
                "Gestionar flujos"
            ],
            respuestaCorrecta: 1,
            explicacion: "El patrón Decorator añade responsabilidades o funcionalidades a un objeto de forma dinámica en tiempo de ejecución, sin modificar su clase."
        },
        {
            id: 21021,
            moduloId: 2101,
            pregunta: "Observer se basa en:",
            opciones: [
                "Encapsular comandos",
                "Notificar cambios a observadores",
                "Cambiar estados",
                "Crear objetos complejos"
            ],
            respuestaCorrecta: 1,
            explicacion: "El patrón Observer define una dependencia uno-a-muchos entre objetos: cuando el sujeto cambia de estado, todos sus observadores son notificados automáticamente."
        },
        {
            id: 21022,
            moduloId: 2101,
            pregunta: "Strategy permite:",
            opciones: [
                "Notificar eventos",
                "Cambiar algoritmos en tiempo de ejecución",
                "Crear instancias",
                "Encapsular acciones"
            ],
            respuestaCorrecta: 1,
            explicacion: "El patrón Strategy define una familia de algoritmos intercambiables y permite seleccionar el que se utilizará en tiempo de ejecución sin modificar el cliente."
        },
        {
            id: 21023,
            moduloId: 2101,
            pregunta: "Command encapsula:",
            opciones: [
                "Algoritmos",
                "Estados",
                "Acciones como objetos",
                "Dependencias"
            ],
            respuestaCorrecta: 2,
            explicacion: "El patrón Command convierte las solicitudes o acciones en objetos independientes, permitiendo parametrizarlas, almacenarlas o deshacer operaciones."
        },
        {
            id: 21024,
            moduloId: 2101,
            pregunta: "El patrón State se usa cuando:",
            opciones: [
                "Hay un solo comportamiento",
                "El comportamiento depende del estado",
                "No hay estados",
                "Se usan eventos"
            ],
            respuestaCorrecta: 1,
            explicacion: "El patrón State permite a un objeto alterar su comportamiento cuando su estado interno cambia, evitando grandes estructuras condicionales."
        },
        {
            id: 21025,
            moduloId: 2101,
            pregunta: "SOLID es:",
            opciones: [
                "Un lenguaje",
                "Un framework",
                "Un conjunto de principios de diseño",
                "Un patrón"
            ],
            respuestaCorrecta: 2,
            explicacion: "SOLID es un acrónimo que agrupa cinco principios de diseño orientado a objetos (Single Responsibility, Open/Closed, Liskov, Interface Segregation, Dependency Inversion) para crear software más mantenible."
        },
        {
            id: 21026,
            moduloId: 2101,
            pregunta: "Los patrones creacionales se centran en:",
            opciones: [
                "Comunicación entre objetos",
                "Creación de objetos",
                "Flujo de datos",
                "Interfaces gráficas"
            ],
            respuestaCorrecta: 1,
            explicacion: "Los patrones creacionales (Singleton, Factory, Builder, Prototype, Abstract Factory) se ocupan de los mecanismos de creación de objetos, haciéndola más flexible y reutilizable."
        },
        {
            id: 21027,
            moduloId: 2101,
            pregunta: "¿Cuál NO es un pilar de Scrum?",
            opciones: [
                "Transparencia",
                "Inspección",
                "Adaptación",
                "Jerarquía"
            ],
            respuestaCorrecta: 3,
            explicacion: "Los tres pilares de Scrum son Transparencia, Inspección y Adaptación. La jerarquía no es un pilar de Scrum; de hecho, Scrum promueve equipos auto-organizados."
        },
        {
            id: 21028,
            moduloId: 2101,
            pregunta: "Word, Spotify o un navegador web son:",
            opciones: [
                "Software de sistema",
                "Software de aplicación",
                "Software de desarrollo",
                "Lenguajes de programación"
            ],
            respuestaCorrecta: 1,
            explicacion: "Word, Spotify y los navegadores web son ejemplos de software de aplicación, diseñado para que los usuarios realicen tareas específicas."
        },
        {
            id: 21029,
            moduloId: 2101,
            pregunta: "¿Qué comando añade archivos al área de preparación?",
            opciones: [
                "git status",
                "git add",
                "git commit",
                "git push"
            ],
            respuestaCorrecta: 1,
            explicacion: "git add añade los cambios del directorio de trabajo al área de staging (preparación), preparándolos para ser incluidos en el próximo commit."
        },
        {
            id: 21030,
            moduloId: 2101,
            pregunta: "¿Qué comando descarga y fusiona cambios del remoto?",
            opciones: [
                "git merge",
                "git pull",
                "git clone",
                "git diff"
            ],
            respuestaCorrecta: 1,
            explicacion: "git pull descarga los cambios del repositorio remoto (fetch) y los fusiona automáticamente con la rama local actual (merge)."
        },
    ],
};

export default moduloTema1;
