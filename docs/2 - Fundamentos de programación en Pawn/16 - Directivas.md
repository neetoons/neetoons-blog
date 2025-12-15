---
title: Directivas
description: sample
sidebar_position: 16
---
Las **Directivas** en PAWN (y en C/C++), también conocidas como **Directivas del Preprocesador**, son instrucciones especiales que se procesan **antes** de que el código sea compilado. No son sentencias de código que se ejecutan, sino comandos que le dicen al compilador cómo debe manejar el archivo fuente.

Comienzan con el símbolo de almohadilla (`#`).

-----

## Directivas del Preprocesador Comunes

Aquí están las directivas más utilizadas y su función:

## 1. `#include` (Inclusión de Archivos)

Esta es quizás la directiva más importante. Le dice al compilador que abra otro archivo de código e **inserte todo su contenido** en el punto donde se encuentra el `#include`.

- **Propósito:** Reutilización de código. Permite acceder a funciones, variables, constantes y *callbacks* que están definidos en otros archivos (generalmente librerías o *includes*).
-  **Sintaxis:**
      * `#include <nombre>`: Busca el archivo en las rutas de inclusión estándar (para *includes* del sistema, como `<a_samp>`).
      * `#include "nombre"`: Busca el archivo en la carpeta actual del *script* (para archivos propios).


```cpp
#include <a_samp> // Incluye la librería principal del servidor
#include "mi_funciones.inc" // Incluye un archivo de funciones personalizado
```

-----

## 2. `#define` (Definición de Macros y Constantes)

La directiva `#define` permite crear **macros** o **constantes** sencillas que sustituyen un texto por otro antes de la compilación.

- **Propósito:** Crear constantes simbólicas (alternativa a `new const`) y definir macros (pequeñas funciones en línea).
- **Sintaxis (Constante):** `#define NOMBRE_MACRO VALOR_A_SUSTITUIR`
- **Sintaxis (Macro):** `#define NOMBRE_MACRO(parametros) CODIGO_A_INSERTAR`

```cpp
#define MAX_JUGADORES 50 // Sustituye "MAX_JUGADORES" por "50"
#define LOG(texto) printf(texto) // Macro para simplificar la llamada a printf

// Antes de la compilación, el código:
// printf("Inicio"); se convierte en printf("Inicio");
```

> **Nota:** Las macros no son funciones reales, sino sustituciones de texto.

-----

### 3\. `#if`, `#else`, `#endif`, `#undef` (Compilación Condicional)

Estas directivas controlan qué partes del código fuente deben ser **incluidas o excluidas** durante el proceso de compilación, basándose en si se ha definido una macro.

  * **Propósito:** Crear diferentes versiones del *script* o activar/desactivar características sin modificar el código fuente.

| Directiva          | Propósito                                                       |
| :----------------- | :-------------------------------------------------------------- |
| **\#if NOMBRE**    | Compila el bloque si `NOMBRE` ha sido definido (con `#define`). |
| **\#if !NOMBRE**   | Compila el bloque si `NOMBRE` **NO** ha sido definido.          |
| **\#else**         | Compila el bloque si la condición `#if` anterior es falsa.      |
| **\#endif**        | Marca el final de la estructura condicional. **Obligatorio.**   |
| **\#undef NOMBRE** | Elimina la definición de una macro previamente definida.        |

**Ejemplo de Compilación Condicional:**

```cpp
#define MODO_DEBUG // Definimos la macro

#if MODO_DEBUG
    printf("¡Modo de depuración activo!");
#else
    printf("Modo de producción.");
#endif // Cierra la condición
```