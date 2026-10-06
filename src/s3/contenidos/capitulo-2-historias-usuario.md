# Historias de usuario

En Scrum y otras metodologías ágiles, se abandona la idea de crear documentos de requisitos largos y muy detallados al inicio de un proyecto. En su lugar, se utiliza un enfoque más dinámico y flexible centrado en las _historias de usuario_.

Estas historias son descripciones breves y sencillas de una funcionalidad, contadas desde la perspectiva de la persona que la necesita. Su objetivo es cambiar el enfoque de _escribir sobre los requisitos_ a _hablar sobre ellos_.

## ¿Qué es una _Historia de Usuario_?

Una historia de usuario es una explicación informal y general de una funcionalidad de software. Sirve como un recordatorio para una conversación futura, donde el equipo de desarrollo, el _Product Owner_ y los stakeholders colaborarán para definir los detalles. Su formato más común es:

      Como [tipo de usuario], 
      quiero [una meta o acción] 
      para [obtener un beneficio o valor].

Este formato, aunque no es obligatorio, es muy útil porque asegura que el equipo entienda tres cosas fundamentales:

  * Quién lo necesita, lo que ayuda a empatizar con el usuario final.
  * Qué se necesita, que define el objetivo o la funcionalidad deseada.
  * Por qué se necesita, que aporta el contexto y el valor de negocio, lo cual es crucial para tomar decisiones y priorizar.

Puesto en un ejemplo

```
Como profesor,

quiero poder crear nuevas aulas virtuales 

para así organizar el material, las tareas y los alumnos de cada una 
de mis asignaturas de forma independiente.
```

> Cada historia de usuario es un elemento del _Product Backlog_, y debe poder desarrollarse en un solo Sprint.

## Del requisito a las _historias de usuario_

Dado que una historia de usuario debe ser lo suficientemente pequeña para completarse en un solo sprint, es muy común que un requisito deba descomponerse en varias historias más pequeñas. De hecho, en el _Product backlog_ lo que suelen entrar son reaquisitos que quedan en la parte baja hasta que se van refinando en _historias de usuario_ definidas que pueden dar valor.

## Ejemplo

Partimos del requisito:

_"El sistema debe permitir registrar nuevos usuarios mediante un formulario."_

Posibles historias a desglosar:

| ID                 | Historia de usuario                            | 
| ------------------ | ---------------------------------------------------------------------------------------------------- | 
| HU-01              | Como **nuevo usuario**, quiero **registrarme en el sistema mediante un formulario** para **poder acceder a mis proyectos y tareas personales**.           | 
| HU-02              | Como **usuario**, quiero **recibir un correo de confirmación después de registrarme** para **validar que mi cuenta está activa y el correo es correcto**. | 
| HU-03              | Como **administrador**, quiero **consultar la lista de nuevos usuarios registrados** para **verificar que no haya registros fraudulentos o duplicados**.  | 
| HU-04 *(opcional)* | Como **usuario**, quiero **que el sistema me avise si intento registrarme con un correo ya existente** para **evitar errores y confusiones.**      |   



Partimos del requisito:

_"El sistema debe cargar el panel principal en menos de 3 segundos bajo condiciones normales de uso."_

Posibles historias a desglosar:

| ID                     | Historia de usuario                                                                                                                                                              |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HU-NF01           | Como **usuario**, quiero que **el panel principal cargue rápidamente (menos de 3 segundos)** para **no perder tiempo esperando y poder acceder enseguida a mis tareas.**         |
| HU-NF02            | Como **desarrollador front-end**, quiero **optimizar la carga de recursos estáticos (imágenes, scripts, hojas de estilo)** para **mejorar el tiempo de renderizado inicial.**    |
| HU-NF03           | Como **administrador del sistema**, quiero **monitorizar los tiempos de carga promedio del panel** para **detectar si se degradan con el tiempo o con mayor carga de usuarios.** |
| HU-NF04 (opcional) | Como **devops**, quiero **configurar una caché de contenido y compresión GZIP** para **reducir el tamaño de las respuestas del servidor y mejorar la velocidad.**                |

