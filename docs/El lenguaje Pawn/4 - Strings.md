Ahora que más o menos tenemos idea de cómo se declara una variable y un array, un caso algo más particular de los arrays, los strings.  
  
**Un 'tipo' de array particular, los strings**  
  
**¿Qué es un string?**  
Un string es una cadena de caracteres. Ahora bien si los caracteres no son números (y en los arrays se almacenan números únicamente) ¿Cómo podemos almacenar estos caracteres?  
Hace mucho tiempo se decidió que se crearía una tabla de códigos, donde a cada carácter se le asignaría un numero que lo representaba, a esta tabla se la llamo tabla ASCII.

**¿Cómo guardo un string?**  
Para almacenar un string solo basta convertir la cadena y guardarla en el array que queremos.

```cpp
//Almacenaremos el string "hola" en un array llamado MiArray  
new MiArray[4] = {72, 111, 108, 97};//En la tabla ascii: H=92, 0=111, l=108, a=97  (Notar que en esta tabla existen mayúsculas y minúsculas)
```

Ahora bien, logramos almacenar un string en el array como queríamos, pero tenemos un nuevo problema, dado que los arrays se guardan en la memoria seguidos, como sabría el compilador como dejar de leer?  
Es decir, supongamos el siguiente ejemplo:

```cpp
new Array_1[5], Array_2[4], Array_3[10];
Array_1 = {10, 15, 25, 40, 65};
Array_2 = {72, 111, 108, 97};//Este es nuestro string que contiene la palabra "Hola"
Array_3 = {15, 26, 14, 51, 85, 64, 35, 12, 45, 36};

//Para ejemplificar simplificaremos todo y pensaremos que esto en memoria, se almacena algo asi:
10 15 25 40 65 72 111 108 97 15 26 14 51 85 64 35 12 45 36
               |           |
```

Nuestra cadena (Array_2) esta indicada con '|', el problema es que esta no indica su fin. Por este motivo, se creo una convención la cual indica que todos los strings deben terminar  
en el carácter nulo. el cual es representado por el 0. Por este motivo, debemos agregar un slot mas cuando creamos un array, para almacenar allí el 0 indicando que termino.

```cpp
//Almacenaremos el string "hola" en un array llamado MiArray
new MiArray[5] = {72, 111, 108, 97, 0};//Agregamos el 0 al final indicando que allí termina el texto
```

**Salvedades**  
  
Comparación  
  
Si bien aun no hablamos de sentencias, estructuras lógicas y demás, es bastante simple de entender y algo básico, por lo que cabe destacar esto aquí.  
Muchos, seguramente se vieron tentados e intentaron comparar strings de la siguiente forma:

```cpp
new array[5] = "Hola";
if(array == "Hola")
```

El problema con este método de comparación, es que esta mal. El operador == compara valores numéricos únicamente, y los strings, son una cadena de valores.
Para comparar un string deberíamos ir valor por valor, pero esto es algo tedioso, por este motivo hay funciones que nos permiten realizar esto (la función nativa es strcmp, pero
la idea de este tutorial es evitar meterse en detalles sobre funciones nativas y hablar de una forma mas detallada sobre el lenguaje en si).

Asignación

Los siguientes ejemplos son todos análogos, es decir son iguales

```cpp
new MiArray[5] = {72, 111, 108, 97, 0};
new MiArray[5] = {'H', 'o', 'l', 'a', '\0'};//Al encerrar una letra entre comillas simples, el compilador luego reemplazara a la misma por su valor ascii
new MiArray[5] = "Hola";
```

