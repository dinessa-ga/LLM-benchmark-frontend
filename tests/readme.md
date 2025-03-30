# Test con Jest

Este archivo describe el proceso básico para ejecutar y organizar pruebas con Jest.


## Instalación

Este proyecto usa la versión de node.js  22.14.0
Si requieres crear un proyecto desde cero, previamente se debe ejecutar: npm init desde alguna terminal cmd o powershell, esto permitirá crear el archivo package.json

```bash
npm install --save-dev jest
```

## Ejecución de pruebas

```bash
npx jest
```

## Configuración

Configura tu archivo `package.json` para incluir un script de pruebas:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```
[Documentación oficial de Jest](https://jestjs.io/docs/getting-started)

## Ejemplo

```

```
## Ejecución

Ejecuta `npm test` para correr tus pruebas y ver los resultados en la terminal.

versión LTS (Long-Term Support) de Node.js.
nvm install 22.14.0

### Ejución de test
Para ejecutar cada archivo de test - los archivos de test apuntan a la ruta de los archivos analizados

npx jest tests/factoryMethod/case2.test.js

Este funcionó sin errores:

```
 ./node_modules/.bin/jest tests/factoryMethod/case2.test.js
```

## Explicaciones técnicas sobre tests

Por convención en Jest, los archivos de test tienen el mismo nombre que el archivo que se está probando, con la extensión .test.js o .spec.js. Sin embargo, aquí se hace uso de test/patron/case2.test.js el cual permitará comprender a qué caso pertenece dentro de la evaluación de cada patrón de diseño. 

Cases

Enfocado en estructura

Crea un ejemplo de código JavaScript para frontend que implemente el patrón Factory Method para la creación de objetos. Define una interfaz común para los objetos creados y diferentes clases concretas que implementen esa interfaz. Utiliza una función fábrica para instanciar estos objetos basándose en un tipo. Cada objeto debe tener un método `render(containerId)` que encuentre el elemento con el ID `containerId` en el DOM y muestre información del objeto dentro de él. Utiliza la sintaxis de módulos ES, asegurándote de importar y exportar los módulos.

Propiedades de los objetos

Genera un ejemplo de código JavaScript para frontend utilizando el patrón Factory Method para crear diferentes tipos de **productos** (por ejemplo, producto con imagen, producto con texto). Cada producto debe tener propiedades como `nombre` y un método `render(elementoPadre)` para mostrar el producto en el DOM. Implementa la fábrica y los productos utilizando la sintaxis de módulos ES, con las correspondientes importaciones y exportaciones.


Todos los nombres siguen la convención de clases en PascalCase y métodos en camelCase, esto con el objetivo de estandarizar el código generado.
Además, el código generado garantiza la compatibilidad con Jest mediante import/export para evitar problemas de compatabilidad.

Crea un factory method ArticleFactory.createArticle(type, data), que devuelva NewsArticle, OpinionArticle o ReportArticle, todas heredando de ArticleCard. Implementa render(). Define todas las clases y la fábrica en un solo archivo y exporta solo ArticleFactory. Utiliza la sintaxis de módulos ES (import/export)