---
title: Especificadores
description: sample
sidebar_position: 12
---
Los especificadores de formato son códigos que comienzan con el signo de **porcentaje** (`%`) y se usan dentro de una cadena de formato (el primer argumento de funciones como `printf` o `format`).

Le indican a la función qué **tipo de dato** debe tomar de los argumentos siguientes y cómo debe ser representado en la cadena final. La cantidad y el orden de los especificadores deben coincidir con la cantidad y el tipo de los argumentos que le sigues a la función.

Aquí están los más comunes:

| Especificador | Tipo de Dato | Propósito |
| :--- | :--- | :--- |
| `%d` o `%i` | **Entero** (`int`) | Imprime un valor entero decimal con signo. (El más común para números). |
| `%f` | **Flotante** (`Float:`) | Imprime un valor con punto flotante (decimal). |
| `%s` | **String** (Array) | Imprime el contenido de una cadena de caracteres. |
| `%x` | **Hexadecimal** (`int`) | Imprime un valor entero en formato hexadecimal (base 16). |
| `%%` | **Signo de Porcentaje** | Imprime el carácter literal de porcentaje (`%`). |

### Ejemplo de Uso en `printf`

En este ejemplo, el `%d` se empareja con el `playerid` (un entero), y el `%s` se empareja con la variable `nombre`.

```cpp
new playerid = 15;
new nombre[] = "Juan";

printf("El jugador %d, llamado %s, se ha conectado.", playerid, nombre);
// Salida:
// El jugador 15, llamado Juan, se ha conectado.
```

### Formato de Flotantes (Decimales)

Puedes controlar cuántos decimales se muestran usando el formato `%[ancho].[precision]f`:

```cpp
new Float:pi = 3.14159;

printf("Valor completo: %f", pi);    // Salida: 3.141590
printf("Valor con 2 decimales: %.2f", pi); // Salida: 3.14
```