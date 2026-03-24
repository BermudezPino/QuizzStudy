export const moduloTema8 = {
    id: 1608,
    nombre: "Tema 8: Interfaces Gráficas con JavaFX (SP)",
    esExamen: false,
    asignaturaId: 16,
    descripcion: "Interfaces Gráficas con JavaFX",
    preguntas: [
        {
            id: 16081,
            moduloId: 1608,
            pregunta: "¿Qué framework es recomendado actualmente para crear interfaces gráficas en Java?",
            opciones: [
                "Swing",
                "JavaFX",
                "AWT",
                "Servlet"
            ],
            respuestaCorrecta: 1,
            explicacion: "JavaFX es el framework moderno recomendado para crear GUI en Java"
        },
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
            id: 16086,
            moduloId: 1608,
            pregunta: "¿Qué tecnología permite separar el diseño visual de la lógica en aplicaciones JavaFX?",
            opciones: [
                "CSS",
                "JSON",
                "FXML",
                "JDBC"
            ],
            respuestaCorrecta: 2,
            explicacion: "FXML permite separar la interfaz visual del código Java"
        },
        {
            id: 16087,
            moduloId: 1608,
            pregunta: "¿Qué layout de JavaFX organiza los elementos en filas y columnas como una tabla?",
            opciones: [
                "VBox",
                "HBox",
                "BorderPane",
                "GridPane"
            ],
            respuestaCorrecta: 3,
            explicacion: "GridPane organiza los componentes en filas y columnas"
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
        {
            id: 16089,
            moduloId: 1608,
            pregunta: "¿Qué clase de JavaFX se utiliza para crear animaciones basadas en una secuencia temporal de KeyFrames?",
            opciones: [
                "Timeline",
                "AnimationTimer",
                "FadeTransition",
                "SceneTransition"
            ],
            respuestaCorrecta: 0,
            explicacion: "Timeline permite crear animaciones basadas en KeyFrames"
        },
        {
            id: 16090,
            moduloId: 1608,
            pregunta: "¿Qué patrón de arquitectura divide una aplicación en Modelo, Vista y Controlador?",
            opciones: [
                "DAO",
                "MVC",
                "Singleton",
                "Factory"
            ],
            respuestaCorrecta: 1,
            explicacion: "MVC separa la aplicación en Modelo, Vista y Controlador"
        }
    ]
};

export default moduloTema8;
