# Sesión 5: Diseño de Arquitectura y Diagramas Técnicos

**Objetivo:** Aprender a visualizar y documentar la estructura técnica de una aplicación o sistema.

**Tipo de Sesión:** Teórica.

**Ciclos:** ASIR, DAM, DAW.

## La Importancia de la Visualización

"Una imagen vale más que mil palabras". En el mundo de la tecnología, un buen diagrama vale más que mil líneas de código o documentación. Los diagramas técnicos son herramientas esenciales para:

-   **Comunicar:** Explicar diseños complejos a otros miembros del equipo, a los stakeholders o a futuros desarrolladores.
-   **Planificar:** Diseñar la estructura de un sistema antes de empezar a construirlo.
-   **Analizar:** Identificar posibles cuellos de botella, puntos de fallo o problemas de seguridad.
-   **Documentar:** Dejar un registro claro de cómo está construido un sistema.

## Diagramas para DAM/DAW

Para los desarrolladores de aplicaciones, los diagramas se centran en la estructura del software y el flujo de datos.

### Diagrama Entidad-Relación (ERD)

-   **¿Qué es?** Un diagrama que muestra la estructura de una base de datos: las tablas (entidades), sus columnas (atributos) y las relaciones entre ellas.
-   **¿Por qué es útil?** Es el plano de tu base de datos. Ayuda a asegurar que los datos están organizados de forma lógica y eficiente.

### Diagrama de Casos de Uso

-   **¿Qué es?** Un diagrama que muestra las interacciones entre los usuarios (actores) y el sistema. Describe las diferentes funcionalidades que el sistema ofrece.
-   **¿Por qué es útil?** Ayuda a definir el alcance del sistema desde la perspectiva del usuario.

### Diagrama de Secuencia

-   **¿Qué es?** Un diagrama que muestra cómo los objetos o componentes de un sistema interactúan entre sí a lo largo del tiempo para realizar una tarea específica (ej: un proceso de login).
-   **¿Por qué es útil?** Es excelente para entender la lógica de una operación compleja y el orden en que ocurren las cosas.

## Diagramas para ASIR

Para los administradores de sistemas, los diagramas se centran en la infraestructura física o virtual que soporta las aplicaciones.

### Diagrama de Red

-   **¿Qué es?** Un diagrama que visualiza la topología de una red, incluyendo routers, switches, firewalls, subredes y cómo se conectan entre sí.
-   **¿Por qué es útil?** Es fundamental para planificar la seguridad, el rendimiento y la conectividad de una red.

### Diagrama de Infraestructura (Física/Cloud)

-   **¿Qué es?** Un diagrama que muestra los componentes de hardware o servicios en la nube que componen un sistema: servidores, balanceadores de carga, bases de datos, servicios de almacenamiento, etc.
-   **¿Por qué es útil?** Proporciona una visión de alto nivel de toda la infraestructura, ayudando a entender su arquitectura y a planificar su escalabilidad y resiliencia.

### Diagrama de Despliegue

-   **¿Qué es?** Un diagrama que muestra cómo se distribuyen los artefactos de software (ej: una aplicación, una base de datos) en los nodos de hardware o virtuales.
-   **¿Por qué es útil?** Conecta el mundo del software (lo que se construye) con el mundo de la infraestructura (dónde se ejecuta).

## Herramientas Comunes

-   **Draw.io (ahora diagrams.net):** Gratuita, potente y se integra con herramientas como VS Code, Google Drive y GitHub. Es una opción excelente para todo tipo de diagramas.
-   **Lucidchart:** Una herramienta online muy popular con muchas plantillas y funcionalidades colaborativas. Tiene una versión gratuita limitada.

---

### Actividades Prácticas

-   **[Actividad para DAW/DAM]** Partiendo de su proyecto, crear el diagrama entidad-relación de la base de datos y un diagrama de secuencia para el proceso de login.
-   **[Actividad para ASIR]** Para su proyecto de e-commerce, diseñar un diagrama de la infraestructura en un proveedor cloud (AWS, Azure, Google Cloud) y un diagrama de red detallado con subredes, firewalls y balanceadores de carga.
