# _Sprint_ en el desarrollo de TaskFlow

Aunque la mejor forma de entender el día a día de una metodología _Scrum_ es implántadola, vamos a mostrar la evolución los más realista posible de los artefactos de _Scrum_ (_Product Backlog, Sprint Backlog, Incremento_) y de los eventos (_Daily, Refinamiento, Review, Retrospectiva_).

> Lo habitual es que cada equipo _Scrum_ haga sus propias ceremonias (_Refinamiento, Review, Retrospectiva_), sin embargo en proyectos grandes con varios equipos como es _TaskFlow_, es recomendable otra perspectiva. Por ejemplo, se recomienda hacer refinamientos conjuntos puntuales, o al menos mixtos, cuando hay items que se cruzan o generan dependencias o que las retrospectivas se hagan individuales y luego los _Scrum Masters_ hagan una conjunta. Con la _Review_ sí que es más interesante que se realice de manera conjunta ya que el incremento es uno solo y los stakeholders quieren ver algo global.

##  Recursos iniciales por equipo

| Equipo  | Nº de integrantes | Rol Scrum | Roles principales                                      | 
|---------|------------------|------------|------------------------------------------|
| **DAW** (Web) | 5 | Desarrollo | 2 Frontend, 2 Backend, 1 QA | 
| **DAM** (Mobile) | 4 | Desarrollo | 2 Mobile Dev, 1 Backend de apoyo, 1 QA |
| **ASIR** (Infraestructura) | 3 | Desarrollo | 2 DevOps, 1 Sysadmin | 
| **DAW, DAM, ASIR** | 3 (1 por equipo) | Scrum Masters | |
| **Global** | 1 | Product Owner |  |

## Product Backlog inicial (antes del Sprint 1)

| Prioridad | ID  | Equipo | Historia de usuario / Ítem | Estado |
|-----------|-----|--------|-----------------------------|--------|
| 1 | PBI-01 | DAW | Registro y login con email/contraseña | Detallado |
| 2 | PBI-02 | DAW | Creación de proyectos con nombre y descripción | Detallado |
| 3 | PBI-03 | DAW | Tablero Kanban básico con 3 columnas fijas | Detallado |
| 4 | PBI-04 | DAW | API REST con endpoints para proyectos y tareas | Detallado |
| 5 | PBI-05 | DAM | Login móvil contra API | Detallado |
| 6 | PBI-06 | DAM | Visualización de proyectos en la app móvil | Detallado |
| 7 | PBI-07 | ASIR | Monitorización uptime de API y web | Detallado |
| 8 | PBI-08 | ASIR | Dashboard simple en Grafana | Detallado |
| 9 | PBI-09 | DAM | Notificaciones push | Vago |
| 10 | PBI-10 | ASIR | Monitorización avanzada de base de datos | Vago |
| 11 | PBI-11 | DAW | Roles de usuario en proyectos | Vago |

## Sprint Planning (1)

El _Product Owner_ propone que el objetivo del _Sprint_ sea:

  > _Ofrecer la base funcional de TaskFlow Web, con API mínima consumida por la app móvil, y asegurar la disponibilidad con monitorización básica._

De este modo, cada equipo selecciona historias:

* **DAW**: ítems 1, 2, 3, 4.
* **DAM**: ítems 5, 6.
* **ASIR**: ítems 7, 8.


## Product Backlog inicial (Sprint 1)

::: tabs
==DAW – TaskFlow Web
| ID | Tarea | Estado |
|----|-------|--------|
| PBI-01 | Implementar registro de usuario con email y contraseña | Pendiente |
| PBI-01 | Implementar login y validación de sesión | Pendiente |
| PBI-02 | Crear formulario para proyectos (nombre, descripción) | Pendiente |
| PBI-03 | Diseñar e implementar tablero Kanban con 3 columnas | Pendiente |
| PBI-04 | Implementar endpoints `/projects` y `/tasks` | Pendiente |
| PBI-04 | Escribir pruebas unitarias para API | Pendiente |

==Equipo DAM – TaskFlow Mobile
| ID | Tarea | Estado |
|----|-------|--------|
| PBI-05 | Implementar pantalla de login contra API | Pendiente |
| PBI-06 | Diseñar pantalla lista de proyectos | Pendiente |
| PBI-06 | Conectar app con endpoint `/projects` | Pendiente |
| PBI-06 | Pruebas de integración con API | Pendiente |

==Equipo ASIR – TaskFlow Infraestructura
| ID | Tarea | Estado |
|----|-------|--------|
| PBI-07 | Configurar Prometheus para uptime de API y web | Pendiente |
| PBI-07 | Automatizar alerta básica si uptime < 200 OK | Pendiente |
| PBI-08 | Instalar y configurar Grafana | Pendiente |
| PBI-08 | Crear dashboard inicial (uptime, CPU, RAM) | Pendiente |
:::


