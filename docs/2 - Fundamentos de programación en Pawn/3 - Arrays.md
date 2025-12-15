---
title: Arrays
description: sample
sidebar_position: 3
---
## ¿Qué es un array?

Un array es como si definiéramos muchas variables y las uniéramos todas, de esta forma tendríamos una sucesión de variables, en las cuales podríamos almacenar varios datos (1 dato por variable).

**Cómo defino un array?**  
La forma de definir un array es muy sencilla, de hecho es casi igual que definir una variable.

```cpp
new MiArray[4];
```

Como pueden ver, solo varia [n]; en este caso, n=4. Pero... ¿Qué representa 'n'? 'n' representa el tamaño de ese array, es decir la cantidad de datos que podemos almacenar.

**¿Cómo utilizo un array?**  
Para utilizar un array, lo que hacemos es almacenar o leer los datos indicando la posición que ocupa el mismo (Las posiciones o indices comienzan en 0 y van hasta n-1).

```cpp
new MiArray[3];
//Asignación:
//Asignamos el valor '1' en el index 0 de nuestro array
MiArray[0] = 1;
//Asignamos el valor '50' en el index 1 de nuestro array
MiArray[1] = 50;
//Lectura:
//Accedemos al valor almacenado en el index 0
printf("El valor almacenado en el index 0 de MiArray es %i", MiArray[0]);
```

**Importante:** A la hora de definir un array, debemos tener en cuenta, que este nunca puede tomar el valor de la definición.

``Ejemplo 1:``
```cpp
new Array[5];
//esto causara un error, dado que el índex máximo de Array es 4
Array[5] = 4;
```

Puede ser confuso a la primera pero entendamos que si bien Array esta declarada con 5 posiciones, puedes indexearla hasta '[4]' ya que se cuenta desde 0 (0...4).

``Ejemplo 2:``
```cpp
new MiArray[4];
//Asignación
//Realizamos una asignación multiple, para realizar esto, colocamos entre llaves ('{' y '}') los valores separados por una coma
MiArray = {1, 5, 8, 10};

//Lectura
printf("Valores del array 0-3: %d %d %d %d", MiArray[0], MiArray[1], MiArray[2], MiArray[3]);
```

**Importante:** Cuando realizamos una asignación múltiple, esta debe ser completa, es decir debemos asignar un valor a cada index (lugarcito) de nuestro array.