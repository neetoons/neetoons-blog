Esta genial guardar datos en variables pero, que pasa si queremos guardar un grupo de datos en 1 variable, como por ejemplo una lista, pues si podemos

**¿Qué es un array?**  
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

``Ejemplo 2:``
```cpp
new MiArray[4];
//Asignación
//Realizamos una asignación multiple, para realizar esto, colocamos entre llaves ('{' & '}') los valores separados por una coma
MiArray = {1, 5, 8, 10};

//Lectura
printf("Valores del array 0-3: %d %d %d %d", MiArray[0], MiArray[1], MiArray[2], MiArray[3]);
```

**Importante:** Cuando realizamos una asignación múltiple, esta debe ser completa, es decir debemos asignar un valor a cada index (lugarcito) de nuestro array.

**¿Podemos definir arrays con tags? Y si es asi ¿Cuáles son los tags de los arrays?**  
Los mismos tags que tienen las variables, y se los especifica de igual forma:

```cpp
new tag:nombre[tamaño];
```

### sizeof operator

The sizeof operator returns the size of a variable in “elements”. For a simple (non-compound) variable, the result of sizeof is always 1, because an element is a cell for a simple variable.

An array with one dimension holds a number of cells and the sizeof operator returns that number. The snippet below would therefore print “5” at  
the display, because the array “msg” holds four characters (each in one cell) plus a zero-terminator:

Listing: sizeof operator

```cpp
new msg[] = "Help"
printf("%d", sizeof msg);
```

With multi-dimensional arrays, the sizeof operator can return the number of elements in each dimension. For the last (minor) dimension, an  
element will again be a cell, but for the major dimension(s), an element is a sub-array. In the following code snippet, observe that the syntax sizeof matrix refers to the major dimension of the two-dimensional array and the syntax sizeof matrix[] refers to the minor dimension of the array. The values that this snippet prints are 3 and 2 (for the major and minor dimensions respectively):

Listing: sizeof operator and multidimensional arrays

```cpp
ew matrix[3][2] = { { 1, 2 }, { 3, 4 }, { 5, 6 } }
printf("%d %d", sizeof matrix, sizeof matrix[]);
```

The application of the sizeof operator on multi-dimensional arrays is especially convenient when used as a default value for function arguments.

---

`Default function arguments and sizeof: 77`

