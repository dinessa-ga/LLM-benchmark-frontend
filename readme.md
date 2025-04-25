# Evaluación de código generado por modelos de IA

## Objetivo
Proveer un marco para comparar el rendimiento y la calidad de diferentes modelos de IA mediante pruebas de eficiencia y precisión.

## Explicaciones técnicas
En las pruebas unitarias, el propósito fundamental de escribir un test es verificar que una pieza específica de código se comporta de la manera esperada para una entrada dada. Herramientas como Jest permiten automatizar esta validación, asegurando que el código cumpla con los criterios establecidos.

---

## Estructura

### Estructura del proyecto

1. **Evaluación de código de JavaScript**  
   - Se utiliza Visual Studio Code con soporte para Vanilla JavaScript.  
   - Herramientas clave: Jest para pruebas unitarias y Babel como compilador.  

2. **Evaluación**  
   - **Solicitud de código mediante prompting zero-shot**: Los prompts están diseñados para evaluar la capacidad de los modelos de IA en la implementación de patrones de diseño específicos sin ejemplos previos.  
   - **Métricas de casos de éxito para cada patrón de diseño analizado**:  
     - Factory Method: Creación de objetos y desacoplamiento.  
     - Observer: Gestión eficiente de notificaciones y eliminación dinámica de observadores.  
     - Strategy: Encapsulamiento de algoritmos y flexibilidad en tiempo de ejecución.  

3. **Resultados**  
   - **Tablas comparativas**: Resumen del rendimiento de los modelos en términos de tasa de éxito, desviación estándar y tiempos de respuesta.  
     - Ejemplo clave: DeepSeek R1 lideró en Factory Method con 96% de éxito, mientras que Gemini 2.0 fue el más rápido con 7.16 segundos promedio.  
   - **Gráficas de rendimiento**: Gráficos de barras y boxplots que muestran la variabilidad y consistencia entre los intentos de generación de código.  

4. **Conclusiones**  
   - **Principales hallazgos**:  
     - Los modelos evaluados mostraron tasas de éxito superiores al 85%, pero con variabilidad en tiempos de respuesta.  
     - La aplicación de patrones de diseño mejora significativamente la calidad del código generado, reduciendo redundancias y facilitando la escalabilidad.  
     - La intervención humana sigue siendo crucial para validar y ajustar los resultados generados por IA.  
   - **Próximos pasos recomendados**:  
     - Incorporar análisis de cumplimiento de estándares de accesibilidad web (WCAG).  
     - Evaluar el impacto de los LLMs en frameworks frontend como React o Angular.  
     - Implementar pipelines CI/CD para automatizar la evaluación continua del código generado.  

---

## Metodología de evaluación

### Selección de modelos de IA
- **DeepSeek-R1**: Soporta múltiples lenguajes de programación y adapta su generación a diferentes idiomas.  
- **GPT-4o1 Preview**: Modelo optimizado para resolver problemas complejos en codificación y matemáticas.  
- **Claude 3.7 Sonnet**: Optimizado para eficiencia en recursos y enfoque en ética y seguridad.  
- **Gemini 2.0**: Mejora en rendimiento y tiempos de respuesta rápidos respecto a versiones anteriores.  

### Herramientas y entorno
- **Entorno de desarrollo**: Visual Studio Code con Node.js como entorno de ejecución.  
- **Librerías utilizadas**: Jest para pruebas unitarias y Babel como compilador.  
- **Documentación**: Proyecto gestionado en GitHub con control de versiones mediante Git.  

### Criterios de evaluación
- **Casos con éxito**: Cumplimiento correcto del requerimiento.  
- **Errores comunes**: Identificación de errores en la implementación de patrones.  
- **Intentos permitidos**: Máximo de 3 intentos para analizar la variabilidad de las respuestas.  

---

## Resultados destacados

### Factory Method
- **DeepSeek R1**: Tasa de éxito del 96% con desviación estándar baja (0.11).  
- **Gemini 2.0**: Tiempo de respuesta más rápido (7.16 segundos), pero con mayor variabilidad en resultados.  

### Observer
- **Gemini 2.0**: Tasa de éxito del 94%, liderando en velocidad (5.68 segundos).  
- **DeepSeek R1**: Mostró dificultades con fugas de memoria, afectando la escalabilidad.  

### Strategy
- **Claude 3.7 Sonnet y GPT-4o1 Preview**: Ambos lograron 100% de éxito, destacándose en encapsulamiento de algoritmos.  
- **DeepSeek R1 y Gemini 2.0**: Tasas de éxito más bajas debido a errores en intercambios dinámicos de estrategias.  

---

## Discusión general

- **Hallazgos clave**:  
  - Los LLMs aceleran la generación de código, pero su uso indiscriminado puede aumentar defectos y costos de corrección.  
  - La aplicación de patrones de diseño reduce errores tempranos y optimiza recursos.  
- **Impacto económico**:  
  - La combinación de IA y buenas prácticas maximiza la eficiencia económica a largo plazo, asegurando sistemas robustos y adaptables.  

---

## Conclusiones finales

Este estudio subraya la importancia de combinar la automatización mediante IA con principios sólidos de ingeniería de software. Aunque los LLMs ofrecen una ventaja significativa en productividad, su uso debe estar guiado por buenas prácticas para evitar costos ocultos asociados a la deuda técnica. Este enfoque no solo facilita el análisis del desempeño de los LLMs, sino que también promueve su alineamiento hacia la adopción de buenas prácticas de código.