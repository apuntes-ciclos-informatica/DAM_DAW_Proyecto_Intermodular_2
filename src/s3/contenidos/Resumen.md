# Sesión 3: Análisis de Requisitos e Historias de Usuario

**Objetivo:** Dominar la técnica para traducir ideas en requisitos claros y accionables.

**Tipo de Sesión:** Teórica.

**Ciclos:** ASIR, DAM, DAW.

## Historias de Usuario

Una **Historia de Usuario** es una explicación general e informal de una funcionalidad de software escrita desde la perspectiva del usuario final o cliente. Su propósito es articular cómo una característica del software proporcionará valor al cliente.

### Formato de la Historia de Usuario

El formato más común para una historia de usuario es:

> **Como** [rol/persona], **quiero** [acción/objetivo] **para** [beneficio/resultado].

-   **Como [rol]:** ¿Quién se beneficia de esta historia? (Ej: "un usuario registrado", "un administrador de sistema").
-   **Quiero [acción]:** ¿Qué quiere hacer el usuario? (Ej: "iniciar sesión en mi cuenta", "ver un dashboard de métricas").
-   **Para [beneficio]:** ¿Por qué quiere el usuario hacer esto? ¿Cuál es el valor? (Ej: "acceder a mi perfil personalizado", "monitorizar la salud del sistema").

### Criterios de Aceptación

Los **Criterios de Aceptación** son un conjunto de condiciones predefinidas que una historia de usuario debe cumplir para ser considerada "completa" o "terminada". Definen el alcance de la historia y ayudan a eliminar la ambigüedad. Se suelen escribir en un formato de lista de verificación.

**Ejemplo:**

**Historia de Usuario:** Como usuario, quiero poder filtrar productos por categoría para encontrar lo que busco más fácilmente.

**Criterios de Aceptación:**
-   [ ] Se muestra una lista de categorías de productos disponibles.
-   [ ] Al hacer clic en una categoría, la lista de productos se actualiza para mostrar solo los productos de esa categoría.
-   [ ] Se puede seleccionar más de una categoría a la vez.
-   [ ] Hay una opción para borrar todos los filtros y ver todos los productos de nuevo.

## Requisitos No Funcionales (Foco para ASIR)

Mientras que las historias de usuario se centran en lo que el sistema *hace* (requisitos funcionales), los **requisitos no funcionales (RNF)** definen cómo el sistema *es*. Son cruciales para la experiencia del usuario y la estabilidad del sistema, y son un foco principal para los perfiles de ASIR.

Algunas categorías de RNF son:

-   **Rendimiento:** ¿Qué tan rápido responde el sistema? (Ej: "La página de inicio debe cargar en menos de 2 segundos").
-   **Seguridad:** ¿Cómo se protege el sistema contra amenazas? (Ej: "Todas las contraseñas deben almacenarse cifradas").
-   **Disponibilidad (Alta Disponibilidad):** ¿Cuánto tiempo debe estar el sistema en funcionamiento? (Ej: "El sistema debe tener una disponibilidad del 99.9% al mes").
-   **Escalabilidad:** ¿Cómo manejará el sistema un aumento de la carga? (Ej: "El sistema debe poder soportar 1000 usuarios concurrentes sin degradación del rendimiento").
-   **Fiabilidad:** ¿Con qué frecuencia falla el sistema? (Ej: "El sistema no debe tener más de 1 caída no planificada por trimestre").

---

### Actividades Prácticas

-   **[Actividad para DAW/DAM]** Redactar 5 historias de usuario detalladas (con criterios de aceptación) para una de las épicas de su proyecto respectivo.
-   **[Actividad para ASIR]** Redactar 5 requisitos técnicos (no funcionales) para la épica "Configuración de Red y Seguridad", especificando criterios medibles (ej: "El firewall debe bloquear todo el tráfico entrante excepto por los puertos 80/443", "El sistema debe tener una disponibilidad del 99.9%").
