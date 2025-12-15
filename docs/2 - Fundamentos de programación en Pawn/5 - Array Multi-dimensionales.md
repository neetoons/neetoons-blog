---
title: Array Multi-dimensionales
description: sample
sidebar_position: 5
---
## Arrays Multidimensionales (Matrices)

Un **array multidimensional** es esencialmente un array cuyos elementos son, a su vez, otros arrays. Se utilizan principalmente para representar estructuras de datos que tienen más de una dimensión, como una tabla (filas y columnas) o un tablero de juego.

El caso más común es el **array bidimensional** o **matriz**, que tiene dos dimensiones.

-----

## ¿Cómo se Definen?

Para definir un array multidimensional, simplemente se añaden corchetes (`[]`) adicionales para cada dimensión.

Para una matriz bidimensional (la más común), necesitas dos pares de corchetes:

```cpp
new MiMatriz[Filas][Columnas];
```

  * `[Filas]`: Indica la cantidad de arrays que tendrá el array principal (la dimensión mayor).
  * `[Columnas]`: Indica el tamaño de cada array secundario (la dimensión menor).

**Ejemplo:** Un array para guardar 3 filas con 4 columnas cada una.

```cpp
new NotasAlumnos[3][4]; // 3 filas, 4 columnas
```

-----

### ¿Cómo se Utilizan y se Inicializan?

Para acceder a un elemento, debes indicar la posición (índice) para cada dimensión.

**Recuerda:** Los índices siempre empiezan en **0**.

#### 1\. Acceso y Asignación

Se accede al elemento especificando primero el índice de la **fila** y luego el índice de la **columna**.

```cpp
// Array NotasAlumnos[3][4] (Filas 0, 1, 2 | Columnas 0, 1, 2, 3)

// Asignar el valor 85 a la fila 1, columna 2
NotasAlumnos[1][2] = 85;

// Leer el valor de la fila 0, columna 3
printf("Nota: %d", NotasAlumnos[0][3]);
```

#### 2\. Inicialización Múltiple

Puedes inicializar una matriz al declararla utilizando llaves anidadas (`{ }`). Cada conjunto interno de llaves representa una fila o un array secundario.

**Ejemplo de Inicialización:**

```cpp
// Matriz de 2 Filas y 3 Columnas
new Coordenadas[2][3] =
{
    {10, 20, 30}, // Fila 0
    {40, 50, 60}  // Fila 1
};
```

En este ejemplo:

  * `Coordenadas[0][0]` es **10**.
  * `Coordenadas[1][2]` es **60**.

-----

## Uso de `sizeof` en Arrays Multidimensionales

El operador `sizeof` es muy útil para determinar el tamaño de las dimensiones de una matriz en tiempo de ejecución:

| Sintaxis | Resultado |
| :--- | :--- |
| `sizeof MiMatriz` | Devuelve la cantidad de **filas** (dimensión principal). |
| `sizeof MiMatriz[]` | Devuelve la cantidad de **columnas** (dimensión secundaria o tamaño del sub-array). |

**Ejemplo:**

```cpp
new MatrizEjemplo[4][5];

// Imprime 4 (número de filas)
printf("Filas: %d", sizeof MatrizEjemplo);

// Imprime 5 (número de columnas)
printf("Columnas: %d", sizeof MatrizEjemplo[]);
```