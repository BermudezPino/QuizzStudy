/**
 * Datos del módulo Comandos Linux perteneciente a la asignatura Sistemas Informáticos Segunda Promoción.
 * Cubre los 29 comandos esenciales de Linux para el ciclo DAM (1DAM).
 */
export const moduloComandosLinux = {
    id: 1904,
    nombre: "Comandos Linux",
    asignaturaId: 19,
    esExamen: false,
    descripcion: "Comandos esenciales de la terminal Linux: navegación, gestión de archivos, procesos y permisos.",
    preguntas: [
        // ── ls ──────────────────────────────────────────────────────────────
        {
            id: 19066,
            moduloId: 1904,
            pregunta: "¿Para qué sirve el comando ls?",
            opciones: [
                "Listar el contenido de un directorio",
                "Mostrar el espacio libre en disco",
                "Crear un directorio nuevo",
                "Mostrar los procesos activos"
            ],
            respuestaCorrecta: 0,
            explicacion: "ls (list) muestra los archivos y directorios que hay dentro de un directorio."
        },
        {
            id: 19067,
            moduloId: 1904,
            pregunta: "¿Qué comando se usa para listar los archivos de un directorio, incluidos los ocultos?",
            opciones: [
                "ls -l",
                "ls -h",
                "ls -a",
                "ls -r"
            ],
            respuestaCorrecta: 2,
            explicacion: "ls -a (all) muestra también los archivos ocultos, que son los que empiezan por punto en Linux."
        },
        // ── pwd ─────────────────────────────────────────────────────────────
        {
            id: 19068,
            moduloId: 1904,
            pregunta: "¿Para qué sirve el comando pwd?",
            opciones: [
                "Mostrar el nombre del usuario actual",
                "Mostrar la ruta del directorio en el que estás",
                "Mostrar los permisos del directorio actual",
                "Mostrar el historial de comandos"
            ],
            respuestaCorrecta: 1,
            explicacion: "pwd (print working directory) muestra la ruta completa del directorio donde te encuentras en ese momento."
        },
        {
            id: 19069,
            moduloId: 1904,
            pregunta: "¿Qué comando usarías para saber en qué directorio estás trabajando?",
            opciones: [
                "ls",
                "pwd",
                "cd",
                "whoami"
            ],
            respuestaCorrecta: 1,
            explicacion: "pwd muestra la ruta absoluta del directorio de trabajo actual."
        },
        // ── cd ──────────────────────────────────────────────────────────────
        {
            id: 19070,
            moduloId: 1904,
            pregunta: "¿Para qué se utiliza el comando cd?",
            opciones: [
                "Copiar directorios",
                "Cambiar el directorio de trabajo",
                "Crear un directorio nuevo",
                "Comprimir una carpeta"
            ],
            respuestaCorrecta: 1,
            explicacion: "cd (change directory) permite moverte de un directorio a otro en la terminal."
        },
        {
            id: 19071,
            moduloId: 1904,
            pregunta: "¿Qué hace el comando cd ..?",
            opciones: [
                "Va al directorio raíz /",
                "Va al directorio home del usuario",
                "Sube al directorio anterior (carpeta padre)",
                "Lista los archivos del directorio actual"
            ],
            respuestaCorrecta: 2,
            explicacion: "cd .. sube un nivel en el árbol de directorios, es decir, te lleva al directorio que contiene al actual."
        },
        // ── cat ─────────────────────────────────────────────────────────────
        {
            id: 19072,
            moduloId: 1904,
            pregunta: "¿Para qué sirve el comando cat?",
            opciones: [
                "Listar el contenido de un directorio",
                "Mostrar el contenido de un archivo de texto",
                "Comparar dos archivos",
                "Buscar texto dentro de un archivo"
            ],
            respuestaCorrecta: 1,
            explicacion: "cat muestra por pantalla el contenido de uno o varios archivos de texto."
        },
        {
            id: 19073,
            moduloId: 1904,
            pregunta: "¿Qué comando se usa para mostrar el contenido de un archivo llamado notas.txt?",
            opciones: [
                "open notas.txt",
                "cat notas.txt",
                "read notas.txt",
                "show notas.txt"
            ],
            respuestaCorrecta: 1,
            explicacion: "cat notas.txt imprime el contenido del archivo notas.txt en la pantalla."
        },
        // ── less ────────────────────────────────────────────────────────────
        {
            id: 19074,
            moduloId: 1904,
            pregunta: "¿Para qué sirve el comando less?",
            opciones: [
                "Eliminar las últimas líneas de un archivo",
                "Ver el contenido de un archivo página a página",
                "Reducir el tamaño de un archivo",
                "Comparar dos archivos"
            ],
            respuestaCorrecta: 1,
            explicacion: "less permite ver el contenido de un archivo de forma paginada, pudiendo desplazarse hacia arriba y abajo sin mostrar todo de golpe."
        },
        {
            id: 19075,
            moduloId: 1904,
            pregunta: "¿Cuál es la diferencia principal entre cat y less al ver un archivo?",
            opciones: [
                "cat muestra el archivo con colores y less no",
                "less permite desplazarse por el contenido; cat lo muestra todo de golpe",
                "less edita el archivo; cat solo lo muestra",
                "cat es más lento que less"
            ],
            respuestaCorrecta: 1,
            explicacion: "cat vuelca todo el contenido a la vez. less lo pagina, lo que es más cómodo para archivos largos."
        },
        // ── cp ──────────────────────────────────────────────────────────────
        {
            id: 19076,
            moduloId: 1904,
            pregunta: "¿Para qué se utiliza el comando cp?",
            opciones: [
                "Mover archivos a otra carpeta",
                "Copiar archivos o directorios",
                "Comprimir archivos",
                "Cambiar los permisos de un archivo"
            ],
            respuestaCorrecta: 1,
            explicacion: "cp (copy) copia archivos o directorios de una ubicación a otra."
        },
        {
            id: 19077,
            moduloId: 1904,
            pregunta: "¿Qué comando copiaría el archivo notas.txt dentro de la carpeta /tmp?",
            opciones: [
                "mv notas.txt /tmp",
                "cp notas.txt /tmp",
                "copy notas.txt /tmp",
                "cat notas.txt /tmp"
            ],
            respuestaCorrecta: 1,
            explicacion: "cp origen destino copia el archivo en la ruta de destino indicada."
        },
        // ── mv ──────────────────────────────────────────────────────────────
        {
            id: 19078,
            moduloId: 1904,
            pregunta: "¿Para qué sirve el comando mv?",
            opciones: [
                "Mostrar el contenido de un archivo",
                "Mover o renombrar archivos y directorios",
                "Montar unidades de almacenamiento",
                "Ver las versiones de un archivo"
            ],
            respuestaCorrecta: 1,
            explicacion: "mv (move) mueve archivos o directorios a otra ubicación. Si origen y destino están en el mismo directorio, sirve para renombrar."
        },
        {
            id: 19079,
            moduloId: 1904,
            pregunta: "¿Qué comando usarías para renombrar el archivo notas.txt y llamarlo apuntes.txt?",
            opciones: [
                "cp notas.txt apuntes.txt",
                "mv notas.txt apuntes.txt",
                "rename notas.txt apuntes.txt",
                "touch notas.txt apuntes.txt"
            ],
            respuestaCorrecta: 1,
            explicacion: "mv en el mismo directorio actúa como renombrado: elimina el nombre original y lo sustituye por el nuevo."
        },
        // ── rm ──────────────────────────────────────────────────────────────
        {
            id: 19080,
            moduloId: 1904,
            pregunta: "¿Qué hace el comando rm?",
            opciones: [
                "Mueve archivos a la papelera",
                "Elimina archivos del sistema",
                "Renombra archivos",
                "Comprime archivos"
            ],
            respuestaCorrecta: 1,
            explicacion: "rm elimina archivos de forma permanente. En Linux no existe papelera de reciclaje en la terminal por defecto."
        },
        {
            id: 19081,
            moduloId: 1904,
            pregunta: "¿Qué comando se usa para eliminar una carpeta y todo su contenido?",
            opciones: [
                "rm carpeta",
                "del -a carpeta",
                "rm -rf carpeta",
                "remove carpeta"
            ],
            respuestaCorrecta: 2,
            explicacion: "rm -r elimina recursivamente y -f fuerza el borrado sin pedir confirmación. Juntos, rm -rf borra un directorio con todo lo que contiene."
        },
        // ── mkdir ───────────────────────────────────────────────────────────
        {
            id: 19082,
            moduloId: 1904,
            pregunta: "¿Para qué sirve el comando mkdir?",
            opciones: [
                "Mover directorios",
                "Crear un directorio nuevo",
                "Mostrar el contenido de un directorio",
                "Modificar permisos de un directorio"
            ],
            respuestaCorrecta: 1,
            explicacion: "mkdir (make directory) crea uno o varios directorios nuevos en el sistema de archivos."
        },
        {
            id: 19083,
            moduloId: 1904,
            pregunta: "¿Qué comando crearías para hacer la carpeta 'proyectos'?",
            opciones: [
                "touch proyectos",
                "mkdir proyectos",
                "cd proyectos",
                "create proyectos"
            ],
            respuestaCorrecta: 1,
            explicacion: "mkdir proyectos crea el directorio llamado 'proyectos' en la ubicación actual."
        },
        // ── tar ─────────────────────────────────────────────────────────────
        {
            id: 19084,
            moduloId: 1904,
            pregunta: "¿Para qué se usa principalmente el comando tar?",
            opciones: [
                "Ver el uso del disco",
                "Empaquetar y comprimir archivos o directorios",
                "Transferir archivos por red",
                "Listar procesos en ejecución"
            ],
            respuestaCorrecta: 1,
            explicacion: "tar agrupa uno o varios archivos en un único fichero (empaquetado), y puede comprimirlo al mismo tiempo."
        },
        {
            id: 19085,
            moduloId: 1904,
            pregunta: "¿Qué hace el comando tar cuando se usa para extraer un archivo?",
            opciones: [
                "Crea un nuevo paquete comprimido",
                "Descomprime y extrae el contenido del archivo",
                "Lista el contenido sin extraer nada",
                "Elimina el archivo original"
            ],
            respuestaCorrecta: 1,
            explicacion: "Al extraer, tar descomprime el archivo y saca su contenido en el directorio indicado."
        },
        // ── ps ──────────────────────────────────────────────────────────────
        {
            id: 19086,
            moduloId: 1904,
            pregunta: "¿Para qué sirve el comando ps?",
            opciones: [
                "Mostrar el espacio libre en disco",
                "Ver los procesos que están en ejecución en ese momento",
                "Ver los paquetes instalados",
                "Mostrar el estado de la red"
            ],
            respuestaCorrecta: 1,
            explicacion: "ps (process status) muestra una lista de los procesos que se están ejecutando en el sistema en el momento de lanzarlo."
        },
        {
            id: 19087,
            moduloId: 1904,
            pregunta: "¿Qué comando muestra todos los procesos del sistema con información detallada?",
            opciones: [
                "ps -a",
                "ps aux",
                "ps -l",
                "ps -q"
            ],
            respuestaCorrecta: 1,
            explicacion: "ps aux muestra todos los procesos del sistema, incluyendo los de otros usuarios y los que no tienen terminal asociada."
        },
        // ── top ─────────────────────────────────────────────────────────────
        {
            id: 19088,
            moduloId: 1904,
            pregunta: "¿Para qué sirve el comando top?",
            opciones: [
                "Mostrar el espacio libre en disco",
                "Ver los procesos y el uso de CPU y RAM en tiempo real",
                "Listar los paquetes instalados",
                "Mostrar los archivos más recientes de un directorio"
            ],
            respuestaCorrecta: 1,
            explicacion: "top muestra en tiempo real los procesos en ejecución junto con el consumo de CPU y memoria del sistema."
        },
        {
            id: 19089,
            moduloId: 1904,
            pregunta: "¿En qué se diferencia top de ps?",
            opciones: [
                "top solo muestra los procesos del usuario actual",
                "top se actualiza en tiempo real; ps solo muestra una foto del momento",
                "top es más lento que ps",
                "top solo funciona como administrador"
            ],
            respuestaCorrecta: 1,
            explicacion: "top refresca la lista de procesos continuamente. ps toma una instantánea en el momento en que se ejecuta."
        },
        // ── htop ────────────────────────────────────────────────────────────
        {
            id: 19090,
            moduloId: 1904,
            pregunta: "¿Para qué sirve el comando htop?",
            opciones: [
                "Gestionar paquetes de software",
                "Ver los procesos del sistema con una interfaz visual más clara que top",
                "Ver el historial de comandos",
                "Comprimir archivos"
            ],
            respuestaCorrecta: 1,
            explicacion: "htop es un monitor de procesos con interfaz visual a color y barras de uso de CPU y RAM, más fácil de usar que top."
        },
        {
            id: 19091,
            moduloId: 1904,
            pregunta: "¿Qué ventaja tiene htop respecto a top?",
            opciones: [
                "Consume menos recursos",
                "Tiene una interfaz visual con colores y permite usar el ratón",
                "Es más antiguo y estable",
                "Solo muestra los 10 procesos que más CPU consumen"
            ],
            respuestaCorrecta: 1,
            explicacion: "htop añade colores, barras de progreso y soporte para el ratón, lo que lo hace más intuitivo que top."
        },
        // ── pstree ──────────────────────────────────────────────────────────
        {
            id: 19092,
            moduloId: 1904,
            pregunta: "¿Qué muestra el comando pstree?",
            opciones: [
                "El árbol de directorios del sistema",
                "Los procesos organizados como un árbol, mostrando qué proceso creó a cada uno",
                "Los paquetes instalados en forma de árbol",
                "Las dependencias de un programa"
            ],
            respuestaCorrecta: 1,
            explicacion: "pstree muestra los procesos en forma de árbol según su relación padre-hijo, permitiendo ver el origen de cada proceso."
        },
        {
            id: 19093,
            moduloId: 1904,
            pregunta: "¿Qué comando se usa para ver los procesos del sistema en forma de árbol jerárquico?",
            opciones: [
                "ps tree",
                "top -t",
                "pstree",
                "ls -p"
            ],
            respuestaCorrecta: 2,
            explicacion: "pstree muestra los procesos organizados en una jerarquía que refleja qué proceso lanzó a cada otro."
        },
        // ── apt ─────────────────────────────────────────────────────────────
        {
            id: 19094,
            moduloId: 1904,
            pregunta: "¿Para qué sirve el comando apt en sistemas como Ubuntu?",
            opciones: [
                "Gestionar los permisos de archivos",
                "Instalar, actualizar y eliminar programas",
                "Administrar los procesos del sistema",
                "Configurar la red"
            ],
            respuestaCorrecta: 1,
            explicacion: "apt es el gestor de paquetes de sistemas basados en Debian como Ubuntu. Permite instalar, actualizar y eliminar software."
        },
        {
            id: 19095,
            moduloId: 1904,
            pregunta: "¿Qué comando instalaría el programa 'curl' en Ubuntu?",
            opciones: [
                "apt download curl",
                "apt install curl",
                "apt get curl",
                "install curl"
            ],
            respuestaCorrecta: 1,
            explicacion: "apt install nombre-del-paquete es el comando para instalar un programa en sistemas Debian/Ubuntu."
        },
        // ── man ─────────────────────────────────────────────────────────────
        {
            id: 19096,
            moduloId: 1904,
            pregunta: "¿Para qué sirve el comando man?",
            opciones: [
                "Gestionar usuarios del sistema",
                "Ver el manual de ayuda de un comando",
                "Ver el mapa de red",
                "Manipular archivos de texto"
            ],
            respuestaCorrecta: 1,
            explicacion: "man (manual) abre la documentación oficial del comando indicado, con su descripción, opciones y ejemplos de uso."
        },
        {
            id: 19097,
            moduloId: 1904,
            pregunta: "¿Qué comando usarías para leer la documentación del comando ls?",
            opciones: [
                "help ls",
                "info ls",
                "man ls",
                "ls --help-manual"
            ],
            respuestaCorrecta: 2,
            explicacion: "man ls abre la página del manual oficial del comando ls."
        },
        // ── whoami ──────────────────────────────────────────────────────────
        {
            id: 19098,
            moduloId: 1904,
            pregunta: "¿Para qué sirve el comando whoami?",
            opciones: [
                "Mostrar el nombre del equipo",
                "Mostrar el nombre del usuario que está usando la terminal",
                "Mostrar el directorio home del usuario",
                "Mostrar la dirección IP del equipo"
            ],
            respuestaCorrecta: 1,
            explicacion: "whoami muestra el nombre del usuario con el que estás trabajando en ese momento en la terminal."
        },
        {
            id: 19099,
            moduloId: 1904,
            pregunta: "¿Qué comando te dice con qué usuario estás conectado en la terminal?",
            opciones: [
                "id",
                "user",
                "whoami",
                "pwd"
            ],
            respuestaCorrecta: 2,
            explicacion: "whoami imprime el nombre del usuario activo en la sesión de terminal actual."
        },
        // ── sudo ────────────────────────────────────────────────────────────
        {
            id: 19100,
            moduloId: 1904,
            pregunta: "¿Para qué se usa sudo antes de un comando?",
            opciones: [
                "Para ejecutar el comando en segundo plano",
                "Para ejecutar el comando con permisos de administrador",
                "Para mostrar la ayuda del comando",
                "Para guardar la salida en un archivo"
            ],
            respuestaCorrecta: 1,
            explicacion: "sudo permite ejecutar un comando con los privilegios del superusuario (root), necesarios para tareas de administración del sistema."
        },
        {
            id: 19101,
            moduloId: 1904,
            pregunta: "¿Qué hace sudo apt install htop?",
            opciones: [
                "Busca el programa htop en los repositorios",
                "Instala el programa htop con permisos de administrador",
                "Actualiza la lista de paquetes disponibles",
                "Elimina el programa htop del sistema"
            ],
            respuestaCorrecta: 1,
            explicacion: "sudo ejecuta el comando apt install htop como administrador, lo que es necesario para instalar software en el sistema."
        },
        // ── history ─────────────────────────────────────────────────────────
        {
            id: 19102,
            moduloId: 1904,
            pregunta: "¿Para qué sirve el comando history?",
            opciones: [
                "Mostrar el historial de archivos editados",
                "Mostrar los últimos comandos que has ejecutado en la terminal",
                "Mostrar el historial de conexiones de red",
                "Mostrar los cambios de contraseña del usuario"
            ],
            respuestaCorrecta: 1,
            explicacion: "history muestra una lista numerada de los comandos ejecutados anteriormente en la terminal."
        },
        {
            id: 19103,
            moduloId: 1904,
            pregunta: "¿Qué comando muestra los comandos que has ejecutado anteriormente en la terminal?",
            opciones: [
                "log",
                "history",
                "past",
                "commands"
            ],
            respuestaCorrecta: 1,
            explicacion: "history lista los comandos ejecutados previamente en la sesión y los guardados en el archivo ~/.bash_history."
        },
        // ── clear ───────────────────────────────────────────────────────────
        {
            id: 19104,
            moduloId: 1904,
            pregunta: "¿Qué hace el comando clear?",
            opciones: [
                "Elimina todos los archivos del directorio actual",
                "Limpia la pantalla de la terminal",
                "Cierra la sesión del usuario",
                "Borra el historial de comandos"
            ],
            respuestaCorrecta: 1,
            explicacion: "clear limpia la pantalla de la terminal dejándola en blanco para trabajar con más comodidad."
        },
        {
            id: 19105,
            moduloId: 1904,
            pregunta: "¿Qué comando usarías para limpiar la pantalla de la terminal en Linux?",
            opciones: [
                "reset",
                "cls",
                "clear",
                "flush"
            ],
            respuestaCorrecta: 2,
            explicacion: "clear es el comando estándar en Linux para limpiar la pantalla de la terminal. En Windows el equivalente es cls."
        },
        // ── echo ────────────────────────────────────────────────────────────
        {
            id: 19106,
            moduloId: 1904,
            pregunta: "¿Para qué sirve el comando echo?",
            opciones: [
                "Repetir el último comando ejecutado",
                "Mostrar texto o el valor de una variable en la pantalla",
                "Crear un archivo de texto",
                "Listar las variables de entorno"
            ],
            respuestaCorrecta: 1,
            explicacion: "echo imprime texto o el contenido de variables en la pantalla. Es muy usado en scripts para mostrar mensajes."
        },
        {
            id: 19107,
            moduloId: 1904,
            pregunta: "¿Qué hace el comando echo \"Hola mundo\"?",
            opciones: [
                "Crea un archivo llamado Hola mundo",
                "Muestra el texto Hola mundo en la pantalla",
                "Busca el texto Hola mundo en el sistema",
                "Traduce el texto al idioma del sistema"
            ],
            respuestaCorrecta: 1,
            explicacion: "echo imprime el texto indicado directamente en la pantalla de la terminal."
        },
        // ── touch ───────────────────────────────────────────────────────────
        {
            id: 19108,
            moduloId: 1904,
            pregunta: "¿Para qué sirve el comando touch?",
            opciones: [
                "Borrar el contenido de un archivo",
                "Crear un archivo vacío o actualizar su fecha de modificación",
                "Comprimir archivos al crearlos",
                "Abrir un archivo para editarlo"
            ],
            respuestaCorrecta: 1,
            explicacion: "touch crea un archivo vacío si no existe. Si ya existe, actualiza su fecha de modificación sin cambiar el contenido."
        },
        {
            id: 19109,
            moduloId: 1904,
            pregunta: "¿Qué comando se usa para crear un archivo vacío llamado notas.txt?",
            opciones: [
                "touch notas.txt",
                "create notas.txt",
                "new notas.txt",
                "mkfile notas.txt"
            ],
            respuestaCorrecta: 0,
            explicacion: "touch notas.txt crea el archivo notas.txt vacío si no existía."
        },
        // ── find ────────────────────────────────────────────────────────────
        {
            id: 19110,
            moduloId: 1904,
            pregunta: "¿Para qué se usa el comando find?",
            opciones: [
                "Buscar texto dentro de archivos",
                "Buscar archivos y directorios en el sistema",
                "Encontrar el proceso que usa más CPU",
                "Localizar paquetes instalados"
            ],
            respuestaCorrecta: 1,
            explicacion: "find busca archivos y carpetas dentro del sistema de archivos según criterios como el nombre, tamaño o fecha."
        },
        {
            id: 19111,
            moduloId: 1904,
            pregunta: "¿Qué comando buscaría todos los archivos con extensión .txt dentro de la carpeta /home?",
            opciones: [
                "grep .txt /home",
                "ls /home *.txt",
                "find /home -name \"*.txt\"",
                "search /home .txt"
            ],
            respuestaCorrecta: 2,
            explicacion: "find /home -name \"*.txt\" recorre recursivamente /home buscando todos los archivos cuyo nombre termina en .txt."
        },
        // ── grep ────────────────────────────────────────────────────────────
        {
            id: 19112,
            moduloId: 1904,
            pregunta: "¿Para qué sirve el comando grep?",
            opciones: [
                "Ver el historial de red",
                "Buscar texto dentro de archivos",
                "Gestionar los permisos de archivos",
                "Ver los procesos activos"
            ],
            respuestaCorrecta: 1,
            explicacion: "grep busca líneas que contienen un texto o patrón determinado dentro de archivos o en la salida de otros comandos."
        },
        {
            id: 19113,
            moduloId: 1904,
            pregunta: "¿Qué comando buscaría la palabra 'error' dentro del archivo registro.txt?",
            opciones: [
                "find error registro.txt",
                "grep error registro.txt",
                "search error registro.txt",
                "cat registro.txt error"
            ],
            respuestaCorrecta: 1,
            explicacion: "grep error registro.txt muestra todas las líneas del archivo registro.txt que contienen la palabra 'error'."
        },
        // ── head ────────────────────────────────────────────────────────────
        {
            id: 19114,
            moduloId: 1904,
            pregunta: "¿Para qué sirve el comando head?",
            opciones: [
                "Mostrar las últimas líneas de un archivo",
                "Mostrar las primeras líneas de un archivo",
                "Mostrar el encabezado de metadatos de un archivo",
                "Mostrar las líneas más largas de un archivo"
            ],
            respuestaCorrecta: 1,
            explicacion: "head muestra las primeras líneas de un archivo. Por defecto muestra las 10 primeras."
        },
        {
            id: 19115,
            moduloId: 1904,
            pregunta: "¿Qué comando usarías para ver solo el principio de un archivo de texto largo?",
            opciones: [
                "tail archivo.txt",
                "head archivo.txt",
                "top archivo.txt",
                "less archivo.txt"
            ],
            respuestaCorrecta: 1,
            explicacion: "head muestra las primeras líneas del archivo, útil para ver el comienzo sin abrir todo el contenido."
        },
        // ── tail ────────────────────────────────────────────────────────────
        {
            id: 19116,
            moduloId: 1904,
            pregunta: "¿Para qué sirve el comando tail?",
            opciones: [
                "Mostrar las primeras líneas de un archivo",
                "Mostrar las últimas líneas de un archivo",
                "Ordenar las líneas de un archivo",
                "Eliminar líneas duplicadas de un archivo"
            ],
            respuestaCorrecta: 1,
            explicacion: "tail muestra las últimas líneas de un archivo. Por defecto muestra las 10 últimas."
        },
        {
            id: 19117,
            moduloId: 1904,
            pregunta: "¿Qué comando usarías para ver las últimas líneas de un archivo de registro (log)?",
            opciones: [
                "head log.txt",
                "end log.txt",
                "tail log.txt",
                "last log.txt"
            ],
            respuestaCorrecta: 2,
            explicacion: "tail log.txt muestra las últimas líneas del archivo, muy útil para revisar los mensajes más recientes de un log."
        },
        // ── df ──────────────────────────────────────────────────────────────
        {
            id: 19118,
            moduloId: 1904,
            pregunta: "¿Para qué sirve el comando df?",
            opciones: [
                "Mostrar los archivos duplicados en el sistema",
                "Mostrar el espacio libre y usado en los discos",
                "Mostrar las diferencias entre dos archivos",
                "Mostrar el estado de los discos en RAID"
            ],
            respuestaCorrecta: 1,
            explicacion: "df (disk free) muestra el espacio total, usado y disponible en cada disco o partición del sistema."
        },
        {
            id: 19119,
            moduloId: 1904,
            pregunta: "¿Qué comando se usa para ver cuánto espacio libre hay en el disco?",
            opciones: [
                "du",
                "df",
                "ls -s",
                "free"
            ],
            respuestaCorrecta: 1,
            explicacion: "df muestra el espacio disponible en cada sistema de archivos montado. Con df -h se ve en formato legible (GB, MB)."
        },
        // ── du ──────────────────────────────────────────────────────────────
        {
            id: 19120,
            moduloId: 1904,
            pregunta: "¿Para qué sirve el comando du?",
            opciones: [
                "Mostrar el espacio libre total en disco",
                "Mostrar cuánto espacio ocupa un archivo o carpeta",
                "Duplicar archivos en otra partición",
                "Ver las unidades de almacenamiento montadas"
            ],
            respuestaCorrecta: 1,
            explicacion: "du (disk usage) informa del espacio que ocupa un archivo o directorio concreto en el disco."
        },
        {
            id: 19121,
            moduloId: 1904,
            pregunta: "¿Qué comando usarías para saber cuánto espacio ocupa la carpeta 'Documentos'?",
            opciones: [
                "df Documentos",
                "ls -s Documentos",
                "du Documentos",
                "size Documentos"
            ],
            respuestaCorrecta: 2,
            explicacion: "du Documentos muestra el tamaño que ocupa esa carpeta y su contenido en el disco."
        },
        // ── chmod ───────────────────────────────────────────────────────────
        {
            id: 19122,
            moduloId: 1904,
            pregunta: "¿Para qué sirve el comando chmod?",
            opciones: [
                "Cambiar el propietario de un archivo",
                "Cambiar los permisos de un archivo o directorio",
                "Cambiar el nombre de un archivo",
                "Comprobar la integridad de un archivo"
            ],
            respuestaCorrecta: 1,
            explicacion: "chmod (change mode) cambia los permisos de lectura, escritura y ejecución de archivos y directorios."
        },
        {
            id: 19123,
            moduloId: 1904,
            pregunta: "¿Qué hace chmod 755 sobre un archivo?",
            opciones: [
                "Da permisos de lectura y escritura a todos",
                "Da permisos totales al propietario y solo lectura y ejecución al resto",
                "Quita todos los permisos del archivo",
                "Da permisos solo al propietario y ninguno al resto"
            ],
            respuestaCorrecta: 1,
            explicacion: "755 significa que el propietario puede leer, escribir y ejecutar (7), y el grupo y otros solo pueden leer y ejecutar (5)."
        },
    ],
};

export default moduloComandosLinux;
