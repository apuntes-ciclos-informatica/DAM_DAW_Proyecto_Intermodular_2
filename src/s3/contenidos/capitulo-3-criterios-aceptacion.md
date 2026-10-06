# Criterios de aceptación

## ¿Qué es un _Criterio de Aceptación_?

Los _criterios de aceptación_ son las condiciones específicas que una _historia de usuario_ debe cumplir para considerarse completa y aceptada por el _Product Owner_.

Describen qué debe ocurrir para que el producto o funcionalidad entregada satisfaga las expectativas del usuario, evitando ambigüedades en la interpretación del requisito.

Cronológicamente hablando, son condiciones que vamos validando en el transcurso de la historia, durante el sprint.

### Ejemplo

**Historia de usuario**
  
  Como estudiante, quiero poder registrarme en _TaskFlow_ mediante mi correo institucional para acceder a mis proyectos de clase.

**Criterios de aceptación**

* El formulario debe validar que el correo pertenece al dominio institucional.
* Si el registro es exitoso, se debe enviar un correo de confirmación.
* El sistema debe impedir registros duplicados con el mismo correo.
* Si el formulario contiene errores, deben mostrarse mensajes descriptivos junto a los campos afectados.

> Se podría decir que estos criterios funcionan como **tests de aceptación**: si se cumplen todos, la historia se puede dar por completada; con que uno no se cumpla la historia no está finalizada.

## ¿Qué es un _Definition of Done_?

Aunque ambos son mecanismos de validación en entornos ágiles, los _Criterios de Aceptación_ y la _Definition of Done (DoD)_ tienen propósitos y alcances muy diferentes. Confundirlos puede llevar a entregar funcionalidades que, aunque "funcionan", carecen de la calidad necesaria para ser consideradas completas.

Las condiciones de la _Definition of Done_ deben de ser satisfechas por **todas** las historias, no sólo del equipo, de totdo el proyecto, mientras que los _Criterios de Aceptación_ solo abarcan a una historia. La tendencia es que el _DoD_ centre en la calidad de las historias, independientemente de lo cada historia tenga que hacer, de manera que garantize que el incremento de producto entregado cumple con los estándares de calidad acordados por el equipo. 

Asegura que el trabajo es realmente "entregable" y no genera deuda técnica. Dicho de otro modo se centra en "cómo": cómo se ha construido la funcionalidad, en la calidad técnica, el proceso y las buenas prácticas del equipo.

Una ejemplo, alejado del aspecto técnico, pero muy clarificador puede ser la creación de pasteles:

Los Criterios de Aceptación obtenidos del pedido del cliente podrían ser:

  * Un pastel de dos pisos
  * Que sea de chocolate, con cobertura de vainilla y fresas frescas encima
  * Que ponga 'Feliz Cumpleaños' en azul.
    
La _Definition of Done_ son los estándares de calidad de tu panadería.

  * Usar solo ingredientes frescos.
  * Pesar todos los ingredientes con precisión.
  * Asegurarse de que el horno esté a la temperatura correcta.
  * Sanitizar todos los utensilios antes y después de usarlos.
  * Empaquetar el pastel en una caja protector

> Una historia de usuario sólo se puede considerar **Hecha (Done)** cuando cumple ambas condiciones: los _Criterios de Aceptación_ y la _DoD_.

## ¿Qué es un _Definition of Ready_?

El _Definition of Ready_ (DoR) representa el conjunto de condiciones que una historia debe cumplir antes de ser aceptada en el sprint o pasar a desarrollo y tiene como objetivo asegurar que la hiostoria está suficientemente detallada y comprendida. 

> Sólo cuando una historia está ready puede empezar a desarrollarse

## Buenas prácticas para redactar _Criterios de Aceptación_

* Usar lenguaje claro, sin tecnicismos innecesarios.
* Expresar comportamientos observables y verificables.
* Mantener independencia: cada criterio debe poder validarse por separado.
* Escribirlos junto con el Product Owner o usuario representativo.
* Utilizar, cuando sea posible, el formato _Gherkin_ _(Given / When / Then)_:
  * _Given_ que el estudiante introduce su correo institucional,
  * _When_ pulsa en “Registrarse”,
  * _Then_ el sistema crea la cuenta y muestra un mensaje de confirmación.


> En historias de usuario que provienen de requisitos no funciooales se suelen utilizar métricas como tiempo promedio para completar una tarea o la cantidad de errores cometidos por el usuario (para medir usabilidades) o tiempo de carga en un % de veces de las pruebas con una conexión de una velocidad determinada.

## _Historias de Usuario_ en Task Flow (ampliado)

### Definition of Ready

::: tabs
==Equipo DAW

