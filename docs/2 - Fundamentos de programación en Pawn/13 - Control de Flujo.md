---
title: Control de Flujo
description: sample
sidebar_position: 13
---
Los **Controles de Flujo** son la columna vertebral de la programación, ya que determinan el orden en el que se ejecutan las sentencias de tu código. Permiten que el programa tome decisiones y repita tareas.

En PAWN (y la mayoría de lenguajes), los dividimos en dos categorías principales: **Estructuras Condicionales** (decisiones) y **Estructuras Repetitivas** (bucles).

-----

## 1. Estructuras Condicionales (Decisiones)

Estas estructuras evalúan una condición booleana (verdadero o falso) para decidir qué bloque de código ejecutar.

### a. `if` / `else if` / `else`

Permite ejecutar código solo si se cumple una condición, o una condición alternativa.

| Estructura  | Propósito                                                                     | Ejemplo                     |
| :---------- | :---------------------------------------------------------------------------- | :-------------------------- |
| **if**      | Ejecuta el código si la **condición es verdadera**.                           | `if (puntuacion > 100)`     |
| **else if** | Comprueba una **segunda condición** si la primera fue falsa.                  | `else if (puntuacion > 50)` |
| **else**    | Ejecuta el código **si ninguna** de las condiciones anteriores fue verdadera. | `else`                      |

```cpp
new Puntuacion = 75;

if (Puntuacion > 100)
{
    printf("¡Excelente!");
}
else if (Puntuacion > 50) // Se ejecuta si Puntuacion <= 100 Y Puntuacion > 50
{
    printf("Buen trabajo.");
}
else
{
    printf("Debes esforzarte más.");
}
```

> **Nota:** Si el bloque de código dentro de un `if` o `else` es **una sola línea**, no es necesario usar llaves (`{}`).

### b. `switch` / `case`

Permite seleccionar uno de muchos bloques de código a ejecutar basándose en el valor de una única expresión (generalmente una variable entera o un carácter). Es más limpio que usar muchos `else if` seguidos.

```cpp
new Opcion = 2;

switch (Opcion)
{
    case 1:
    {
        printf("Elegiste la Opción 1.");
    }
    case 2, 3: // Múltiples casos pueden usar el mismo código
    {
        printf("Elegiste la Opción 2 o 3.");
    }
    default: // Se ejecuta si el valor no coincide con ningún 'case' anterior
    {
        printf("Opción inválida.");
    }
}
```

> **¡Importante\!** A diferencia de otros lenguajes (como C), en PAWN no se necesita la sentencia `break;` dentro de los bloques `case`, ya que el flujo se rompe automáticamente.

-----

## 2. Estructuras Repetitivas (Bucles)

Estas estructuras permiten repetir un bloque de código mientras se cumpla una condición o un número determinado de veces.

### a. `for` (Bucle de Conteo)

Se utiliza cuando se conoce el **número exacto de repeticiones** que se necesitan.

| Estructura | Propósito |
| :--- | :--- |
| **Inicialización** | Define la variable contadora (ej. `new i = 0`). Se ejecuta una sola vez al inicio. |
| **Condición** | La expresión que debe ser verdadera para que el bucle continúe (ej. `i < 10`). |
| **Incremento/Decremento** | La operación que modifica la variable contadora después de cada repetición (ej. `i++`). |

```cpp
// Se ejecuta 10 veces (con i = 0 hasta i = 9)
for (new i = 0; i < 10; i++)
{
    printf("Iteración numero: %d", i);
}
```

### b. `while` (Bucle Condicional)

Se utiliza cuando el número de repeticiones es **indeterminado** y depende de que una condición sea verdadera.

```cpp
new Contador = 5;

while (Contador > 0) // El bucle se repite mientras Contador sea positivo
{
    printf("Contador: %d", Contador);
    Contador--; // ¡Es vital modificar la condición para evitar un bucle infinito!
}
```

### c. `do while` (Bucle con Ejecución Mínima)

Similar al `while`, pero garantiza que el bloque de código se ejecute **al menos una vez**, ya que la condición se evalúa al final del bucle.

```cpp
new Numero = 0;

do
{
    printf("Esto se ejecuta al menos una vez.");
    Numero++;
}
while (Numero < 0); // La condición (0 < 0) es falsa, pero se ejecutó una vez.
```

-----

## 3. Modificadores de Flujo

Son sentencias que alteran el comportamiento normal de un bucle.

| Sentencia    | Propósito                                                                                                                                           |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| **break**    | Sale **inmediatamente** del bucle o `switch` más cercano, y la ejecución continúa después de este.                                                  |
| **continue** | Salta la **iteración actual** del bucle y pasa directamente a la siguiente repetición.                                                              |
| **return**   | Sale **inmediatamente** de la función actual, a menudo devolviendo un valor. Si se usa dentro de un bucle, sale tanto del bucle como de la función. |
