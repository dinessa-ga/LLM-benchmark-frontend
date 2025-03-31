# Explicación del Prompt para la Generación de Código

Este documento describe el tipo de prompt utilizado para la generación de código en este proyecto.

## Descripción del Prompt

El prompt es un conjunto de instrucciones detalladas que guía al asistente en la creación y modificación de código. Incluye información esencial como:

Cases

Las formas para crear prompts se pueden enfocar en:

Escenario: Describe la necesidad de la plataforma.
Requerimiento: Explica cómo debe implementarse el Factory Method.
Prompt: Contiene la instrucción detallada para generar el código, asegurando que:

- Se use Factory Method (XFactory.createX(type, data)).

- Se definan todas las clases en un solo archivo.

- Se implemente render() en cada clase.

- Se use la sintaxis de módulos ES (export).

### Enfocado en estructura

Ejemplo de código JavaScript para frontend que implemente el patrón Factory Method para la creación de objetos. Define una interfaz común para los objetos creados y diferentes clases concretas que implementen esa interfaz. Utiliza una función fábrica para instanciar estos objetos basándose en un tipo. Cada objeto debe tener un método `render(containerId)` que encuentre el elemento con el ID `containerId` en el DOM y muestre información del objeto dentro de él. Utiliza la sintaxis de módulos ES, asegurándote de importar y exportar los módulos.

### Propiedades de los objetos

Ejemplo de código JavaScript para frontend utilizando el patrón Factory Method para crear diferentes tipos de **productos** (por ejemplo, producto con imagen, producto con texto). Cada producto debe tener propiedades como `nombre` y un método `render(elementoPadre)` para mostrar el producto en el DOM. Implementa la fábrica y los productos utilizando la sintaxis de módulos ES, con las correspondientes importaciones y exportaciones.

## Estructura del prompt

- **Contexto del proyecto:** Detalles sobre la ubicación y el propósito del proyecto.
- **Tareas específicas:** Instrucciones para crear nuevos archivos, modificar código existente, generar documentación o pruebas unitarias.
- **Directrices del asistente:** Reglas y límites, como el uso correcto de nombres, formatos (por ejemplo, Markdown y bloques de código) y comentarios (incluyendo etiquetas de ubicación).

## Funcionamiento

El asistente utiliza el prompt para:
- Comprender las necesidades y el contexto del proyecto.
- Generar respuestas y código que se adapten a estas directrices.
- Mantener la coherencia en el formato y las políticas de desarrollo.

## Ejemplo de Uso del Prompt

El prompt puede incluir detalles como:
- La ruta y el nombre del archivo a modificar o crear.
- Instrucciones de formato, por ejemplo, utilizar bloques de código con comentarios para identificar secciones del proyecto.
- Indicaciones sobre la implementación de pruebas (por ejemplo, usando Jest para pruebas unitarias).

## Beneficios

- **Coherencia:** Garantiza que el código generado siga las directrices del proyecto.
- **Precisión:** Facilita respuestas precisas y alineadas con los requisitos establecidos.
- **Eficiencia:** Acelera el proceso de desarrollo al proporcionar una guía clara y estructurada al asistente.

Esta estructura asegura que el código y la documentación sean consistentes y de alta calidad, alineándose con las políticas y estándares definidos para el proyecto.