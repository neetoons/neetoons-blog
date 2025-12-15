---
title: Strings
description: sample
sidebar_position: 4
---
## ¿Qué es un String?

Un **String** es un tipo de dato especial usado para **almacenar texto** (palabras, frases, oraciones) en tu programa. Aunque parezca que guarda letras, en esencia, un string es simplemente un **array de números** donde cada número representa un carácter específico.

-----

## ¿Qué es un String en PAWN?

Un string no es más que un **array unidimensional de números enteros** (`new MiArray[n];`).

La diferencia clave es que, cuando inicializamos este array con texto, el compilador:

1.  **Convierte** cada letra, número o símbolo del texto a su valor numérico correspondiente.
2.  **Almacena** estos números, uno por uno, en las celdas consecutivas del array.

**Ejemplo de Inicialización Sencilla:**

```cpp
// El string "Hola" es un array de 5 elementos.
new Nombre[5] = "Hola";

// Es equivalente a:
new Nombre[5] = {'H', 'o', 'l', 'a', '\0'}; // Más simple que usar números
```

-----

## La Terminación Nula (`\0`)

Esta es la regla más importante que define a un string: debe terminar con el **carácter nulo** (`\0`), cuyo valor numérico es **0**, por lo que si bien `hola` tiene 4 caracteres, tendrás que crear un array de 5 espacios, para asignaciones normales como en el primer ejemplo no tendrás que anexar el `\0` en el "Hola".

### ¿Por qué es Necesario?

Debido a que los arrays se almacenan uno tras otro en la memoria, el compilador necesita una señal de parada para saber **dónde termina el texto** y evitar leer datos que pertenecen a la siguiente variable. El carácter nulo actúa como esa señal de fin de cadena.

## El Tamaño del Array

Siempre debes declarar el array con un tamaño **igual a la cantidad de caracteres del texto más uno** para poder incluir el carácter nulo (`\0`).

  * El texto `"Adiós"` tiene **5** caracteres.
  * El array debe tener un tamaño de **6** celdas (5 para el texto + 1 para el `\0`).

**Ejemplo:**

```cpp
new Mensaje[6] = "Adiós"; // El compilador añade automáticamente el '\0'
```

-----

### ⚠️ Limitaciones Importantes

1.  **Comparación (`==`):** Nunca uses el operador `==` para comparar si dos strings tienen el mismo texto. Este operador solo compara números o referencias, no el contenido completo. Siempre debes usar **funciones de comparación** diseñadas para strings (como `strcmp`).

    ```cpp
    // INCORRECTO para comparar texto:
    if (Mensaje == "Adiós")
    // ...
    ```

2.  **Asignación (`=`):** Una vez declarado, no puedes asignar un string directamente usando el operador `=` como harías con un número.

    ```cpp
    // INCORRECTO:
    Mensaje = "Hola"; // Esto causará un error o advertencia
    ```

    Para copiar un nuevo texto a un string ya existente, debes usar una **función de copiado** específica (como `format` o `strcopy`).