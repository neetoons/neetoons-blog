---
title: Operadores
description: sample
sidebar_position: 10
---
Los **operadores** son los símbolos que le dicen al compilador que realice una operación matemática, lógica o de comparación con una o más variables o valores.

Aquí tienes una explicación de los principales tipos de operadores en PAWN:
## ➕ Operadores Aritméticos (Matemáticos)

Se utilizan para realizar cálculos numéricos comunes.

| Operador | Nombre | Ejemplo | Resultado |
| :--- | :--- | :--- | :--- |
| `+` | Suma | `5 + 3` | `8` |
| `-` | Resta | `10 - 4` | `6` |
| `*` | Multiplicación | `7 * 2` | `14` |
| `/` | División | `10 / 3` | `3` (División entera) |
| `%` | Módulo (Resto) | `10 % 3` | `1` (El resto de la división) |
| `++` | Incremento | `i++` o `++i` | Aumenta el valor de la variable en 1. |
| `--` | Decremento | `i--` o `--i` | Disminuye el valor de la variable en 1. |

> **Nota sobre División:** En PAWN, la división de enteros (`/`) siempre devuelve un resultado entero, descartando cualquier parte decimal (trunca). Para obtener resultados decimales, necesitas usar el tag `Float:`.

-----

## Operadores de Asignación

Se utilizan para asignar un valor a una variable. El operador de asignación simple es el signo igual (`=`). Los operadores de asignación combinada simplifican la escritura de una operación y una asignación a la vez.

| Operador | Ejemplo | Equivalente a |
| :--- | :--- | :--- |
| `=` | `x = 5;` | Asigna `5` a `x`. |
| `+=` | `x += 3;` | `x = x + 3;` |
| `-=` | `x -= 2;` | `x = x - 2;` |
| `*=` | `x *= 4;` | `x = x * 4;` |
| `/=` | `x /= 2;` | `x = x / 2;` |
| `%=` | `x %= 3;` | `x = x % 3;` |

-----

## Operadores de Comparación (Relacionales)

Se utilizan para comparar dos valores y siempre devuelven un valor booleano: **verdadero** (representado como `1`) o **falso** (representado como `0`).

| Operador | Significado | Ejemplo | Devuelve `1` (Verdadero) si... |
| :--- | :--- | :--- | :--- |
| `==` | Igual a | `5 == 5` | Los valores son idénticos. |
| `!=` | Diferente de | `5 != 4` | Los valores no son idénticos. |
| `>` | Mayor que | `10 > 7` | El valor de la izquierda es mayor. |
| `<` | Menor que | `3 < 5` | El valor de la izquierda es menor. |
| `>=` | Mayor o igual que | `8 >= 8` | El valor de la izquierda es mayor o igual. |
| `<=` | Menor o igual que | `2 <= 9` | El valor de la izquierda es menor o igual. |

> **¡Cuidado\!** No confundas el operador de asignación simple (`=`) con el operador de comparación de igualdad (`==`).

-----

## Operadores Lógicos

Se utilizan para combinar o negar expresiones de comparación, creando condiciones más complejas.

| Operador | Nombre | Ejemplo | Devuelve `1` (Verdadero) si... |
| :--- | :--- | :--- | :--- |
| `&&` | AND (Y lógico) | `(a > 5) && (b < 10)` | **Ambas** condiciones son verdaderas. |
| `||` | OR (O lógico) | `(a == 0) || (b == 0)` | **Al menos una** de las condiciones es verdadera. |
| `!` | NOT (Negación) | `!(a == 5)` | La condición es falsa. (Invierte el resultado). |

-----

## Operadores a Nivel de Bits (Bitwise)

Estos operadores manipulan los valores a nivel de los bits binarios que los componen. Son usados comúnmente para trabajo de bajo nivel, manipulación de *flags* o permisos.

| Operador | Significado |
| :--- | :--- |
| `&` | AND a nivel de bits |
| `|` | OR a nivel de bits |
| `^` | XOR (OR exclusivo) a nivel de bits |
| `~` | NOT (Negación) a nivel de bits |
| `>>` | Desplazamiento de bits a la derecha |
| `<<` | Desplazamiento de bits a la izquierda |

-----

## Operador Condicional Ternario

Es una forma abreviada de escribir una sentencia `if/else` simple en una sola línea.

| Sintaxis | Estructura |
| :--- | :--- |
| `condición ? valor_si_verdadero : valor_si_falso` | Si la `condición` es verdadera, se utiliza el primer valor; si es falsa, se utiliza el segundo. |

**Ejemplo:**

```cpp
new maximo = (a > b) ? a : b;
```

Esto es equivalente a:

```cpp
new maximo;
if (a > b) {
    maximo = a;
} else {
    maximo = b;
}
```