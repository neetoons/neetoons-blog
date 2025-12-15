---
title: Variables
description: sample
sidebar_position: 2
---
## ¿Qué es una Variable?

Una variable es un **espacio reservado en la memoria** de la computadora que se utiliza para **almacenar información** de manera temporal mientras se ejecuta un programa. Funciona como una etiqueta o un contenedor que puede guardar un valor específico, al que podemos acceder y modificar a través del nombre de la variable.

-----

## ¿Para qué Sirve una Variable?

Una variable sirve para **guardar datos** que el programa necesita para realizar diversas tareas y cálculos. Su principal utilidad reside en que nos permite trabajar con valores cuyo contenido exacto **puede cambiar** (es "variable") durante la ejecución del programa.

Aunque no conozcamos el valor específico en un momento dado, sí **conocemos y definimos el tipo de dato** que puede contener (por ejemplo, un número entero, texto, o un valor decimal). Discutiremos los tipos de datos a continuación.

-----

## ¿Cómo se Define una Variable?

En el lenguaje de programación PAWN, la forma más sencilla de declarar una nueva variable es utilizando la palabra clave `new`, seguida del nombre que elijamos para la variable.

**Sintaxis:**

```cpp
new MiVariable;
```

-----

## ¿Cómo se Utiliza una Variable?

Una vez definida, el nombre de la variable **representa el valor** que tiene almacenado. Usarla es tan simple como referirse a ella por su nombre.

En el siguiente ejemplo, primero **declaramos** la variable `MiVariable`, luego le **asignamos** el valor 15 (usando el operador `=`), y finalmente la **utilizamos** para mostrar su contenido:

```cpp
new MiVariable;
// Asignamos el valor 15 a la variable
MiVariable = 15;
// Obtenemos el número almacenado en la variable y lo mostramos en la consola.
printf("El valor de MiVariable es %i.", MiVariable);
```

**Resultado de la ejecución:**

```
El valor de MiVariable es 15.
```