export const moduloTema3 = {
    id: 1903,
    nombre: "Preguntas realizadas en clase",
    esExamen: false,
    asignaturaId: 19,
    descripcion: "Preguntas de subnetting trabajadas durante las clases: cálculo de hosts, broadcast e incrementos CIDR.",
    preguntas: [
        {
            id: 19061,
            pregunta: "Si una subred es 192.168.20.0/26, ¿cuál es su broadcast?",
            opciones: ["192.168.20.63", "192.168.20.64", "192.168.20.127", "192.168.20.255"],
            respuestaCorrecta: 0,
            explicacion: "Una máscara /26 define bloques de 64 direcciones (2^6=64). La red empieza en .0 y su broadcast es .0+64-1 = .63."
        },
        {
            id: 19062,
            pregunta: "En una subred 192.168.5.0/30, ¿cuántos hosts útiles hay?",
            opciones: ["1", "2", "4", "6"],
            respuestaCorrecta: 1,
            explicacion: "Con /30 quedan 2 bits para hosts: 2^2=4 direcciones totales, menos red y broadcast = 2 hosts útiles."
        },
        {
            id: 19063,
            pregunta: "La red 10.10.0.0/20 tiene un incremento de:",
            opciones: ["8", "16", "32", "64"],
            respuestaCorrecta: 1,
            explicacion: "Con /20, el bit de host empieza en el tercer octeto. 2^(24-20)=2^4=16, por lo que el incremento entre subredes es 16 en el tercer octeto."
        },
        {
            id: 19064,
            pregunta: "¿Cuál de las siguientes máscaras permite 510 hosts?",
            opciones: ["/23", "/24", "/25", "/26"],
            respuestaCorrecta: 0,
            explicacion: "Con /23 hay 9 bits para hosts: 2^9=512 direcciones totales, menos red y broadcast = 510 hosts útiles."
        },
        {
            id: 19065,
            pregunta: "¿Cuántos hosts útiles admite una subred con máscara /28?",
            opciones: ["14", "16", "30", "62"],
            respuestaCorrecta: 0,
            explicacion: "Con /28 quedan 4 bits para hosts: 2^4=16 direcciones totales, menos red y broadcast = 14 hosts útiles."
        },
    ],
};

export default moduloTema3;
