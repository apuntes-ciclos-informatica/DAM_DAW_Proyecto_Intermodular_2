# Priorización

En un proyecto ágil, el backlog puede crecer rápidamente, convirtiéndose en una larga lista de ideas, funcionalidades y mejoras. Dado que los recursos y el tiempo son finitos, es imposible hacerlo todo a la vez. La priorización es el proceso continuo que realiza el _Product Owner_ para ordenar este trabajo, asegurando que el equipo de desarrollo esté siempre construyendo lo que genera el máximo impacto en cada momento.

Este no es un ejercicio que se hace una sola vez; es una actividad dinámica que se adapta a medida que se aprende más sobre el producto y su contexto.

## Criterios para la priorización

El _Product Owner_ evalúa cada historia de usuario mediante varios criterios. Las más importantes son:

### Valor para el negocio y el usuario

Es la dimensión más importante. El _Product Owner_ debe preguntarse constantemente:

  * ¿Cuánto contribuye esta funcionalidad a los objetivos estratégicos de la empresa (ej. aumentar ingresos, reducir costes, entrar en un nuevo mercado)?

  * ¿Resuelve un problema real y urgente para nuestros usuarios?

  * ¿Mejorará la satisfacción o la retención de los clientes?

  * ¿Nos dará una ventaja competitiva?

> Una historia con alto valor es aquella que tiene un impacto directo y medible en el éxito del producto.

### Esfuerzo, Riesgo y Complejidad

¿Cuanto cuesta construir la funcionalidad?

  * Esfuerzo: ¿Qué tan grande es la historia? El equipo de desarrollo proporciona esta información a través de la estimación (por ejemplo, con Story Points). Una historia pequeña y de alto valor es ideal.

  * Riesgo e Incertidumbre:  ¿Estamos usando una tecnología nueva? ¿Los requisitos no están del todo claros? A veces, es prudente abordar historias de alto riesgo al principio del proyecto (aunque su valor para el usuario no sea el más alto) para "despejar riesgos" y validar si el camino elegido es viable.


### Dependencias técnicas y lógicas

Algunas historias no se pueden empezar hasta que otras se hayan completado. 

  * Ejemplo: No puedes construir la historia "Pagar con tarjeta de crédito" si aún no has completado "Añadir productos al carrito de la compra".

  * El Product Owner, con la ayuda del equipo técnico, debe identificar estas dependencias para secuenciar el trabajo de forma lógica y evitar bloqueos.

## Matriz de valor vs. esfuerzo

Para tomar estas decisiones de forma más estructurada, los _Product Owners_ utilizan varias herramientas, aunque la más habituial yu fácil de entender es la matriz valor/esfuerzo.

Esta es una de las herramientas visuales más sencillas y efectivas. Se clasifica cada historia en una matriz de cuatro cuadrantes basada en su valor de negocio y el esfuerzo estimado para completarla.

| Categoría                     | Valor | Esfuerzo | Descripción                                                                                                                                                                                                 |
|:------------------------------|:------:|:---------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Quick Wins (Victorias Rápidas)** | Alto  | Bajo      | ¡Haz esto primero! Generan un gran impacto con poco trabajo, lo que motiva al equipo y satisface rápidamente a los *stakeholders*.                                    |
| **Grandes Proyectos (Apuestas Principales)** | Alto  | Alto      | Funcionalidades clave que definen el producto, pero requieren una planificación cuidadosa. Se deben descomponer en historias más pequeñas y abordarse de forma incremental. |
| **Tareas de Relleno**         | Bajo  | Bajo      | Se pueden hacer si hay tiempo de sobra en un sprint, pero no deben ser una prioridad. A menudo son pequeñas mejoras o retoques de bajo impacto.                      |
| **Sumideros de Tiempo**       | Bajo  | Alto      | Consumen mucho tiempo y recursos para un beneficio mínimo. Es importante identificarlas y cuestionar si realmente necesitan hacerse.                                 |