| Equipo   | Criterios de Aceptación                                                                                                                        |
| -------- | --------------------------------------------------------------------------------------------------------------------- |
| **DAW**  | • El propósito y alcance funcional están claramente descritos en lenguaje de usuario.<br>• Los criterios de aceptación están definidos y revisados por el Product Owner.<br>• Se dispone del diseño o wireframe correspondiente aprobado por UX/UI.<br>• Los endpoints de API necesarios están definidos o disponibles.<br>• Las dependencias con otros módulos (DAM o ASIR) están identificadas.<br>• La historia está estimada en puntos de historia y priorizada en el backlog.<br>• No hay bloqueos técnicos conocidos (framework, versión, dependencias).<br>• Se ha definido un entorno de prueba o datos de ejemplo para validar la función.            |

Ejemplo: _“Como usuario quiero crear un nuevo proyecto desde el panel web.”_

Antes de desarrollarla, se dispone del mockup, el endpoint _/api/projects/create_, y los criterios de aceptación revisados.


==Equipo DAM

| Equipo   | Criterios de Aceptación                                                                                                                        |
| -------- | --------------------------------------------------------------------------------------------------------------------- |
| **DAM**  | • Se conoce la interacción de usuario esperada (pantalla, flujo o gesto).<br>• El diseño visual o prototipo está aprobado por el equipo DAW (para coherencia visual).<br>• Los endpoints que la app debe consumir están disponibles o documentados.<br>• Se especifica el comportamiento esperado en modo offline (si aplica).<br>• Los criterios de aceptación incluyen comportamiento visual y funcional.<br>• La historia tiene estimación y prioridad definidas en el backlog móvil.<br>• Se conocen los dispositivos o versiones mínimas de Android/iOS a probar.                 |

Ejemplo: _“Como usuario quiero recibir notificaciones cuando se me asigne una tarea.”_

Antes del sprint, está definido el endpoint _/api/notifications_, el mockup del pop-up y el comportamiento offline.

==Equipo ASIR

| Equipo   | Criterios de Aceptación                                                                                                                        |
| -------- | --------------------------------------------------------------------------------------------------------------------- |
| **ASIR** | • Se conoce claramente el entorno afectado (desarrollo, staging, producción).<br>• Están definidos los objetivos de rendimiento o seguridad que se deben cumplir.<br>• Las herramientas a utilizar (Docker, Prometheus, Grafana, etc.) están disponibles.<br>• Existen credenciales o permisos necesarios para desplegar/configurar.<br>• Los criterios de aceptación incluyen validaciones medibles (por ejemplo, uptime ≥ 99%).<br>• No hay dependencias externas bloqueantes (servidores, dominios, certificados). |

Ejemplo: _“Como administrador quiero que el sistema notifique fallos de CPU > 90%.”_

Antes del sprint, está disponible Prometheus, el canal de alertas, y las métricas definidas.
:::

### Historias de Usuario

::: tabs
==Equipo DAW

| ID     | Historia de Usuario                                                                                                        | Criterios de Aceptación                                                                                                   |
| ------ | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| DAW-01 | Como **usuario registrado**, quiero **iniciar sesión en TaskFlow Web** para **acceder a mis proyectos y tareas**.          | - El login debe validar usuario y contraseña. <br> - Si el login falla, debe mostrar un mensaje claro.                    |
| DAW-02 | Como **usuario**, quiero **crear un nuevo proyecto** para **organizar mis tareas por objetivos**.                          | - Se puede crear un proyecto con nombre, descripción y fecha límite. <br> - Se asigna automáticamente como “propietario”. |
| DAW-03 | Como **miembro del equipo**, quiero **asignar tareas a otros usuarios** para **distribuir el trabajo**.                    | - Solo los miembros del proyecto pueden asignar tareas. <br> - Las tareas muestran el responsable y el estado.            |
| DAW-04 | Como **usuario**, quiero **visualizar las tareas en un tablero Kanban** para **ver el estado general del proyecto**.       | - El tablero tiene columnas: Pendiente, En progreso, Hecho. <br> - Permite arrastrar y soltar tareas.                     |
| DAW-05 | Como **administrador**, quiero **gestionar permisos de los usuarios** para **controlar el acceso a proyectos y recursos**.               | `Given que el administrador accede al panel de configuración de usuarios  And existen roles definidos en el sistema  When el administrador asigna el rol “Colaborador” a un usuario  Then el usuario solo podrá crear y editar tareas dentro de los proyectos asignados.  ` <br> `Given que el administrador selecciona un usuario con rol “Invitado”  When intenta modificar un proyecto  Then el sistema debe mostrar un mensaje “Permiso denegado”.  ` <br> `Given que el administrador crea un nuevo rol personalizado  When define permisos específicos (lectura/escritura)  Then el sistema guarda el nuevo rol y lo muestra disponible en el listado de roles.  ` |                          
           
==Equipo DAM
                   
