export const moduloComandosWindows = {
    id: 1905,
    nombre: "Comandos Windows",
    esExamen: true,
    asignaturaId: 19,
    descripcion: "Comandos del símbolo del sistema (CMD) de Windows para 1DAM",
    preguntas: [
        {
            id: 19124,
            moduloId: 1905,
            pregunta: "¿Qué hace el comando `dir` en CMD?",
            opciones: [
                "Lista el contenido del directorio actual",
                "Elimina el directorio actual",
                "Cambia al directorio raíz",
                "Muestra información del sistema"
            ],
            respuestaCorrecta: 0,
            explicacion: "`dir` lista los archivos y carpetas del directorio actual, mostrando nombre, tamaño y fecha de modificación."
        },
        {
            id: 19125,
            moduloId: 1905,
            pregunta: "¿Para qué sirve el parámetro `/w` en el comando `dir /w`?",
            opciones: [
                "Muestra el contenido en formato ancho con varias columnas",
                "Muestra únicamente los archivos ocultos",
                "Pausa la salida por pantallas",
                "Ordena el resultado por tamaño"
            ],
            respuestaCorrecta: 0,
            explicacion: "`dir /w` muestra el listado en formato ancho, distribuyendo los nombres en varias columnas para aprovechar el ancho de la pantalla."
        },
        {
            id: 19126,
            moduloId: 1905,
            pregunta: "¿Qué efecto tiene el parámetro `/p` en el comando `dir /p`?",
            opciones: [
                "Pausa la salida cada vez que se llena la pantalla",
                "Muestra solo archivos con permisos de lectura",
                "Muestra el contenido en formato ancho",
                "Filtra archivos por extensión"
            ],
            respuestaCorrecta: 0,
            explicacion: "`dir /p` detiene la visualización cuando la pantalla se llena y espera que el usuario pulse una tecla para continuar."
        },
        {
            id: 19127,
            moduloId: 1905,
            pregunta: "¿Para qué se usa el parámetro `/a` en el comando `dir /a`?",
            opciones: [
                "Muestra todos los archivos, incluidos los ocultos y los del sistema",
                "Ordena los archivos alfabéticamente",
                "Muestra solo archivos de texto plano",
                "Activa el modo de administrador"
            ],
            respuestaCorrecta: 0,
            explicacion: "`dir /a` muestra todos los archivos del directorio, incluidos aquellos con atributos de oculto o de sistema que normalmente no aparecen."
        },
        {
            id: 19128,
            moduloId: 1905,
            pregunta: "¿Qué muestra el comando `tree` en CMD?",
            opciones: [
                "La estructura de directorios en forma de árbol",
                "El historial de comandos ejecutados",
                "Los procesos en ejecución ordenados jerárquicamente",
                "La lista de unidades de disco disponibles"
            ],
            respuestaCorrecta: 0,
            explicacion: "`tree` recorre el directorio actual y muestra de forma gráfica la jerarquía de carpetas y subcarpetas."
        },
        {
            id: 19129,
            moduloId: 1905,
            pregunta: "¿Para qué sirve ejecutar `tree /?`?",
            opciones: [
                "Muestra la ayuda del comando tree con sus parámetros disponibles",
                "Muestra el árbol del directorio raíz",
                "Elimina el árbol de directorios vacíos",
                "Abre la documentación de Windows en el navegador"
            ],
            respuestaCorrecta: 0,
            explicacion: "El parámetro `/?` en cualquier comando CMD muestra la ayuda integrada con la descripción y los parámetros disponibles."
        },
        {
            id: 19130,
            moduloId: 1905,
            pregunta: "¿Qué hace el comando `tree C:\\Windows`?",
            opciones: [
                "Muestra el árbol de directorios de la ruta C:\\Windows",
                "Elimina la carpeta C:\\Windows y su contenido",
                "Copia la estructura de C:\\Windows al directorio actual",
                "Lista solo los archivos de C:\\Windows sin subcarpetas"
            ],
            respuestaCorrecta: 0,
            explicacion: "Al indicar una ruta como argumento, `tree` muestra la jerarquía de carpetas a partir de esa ruta específica."
        },
        {
            id: 19131,
            moduloId: 1905,
            pregunta: "¿Qué hace el comando `mkdir NuevaCarpeta` en CMD?",
            opciones: [
                "Crea un nuevo directorio llamado NuevaCarpeta",
                "Mueve la carpeta NuevaCarpeta a otro lugar",
                "Elimina el directorio NuevaCarpeta",
                "Renombra el directorio actual como NuevaCarpeta"
            ],
            respuestaCorrecta: 0,
            explicacion: "`mkdir` (o `md`) crea un nuevo directorio con el nombre indicado en la ubicación actual o en la ruta especificada."
        },
        {
            id: 19132,
            moduloId: 1905,
            pregunta: "¿Para qué se usa el comando `ls` en el entorno Windows?",
            opciones: [
                "Para listar archivos y carpetas en PowerShell o bash en Windows",
                "Para listar servicios del sistema en CMD",
                "Para lanzar el instalador de software",
                "Para mostrar los logs del sistema"
            ],
            respuestaCorrecta: 0,
            explicacion: "`ls` es el equivalente de `dir` en entornos Unix/Linux. En Windows está disponible en PowerShell y en bash (Git Bash, WSL), pero no en CMD nativo."
        },
        {
            id: 19133,
            moduloId: 1905,
            pregunta: "¿Qué hace el comando `cd` en CMD?",
            opciones: [
                "Cambia el directorio de trabajo actual",
                "Crea un directorio nuevo",
                "Compara el contenido de dos directorios",
                "Cierra el CMD"
            ],
            respuestaCorrecta: 0,
            explicacion: "`cd` (Change Directory) permite navegar entre carpetas. `cd ..` sube un nivel y `cd C:\\ruta` va a la ruta indicada."
        },
        {
            id: 19134,
            moduloId: 1905,
            pregunta: "¿Qué hace el comando `type nul > ejemplo.txt` en CMD?",
            opciones: [
                "Crea un archivo vacío llamado ejemplo.txt",
                "Muestra el contenido del archivo ejemplo.txt",
                "Elimina el archivo ejemplo.txt",
                "Copia el archivo nul como ejemplo.txt"
            ],
            respuestaCorrecta: 0,
            explicacion: "Redirigir la salida de `type nul` (que está vacía) a un archivo crea ese archivo con 0 bytes de contenido."
        },
        {
            id: 19135,
            moduloId: 1905,
            pregunta: "¿Qué hace el comando `echo \"hola\" > ejemplo2.txt`?",
            opciones: [
                "Crea el archivo ejemplo2.txt con el texto \"hola\" como contenido",
                "Añade el texto \"hola\" al final del archivo ejemplo2.txt",
                "Muestra el texto \"hola\" en pantalla sin crear ningún archivo",
                "Elimina el archivo ejemplo2.txt y muestra \"hola\""
            ],
            respuestaCorrecta: 0,
            explicacion: "El operador `>` redirige la salida de `echo` hacia un archivo, creándolo (o sobreescribiéndolo si ya existe) con ese contenido."
        },
        {
            id: 19136,
            moduloId: 1905,
            pregunta: "Si el archivo ejemplo2.txt contiene la línea 'hola', ¿qué mostrará el comando `type ejemplo2.txt`?",
            opciones: [
                "hola",
                "ejemplo2.txt: 1 línea",
                "El archivo no existe",
                "NULL"
            ],
            respuestaCorrecta: 0,
            explicacion: "`type` muestra el contenido del archivo en pantalla. Si ejemplo2.txt contiene únicamente 'hola', eso es exactamente lo que se imprimirá."
        },
        {
            id: 19137,
            moduloId: 1905,
            pregunta: "¿Para qué se usa el comando `echo texto >> archivo.txt`?",
            opciones: [
                "Añade el texto al final del archivo sin sobreescribirlo (append)",
                "Sobreescribe el archivo con el texto indicado",
                "Muestra el contenido del archivo en pantalla",
                "Crea una copia del archivo con el nuevo texto"
            ],
            respuestaCorrecta: 0,
            explicacion: "El operador `>>` redirige la salida en modo append: si el archivo existe, agrega el contenido al final; si no existe, lo crea."
        },
        {
            id: 19138,
            moduloId: 1905,
            pregunta: "¿Qué hace el comando `copy ejemplo.txt ejemplo1.txt`?",
            opciones: [
                "Crea una copia del archivo ejemplo.txt llamada ejemplo1.txt",
                "Mueve ejemplo.txt y lo renombra como ejemplo1.txt",
                "Compara los archivos ejemplo.txt y ejemplo1.txt",
                "Elimina ejemplo.txt y crea ejemplo1.txt vacío"
            ],
            respuestaCorrecta: 0,
            explicacion: "`copy` duplica el archivo origen con el nombre destino indicado. El archivo original permanece intacto."
        },
        {
            id: 19139,
            moduloId: 1905,
            pregunta: "¿Para qué se usa el comando `xcopy` en CMD?",
            opciones: [
                "Para copiar archivos y directorios con más opciones que `copy`",
                "Para comparar el contenido de dos directorios",
                "Para extraer archivos comprimidos",
                "Para ejecutar una copia de seguridad del sistema"
            ],
            respuestaCorrecta: 0,
            explicacion: "`xcopy` es una versión extendida de `copy` que permite copiar estructuras de directorios completas y ofrece parámetros adicionales como `/S`, `/E` e `/I`."
        },
        {
            id: 19140,
            moduloId: 1905,
            pregunta: "¿Qué hace el parámetro `/S` en el comando `xcopy /S`?",
            opciones: [
                "Copia directorios y subdirectorios no vacíos",
                "Copia también los directorios vacíos",
                "Hace la copia en modo silencioso",
                "Asume que el destino es un directorio"
            ],
            respuestaCorrecta: 0,
            explicacion: "`xcopy /S` replica la estructura de subdirectorios, pero solo los que contienen al menos un archivo. Los directorios vacíos se omiten."
        },
        {
            id: 19141,
            moduloId: 1905,
            pregunta: "¿Qué diferencia al parámetro `/E` respecto a `/S` en `xcopy`?",
            opciones: [
                "`/E` copia también los directorios vacíos, `/S` los omite",
                "`/E` solo copia archivos ejecutables",
                "`/E` activa el modo de encriptación durante la copia",
                "`/E` es equivalente a `/S`, no hay diferencia"
            ],
            respuestaCorrecta: 0,
            explicacion: "`xcopy /E` amplía el comportamiento de `/S` incluyendo en la copia los subdirectorios que estén vacíos."
        },
        {
            id: 19142,
            moduloId: 1905,
            pregunta: "¿Para qué sirve el parámetro `/I` en `xcopy /I`?",
            opciones: [
                "Si el destino no existe, asume que es un directorio y no pregunta",
                "Ignora los archivos de solo lectura",
                "Incluye archivos del sistema en la copia",
                "Muestra información detallada del progreso"
            ],
            respuestaCorrecta: 0,
            explicacion: "Con `/I`, si el destino no existe, `xcopy` lo crea como directorio automáticamente sin pedir confirmación al usuario."
        },
        {
            id: 19143,
            moduloId: 1905,
            pregunta: "¿Qué hace el comando `xcopy origen destino /S /E /I`?",
            opciones: [
                "Copia toda la estructura de directorios incluyendo vacíos, asumiendo que el destino es un directorio",
                "Copia solo archivos del sistema de forma silenciosa",
                "Copia archivos ejecutables e ignora subdirectorios",
                "Hace una copia incremental solo de los archivos modificados"
            ],
            respuestaCorrecta: 0,
            explicacion: "La combinación `/S /E /I` es habitual para duplicar árboles de directorios completos: `/S` copia subdirectorios, `/E` incluye los vacíos y `/I` evita la pregunta sobre el tipo de destino."
        },
        {
            id: 19144,
            moduloId: 1905,
            pregunta: "¿Qué hace el comando `move ejemplo1.txt carpeta`?",
            opciones: [
                "Mueve el archivo ejemplo1.txt al interior de la carpeta indicada",
                "Crea una copia de ejemplo1.txt dentro de carpeta",
                "Renombra la carpeta como ejemplo1.txt",
                "Elimina ejemplo1.txt y crea carpeta"
            ],
            respuestaCorrecta: 0,
            explicacion: "`move` traslada el archivo al directorio destino indicado. El archivo deja de existir en su ubicación original."
        },
        {
            id: 19145,
            moduloId: 1905,
            pregunta: "¿Qué hace el comando `move carpeta carpeta1`?",
            opciones: [
                "Renombra la carpeta o la mueve a la nueva ubicación indicada",
                "Copia el contenido de carpeta dentro de carpeta1",
                "Elimina carpeta y crea carpeta1 vacía",
                "Compara las dos carpetas"
            ],
            respuestaCorrecta: 0,
            explicacion: "`move` también sirve para renombrar directorios: si carpeta1 no existe, renombra; si existe, mueve carpeta dentro de ella."
        },
        {
            id: 19146,
            moduloId: 1905,
            pregunta: "¿Qué hace el comando `del ejemplo1.txt`?",
            opciones: [
                "Elimina el archivo ejemplo1.txt",
                "Desvincula ejemplo1.txt de su directorio padre",
                "Mueve ejemplo1.txt a la Papelera de reciclaje",
                "Deshabilita el archivo ejemplo1.txt"
            ],
            respuestaCorrecta: 0,
            explicacion: "`del` (o `erase`) elimina permanentemente el archivo indicado. No lo envía a la Papelera de reciclaje."
        },
        {
            id: 19147,
            moduloId: 1905,
            pregunta: "¿Para qué sirve el comando `rmdir carpeta` en CMD?",
            opciones: [
                "Elimina un directorio vacío",
                "Elimina un directorio y todo su contenido",
                "Renombra el directorio indicado",
                "Mueve el directorio a la Papelera de reciclaje"
            ],
            respuestaCorrecta: 0,
            explicacion: "`rmdir` (o `rd`) solo puede eliminar un directorio si está completamente vacío. Para borrar con contenido hay que usar `/S`."
        },
        {
            id: 19148,
            moduloId: 1905,
            pregunta: "¿Qué permite hacer el parámetro `/S` en `rmdir /S carpeta`?",
            opciones: [
                "Eliminar el directorio junto con todos sus archivos y subdirectorios",
                "Eliminar solo los subdirectorios dejando los archivos",
                "Hacer la operación en modo silencioso",
                "Sincronizar el directorio con una copia de seguridad"
            ],
            respuestaCorrecta: 0,
            explicacion: "`rmdir /S` borra de forma recursiva el directorio y todo su contenido, equivalente al `rm -r` de Linux."
        },
        {
            id: 19149,
            moduloId: 1905,
            pregunta: "¿Qué hace el parámetro `/Q` en `rmdir /Q carpeta`?",
            opciones: [
                "Ejecuta el borrado en modo silencioso sin pedir confirmación",
                "Hace la operación más rápida omitiendo la verificación de errores",
                "Solo elimina archivos con atributo de solo lectura",
                "Muestra un resumen al finalizar el borrado"
            ],
            respuestaCorrecta: 0,
            explicacion: "`/Q` activa el modo quiet: suprime la pregunta de confirmación '¿Está seguro?' que aparece al usar `/S`."
        },
        {
            id: 19150,
            moduloId: 1905,
            pregunta: "¿Qué información muestra el comando `systeminfo`?",
            opciones: [
                "Información detallada del sistema: nombre del equipo, SO, RAM, procesador, etc.",
                "Solo la versión del sistema operativo",
                "La lista de procesos en ejecución",
                "La configuración de red del equipo"
            ],
            respuestaCorrecta: 0,
            explicacion: "`systeminfo` muestra un informe completo con datos como versión del SO, fabricante, tipo de procesador, memoria RAM total e instalada, entre otros."
        },
        {
            id: 19151,
            moduloId: 1905,
            pregunta: "¿Para qué se usa el comando `ver` en CMD?",
            opciones: [
                "Muestra la versión del sistema operativo Windows",
                "Verifica la integridad de los archivos del sistema",
                "Muestra la versión del CMD instalado",
                "Lista los drivers instalados en el sistema"
            ],
            respuestaCorrecta: 0,
            explicacion: "`ver` imprime en pantalla el nombre y número de versión de Windows, por ejemplo 'Microsoft Windows [Versión 10.0.19045]'."
        },
        {
            id: 19152,
            moduloId: 1905,
            pregunta: "¿Qué hace el comando `cls` en CMD?",
            opciones: [
                "Limpia la pantalla del CMD eliminando todo el texto visible",
                "Cierra la sesión de CMD",
                "Borra el historial de comandos",
                "Cambia el color de la letra en CMD"
            ],
            respuestaCorrecta: 0,
            explicacion: "`cls` (Clear Screen) borra todo el texto que aparece en la ventana del CMD, dejando solo el prompt listo para el siguiente comando."
        },
        {
            id: 19153,
            moduloId: 1905,
            pregunta: "¿Qué muestra el comando `wmic cpu get name`?",
            opciones: [
                "El nombre del procesador instalado en el equipo",
                "La velocidad actual del procesador en MHz",
                "El número de núcleos del procesador",
                "La temperatura del procesador"
            ],
            respuestaCorrecta: 0,
            explicacion: "`wmic cpu get name` consulta la clase WMI 'cpu' y devuelve el campo 'name', que contiene el modelo completo del procesador."
        },
        {
            id: 19154,
            moduloId: 1905,
            pregunta: "¿Para qué se usa el comando `wmic memorychip get capacity` (RAM)?",
            opciones: [
                "Muestra la capacidad de cada módulo de RAM instalado",
                "Muestra la velocidad de la memoria RAM en MHz",
                "Lista los slots de RAM disponibles en la placa base",
                "Muestra el porcentaje de RAM actualmente en uso"
            ],
            respuestaCorrecta: 0,
            explicacion: "`wmic memorychip get capacity` consulta la clase WMI 'memorychip' y devuelve la capacidad en bytes de cada módulo de memoria instalado."
        },
        {
            id: 19155,
            moduloId: 1905,
            pregunta: "¿Qué información devuelve el comando `wmic bios get name`?",
            opciones: [
                "El nombre o identificador de la versión del BIOS",
                "La fecha de fabricación de la placa base",
                "El fabricante del procesador",
                "La versión del sistema operativo almacenada en el BIOS"
            ],
            respuestaCorrecta: 0,
            explicacion: "`wmic bios get name` accede a la clase WMI 'bios' y muestra el campo 'name', que identifica la versión o nombre del firmware BIOS/UEFI."
        },
        {
            id: 19156,
            moduloId: 1905,
            pregunta: "¿Qué muestra el comando `wmic bios get serialnumber`?",
            opciones: [
                "El número de serie del BIOS o del equipo",
                "El número de serie del disco duro",
                "El número de licencia de Windows",
                "El código de activación del procesador"
            ],
            respuestaCorrecta: 0,
            explicacion: "`wmic bios get serialnumber` devuelve el número de serie almacenado en el BIOS, que normalmente coincide con el número de serie del chasis del equipo."
        },
        {
            id: 19157,
            moduloId: 1905,
            pregunta: "¿Qué es `wmic` en Windows?",
            opciones: [
                "Una herramienta de línea de comandos para administrar el sistema mediante WMI",
                "Un servicio de red para compartir archivos en Windows",
                "Un editor de texto integrado en el CMD",
                "Un gestor de paquetes de Windows"
            ],
            respuestaCorrecta: 0,
            explicacion: "WMIC (Windows Management Instrumentation Command-line) permite consultar y administrar componentes del sistema usando la infraestructura WMI directamente desde CMD."
        },
        {
            id: 19158,
            moduloId: 1905,
            pregunta: "¿Para qué se usa el comando `getmac`?",
            opciones: [
                "Muestra la dirección MAC de los adaptadores de red del equipo",
                "Obtiene la dirección IP del equipo",
                "Muestra el nombre del equipo en la red",
                "Lista las conexiones de red activas"
            ],
            respuestaCorrecta: 0,
            explicacion: "`getmac` muestra las direcciones MAC (Media Access Control) de todos los adaptadores de red instalados, tanto activos como inactivos."
        },
        {
            id: 19159,
            moduloId: 1905,
            pregunta: "¿Qué información muestra el comando `ipconfig`?",
            opciones: [
                "La configuración IP de los adaptadores de red (dirección IP, máscara, puerta de enlace)",
                "Solo muestra si hay conexión a Internet",
                "Muestra la velocidad de conexión de cada adaptador",
                "Lista los puertos de red abiertos en el equipo"
            ],
            respuestaCorrecta: 0,
            explicacion: "`ipconfig` muestra la configuración TCP/IP de cada adaptador de red: dirección IPv4, IPv6, máscara de subred y puerta de enlace predeterminada."
        },
        {
            id: 19160,
            moduloId: 1905,
            pregunta: "¿Qué hace el comando `powershell` ejecutado desde CMD?",
            opciones: [
                "Abre una sesión de PowerShell dentro de la ventana de CMD",
                "Muestra el consumo de energía del equipo",
                "Ejecuta el último script de PowerShell guardado",
                "Instala la última versión de PowerShell"
            ],
            respuestaCorrecta: 0,
            explicacion: "Escribir `powershell` en CMD lanza el intérprete de PowerShell, permitiendo usar cmdlets y scripts de PowerShell sin abrir una nueva ventana."
        },
        {
            id: 19161,
            moduloId: 1905,
            pregunta: "¿Para qué sirve el comando `exit` en CMD?",
            opciones: [
                "Cierra la ventana del CMD o sale del entorno actual (como PowerShell o un script)",
                "Cierra todos los programas abiertos en Windows",
                "Sale del directorio actual y vuelve al raíz",
                "Finaliza el proceso del sistema"
            ],
            respuestaCorrecta: 0,
            explicacion: "`exit` finaliza la sesión actual del CMD o sale del entorno en el que se esté (por ejemplo, PowerShell lanzado desde CMD). Con `/b` sale solo del script sin cerrar CMD."
        },
        {
            id: 19162,
            moduloId: 1905,
            pregunta: "¿Qué hace el comando `tasklist`?",
            opciones: [
                "Muestra la lista de todos los procesos en ejecución con su PID y uso de memoria",
                "Lista las tareas programadas del sistema",
                "Muestra los servicios de Windows activos",
                "Lista los usuarios conectados al equipo"
            ],
            respuestaCorrecta: 0,
            explicacion: "`tasklist` muestra información de todos los procesos activos: nombre del ejecutable, PID, nombre de sesión y memoria utilizada."
        },
        {
            id: 19163,
            moduloId: 1905,
            pregunta: "¿Qué hace el comando `fc ejemplo1 ejemplo2`?",
            opciones: [
                "Compara el contenido de los dos archivos y muestra las diferencias línea a línea",
                "Fusiona los dos archivos en uno solo",
                "Compara los archivos byte a byte y muestra diferencias en hexadecimal",
                "Cuenta las líneas de cada archivo"
            ],
            respuestaCorrecta: 0,
            explicacion: "`fc` (File Compare) realiza una comparación textual de los archivos y muestra los bloques de líneas que son diferentes entre ambos."
        },
        {
            id: 19164,
            moduloId: 1905,
            pregunta: "¿En qué se diferencia `comp ejemplo1 ejemplo2` de `fc`?",
            opciones: [
                "`comp` compara los archivos byte a byte, `fc` compara línea a línea",
                "`comp` solo funciona con archivos de texto, `fc` con cualquier tipo",
                "`comp` muestra las diferencias en formato HTML, `fc` en texto plano",
                "No hay diferencia, son alias del mismo comando"
            ],
            respuestaCorrecta: 0,
            explicacion: "`comp` compara byte a byte y muestra la posición y valor de cada diferencia, siendo útil para archivos binarios. `fc` trabaja a nivel de línea de texto."
        },
        {
            id: 19165,
            moduloId: 1905,
            pregunta: "¿Para qué se usa el comando `edit ejemplo.txt` en CMD?",
            opciones: [
                "Abre el archivo en el editor de texto MS-DOS integrado en CMD",
                "Abre el archivo con el Bloc de notas de Windows",
                "Edita los metadatos del archivo",
                "Abre el archivo en el editor de código predeterminado"
            ],
            respuestaCorrecta: 0,
            explicacion: "`edit` lanza el editor de texto MS-DOS (MS-DOS Editor), una interfaz de texto basada en menús disponible en versiones antiguas de Windows."
        },
        {
            id: 19166,
            moduloId: 1905,
            pregunta: "¿Qué hace el comando `notepad` ejecutado desde CMD?",
            opciones: [
                "Abre el Bloc de notas de Windows",
                "Abre el editor de texto MS-DOS",
                "Crea un nuevo archivo de texto vacío en el directorio actual",
                "Muestra las notas del sistema guardadas"
            ],
            respuestaCorrecta: 0,
            explicacion: "`notepad` lanza la aplicación Bloc de notas (Notepad) de Windows. También puede usarse como `notepad archivo.txt` para abrir un archivo concreto."
        },
        {
            id: 19167,
            moduloId: 1905,
            pregunta: "¿Para qué sirve el comando `set` en CMD?",
            opciones: [
                "Muestra o define variables de entorno del sistema",
                "Configura la resolución de pantalla",
                "Establece permisos de archivos",
                "Sincroniza la hora del sistema"
            ],
            respuestaCorrecta: 0,
            explicacion: "Sin argumentos, `set` lista todas las variables de entorno activas. Con argumento (`set VAR=valor`) define o modifica una variable para la sesión actual."
        },
        {
            id: 19168,
            moduloId: 1905,
            pregunta: "¿Qué muestra el comando `echo %USERNAME%`?",
            opciones: [
                "El nombre del usuario actualmente conectado en Windows",
                "El nombre del equipo en la red",
                "La variable de entorno USERNAME sin expandir",
                "El nombre de la sesión de CMD activa"
            ],
            respuestaCorrecta: 0,
            explicacion: "`%USERNAME%` es una variable de entorno de Windows que contiene el nombre del usuario de la sesión actual. `echo` la expande y muestra su valor."
        },
        {
            id: 19169,
            moduloId: 1905,
            pregunta: "¿Qué hace el comando `type ejemplo.txt | find \"ejemplo\"`?",
            opciones: [
                "Muestra las líneas del archivo que contienen la cadena 'ejemplo'",
                "Cuenta cuántas veces aparece 'ejemplo' en el archivo",
                "Reemplaza todas las ocurrencias de 'ejemplo' en el archivo",
                "Elimina las líneas que contienen 'ejemplo' del archivo"
            ],
            respuestaCorrecta: 0,
            explicacion: "El pipe `|` pasa la salida de `type` como entrada de `find`. Este comando filtra e imprime solo las líneas que contienen la cadena de texto indicada."
        }
    ]
};

export default moduloComandosWindows;
