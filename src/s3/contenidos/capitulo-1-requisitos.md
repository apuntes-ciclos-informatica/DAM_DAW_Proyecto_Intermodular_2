# Análisis de requisitos

Antes de escribir una sola línea de código, es fundamental entender qué necesita realmente el cliente o usuario final. De poco sirve programar rápido si estamos construyendo algo que no resuelve el problema correcto.

Por eso, el análisis de requisitos es la primera gran fase en el desarrollo de software, tanto en metodologías tradicionales como ágiles.

Este tema conecta directamente con lo visto en _Scrum_, ya que el _Product Owner_ es quien se encarga de transformar las necesidades del cliente en requisitos y luego en historias de usuario que el equipo de desarrollo pueda implementar.

## ¿Qué es un requisito?

Un requisito es una condición o capacidad que el sistema debe cumplir o poseer para satisfacer una necesidad o expectativa del usuario o del negocio.

En otras palabras:

> Un requisito es algo que el sistema debe hacer o una característica que debe tener.

Los requisitos son la base del proyecto, ya que definen qué se va a construir y sirven como guía durante el diseño, desarrollo y pruebas.

## Tipos de requisitos

Existen dos grandes tipos de requisitos en todo proyecto de software:

<center>

| Tipo | Descripción | Ejemplo |
|------|-------------| --------|
| **Funcionales** | Describen qué hace el sistema. Son las funcionalidades, comportamientos o servicios que debe ofrecer.	 | “El sistema debe permitir que un usuario inicie sesión con su correo y contraseña.” |
| **No funcionales** | Describen cómo debe comportarse el sistema. Son restricciones o características de calidad (rendimiento, seguridad, usabilidad, etc.). | "El sistema debe cargar la página principal en menos de 2 segundos.” |

</center>

## Características de un buen requisito

Un buen requisito debe ser:

* Claro: sin ambigüedades ni tecnicismos innecesarios.
* Medible: se puede comprobar si se cumple o no.
* Necesario: aporta valor al usuario o al negocio.
* Viable: se puede implementar con los recursos disponibles.
* Trazable: se puede relacionar con su origen y con las pruebas que lo verifican.

## Ejemplos

### Requisitos funcionales

 * El sistema debe permitir registrar nuevos usuarios mediante un formulario.
 * El profesor puede crear, editar o eliminar sus reservas de aula.
 * El sistema enviará un correo de confirmación al realizar una reserva.
 * El usuario podrá filtrar los productos por categoría o precio.
 * El administrador puede generar un informe semanal en formato PDF.
 
### Requisitos no funcionales

* El sistema debe estar disponible el 95% del tiempo.
* La interfaz debe adaptarse correctamente a pantallas de móvil y ordenador.
* La base de datos debe soportar al menos 5000 usuarios simultáneos.
* La aplicación debe cumplir con la Ley de Protección de Datos (LOPD).
* Los mensajes de error deben ser claros y comprensibles para el usuario.
* El tiempo máximo de respuesta del servidor no debe superar los 2 segundos.

### Ejemplos de malos requisitos

No todos los requisitos son útiles. Algunos están mal definidos, son ambiguos o imposibles de comprobar.

| Mal requisito                                       | Problema                                  | Requisito mejorado                                                               |
| ----------------------------------------------------- | -------------------------------------------- | ---------------------------------------------------------------------------------- |
| “El sistema será rápido.”                             | Demasiado vago, no medible.                  | “El sistema deberá responder a las peticiones del usuario en menos de 2 segundos.” |
| “La aplicación será fácil de usar.”                   | Ambiguo, depende de la opinión del usuario.  | “La interfaz deberá permitir completar cualquier formulario en menos de 3 clics.”  |
| “El sistema nunca fallará.”                           | Irrealizable, ningún sistema es 100% fiable. | “El sistema deberá tener una disponibilidad mínima del 95% mensual.”               |
| “El usuario podrá hacer todo lo que necesite.”        | No especifica funciones concretas.           | “El usuario podrá crear, editar y eliminar sus propios documentos.”                |
| “El programa será seguro.”                            | No se puede verificar.                       | “Las contraseñas deberán almacenarse cifradas con SHA-256.”                        |
| “El sistema deberá funcionar en cualquier ordenador.” | Imposible de garantizar, no define entorno.  | “El sistema deberá ser compatible con Windows 10 o superior.”                      |

## ✏️ Actividad de mejora de requisitos

Reescribe los siguientes requisitos para que sean claros, medibles y realistas.
Puedes usar las buenas prácticas vistas antes.

| Nº | Requisito original                                        | Requisito mejorado |
| -- | --------------------------------------------------------- | ------------------ |
| 1  | El sistema debe ser intuitivo.                            |                    |
| 2  | Los informes se generarán rápido.                         |                    |
| 3  | El programa nunca debe tener errores.                     |                    |
| 4  | La aplicación deberá funcionar bien en todos los móviles. |                    |
| 5  | El sistema tendrá buena seguridad.                        |                    |

> 💡 Pista: usa números, tiempos de respuesta, porcentajes o condiciones concretas.