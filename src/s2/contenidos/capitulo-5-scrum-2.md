# Scrum (II)

## El Scrum Master 

El **Scrum Master** es el facilitador del marco de trabajo _Scrum_, el encargado de que la metodología funcione. Su función no es mandar ni dirigir, sino servir al equipo y al _Product Owner_ para que _Scrum_ se entienda, se respete y se aplique correctamente. Es un rol de liderazgo basado en la influencia y no en la autoridad. 

Se relaciona con todos los roles integrantes en la metodología. En su relación con el _Product Owner_:

- Le ayuda **gestionar de forma efectiva el Product Backlog**.  
- Facilita la **comunicación con los stakeholders**, evitando interferencias directas.  
- Apoya en la **priorización por valor**.

Mientras que en su relación con el Equipo de Desarrollo:

- Elimina impedimentos que bloquean el avance del equipo.
- Fomenta la autoorganización y la colaboración multidisciplinar.  
- Motiva al equipo y favorece un entorno de confianza y cohesión.  
- Media en conflictos.

En general un buen Scrum Master debe:

- Conocer muy bien el funcionamiento de _Scrum_.
- Permitir que el equipo se concentre en aportar valor, hacerles las cosa fáciles.
- Guíar en prácticas ágiles y mejora continua, haciendo funciones de mentor y coach.
- Detectar señales de desmotivación o riesgo siendo muy observador.
- Promueve la confianza y la motivación, para lo que tienen que ser positivo y empático.
- Actuar rápido ante bloqueos, es decir ser resolutivo.

## La Planificación del Sprint

La _Planificación del Sprint_ (_Sprint Planning_) es el evento que marca el inicio de cada _Sprint_. En esta reunión, todo el _Scrum Team_ (_Product Owner, Scrum Master y Equipo de Desarrollo_) colabora para definir **qué se va a construir en el Sprint** y **cómo se va a llevar a cabo**. 

Su propósito es crear un plan de trabajo realista y compartido por todo el equipo.

### Participantes

- **Product Owner**. Explica las prioridades y responde preguntas sobre los requisitos.  
- **Equipo de Desarrollo**. Decide cuántos ítems puede asumir y cómo los implementará.  
- **Scrum Master**. Facilita la reunión y asegura que el proceso de Scrum se respete.  

### Objetivos principales

- **Definir el objetivo del Sprint (Sprint Goal)**: una meta clara que conecta el trabajo del Sprint con la visión del producto.  

::: tabs
== DAW (Web)

_Ofrecer la base funcional de TaskFlow Web que permita a los usuarios registrarse, crear proyectos y gestionar sus tareas en un tablero Kanban básico, asegurando además una API inicial para que el equipo de móvil pueda empezar a integrarse._

== DAM (Móvil)

_Desarrollar la primera versión funcional de la app móvil que permita a los usuarios autenticarse y visualizar sus proyectos, conectándose a la API de TaskFlow Web._

== ASIR (Infraestructura)

_Establecer la infraestructura básica de monitorización que asegure la disponibilidad de la API y los servicios principales de TaskFlow, proporcionando visibilidad en un dashboard sencillo._

:::

- **Seleccionar ítems del Product Backlog**. El _Product Owner_ propone los elementos de mayor prioridad, y el equipo de desarrollo decide cuántos puede comprometerse a completar.  
- **Planificar cómo se hará el trabajo**. El equipo desglosa las historias en tareas técnicas, identifica dependencias y estima el esfuerzo necesario.  


### Buenas prácticas

- Llegar con el _Backlog_ refinado y priorizado.
- Mantener la reunión enfocada y acotada (máximo 4 horas para un _Sprint_ de dos semanas, proporcionalmente más para _Sprints_ más cortos).  
- Asegurarse de que las historias seleccionadas estén claras y sean factibles (_Definition of Ready_).
- Redactar un _Sprint Goal_ conciso que unifique el esfuerzo del equipo. 

### Errores comunes

- Dejar que el _Product Owner_ imponga cuántas historias deben hacerse sin que el equipo lo valide.  
- Escoger historias mal definidas o sin criterios de aceptación claros.  
- Planificar en exceso y detallar absolutamente todas las tareas, perdiendo flexibilidad.  
- No redactar un _Sprint Goal_, dejando el _Sprint_ sin dirección clara.  


## El Sprint Backlog

A partir de los objetivos de la _Planificación_ se contruye el artefacto del _Sprint Backlog_. De una manera sencilla, se podría decir que es el plan de trabajo del _Sprint_. Incluye:

1. El _Sprint Goal_,	el objetivo único que el equipo se compromete a alcanzar durante el _Sprint_.
2. Los items seleccionados del Product Backlog.
3. Las tareas detalladas y implementables por el equipo de desarrollo para transformar cada item del Product Backlog Item seleccionado en un producto terminado.

Es un artefacto vivo y dinámico. A medida que los Developers trabajan, inspeccionan el progreso y el _Sprint Backlog_ se adapta constantemente (se añaden o eliminan tareas técnicas, se ajusta el plan, etc.) para reflejar el trabajo restante necesario para lograr el _Sprint Goal_. Y les proporciona una visión en tiempo real de lo que deben hacer para cumplir el _Sprint Goal_. 

También ofrece transparencia sobre el progreso al resto del _Scrum Team_ y a los _stakeholders_.

<center>

| Por hacer | En curso   | Hecho |
| :--       | :---       | :--   |
| PBI-1. T1. [Desarrollador A] | PBI-2. T1	[Desarrollador B] | PBI-1. T2 [Desarrollador B] |
| PBI-2. T3. [Desarrollador B] | PBI-2. T2	[Desarrollador C] | PBI-1. T4 [Desarrollador C] |
|  | PBI-3. T1	[Desarrollador D] | PBI-1. T3 [Desarrollador D] |
|  |  | PBI-1. T4 [Desarrollador D] |

</center>

PBI: Product Backlog Item

## La Daily Scrum

La _Daily Scrum_ es una reunión muy corta, únicamente para desarrolladores, y con un límite de tiempo estricto (unos 15 minutos) que se celebra todos los días del _Sprint_.

### Objetivo

El propósito fundamental de la _Daily Scrum_ es la inspección y adaptación diarias del plan del _Sprint_. Los desarrolladores no solo están informando lo que hicieron; están activamente buscando respuestas a:

  1. ¿Estamos en camino de lograr el _Sprint Goal_?
  2. ¿Necesitamos ajustar nuestro plan de hoy para asegurar el progreso?
  3. ¿Tenemos impedimentos o bloqueos que nos impiden avanzar?

Al responder estas preguntas, los desarroladores ajustan el _Sprint Backlog_ y redefinen su plan de trabajo para las siguientes 24 horas.

### Formato

El método tradicional implica que cada desarrollador responda a tres preguntas enfocadas en el _Sprint Goal_:

  1. ¿Qué hice ayer?
  2. ¿Qué haré hoy?
  3. ¿Hay algún impedimento que me esté bloqueando a mí o al equipo?

### Buenas prácticas

- Caminar el Tablero (_Walk the Board_). En lugar de que cada persona hable por turnos, el equipo debe ir revisando los ítems del _Sprint Backlog_ uno por uno (generalmente de derecha a izquierda: lo más cerca de _Hecho_). Esto asegura que el foco esté en terminar el trabajo ya iniciado.

### Errores comunes

 - Considerarla como una sesión de resolución de problemas.
 - Considerarla como una reunión de estatus para el _Product Owner_.