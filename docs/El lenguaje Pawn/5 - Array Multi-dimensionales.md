**¿Qué es una dimensión?**  
La dimensión es un numero el cual indica cuantos indices son necesarios para almacenar/leer un elemento de un array.  
  
**¿Qué es un array multi-dimensional?**  
Es un array que contiene a otros arrays. Podría graficarse como una matriz en el caso de tener 2 dimensiones, o como un cubo si tuviese 3.  
  
**¿Cuántas dimensiones existen?**  
La versión de Pawn utilizada por SA-MP soporta hasta 3 dimensiones.  
  
**¿Cómo crear un array multi-dimensional?**  

- Uni-dimensional (1 dimensión):  
    (Son los que ya vimos antes, pero ahora podemos decir que son uni-dimensionales)

```cpp
new array[5];//Array uni-dimensional de 5 slots
```

Bi-dimensional (2 dimensiones):
```cpp
new array[5][5];//Array bi-dimensional de 5x5 slots, es decir por cada slot "primario" podemos almacenar 5 datos, es decir podemos almacenar 25 elementos
```

Tri-dimensional (3 dimensiones):
```cpp
new array[5][5][5];//Array tri-dimensional de 5x55 slots, es decir por cada slot "primario" tenemos 5 slots secundarios, que a su vez tienen otros 5 slots para almacenar datos.
```

¿Cómo utilizo un array multi-dimensional? Se utilizan igual que los uni-dimensionales.

```cpp
new array[3];
//Asignación:
array[0] = 1;//Asignamos el valor '1' en el index 0 de nuestro array
array[1] = 50;//Asignamos el valor '50' en el index 1 de nuestro array
//Lectura:
//Accedemos al valor almacenado en el index 0
printf("El valor almacenado en el index 0 de array es %i", array[0]);
```

Gráficamente:
Code:
```
1 50 0 0 0
```

Bi-dimensional:
```cpp
new array[5][5];
//Asignación:
array[0][1] = 1;//Asignamos el valor '1' en el index 1 respecto del index 0 de nuestro array
array[0][3] = 5;//Asignamos el valor '5' en el index 3 respecto del index 0 de nuestro array
array[4][1] = 9;//Asignamos el valor '9' en el index 1 respecto del index 4 de nuestro array
array[3][2] = 6;//Asignamos el valor '6' en el index 2 respecto del index 3 de nuestro array
array[3][4] = 8;//Asignamos el valor '8' en el index 4 respecto del index 3 de nuestro array
//Lectura:
printf("El valor almacenado en el index 1 respecto del index 0 es %i", array[0][1]);
```
Gráficamente:
```cpp
0 1 0 5 0
0 0 0 0 0
0 0 0 0 0
0 0 6 0 8
0 9 0 0 0
```
Tri-dimensional:
```cpp
new array[5][5][5];
//Asignación:
array[0][1][0] = 10;//Asignamos el valor '10' en el index 0 respecto del index 1 respecto del index 0 de nuestro array
//Lectura:
printf("El valor almacenado en el index 0 respecto del index 1 respecto del index 0 es %i", array[0][1]);
```

Gráficamente:
Es un cubo, por lo cual no se puede graficar aqui, pero pueden ver esta imagen.



