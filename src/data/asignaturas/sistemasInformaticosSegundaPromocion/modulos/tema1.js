/**
 * Datos del módulo Tema 1 perteneciente a la asignatura Sistemas Informáticos Segunda Promoción.
 * Contenido según TEST DE SISTEMAS INFORMÁTICOS - DAM - T1.
 */
export const moduloTema1 = {
    id: 1901,
    nombre: "Tema 1 (SP)",
    asignaturaId: 19,
    esExamen: false,
    descripcion: "Sistema informático, SO, software libre, licencias, virtualización y Linux.",
    preguntas: [
        {
            id: 19001,
            moduloId: 1901,
            pregunta: "¿Qué es un sistema informático?",
            opciones: [
                "Un conjunto de programas informáticos",
                "Solo el hardware de un ordenador",
                "La combinación de hardware, software y usuario",
                "Un sistema operativo"
            ],
            respuestaCorrecta: 2,
            explicacion: "Un sistema informático integra hardware, software y el usuario que lo utiliza."
        },
        {
            id: 19002,
            moduloId: 1901,
            pregunta: "¿Cuál es la función principal del sistema operativo?",
            opciones: [
                "Ejecutar aplicaciones ofimáticas",
                "Coordinar el uso del hardware y ofrecer servicios a las aplicaciones",
                "Fabricar dispositivos",
                "Almacenar datos en la nube"
            ],
            respuestaCorrecta: 1,
            explicacion: "El SO gestiona el hardware y ofrece servicios a las aplicaciones."
        },
        {
            id: 19003,
            moduloId: 1901,
            pregunta: "Sin un sistema operativo, el hardware sería:",
            opciones: [
                "Inutilizable por falta de coordinación",
                "Más seguro",
                "Más rápido",
                "Autónomo"
            ],
            respuestaCorrecta: 0,
            explicacion: "Sin SO no hay coordinación entre componentes; el hardware no sería utilizable."
        },
        {
            id: 19004,
            moduloId: 1901,
            pregunta: "¿Qué caracteriza al software libre?",
            opciones: [
                "Que siempre es gratuito y no necesita licencias",
                "Que no tiene soporte",
                "Que permite usar y modificar el código",
                "Que solo funciona en Linux"
            ],
            respuestaCorrecta: 2,
            explicacion: "El software libre garantiza libertades de uso, estudio, modificación y distribución del código."
        },
        {
            id: 19005,
            moduloId: 1901,
            pregunta: "\"El software libre siempre es gratis\" es:",
            opciones: [
                "Verdadero",
                "Falso",
                "Depende del sistema operativo",
                "Cierto solo en Linux"
            ],
            respuestaCorrecta: 1,
            explicacion: "Software libre no implica gratuidad; se refiere a libertades, no al precio."
        },
        {
            id: 19006,
            moduloId: 1901,
            pregunta: "Una licencia OEM:",
            opciones: [
                "Se puede mover libremente entre equipos",
                "Se puede reinstalar solo en el mismo equipo",
                "Es siempre gratuita",
                "No tiene limitaciones"
            ],
            respuestaCorrecta: 1,
            explicacion: "La licencia OEM va vinculada al equipo en el que se instaló originalmente."
        },
        {
            id: 19007,
            moduloId: 1901,
            pregunta: "Android se basa técnicamente en:",
            opciones: [
                "Windows",
                "Unix",
                "Linux",
                "MacOS"
            ],
            respuestaCorrecta: 2,
            explicacion: "Android utiliza el kernel de Linux como base."
        },
        {
            id: 19008,
            moduloId: 1901,
            pregunta: "¿Qué factor NO influye al elegir un sistema operativo?",
            opciones: [
                "Uso personal o empresarial",
                "Tipo de hardware",
                "Color del equipo",
                "Necesidades del usuario"
            ],
            respuestaCorrecta: 2,
            explicacion: "El color del equipo no es un criterio técnico ni funcional."
        },
        {
            id: 19009,
            moduloId: 1901,
            pregunta: "¿Qué es una máquina virtual?",
            opciones: [
                "Un ordenador físico",
                "Un software que emula un ordenador real",
                "Un sistema operativo portátil",
                "Un disco duro externo"
            ],
            respuestaCorrecta: 1,
            explicacion: "Una MV es un software que simula un ordenador completo sobre otro."
        },
        {
            id: 19010,
            moduloId: 1901,
            pregunta: "Las máquinas virtuales de hardware permiten:",
            opciones: [
                "Ejecutar varias máquinas virtuales en una física",
                "Usar solo un sistema operativo",
                "Eliminar el sistema anfitrión",
                "Aumentar siempre el rendimiento"
            ],
            respuestaCorrecta: 0,
            explicacion: "La virtualización permite ejecutar varias MV sobre un mismo host físico."
        },
        {
            id: 19011,
            moduloId: 1901,
            pregunta: "El sistema operativo instalado en la máquina real se llama:",
            opciones: [
                "Guest",
                "Virtual",
                "Host",
                "Emulado"
            ],
            respuestaCorrecta: 2,
            explicacion: "El host es la máquina física que ejecuta el hipervisor y las MV."
        },
        {
            id: 19012,
            moduloId: 1901,
            pregunta: "El sistema operativo instalado en una máquina virtual se denomina:",
            opciones: [
                "Host",
                "Base",
                "Invitado (guest)",
                "Físico"
            ],
            respuestaCorrecta: 2,
            explicacion: "El sistema que corre dentro de la MV es el invitado (guest)."
        },
        {
            id: 19013,
            moduloId: 1901,
            pregunta: "Una desventaja de la virtualización es:",
            opciones: [
                "Menor flexibilidad",
                "Mayor consumo de energía siempre",
                "Pérdida de rendimiento",
                "Falta de compatibilidad"
            ],
            respuestaCorrecta: 2,
            explicacion: "La capa de virtualización introduce cierto overhead y pérdida de rendimiento."
        },
        {
            id: 19014,
            moduloId: 1901,
            pregunta: "Una ventaja clara de la virtualización en empresas es:",
            opciones: [
                "Mayor coste",
                "Menor estabilidad",
                "Ahorro de tiempo y administración",
                "Menor seguridad"
            ],
            respuestaCorrecta: 2,
            explicacion: "Permite consolidar servidores, clonar entornos y simplificar la administración."
        },
        {
            id: 19015,
            moduloId: 1901,
            pregunta: "¿Cuál de los siguientes es un software de virtualización?",
            opciones: [
                "Ubuntu",
                "VirtualBox",
                "Rufus",
                "Windows Update"
            ],
            respuestaCorrecta: 1,
            explicacion: "VirtualBox es un hipervisor de virtualización de tipo 2."
        },
        {
            id: 19016,
            moduloId: 1901,
            pregunta: "¿Qué debe hacerse primero si un ordenador no permite la virtualización?",
            opciones: [
                "Comprar un ordenador nuevo",
                "Intentar activar la virtualización en la UEFI/BIOS",
                "Cambiar VirtualBox por VMware",
                "Instalar otro sistema operativo"
            ],
            respuestaCorrecta: 1,
            explicacion: "La virtualización por hardware se activa en la configuración UEFI/BIOS."
        },
        {
            id: 19017,
            moduloId: 1901,
            pregunta: "¿Qué comando se utiliza en Linux para abrir el manual de ayuda?",
            opciones: [
                "nam",
                "man",
                "manual",
                "helpman"
            ],
            respuestaCorrecta: 1,
            explicacion: "El comando man muestra las páginas del manual (manual pages)."
        },
        {
            id: 19018,
            moduloId: 1901,
            pregunta: "¿Cuál es una extensión habitual de paquetes instalables en Linux?",
            opciones: [
                ".deb",
                ".exe",
                ".zip",
                ".tgz"
            ],
            respuestaCorrecta: 0,
            explicacion: ".deb es el formato de paquetes en Debian y derivados (Ubuntu)."
        },
        {
            id: 19019,
            moduloId: 1901,
            pregunta: "¿Qué indica el símbolo $ en la terminal de Linux?",
            opciones: [
                "Usuario root",
                "Usuario administrador",
                "Usuario estándar",
                "Error del sistema"
            ],
            respuestaCorrecta: 2,
            explicacion: "El prompt $ indica que la sesión es de un usuario normal; root usa #."
        },
        {
            id: 19020,
            moduloId: 1901,
            pregunta: "¿Qué valor numérico representa el permiso de lectura en Linux?",
            opciones: [
                "6",
                "0",
                "2",
                "4"
            ],
            respuestaCorrecta: 3,
            explicacion: "En permisos numéricos: 4=lectura, 2=escritura, 1=ejecución."
        },
        {
            id: 19021,
            moduloId: 1901,
            pregunta: "¿En qué directorio se encuentran habitualmente los archivos de configuración del sistema en Linux?",
            opciones: [
                "/bin",
                "/var",
                "/etc",
                "/conf"
            ],
            respuestaCorrecta: 2,
            explicacion: "/etc contiene archivos de configuración del sistema y servicios."
        },
        {
            id: 19022,
            moduloId: 1901,
            pregunta: "¿Qué comando se utiliza para actualizar la lista de paquetes disponibles en Linux?",
            opciones: [
                "sudo apt-get install",
                "sudo apt-get upgrade",
                "sudo apt-get update",
                "sudo update"
            ],
            respuestaCorrecta: 2,
            explicacion: "apt-get update actualiza la lista de paquetes disponibles en los repositorios."
        },
        {
            id: 19023,
            moduloId: 1901,
            pregunta: "¿Qué comando muestra el usuario actualmente identificado?",
            opciones: [
                "waiomin",
                "whoami",
                "amiwho",
                "iduser"
            ],
            respuestaCorrecta: 1,
            explicacion: "whoami muestra el nombre del usuario actual."
        },
        {
            id: 19024,
            moduloId: 1901,
            pregunta: "¿Qué comando permite crear un archivo vacío?",
            opciones: [
                "nano",
                "touch",
                "echo",
                "print"
            ],
            respuestaCorrecta: 1,
            explicacion: "touch crea un archivo vacío o actualiza la fecha de modificación."
        },
        {
            id: 19025,
            moduloId: 1901,
            pregunta: "¿A qué permisos equivale chmod 755?",
            opciones: [
                "Todos los usuarios pueden leer",
                "El propietario tiene permisos completos; el resto puede leer y ejecutar",
                "Todos los usuarios pueden leer y escribir",
                "Ninguna de las anteriores"
            ],
            respuestaCorrecta: 1,
            explicacion: "755 = rwxr-xr-x: propietario 7 (rwx), grupo y otros 5 (r-x)."
        },
        {
            id: 19026,
            moduloId: 1901,
            pregunta: "¿Qué comando muestra el espacio disponible en disco?",
            opciones: [
                "df -h",
                "disk -h",
                "free -d",
                "mem -d"
            ],
            respuestaCorrecta: 0,
            explicacion: "df -h muestra el uso de disco de los sistemas de archivos montados."
        },
        {
            id: 19027,
            moduloId: 1901,
            pregunta: "¿Qué comando permite ver los procesos en ejecución?",
            opciones: [
                "ls",
                "ps",
                "run",
                "exec"
            ],
            respuestaCorrecta: 1,
            explicacion: "ps lista los procesos en ejecución."
        },
        {
            id: 19028,
            moduloId: 1901,
            pregunta: "¿Qué indica el símbolo # en la terminal de Linux?",
            opciones: [
                "Usuario estándar",
                "Usuario root",
                "Usuario invitado",
                "Error de permisos"
            ],
            respuestaCorrecta: 1,
            explicacion: "El prompt # indica que la sesión es de superusuario (root)."
        },
        {
            id: 19029,
            moduloId: 1901,
            pregunta: "¿Qué sistema de archivos permite archivos mayores de 4 GB en una unidad USB?",
            opciones: [
                "FAT32",
                "ext2",
                "NTFS",
                "DOSFS"
            ],
            respuestaCorrecta: 2,
            explicacion: "NTFS no tiene el límite de 4 GB por archivo que tiene FAT32."
        },
        {
            id: 19030,
            moduloId: 1901,
            pregunta: "¿Qué comando permite ver la ruta del directorio actual?",
            opciones: [
                "pwd",
                "path",
                "whereami",
                "curdir"
            ],
            respuestaCorrecta: 0,
            explicacion: "pwd (print working directory) muestra la ruta absoluta del directorio actual."
        }
    ],
};

export default moduloTema1;
