# 6. Herramientas para diagramas

## Del Diseño a la Herramienta

Ahora que entendemos **qué** diagramas necesitamos (Arquitectura, ERD, Casos de Uso, Secuencia), surge la pregunta práctica: **¿Con qué los creamos?**

## Herramientas Visuales (WYSIWYG)

WYSIWYG significa *"What You See Is What You Get"* (Lo que ves es lo que obtienes). En estas herramientas, tú controlas el 100% del diseño visual. Arrastras cajas, conectas flechas y alineas elementos manualmente. Son la elección perfecta para:

- **Exploración y brainstorming:** Cuando aún no sabes exactamente cómo será el diagrama.
- **Diagramas complejos de infraestructura (ASIR):** Redes con muchos elementos, servidores, firewalls.
- **Presentaciones para clientes:** Cuando la estética importa tanto como el contenido.

-----

### Draw.io (diagrams.net)

**¿Qué es?**

Es, sin duda, la herramienta de diagramado visual más potente y popular del mercado.

1. **Gratuita y sin límites:** No tiene versión "premium". Todas las funcionalidades, todas las plantillas (ERD, C4, UML, Redes, AWS, Azure...) están disponibles para todos, sin restricciones.

2. **Integración total con tu flujo de trabajo:**
   - **VS Code:** Instala la extensión "Draw.io Integration" y edita tus archivos `.drawio` directamente dentro de tu editor de código, sin cambiar de aplicación.
   - **GitHub / GitLab:** Guarda los diagramas en tu repositorio como archivos `.drawio`. Son archivos XML que Git puede versionar, así que puedes ver el historial de cambios.
   - **Google Drive / OneDrive:** Perfecto para colaboración en la nube con tu equipo.

3. **Plantillas profesionales:** Incluye iconos y formas para AWS, Azure, GCP, Docker, Kubernetes, bases de datos, y muchísimo más.

> [!TIP]
> **Consejo para empezar rápido**
>
> Cuando abras Draw.io por primera vez:
>
> 1. Ve a `Archivo → Nueva biblioteca → Buscar formas`.
> 2. Busca "Entity Relation" para ERDs, "UML" para Casos de Uso, "AWS" o "Azure" si ASIR trabaja en la nube.
> 3. La herramienta cargará todas las formas relevantes, y podrás arrastrarlas a tu lienzo.

**Desventajas:**

- **Colaboración en tiempo real limitada:** No es como Google Docs. Si dos personas editan el mismo archivo simultáneamente, puede haber conflictos.
- **Curva de aprendizaje inicial:** La primera vez puede ser abrumador por la cantidad de opciones. Tómate 30 minutos para explorar la interfaz.

-----

### Lucidchart

**¿Qué es?**

Es una herramienta online (SaaS) muy pulida y profesional, enfocada en la **colaboración en equipo en tiempo real**. Es la competencia directa de Draw.io, pero con un enfoque en equipos empresariales.

1. **Colaboración en tiempo real sin fricciones:** Es su mayor fortaleza. Puedes ver los cursores de tus compañeros de equipo moverse en el diagrama en tiempo real, como si estuvierais en Google Docs. Perfecto para sesiones de brainstorming remoto.

2. **Interfaz de usuario (UX) pulida:** Su interfaz es extremadamente limpia e intuitiva. La curva de aprendizaje es menor que Draw.io. Tiene una biblioteca de plantillas profesionales muy extensa (más de 1000 plantillas).

3. **Importación automática de datos (versión de pago):** Sus versiones de pago pueden generar diagramas ERD automáticamente importando el esquema de tu base de datos MySQL, PostgreSQL, etc. Esto ahorra muchísimo tiempo en proyectos grandes.

4. **Integraciones empresariales:** Se integra con Slack, Confluence, Google Workspace, Microsoft Teams, etc.

> [!WARNING]
> **La Limitación de la Versión Gratuita**
>
> La versión gratuita de Lucidchart es **muy limitada**:
>
> - Solo 3 documentos activos simultáneamente.
> - Límite de 60 objetos por diagrama (insuficiente para un ERD o Diagrama de Despliegue complejo).
> - Sin colaboración en tiempo real con más de 1 persona.

-----

## Recapitulación: Cuándo Usar Herramientas Visuales

Las herramientas visuales (Draw.io, Lucidchart) son ideales cuando:

- **Estás explorando ideas:** No sabes exactamente cómo será el diagrama final.
- **El diagrama es complejo visualmente:** Diagramas de Despliegue con muchos servidores, redes, firewalls.
- **Necesitas presentaciones visuales:** El cliente o el profesor necesita ver algo "bonito".
- **El diagrama no cambiará frecuentemente:** Una vez creado, será estático (ej. un diagrama de infraestructura inicial).

> [!CAUTION] Limitación crítica de herramientas visuales:
>
> **No viven con el código**. Si guardas el diagrama como una imagen `.png` en Google Drive, y luego cambias la arquitectura en el código, el diagrama quedará desactualizado.
>
> **Solución:** En el Capítulo 7 veremos **Mermaid** (Diagrams as Code) que resuelve este problema.

Para resolver esto, en el Capítulo 7 veremos **Mermaid**: diagramas que se escriben en texto y viven en archivos `.md` dentro de tu repositorio, junto al código.