Partimos del requisito:

_"El sistema debe permitir que los usuarios completen sus tareas principales sin necesidad de formación previa, con una interfaz clara y consistente."_

Posibles historias a desglosar:

| ID                     | Historia de usuario                                                                                                                                                              |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HU-UX01            | Como **nuevo usuario**, quiero **entender fácilmente cómo crear, editar y completar tareas** para **poder usar la plataforma sin necesidad de formación.**                          |
| HU-UX02            | Como **diseñador UX**, quiero **aplicar una interfaz consistente con iconografía clara y colores coherentes** para **facilitar la navegación y evitar confusiones.**                |
| HU-UX03           | Como **desarrollador front-end**, quiero **implementar tooltips y ayudas contextuales** para **guiar al usuario en operaciones complejas sin interrumpir su flujo.**                |
| HU-UX04 (opcional) | Como **tester de usabilidad**, quiero **realizar pruebas con usuarios reales y medir la facilidad de uso** para **detectar puntos de fricción y mejorarlos antes del lanzamiento.** |


## _Historias de Usuario_ en Task Flow

::: tabs
==Equipo DAW

| ID     | Historia de Usuario                                        | 
| ------ | --- | 
| DAW-01 | Como **usuario registrado**, quiero **iniciar sesión en TaskFlow Web** para **acceder a mis proyectos y tareas**.          | 
| DAW-02 | Como **usuario**, quiero **crear un nuevo proyecto** para **organizar mis tareas por objetivos**.                          | 
| DAW-03 | Como **miembro del equipo**, quiero **asignar tareas a otros usuarios** para **distribuir el trabajo**.                    |
| DAW-04 | Como **usuario**, quiero **visualizar las tareas en un tablero Kanban** para **ver el estado general del proyecto**.       | 
| DAW-05 | Como **administrador**, quiero **gestionar permisos de los usuarios** para **controlar el acceso a proyectos y recursos**. | 

==Equipo DAM 

| ID     | Historia de Usuario                                                                              | 
| ------ | ------------------------------------------------------------------------------------------------ | 
| DAM-01 | Como **usuario móvil**, quiero **iniciar sesión mediante la API de TaskFlow** para **usar la misma cuenta que en la versión web**.      | 
| DAM-02 | Como **usuario móvil**, quiero **ver mis tareas en una lista ordenada por prioridad** para **no olvidar las más urgentes**.             |
| DAM-03 | Como **usuario**, quiero **recibir notificaciones push cuando me asignan una tarea nueva** para **mantenerme al tanto del trabajo**.    |
| DAM-04 | Como **usuario sin conexión**, quiero **seguir viendo mis tareas guardadas localmente** para **consultarlas aunque no tenga internet**. | 
| DAM-05 | Como **usuario**, quiero **marcar una tarea como completada desde el móvil** para **actualizar el progreso fácilmente**.        | 

==Equipo ASIR 

| ID      | Historia de Usuario              | 
| ------- |  ------------------------------- |
| ASIR-01 | Como **administrador del sistema**, quiero **desplegar TaskFlow en un entorno virtualizado** para **aislar los servicios y facilitar el mantenimiento**. | 
| ASIR-02 | Como **técnico de sistemas**, quiero **configurar un sistema de monitorización** para **detectar caídas o sobrecargas en tiempo real**.                  |
| ASIR-03 | Como **devops**, quiero **configurar backups automáticos de la base de datos** para **garantizar la recuperación ante fallos**.                          | 
| ASIR-04 | Como **responsable de seguridad**, quiero **implementar HTTPS y cortafuegos** para **proteger los datos de los usuarios**.                               | 
| ASIR-05 | Como **operador**, quiero **ver métricas de rendimiento de la API y la base de datos** para **garantizar tiempos de respuesta óptimos**.                 | 


:::