## Día 2 – Daily Scrum → evolución del Sprint Backlog

* El equipo DAW detecta que el login necesita cifrado de contraseñas → se añade tarea “Implementar hash bcrypt”.

* El equipo DAM ve que no puede avanzar sin el endpoint /api/projects → depende de DAW → se retrasa su tarea de “Visualización de proyectos”.

* El equipo ASIR descubre que falta definir qué métricas son críticas → se añade tarea “Reunión rápida con PO y DAM para definir métricas API”.

## Día 5 - Refinamiento de Product Backlog 

Durante el refinamiento, se revisan ítems vagos del Product Backlog:

| Prioridad | ID  | Equipo | Historia de usuario / Ítem | Estado |
|-----------|-----|--------|-----------------------------|--------|
| 9 | PBI-09 | DAM | Notificaciones push | Vago |
| 10 | PBI-10 | ASIR | Monitorización avanzada de base de datos | Vago |
| 11 | PBI-11 | DAW | Roles de usuario en proyectos | Vago |

pasa a:

| Prioridad | ID  | Equipo | Historia de usuario / Ítem | Estado |
|-----------|-----|--------|-----------------------------|--------|
| 9 | PBI-09 | DAM | El sistema debe enviar una notificación al móvil cuando alguien crea una tarea en un proyecto compartido. | Detallado |
| 10 | PBI-10 | ASIR | Monitorear conexiones activas y tiempos de respuesta de consultas SQL | Detallado |
| 11 | PBI-11 | DAW | Roles de usuario en proyectos | Vago |

## Día 6 – Daily Scrum → cambios en Sprint Backlog

* El equipo de DAW termina API básica → libera a DAM para avanzar en visualización de proyectos.

* El equipo de DAM encuentra bug en login (token expira demasiado pronto) → añade tarea de “Refactor de autenticación”.

* El equipo de ASIR avanza con dashboard pero necesita acceso a métricas de API → se coordina con DAW.

En general el _Sprint Backlog_ evoluciona, se reordenan prioridades y algunas tareas pasan a “En progreso” o “Hechas”.

## Día 10 - Sprint Review

Se presenta el incremento al _Product Owner_ y _stakeholders_:

* DAW muestra TaskFlow Web funcionando con login, proyectos y tablero Kanban.
* DAM enseña login en móvil y lista de proyectos.
* ASIR enseña dashboard en Grafana con uptime, CPU y RAM.

Los _stakeholders_ aportan feedback:

* Cliente pide: “Sería útil poder mover tareas también desde el móvil” → nuevo ítem al _Product Backlog_.
* Dirección de TI pide: “Que las alertas también lleguen por email” → nuevo ítem al _Product Backlog_.


## Día 10 – Retrospectiva

El equipo reflexiona:

* **Bien**: API lista a tiempo, buena coordinación DAW-DAM, dashboard básico útil.

* **Mejorar**: dependencia DAM-DAW bloqueó 2 días → se propone refinamiento conjunto previo entre equipos.

* **Acción**: documentar dependencias críticas en _Sprint Planning_ → se añade como check en futuras planificaciones.

## Product Backlog (Sprint 2)

| Prioridad | ID  | Equipo | Historia de usuario / Ítem | Estado |
|-----------|-----|--------|-----------------------------|--------|
| - | PBI-01 | DAW | Registro y login con email/contraseña | ✅ |
| - | PBI-02 | DAW | Creación de proyectos con nombre y descripción | ✅ |
| - | PBI-03 | DAW | Tablero Kanban básico con 3 columnas fijas | ✅ |
| - | PBI-04 | DAW | API REST con endpoints para proyectos y tareas | ✅ |
| - | PBI-05 | DAM | Login móvil contra API | ✅ |
| 1 | PBI-06 | DAM | Visualización de proyectos en la app móvil | Detallado |
| - | PBI-07 | ASIR | Monitorización uptime de API y web | ✅ |
| - | PBI-08 | ASIR | Dashboard simple en Grafana | ✅ |
| 2 | PBI-12 | DAM | Mover tareas desde móvil | Detallado |
| 3 | PBI-13 | ASIR | Alertas por email | Detallado |
| 4 | PBI-09 | DAM | Enviar una notificación al móvil cuando alguien crea una tarea en un proyecto compartido. | Detallado |
| 5 | PBI-10 | ASIR | Monitorear conexiones activas y tiempos de respuesta de consultas SQL | Detallado |
| 6 | PBI-11 | DAW | Roles de usuario en proyectos | Vago |