| ID     | Historia de Usuario                                                                           | Criterios de Aceptación                                               |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| DAM-01 | Como **usuario móvil**, quiero **iniciar sesión mediante la API de TaskFlow** para **usar la misma cuenta que en la versión web**.      | - Usa la misma API REST que TaskFlow Web. <br> - Mantiene la sesión activa con token JWT.                |
| DAM-02 | Como **usuario móvil**, quiero **ver mis tareas en una lista ordenada por prioridad** para **no olvidar las más urgentes**.             | - Las tareas se sincronizan con la base de datos común. <br> - Se pueden filtrar por prioridad y estado. |
| DAM-03 | Como **usuario**, quiero **recibir notificaciones push cuando me asignan una tarea nueva** para **mantenerme al tanto del trabajo**.    | - Notificación visible en Android/iOS. <br> - Enlaza directamente con la tarea asignada.                 |
| DAM-04 | Como **usuario sin conexión**, quiero **seguir viendo mis tareas guardadas localmente** para **consultarlas aunque no tenga internet**. | - La app guarda datos en caché local. <br> - Sincroniza cuando vuelve la conexión.                       |
| **DAM-05**  | Como **usuario**, quiero **marcar una tarea como completada desde el móvil** para **actualizar el progreso fácilmente**.  | `Given que el usuario ha iniciado sesión en la app móvil  And tiene conexión a Internet  When marca una tarea como “Completada”  Then la tarea cambia su estado visualmente a “Hecha”  And el progreso del proyecto se actualiza automáticamente.  ` <br> `Given que el usuario marca una tarea como completada  When la app sincroniza con la API de TaskFlow  Then el cambio también se refleja en la versión web.  ` <br> `Given que la tarea ya estaba marcada como completada  When el usuario vuelve a pulsar sobre ella  Then el sistema muestra una notificación indicando “Esta tarea ya está finalizada”.  `                                                   |

==Equipo ASIR

| ID      | Historia de Usuario                                                                                          | Criterios de Aceptación                          |
| ------- | ------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| ASIR-01 | Como **administrador del sistema**, quiero **desplegar TaskFlow en un entorno virtualizado** para **aislar los servicios y facilitar el mantenimiento**. | - Cada servicio (API, BD, Frontend) corre en su propio contenedor o VM.                  |
| ASIR-02 | Como **técnico de sistemas**, quiero **configurar un sistema de monitorización** para **detectar caídas o sobrecargas en tiempo real**.                  | - Se usa Prometheus, Zabbix o similar. <br> - Alertas por correo o Telegram ante fallos. |
| ASIR-03 | Como **devops**, quiero **configurar backups automáticos de la base de datos** para **garantizar la recuperación ante fallos**.                        | - Copias diarias, almacenadas en servidor remoto.                                        |
| ASIR-04 | Como **responsable de seguridad**, quiero **implementar HTTPS y cortafuegos** para **proteger los datos de los usuarios**.                               | - Certificado SSL válido. <br> - Acceso restringido por IP/puertos.                      |
| **ASIR-05** | Como **operador**, quiero **ver métricas de rendimiento de la API y la base de datos** para **garantizar tiempos de respuesta óptimos**. | `Given que los servicios de la API y la base de datos están activos  And Prometheus está recopilando métricas  When el operador accede al dashboard de Grafana  Then se muestran gráficos de uso de CPU, memoria y tiempo de respuesta.  ` <br> `Given que el tiempo de respuesta de la API supera los 2 segundos  When se detecta el evento en Prometheus  Then se genera una alerta visual en Grafana y una notificación al canal de operaciones.  ` <br> `Given que las métricas se estabilizan dentro de los umbrales normales  When pasa un minuto sin alertas nuevas  Then el sistema marca la incidencia como resuelta en el panel de monitorización.  `          |
:::

### Definition of Done


:::tabs
==Equipo DAW
| Equipo   | Definition of Done                                                                              |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **DAW**  | • El código está versionado en la rama principal y pasa los tests unitarios.<br>• La funcionalidad cumple todos los criterios de aceptación.<br>• La revisión por pares (code review) está aprobada.<br>• La versión está desplegada en el entorno de staging.<br>• Existe documentación técnica y de usuario actualizada.                  |

==Equipo DAM
| Equipo   | Definition of Done                                                                              |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **DAM**  | • El código compila sin errores y supera las pruebas instrumentadas.<br>• La app sincroniza correctamente con la API en modo real.<br>• No hay errores detectados en pruebas manuales en Android/iOS.<br>• El APK o build está generado y disponible para testeo interno.<br>• Se documentan los cambios en el registro de versión.         |

==Equipo ASIR
| Equipo   | Definition of Done                                                                              |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **ASIR** | • El servicio está desplegado y accesible desde todos los entornos.<br>• Se validan los scripts de backup y restauración.<br>• Las métricas muestran funcionamiento estable durante al menos 24 horas.<br>• La configuración de red y seguridad está auditada.<br>• La documentación de infraestructura está actualizada en el repositorio. |
:::
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                