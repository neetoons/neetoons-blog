
### Que es una variable?

Una variable es un pedacito de memoria que se reserva para el programa durante la ejecución del mismo, para almacenar información, que luego usaremos para almacenar algún dato.

### Para que sirve una variable?

Una variable sirve para guardar datos y realizar alguna tarea con los mismos. Lo importante de estos datos, es que desconocemos cuales son en si, y pueden ser diferentes siempre. Sin embargo, lo que si conocemos el tipo de datos que son (hablaremos sobre los tipos en unos minutos).

### ¿Cómo defino una variable?

Para definir una variable en pawn, la forma más simple es utilizar "new" y se utiliza de la siguiente forma.
```cpp
new MiVariable;
```

**¿Cómo utilizo una variable?**  
La variable representa el dato que se almaceno en ella, es decir el dato o la variable es casi lo mismo, entonces la forma de utilizarla seria algo asi:

```cpp
new MiVariable;
//Asignamos el valor 15 a la variable
MiVariable = 15;
//Obtenemos el numero almacenado en la variable y lo mostramos en la consola con el texto escrito.
printf("El valor de MiVariable es %i.", MiVariable);
```

La salida de este codigo es:
```
El valor de MiVariable es 15.
```
