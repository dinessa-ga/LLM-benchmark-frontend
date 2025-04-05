# Test con Jest

Este archivo describe el proceso básico para ejecutar y organizar pruebas unitarias con Jest.

Este proyecto usa la versión LTS (Long-Term Support) de Node.js 22.14.0

Ejecuta el siguiente comando si usas nvm `
nvm install 22.14.0`

Revisa la documentación oficial si requieres instalar desde cero Node.js

## Instalación

Este proyecto usa la versión de node.js  22.14.0
Si requieres crear un proyecto desde cero, previamente se debe ejecutar: npm init desde alguna terminal cmd o powershell, esto permitirá crear el archivo package.json

Si ya has creado un archivo package.json solo debes ejecutar el siguiente comando o revisar la documentación sobre Jest para su ejecución.

```bash
npm install --save-dev jest
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

[Documentación oficial de Babel](https://jestjs.io/docs/getting-started)

## Ejecución de pruebas

También es posible ejecutar `` para correr tus pruebas y ver los resultados en la terminal.

```bash
npx jest

or

npm test
```



### Ejución de test
Para ejecutar cada archivo de test - los archivos de test apuntan a la ruta de los archivos analizados

npx jest tests/factoryMethod/case2.test.js
npx jest tests/factoryMethod/case2-1.test.js

Este funcionó sin errores:

```
 ./node_modules/.bin/jest tests/factoryMethod/case2.test.js
```

## Explicaciones técnicas sobre tests

Por convención en Jest, los archivos de test tienen el mismo nombre que el archivo que se está probando, con la extensión .test.js o .spec.js. Sin embargo, aquí se hace uso de test/patron/case2.test.js el cual permitará comprender a qué caso pertenece dentro de la evaluación de cada patrón de diseño. 

Todos los nombres siguen la convención de clases en PascalCase y métodos en camelCase, esto con el objetivo de estandarizar el código generado.
Además, el código generado garantiza la compatibilidad con Jest mediante import/export para evitar problemas de compatabilidad.

Por fines de testing se exportan todas las clases y clases que heredan sin necesidad de usar export default, para que cada uno pueda ser testeado sin que arrojen errores de 'undefined' cuando no se importen desde los archivos de tests cada uno de forma individual.


- Ejemplo 1 

Crea un factory method ArticleFactory.createArticle(type, data), que devuelva NewsArticle, OpinionArticle o ReportArticle, todas heredando de ArticleCard. Implementa render(). Define todas las clases y la fábrica en un solo archivo y exporta solo ArticleFactory. Utiliza la sintaxis de módulos ES (import/export). - No sirvió porque es necesario exportar cada una de las clases y clases que heredan.

- Ejemplo 2

El siguiente prompt permitió testear, usando el formato de Modules ES para cada archivo de test, el cual puede ser modificado según la estructura de un proyecto:
````
import { ArticleFactory, NewsArticle, OpinionArticle, ReportArticle} from '../../src/case-2/deepseek.r1/example1.1.js';

````
Crea un factory method ArticleFactory.createArticle(type, data), que devuelva NewsArticle, OpinionArticle o ReportArticle, todas heredando de ArticleCard. Implementa render(). Define todas las clases y la fábrica en un solo archivo y expórtalas. Utiliza la sintaxis de módulos ES (export).

observer
Crea una clase ChatChannel con subscribe(user) y sendMessage(message). Al enviar un mensaje, notifica a los observadores. User implementa Observer. Define las clases, métodos y observers en un solo archivo y expórtalas. Usa ES modules.

## Estructura de las pruebas unitarias

```

```