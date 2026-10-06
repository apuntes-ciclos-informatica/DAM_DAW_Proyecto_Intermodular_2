# INVEST

El acrónimo INVEST es una guía sencilla para asegurar que las historias de usuario estén bien definidas, sean manejables y aporten valor real. Sirve como una lista de verificación para que tanto el _Product Owner_ como el equipo de desarrollo puedan evaluar la calidad del backlog.

Una historia de alta calidad debe cumplir con estas seis características:

| Letra | Significado                     | Explicación Breve                                      |
|:------|:--------------------------------|:--------------------------------------------------------|
| **I** | Independent (Independiente)     | Puede desarrollarse sin depender de otras.             |
| **N** | Negotiable (Negociable)         | Se puede discutir y ajustar con el PO.                 |
| **V** | Valuable (Valiosa)              | Aporta valor al usuario o negocio.                     |
| **E** | Estimable (Estimable)           | El equipo puede estimar su esfuerzo.                   |
| **S** | Small (Pequeña)                 | Puede completarse en un solo sprint.                   |
| **T** | Testable (Verificable)          | Tiene criterios claros que permiten probarla.          |


### I - Independent (Independiente)

Una historia de usuario debe ser lo más autónoma posible. Esto significa que el equipo debería poder planificarla, desarrollarla y entregarla sin tener que esperar a que otra historia se complete primero.

  **¿Por qué es importante?** La independencia da flexibilidad. Permite al _Product Owner_ priorizar y reordenar el backlog libremente según las necesidades del negocio, sin crear un efecto dominó de dependencias que bloquee al equipo. Si la historia "A" depende de la "B", no puedes priorizar "A" sin hacer "B" primero, lo que limita tu agilidad.

  **¿Qué hacer si no es independiente?** A menudo, las dependencias son inevitables. El objetivo es minimizarlas. Si encuentras dos historias muy acopladas, considera combinarlas en una sola historia (si sigue siendo pequeña) o reescribirlas para romper la dependencia.

<ul>
      Ejemplo: En lugar de tener "Crear base de datos de usuarios" y "Crear formulario de registro", podrías tener una sola historia de usuario vertical: "Como nuevo usuario, quiero registrarme con mi email y contraseña para poder acceder a mi cuenta". Esta historia incluye tanto la interfaz como la lógica de guardado necesaria, haciéndola independiente.
</ul>

### N - Negotiable (Negociable) 

Una historia de usuario no es un contrato cerrado ni una especificación técnica detallada. Es un recordatorio para tener una conversación. Los detalles finos de la historia deben ser discutidos y acordados colaborativamente entre el _Product Owner_ y el equipo de desarrollo.

  **¿Por qué es importante?** Fomenta la colaboración y la creatividad. El equipo técnico puede aportar soluciones más eficientes o innovadoras que el _Product Owner_ no había considerado. La negociación permite ajustar el alcance para maximizar el valor con el mínimo esfuerzo.

  **¿Cómo mantenerla negociable?** La historia debe centrarse en el "qué" y el "porqué", dejando el "cómo" para que el equipo lo defina. Se escriben en tarjetas (físicas o virtuales) para simbolizar que no son permanentes y que los detalles se discutirán cara a cara.


### V - Valuable (Valiosa)

Toda historia debe entregar un valor tangible a un usuario final, cliente o al negocio. Si una historia no aporta valor, es un desperdicio de tiempo y recursos.

  **¿Por qué es importante?** Asegura que el equipo se enfoca en construir lo que realmente importa. Evita caer en la trampa de desarrollar funcionalidades técnicas que no tienen un impacto directo en los objetivos del producto.

  **¿Cómo asegurar que sea valiosa?** El formato estándar de historia de usuario ("Como [rol], quiero [objetivo], para que [beneficio]") ayuda mucho, ya que la cláusula "para que" obliga a articular el valor. Si una historia es puramente técnica (p. ej., "Refactorizar el módulo de pago"), debe vincularse a un valor tangible (p. ej., "para mejorar la velocidad de transacción en un 50% y reducir las tasas de abandono").

### E - Estimable (Estimable)

El equipo de desarrollo debe ser capaz de dar una estimación del esfuerzo que requerirá completar la historia. No tiene que ser una predicción exacta, sino una idea de su tamaño relativo (complejidad, incertidumbre y volumen de trabajo).

  **¿Por qué es importante?** La estimación es clave para la planificación del sprint y para que el Product Owner pueda hacer proyecciones a largo plazo (forecast). Si una historia no se puede estimar, no se puede planificar.

  **¿Qué impide la estimación?** Generalmente, una historia no es estimable por que o es demasiado grande (la solución es dividirla), es demasiado vaga o faltan detalles o los criterios de aceptación no están claros (la solución es negociarla) o el equipo no sabe cómo implementarla (la solución es crear una tarea corta de investigación para despejar dudas).

### S - Small (Pequeña)

La historia debe ser lo suficientemente pequeña como para que se pueda completar (desde el diseño hasta las pruebas) dentro de un único sprint. A menudo se dice que una historia no debería tomar más de unos pocos días de trabajo para un par de desarrolladores.

  **¿Por qué es importante?** Las historias pequeñas permiten un flujo de trabajo constante y una entrega de valor continua. Reducen el riesgo, facilitan las pruebas y hacen que el progreso sea visible y medible. Las historias grandes (a menudo llamadas "épicas") son difíciles de estimar y gestionar.

  **¿Cómo hacerla pequeña?** Se utilizan técnicas de división de historias. Por ejemplo, una épica como "Gestionar mi perfil de usuario" se puede dividir en historias más pequeñas como:

  <ul>
    <li>Ver mis datos de perfil.</li>
    <li>Editar mi nombre y dirección.</li>
    <li>Cambiar mi contraseña.  </li>
    <li>Subir una foto de perfil.  </li>
  </ul>

### T - Testable (Verificable)

La historia debe tener _criterios de aceptación_ claros y objetivos que permitan confirmar, sin ambigüedad, que se ha completado correctamente. En otras palabras, debe ser posible probarla.

  **¿Por qué es importante?** Define claramente el _Done_. Elimina la subjetividad y asegura que todos (desarrollador, tester y Product Owner) están en la misma página sobre lo que se espera. Si no puedes probarlo, ¿cómo sabes que funciona?

  **¿Cómo hacerla verificable?** Se definen _Criterios de Aceptación_ antes de empezar el desarrollo. Estos describen las condiciones específicas que el software debe cumplir. Suelen seguir el formato Given-When-Then (Dado-Cuando-Entonces).

  Ejemplo: Para una historia de _Login de usuario_.

  <ul>
    Criterio 1: Dado que soy un usuario registrado y estoy en la página de login, cuando introduzco mis credenciales correctas y hago clic en "Entrar", entonces soy redirigido a mi panel de control.
  <ul> 
  </ul>
    Criterio 2: Dado que estoy en la página de login, cuando introduzco credenciales incorrectas, entonces veo un mensaje de error que dice _Usuario o contraseña incorrectos_.
  </ul>