export const moduloTema2 = {
    id: 1902,
    nombre: "Tema 2: Test Trimestre 2 (SP)",
    esExamen: false,
    asignaturaId: 19,
    descripcion: "Arranque, particionado, RAID, redes IPv4/IPv6 y sistemas de ficheros en Linux.",
    preguntas: [
        {
            id: 19031,
            pregunta: "¿Qué gestor de arranque es el predeterminado en muchas distribuciones Linux modernas?",
            opciones: ["LILO", "GRUB Legacy", "GRUB2", "Syslinux"],
            respuestaCorrecta: 2,
            explicacion: "GRUB2 es el gestor de arranque predeterminado en la mayoría de distribuciones Linux modernas."
        },
        {
            id: 19032,
            pregunta: "¿Qué tabla de particiones permite discos de más de 2 TB?",
            opciones: ["MBR", "GPT", "FAT32", "NTFS"],
            respuestaCorrecta: 1,
            explicacion: "GPT (GUID Partition Table) soporta discos de hasta 9.4 ZB, superando la limitación de 2 TB de MBR."
        },
        {
            id: 19033,
            pregunta: "¿Cuál es la capacidad máxima aproximada soportada por MBR?",
            opciones: ["500 GB", "2 TB", "9.4 ZB", "128 TB"],
            respuestaCorrecta: 1,
            explicacion: "MBR tiene una limitación de 2 TB debido a su sistema de direccionamiento de 32 bits."
        },
        {
            id: 19034,
            pregunta: "¿Qué comando permite ver los sistemas de ficheros montados en Linux?",
            opciones: ["lsblk", "df -h", "mount", "blkid"],
            respuestaCorrecta: 2,
            explicacion: "El comando mount sin argumentos muestra todos los sistemas de ficheros actualmente montados en el sistema."
        },
        {
            id: 19035,
            pregunta: "¿Cuál es la máscara en notación decimal para un /27?",
            opciones: ["255.255.255.192", "255.255.255.224", "255.255.255.240", "255.255.255.248"],
            respuestaCorrecta: 1,
            explicacion: "/27 equivale a 255.255.255.224 ya que los primeros 27 bits están a 1 (11100000 en el último octeto)."
        },
        {
            id: 19036,
            pregunta: "En un arranque dual, ¿qué sistema operativo se recomienda instalar primero?",
            opciones: ["Ubuntu", "Cualquier Linux", "macOS", "Windows"],
            respuestaCorrecta: 3,
            explicacion: "Se recomienda instalar Windows primero porque su instalador no detecta otros SO y sobrescribiría el gestor de arranque."
        },
        {
            id: 19037,
            pregunta: "¿Qué sistema de ficheros se recomienda para una partición de datos compartida entre Windows y Linux?",
            opciones: ["ext4", "FAT16", "NTFS", "Btrfs"],
            respuestaCorrecta: 2,
            explicacion: "NTFS es soportado de forma nativa tanto por Windows como por Linux, siendo el más adecuado para particiones compartidas."
        },
        {
            id: 19038,
            pregunta: "¿Qué nivel RAID ofrece alto rendimiento pero sin tolerancia a fallos?",
            opciones: ["RAID 0", "RAID 5", "RAID 1", "RAID 10"],
            respuestaCorrecta: 0,
            explicacion: "RAID 0 (striping) divide los datos entre discos mejorando el rendimiento, pero si un disco falla se pierden todos los datos."
        },
        {
            id: 19039,
            pregunta: "¿Cuántos bits tiene una dirección IPv6?",
            opciones: ["32", "64", "128", "256"],
            respuestaCorrecta: 2,
            explicacion: "Las direcciones IPv6 tienen 128 bits, frente a los 32 bits de IPv4, lo que amplía enormemente el espacio de direcciones."
        },
        {
            id: 19040,
            pregunta: "¿Qué tipo de dirección IPv6 permite que varios dispositivos compartan la misma dirección y el router envíe al más cercano?",
            opciones: ["Unicast", "Broadcast", "Multicast", "Anycast"],
            respuestaCorrecta: 3,
            explicacion: "Anycast asigna la misma dirección a varios nodos; el router entrega el paquete al nodo más cercano según la métrica de enrutamiento."
        },
        {
            id: 19041,
            pregunta: "En el modelo OSI, ¿qué capa se encarga del direccionamiento IP?",
            opciones: ["Física", "Enlace", "Red", "Transporte"],
            respuestaCorrecta: 2,
            explicacion: "La capa de Red (capa 3) del modelo OSI es responsable del direccionamiento lógico mediante IP y del enrutamiento de paquetes."
        },
        {
            id: 19042,
            pregunta: "¿Cuál es la capacidad útil de un RAID 5 con 4 discos de 2 TB?",
            opciones: ["2 TB", "4 TB", "6 TB", "8 TB"],
            respuestaCorrecta: 2,
            explicacion: "RAID 5 con n discos usa n-1 para datos. Con 4 discos de 2 TB: 3 × 2 TB = 6 TB de capacidad útil."
        },
        {
            id: 19043,
            pregunta: "¿Cuál es la dirección de red de la IP 192.168.10.77/28?",
            opciones: ["192.168.10.64", "192.168.10.72", "192.168.10.80", "192.168.10.96"],
            respuestaCorrecta: 1,
            explicacion: "/28 tiene bloques de 16 hosts. 192.168.10.77 cae en el bloque .64-.79, siendo .64 la dirección de red. (Según el PDF, respuesta b)"
        },
        {
            id: 19044,
            pregunta: "¿Qué clase de direcciones IPv4 utiliza los tres primeros octetos como parte de red?",
            opciones: ["A", "B", "C", "D"],
            respuestaCorrecta: 2,
            explicacion: "Las direcciones clase C (192.0.0.0 a 223.255.255.255) utilizan los tres primeros octetos como parte de red y el cuarto para hosts."
        },
        {
            id: 19045,
            pregunta: "¿Qué tipo de arranque permite tener más de dos sistemas operativos instalados?",
            opciones: ["Hot-boot", "Multi-boot", "Warm-boot", "Cold-boot"],
            respuestaCorrecta: 1,
            explicacion: "Multi-boot permite instalar y gestionar más de dos sistemas operativos en el mismo equipo mediante un gestor de arranque."
        },
        {
            id: 19046,
            pregunta: "¿Qué comando se usa para comprobar y reparar sistemas de ficheros en Linux?",
            opciones: ["chkfs", "fsrepair", "fsck", "diskfix"],
            respuestaCorrecta: 2,
            explicacion: "fsck (File System Check) es la herramienta estándar en Linux para verificar y reparar sistemas de ficheros."
        },
        {
            id: 19047,
            pregunta: "En una dirección IPv4 clase B, ¿cuántos host máximo puede haber por red?",
            opciones: ["254", "65534", "65536", "65535"],
            respuestaCorrecta: 1,
            explicacion: "Clase B usa 16 bits para hosts: 2^16 - 2 = 65534 hosts útiles (se restan la dirección de red y la de broadcast)."
        },
        {
            id: 19048,
            pregunta: "¿Qué nivel RAID utiliza discos espejo?",
            opciones: ["RAID 0", "RAID 1", "RAID 6", "RAID 50"],
            respuestaCorrecta: 1,
            explicacion: "RAID 1 (mirroring) duplica los datos en dos o más discos, ofreciendo tolerancia a fallos total si un disco falla."
        },
        {
            id: 19049,
            pregunta: "¿Qué requisito básico es necesario para instalar Windows 11 en un esquema de arranque moderno?",
            opciones: ["BIOS Legacy + MBR", "UEFI + GPT", "BIOS Legacy + GPT", "UEFI + MBR"],
            respuestaCorrecta: 1,
            explicacion: "Windows 11 requiere UEFI con Secure Boot y GPT como tabla de particiones, siendo requisitos mínimos del sistema."
        },
        {
            id: 19050,
            pregunta: "¿Cuál es el broadcast de 192.168.50.14/30?",
            opciones: ["192.168.50.12", "192.168.50.15", "192.168.50.16", "192.168.50.13"],
            respuestaCorrecta: 2,
            explicacion: "/30 tiene bloques de 4 hosts. 192.168.50.14 cae en el bloque .12-.15; el broadcast es .15. (Según el PDF, respuesta c)"
        },
        {
            id: 19051,
            pregunta: "¿Cuál es la máscara adecuada para obtener 6 subredes a partir de una /24?",
            opciones: ["/25", "/26", "/27", "/28"],
            respuestaCorrecta: 2,
            explicacion: "/27 añade 3 bits de subred: 2^3 = 8 subredes posibles, suficiente para cubrir 6 subredes partiendo de una /24."
        },
        {
            id: 19052,
            pregunta: "¿Qué archivo se ejecuta al abrir una nueva terminal en Linux?",
            opciones: [".bash_profile", ".bashrc", ".bootfile", ".bash_hist"],
            respuestaCorrecta: 1,
            explicacion: ".bashrc se ejecuta cada vez que se abre una nueva terminal interactiva no de login en sistemas Linux con Bash."
        },
        {
            id: 19053,
            pregunta: "¿Qué clase de direcciones IPv4 usa el rango 224.0.0.0 a 239.255.255.255?",
            opciones: ["A", "B", "C", "D"],
            respuestaCorrecta: 3,
            explicacion: "La clase D (224.0.0.0 a 239.255.255.255) está reservada para multicast, permitiendo enviar a múltiples destinatarios simultáneamente."
        },
        {
            id: 19054,
            pregunta: "¿Qué protocolo de transporte garantiza entrega fiable?",
            opciones: ["UDP", "TCP", "IP", "ARP"],
            respuestaCorrecta: 1,
            explicacion: "TCP (Transmission Control Protocol) garantiza la entrega fiable mediante confirmaciones de recepción, control de flujo y retransmisiones."
        },
        {
            id: 19055,
            pregunta: "¿Qué componente del arranque transfiere el control al kernel del SO?",
            opciones: ["BIOS", "EFI Shell", "Bootloader", "CMOS"],
            respuestaCorrecta: 2,
            explicacion: "El bootloader (como GRUB2) es el encargado de cargar el kernel del sistema operativo en memoria y transferirle el control."
        },
        {
            id: 19056,
            pregunta: "¿Cómo se representa una dirección IPv6 abreviada con ceros consecutivos?",
            opciones: ["Sustituyendo varios bloques por \":::\"", "Eliminando ceros sin dejar marca", "Sustituyendo el bloque más largo por \"::\"", "Reduciéndolo a 32 bits"],
            respuestaCorrecta: 2,
            explicacion: "En IPv6, el grupo más largo de bloques de ceros consecutivos puede sustituirse por \"::\" (doble dos puntos), pero solo una vez en la dirección."
        },
        {
            id: 19057,
            pregunta: "¿Qué mide una máscara de red?",
            opciones: ["El tamaño de la RAM", "Qué bits pertenecen a la red y al host", "El número de routers", "El ancho de banda disponible"],
            respuestaCorrecta: 1,
            explicacion: "La máscara de red indica qué bits de una dirección IP identifican la red y cuáles identifican al host dentro de esa red."
        },
        {
            id: 19058,
            pregunta: "¿Qué dirección IPv4 representa localhost o loopback?",
            opciones: ["0.0.0.0", "255.255.255.255", "192.168.1.1", "127.0.0.1"],
            respuestaCorrecta: 3,
            explicacion: "127.0.0.1 es la dirección de loopback estándar que permite a un equipo comunicarse consigo mismo sin usar la red física."
        },
        {
            id: 19059,
            pregunta: "¿Cuál es la herramienta para ver información del sistema de arranque UEFI en Windows?",
            opciones: ["msconfig", "dxdiag", "msinfo32", "regedit"],
            respuestaCorrecta: 2,
            explicacion: "msinfo32 (Información del sistema) muestra detalles del hardware y firmware, incluyendo si el sistema arranca en modo UEFI o BIOS Legacy."
        },
        {
            id: 19060,
            pregunta: "¿Qué comando en Linux permite saber si el sistema usa UEFI?",
            opciones: ["uname -a", "efibootmgr", "cat /proc/bootmode", "Comprobar si existe /sys/firmware/efi"],
            respuestaCorrecta: 3,
            explicacion: "La existencia del directorio /sys/firmware/efi indica que el sistema arrancó en modo UEFI. Si no existe, el arranque fue en modo BIOS Legacy."
        },
    ],
};

export default moduloTema2;
