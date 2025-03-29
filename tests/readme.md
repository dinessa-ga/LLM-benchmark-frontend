# Pruebas en Jest

Se instaló Jest a través de npm 
- npm install --save-dev jest

## Estructura Básica

Aquí se explica la estructura de un test con "describe" y "test" (o "it"). 

El comando principal usado en la terminal para ejecutar cada uno de los test:
- npm  test

## Se agregó al package.json

``` 
"scripts": {
  "test": "jest --verbose --coverage"
}
```

- --verbose 

Muestra los resultados de la prueba individual con la jerarquía de la suite de prueba.

## Comando para ejecutar en terminal según la ruta de archivos
- $env:TEST_FILE=code_project/case-1/claude-3.5/example1.1.js npm run test tests/factoryMethod.test.js

# Ejución de test
Todos los tests
- npm test

Tests relacionados con un archivo específico 
- npm run test:file src/archivo1.js

Modo watch (vigila cambios y ejecuta tests automáticamente) 
- npm run test:watch

Para ejecutar cada archivo de test - los archivos de test apuntan a la ruta de los archivos analizados
- npx jest tests/case2.test.js

