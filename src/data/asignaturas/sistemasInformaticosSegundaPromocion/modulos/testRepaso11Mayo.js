export const moduloTestRepaso11Mayo = {
    id: 1906,
    nombre: "Test Repaso - 11 Mayo",
    esExamen: false,
    asignaturaId: 19,
    descripcion: "Test de repaso general: SO, virtualización, sistemas de archivos, RAID, redes y comandos.",
    preguntas: [
        {
            id: 19170,
            moduloId: 1906,
            pregunta: "¿Qué componente gestiona los recursos del sistema?",
            opciones: ["BIOS", "CPU", "RAM", "Sistema Operativo"],
            respuestaCorrecta: 3,
            explicacion: "El Sistema Operativo gestiona todos los recursos del sistema: CPU, memoria, dispositivos de E/S, etc."
        },
        {
            id: 19171,
            moduloId: 1906,
            pregunta: "¿Cuál de estos es un Sistema Operativo?",
            opciones: ["Chrome", "Word", "Linux", "Excel"],
            respuestaCorrecta: 2,
            explicacion: "Linux es un sistema operativo. Chrome es un navegador, Word y Excel son aplicaciones ofimáticas."
        },
        {
            id: 19172,
            moduloId: 1906,
            pregunta: "¿Qué es una máquina virtual?",
            opciones: ["Un hardware físico", "Un sistema simulado por software", "Un antivirus", "Un periférico"],
            respuestaCorrecta: 1,
            explicacion: "Una máquina virtual (VM) es un sistema informático completamente simulado por software que emula un ordenador real."
        },
        {
            id: 19173,
            moduloId: 1906,
            pregunta: "¿Cómo se llama al sistema operativo que se ejecuta dentro de la máquina virtual?",
            opciones: ["Guest", "Host", "Ghost", "Invited"],
            respuestaCorrecta: 0,
            explicacion: "El SO que corre dentro de la VM se llama 'Guest' (invitado). El SO de la máquina física anfitriona se llama 'Host'."
        },
        {
            id: 19174,
            moduloId: 1906,
            pregunta: "¿Cuál es una desventaja de la virtualización?",
            opciones: ["Consumo de recursos", "Mayor velocidad", "Menor coste", "Mejor escalabilidad"],
            respuestaCorrecta: 0,
            explicacion: "La virtualización consume más recursos (CPU y RAM) al tener que mantener múltiples sistemas operativos en la misma máquina."
        },
        {
            id: 19175,
            moduloId: 1906,
            pregunta: "¿Cuáles son ejemplos de Sistemas Operativos libres (licencia GPL/GNU)?",
            opciones: [
                "Windows 11, MacOS, iOS",
                "Ubuntu, Fedora, Debian, Android",
                "Chrome, Firefox, LibreOffice",
                "BIOS, UEFI, GRUB2"
            ],
            respuestaCorrecta: 1,
            explicacion: "Los SO libres bajo GPL/GNU incluyen distribuciones Linux (Ubuntu, Fedora, Debian, Kali...) y Android. Se puede ver, modificar y distribuir su código fuente."
        },
        {
            id: 19176,
            moduloId: 1906,
            pregunta: "¿Cuáles son ejemplos de Sistemas Operativos privativos (licencia OEM)?",
            opciones: [
                "Ubuntu, Android, Kali Linux",
                "MacOS, Windows 11, iOS, Windows Server",
                "Fedora, Debian, Pop OS",
                "LibreOffice, VLC, Firefox"
            ],
            respuestaCorrecta: 1,
            explicacion: "Los SO privativos con licencia OEM incluyen MacOS, Windows 11, iOS, RedHat Enterprise y Windows Server. No permiten acceso libre al código fuente."
        },
        {
            id: 19177,
            moduloId: 1906,
            pregunta: "¿Cuál es el límite de tamaño de archivo en FAT32?",
            opciones: ["4 GB", "2 GB", "8 GB", "16 GB"],
            respuestaCorrecta: 0,
            explicacion: "FAT32 tiene una limitación de 4 GB por archivo, lo que lo hace inadecuado para archivos de vídeo en alta definición u otros ficheros grandes."
        },
        {
            id: 19178,
            moduloId: 1906,
            pregunta: "¿Cuál es el límite de tamaño de archivo en exFAT?",
            opciones: ["4 GB", "2 GB", "8 GB", "16 EiB"],
            respuestaCorrecta: 3,
            explicacion: "exFAT (Extended FAT) admite archivos de hasta 16 EiB (Exbibytes), superando la limitación de 4 GB de FAT32. Es ideal para memorias USB y tarjetas SD modernas."
        },
        {
            id: 19179,
            moduloId: 1906,
            pregunta: "¿Cuál es el límite de tamaño de archivo en NTFS?",
            opciones: ["4 GB", "2 GB", "8 GB", "16 Exabytes (hasta 256 TB en práctica)"],
            respuestaCorrecta: 3,
            explicacion: "NTFS soporta teóricamente hasta 16 Exabytes, aunque el límite práctico es de 256 TB dependiendo del tamaño del clúster."
        },
        {
            id: 19180,
            moduloId: 1906,
            pregunta: "¿Cuál es el gestor de arranque más común en Linux?",
            opciones: ["GRUB2", "LILO", "Bootmgr", "Syslinux"],
            respuestaCorrecta: 0,
            explicacion: "GRUB2 (Grand Unified Bootloader 2) es el gestor de arranque estándar en la mayoría de distribuciones Linux modernas."
        },
        {
            id: 19181,
            moduloId: 1906,
            pregunta: "¿Qué tipo de RAID no tiene tolerancia a fallos?",
            opciones: ["RAID 1", "RAID 5", "RAID 10", "RAID 0"],
            respuestaCorrecta: 3,
            explicacion: "RAID 0 (striping) divide datos entre discos para mayor velocidad, pero sin ninguna redundancia. Si falla un disco, se pierden todos los datos."
        },
        {
            id: 19182,
            moduloId: 1906,
            pregunta: "¿Qué combinación corresponde al arranque moderno de Windows?",
            opciones: ["UEFI + GPT", "BIOS + MBR", "BIOS + GPT", "UEFI + MBR"],
            respuestaCorrecta: 0,
            explicacion: "Los sistemas Windows modernos usan UEFI (firmware) con GPT (tabla de particiones), que permite discos >2 TB y hasta 128 particiones."
        },
        {
            id: 19183,
            moduloId: 1906,
            pregunta: "¿Qué máscara de subred se necesita para tener al menos 6 subredes?",
            opciones: ["/25", "/26", "/27", "/28"],
            respuestaCorrecta: 2,
            explicacion: "/27 toma 3 bits de host: 2³ = 8 subredes (≥6). Con /26 solo se obtienen 2² = 4 subredes, que es insuficiente."
        },
        {
            id: 19184,
            moduloId: 1906,
            pregunta: "¿Cuál es la dirección de broadcast de la red 192.168.50.12/30?",
            opciones: ["192.168.50.12", "192.168.50.13", "192.168.50.15", "192.168.50.14"],
            respuestaCorrecta: 2,
            explicacion: "/30 tiene bloques de 4 IPs. El bloque que contiene .12 es: red .12, hosts .13 y .14, broadcast .15."
        },
        {
            id: 19185,
            moduloId: 1906,
            pregunta: "¿A qué clase pertenece la dirección IP 129.67.8.134?",
            opciones: ["Clase A", "Clase B", "Clase C", "Clase D"],
            respuestaCorrecta: 1,
            explicacion: "La Clase B abarca de 128.0.0.0 a 191.255.255.255. La IP 129.67.8.134 cae en ese rango, por lo que es Clase B."
        },
        {
            id: 19186,
            moduloId: 1906,
            pregunta: "¿Cuál es la abreviación correcta de 2001:0db8:0000:0000:0000:ff00:0042:8329?",
            opciones: [
                "2001:db8:0:0:0:ff00:42:8329",
                "2001:db8::ff00:42:8329",
                "2001:db8:ff00::42:8329",
                "2001:0db8::ff00:0042:8329"
            ],
            respuestaCorrecta: 1,
            explicacion: "Se eliminan ceros iniciales en cada grupo y los tres grupos de ceros consecutivos (:0000:0000:0000:) se reemplazan por :: → 2001:db8::ff00:42:8329."
        },
        {
            id: 19187,
            moduloId: 1906,
            pregunta: "¿Cuál es la abreviación correcta de 4567:0bbc:0000:0000:9876:0000:0000:0345?",
            opciones: [
                "4567:bbc::9876::345",
                "4567:bbc:0:0:9876:0:0:345",
                "4567::bbc:9876:0:0:345",
                "4567:bbc:9876::345"
            ],
            respuestaCorrecta: 1,
            explicacion: "Se eliminan ceros iniciales. Hay dos pares de ceros iguales (grupos 3-4 y grupos 6-7); solo se puede usar :: una vez, así que se dejan explícitos: 4567:bbc:0:0:9876:0:0:345."
        },
        {
            id: 19188,
            moduloId: 1906,
            pregunta: "¿Cuál es la abreviación correcta de 4567:0bbc:0000:0000:0000:9876:0000:0345?",
            opciones: [
                "4567:bbc:0:0:0:9876:0:345",
                "4567:bbc::9876:0:345",
                "4567::bbc:9876::345",
                "4567:bbc:9876::0:345"
            ],
            respuestaCorrecta: 1,
            explicacion: "Se eliminan ceros iniciales. Los grupos 3-4-5 forman el mayor bloque de ceros consecutivos (tres grupos), reemplazados por :: → 4567:bbc::9876:0:345."
        },
        {
            id: 19189,
            moduloId: 1906,
            pregunta: "¿Cuál es la dirección de broadcast de la red 194.56.78.0/30?",
            opciones: ["194.56.78.0", "194.56.78.1", "194.56.78.2", "194.56.78.3"],
            respuestaCorrecta: 3,
            explicacion: "/30 tiene bloques de 4 IPs. Bloque: .0 a .3. La dirección de red es .0 y el broadcast es .3. Los hosts válidos son .1 y .2."
        },
        {
            id: 19190,
            moduloId: 1906,
            pregunta: "¿Cuál es la dirección de broadcast de la red 194.56.78.4/30?",
            opciones: ["194.56.78.5", "194.56.78.6", "194.56.78.7", "194.56.78.8"],
            respuestaCorrecta: 2,
            explicacion: "/30 tiene bloques de 4 IPs. Bloque: .4 a .7. La dirección de red es .4 y el broadcast es .7. Los hosts válidos son .5 y .6."
        },
        {
            id: 19191,
            moduloId: 1906,
            pregunta: "¿Cuántos hosts puede tener una red con máscara /27?",
            opciones: ["32", "30", "64", "16"],
            respuestaCorrecta: 1,
            explicacion: "/27 usa 5 bits para hosts: 2⁵ = 32 direcciones totales. Restando red y broadcast: 32 - 2 = 30 hosts utilizables."
        },
        {
            id: 19192,
            moduloId: 1906,
            pregunta: "¿Cuántos hosts puede tener una red con máscara /17?",
            opciones: ["2¹⁴ - 2 = 16.382", "2¹⁵ - 2 = 32.766", "2¹⁶ - 2 = 65.534", "2¹⁵ = 32.768"],
            respuestaCorrecta: 1,
            explicacion: "/17 deja 32 - 17 = 15 bits para hosts. Número de hosts = 2¹⁵ - 2 = 32.766 (se restan la dirección de red y la de broadcast)."
        },
        {
            id: 19193,
            moduloId: 1906,
            pregunta: "¿Qué comando cambia de directorio y es válido tanto en Windows como en Linux?",
            opciones: ["move", "cd", "dir", "pwd"],
            respuestaCorrecta: 1,
            explicacion: "El comando 'cd' (change directory) funciona en ambos sistemas para navegar entre directorios. 'pwd' muestra el directorio actual (Linux), 'dir' lista contenido (Windows)."
        },
        {
            id: 19194,
            moduloId: 1906,
            pregunta: "¿Qué comando muestra el árbol de directorios y es válido en Windows y Linux?",
            opciones: ["tree", "dir", "list", "show"],
            respuestaCorrecta: 0,
            explicacion: "El comando 'tree' muestra la estructura jerárquica de directorios y está disponible tanto en Windows como en Linux."
        },
        {
            id: 19195,
            moduloId: 1906,
            pregunta: "¿Qué comando muestra el contenido de un directorio en Windows?",
            opciones: ["tree", "dir", "list", "show"],
            respuestaCorrecta: 1,
            explicacion: "En Windows, el comando 'dir' lista el contenido del directorio actual. En Linux el equivalente es 'ls'."
        },
        {
            id: 19196,
            moduloId: 1906,
            pregunta: "¿Qué comando muestra el contenido de un directorio en Linux?",
            opciones: ["tree", "dir", "list", "ls"],
            respuestaCorrecta: 3,
            explicacion: "En Linux, el comando 'ls' (list) muestra el contenido de un directorio. En Windows el equivalente es 'dir'."
        }
    ]
};

export default moduloTestRepaso11Mayo;
