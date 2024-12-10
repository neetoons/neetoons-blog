Bueno ahora vamos a avanzar un poco más allá de las clásicas definiciones y vamos a comprender un poco más sobre este lenguaje de programación.  
 # new`
 
## ``new``
## ``public``
Global “simple” variables (no arrays) may be declared “public” in two ways:

- declare the variable using the keyword public instead of new;
    
- start the variable name with the “@” symbol.
    

Public variables behave like global variables, with the addition that the host program can also read and write public variables. A (normal) global variable can only be accessed by the functions in your script —the host  
program is unaware of them. As such, a host program may require that you declare a variable with a specific name as “public” for special purposes —such as the most recent error number, or the general program state.
## ``stock``
A global variable may be declared as “stock”. A stock declaration is one that the parser may remove or ignore if the variable turns out not to be used in the program.

Stock variables are useful in combination with stock functions. A public vari- able may be declared as “stock” as well —declaring public variables as “public stock” enables you to declare al public variables that a host application pro- vides in an include file, with only those variables that the script actually uses winding up in the P-code file.
  
**¿Qué es stock?**  
stock define una variable/array o función, pero con la particularidad de que si dicha variable/función no es utilizada, entonces se omitirá en la compilación y no ocupara lugar.  
  
**¿Cómo se utiliza?**  
La forma de utilización es la misma que utilizamos normalmente

```cpp
//Variables/arrays:
stock
    variable,
    array[5];

//Funciones:
stock MiFuncion();
```

**?Para qué se utiliza?**  
Básicamente se utiliza para ahorrar memoria y espacio; pero también se lo utiliza para evitar advertencias sobre definiciones de elementos que luego no se utilizan.  
  
## ``const``
It is sometimes convenient to be able to create a variable that is initialized once and that may not be modified. Such a variable behaves much like a symbolic constant, but it still is a variable.

To declare a constant variable, insert the keyword const between the keyword that starts the variable declaration —new, static, public or stock— and the variable name.

Examples:

```

new const address[4] = { 192, 0, 168, 66 }

public const status           /* initialized to zero */

```

Three typical situations where one may use a constant variable are:

- To create an “array” constant; symbolic constants cannot be indexed.
    
- For a public variable that should be set by the host application, and only by the host application. See the preceding section for public variables.
    
- A special case is to mark array arguments to functions as const. Array arguments are always passed by reference, declaring them as const guards against unintentional modification. Refer to page 72 for an example of const function arguments.
  
**¿Qué es const?**  
Se utiliza para definir constantes. Las constantes son variables/arrays cuyo valor no se modificara.  
  
**¿Cómo se utiliza?**  
La forma de utilización es la misma que utilizamos normalmente, pero debemos especificar el valor cuando creamos la variable/array.

```cpp
//Variables
const variable = 15;
new const variable = 15;
stock const variable = 30;

//Arrays
const array[5] = "Hola";
new const array[5] = "Hola";
stock const array[] = "Hola";
```

**Nota:** Como pueden ver, en la declaración de un array, podemos obviar indicar el tamaño de la ultima dimensión.  
  
**¿Por qué se utiliza?**  
Podrán preguntarse, porque no colocar directamente el valor y utilizar una variable constante. Bueno, la respuesta es que mediante la utilización de arrays/variables constantes, estos valores  
si se repiten solo se almacenan 1 vez en memoria; en cambio si utilizáramos directamente el valor "hola", el mismo estará en la memoria tantas veces como lo utilicemos. Es decir si usamos "hola"  
5 veces en el script, en la memoria estará 5 veces; ademas es mas rápido acceder a una variable constante que a un texto.  
  
## ``static``
  
**¿Qué es static?**  
Declara una variable/array/función pero con características particulares; la variable/array/función declarada puede utilizarse únicamente en el entorno y ademas en el caso de la variable/array, conserva el valor.

```cpp
main()
{
    MyFunction();
    print("!");
    MyFunction();
    return 1;
}

MyFunction()
{
    static
        j;

    for(new i; i<3; i++)
    {
        printf("%i", j);
        j++;
    }
}
```

Este código imprimirá en la consola:
```
0
1
2
!
3
4
5
```

Mientras que si la variable j no fuera estática, la salida seria:
```
0
1
2
!
0
1
2
```

En el caso de las funciones estáticas o las variables/arrays globales estáticas, estas solo pueden ser utilizadas en el archivo en el cual fueron declaradas.

## ``enum``

¿Qué es un enum?
Un enum define una lista de elementos a los cuales se les asigna un numero.

¿Cómo se utiliza?
La forma de utilización es la siguiente:
```cpp
enum nombre
{
    elemento_1,
    elemento_2,
    elemento_3,
    ...
    elemento_n
};
```
Nota: El ultimo elemento no lleva una , al final.

Usos comunes
Tal vez el uso mas común que le dan a los enums es para almacenar datos de jugadores u otros.
```cpp
enum PlayerData
{
    bool:Registrado,
    bool:Logueado,
    Dinero,
    Float:Vida,
    Nombre[MAX_PLAYER_NAME]
};

new PlayerInfo[MAX_PLAYERS][PlayerData];

public OnPlayerConnect(playerid)
{
    PlayerInfo[playerid][Registrado] = false;

    return 1;
}
```
Algo más...
Hasta aquí todo bien, pero quedarse solo con ese uso de enums es algo pobre. Los enums realmente son como una tabla, cada palabra del enum en realidad tiene un valor constante.

```cpp
const e_VAL1 = 0;
const e_VAL2 = 1;
const e_VAL3 = 2;

new Array[3];

main()
{
    Array[e_VAL1] = 10;
    Array[e_VAL2] = 15;
    Array[e_VAL3] = 120;
}
```

El código anterior utilizando enums seria el siguiente:
```cpp
enum e_VAL
{
    e_VAL1,
    e_VAL2,
    e_VAL3
};

new Array[3];

main()
{
    Array[e_VAL1] = 10;
    Array[e_VAL2] = 15;
    Array[e_VAL3] = 120;
}
```

  
Los dos códigos son análogos y compilaran perfectamente. De esta forma demostramos que los enums son valores constantes, estos valores son dados por el compilador  
automáticamente y comienzan en el 0. Ahora bien, podemos también ser nosotros quienes coloquemos estos valores.

```cpp
enum e_TEST  
{  
    e_UNO = 5,  
    e_DOS,  
    e_TRES,  
    e_CUATRO  
};
```

En el ejemplo anterior, la cuenta comenzara en el numero 5, de esta forma e_DOS es el 6, e_TRES el 4 y así sucesivamente. Pero también podemos asignar nosotros los valores que queramos  
y no únicamente el inicial.
```cpp
enum e_TEST  
{  
    e_UNO,//0 pues por defecto la cuenta comienza en 0  
    e_DOS,//1 pues el valor se auto-incrementa en 1  
    e_TRES = 15,//15 pues asignamos el valor 15  
    e_CUATRO,//16 pues el valor se auto-incrementa en 1  
    e_CINCO = 60,//60 pues asignamos el valor 60  
    e_SEIS[5],//Ahora acá hay una diferencia, esto es un bloque de 5 constantes, entonces e_SEIS tiene los valores del 61 hasta el 65  
    e_SIETE//Obtendrá el valor siguiente, es decir 66  
};  
  
main()  
{  
    printf("Size: %d", _:e_TEST);//Printeara en la consola "Size: 67" pues el tamaño de nuestro enum es 67  
}
```

Ahora bien, tal vez estén pensando que debería haber printeado "Size: 66", pero esto es incorrecto ya que no hablamos del valor máximo, si no de la cantidad de slots que tiene, y estos  
son 0-66, entonces hay 67 slots.  
  
Veamos otro ejemplo:

```cpp
enum e_TEST  
{  
    e_UNO,  
    e_DOS = 15,  
    e_TRES[5],  
    e_CUATRO  
};  
  
new  
    Test[e_TEST];  
  
main()  
{  
    Test[e_UNO] = 15;  
    Test[e_DOS] = 150;  
    Test[e_TRES] = "Hola";  
    Test[e_CUATRO] = 5;  
    Test[e_TEST:21] = 99;  
  
    printf("%d %d %s %d", Test[e_UNO], Test[e_DOS], Test[e_TRES], Test[e_CUATRO]);//Printeara en consola "15 150 Hola 99"  
}
```

Si esperaban que el código anterior printeara en el ultimo número el 5 se equivocaron, pues la ultima asignación sobre-escribe dicho valor.  
  
Ahora bien, porque tuve que colocar e_TEST:21 y no simplemente 21? Esto se debe a que los enums tambien son tags.

```cpp
enum E_TEST  
{  
    E_UNO,  
    E_DOS,  
    E_TRES  
};  
  
new  
    E_TEST:Var,  
    Var2;  
  
main()  
{  
    Var = E_TRES;  
    Var2 = E_TRES;//Nos dará una advertencia ya que Var2 es de tipo int y no E_TEST  
  
    printf("Var: %d %d", _:Var, Var2);  
  
    return 1;  
}
```

**Nota:**El tag **_:** se utiliza para remover cualquier tag de la variable/array/etc temporalmente y cambiar el mismo a int.  
  
  
Los enums también pueden ser anónimos, es decir no necesariamente tienen que tener un nombre.

```cpp
enum  
{  
    E_UNO,  
    E_DOS,  
    E_TRES  
};
```

Una particularidad es que existen enums de tag fuerte y débil.
```cpp
enum E_TEST_1 //Tag fuerte pues comienza con E mayúscula  
{  
    E_UNO,  
    E_DOS,  
    E_TRES  
};  
  
enum e_TEST_2 //Tag débil pues comienza con e minúscula  
{  
    e_CUATRO,  
    e_CINCO,  
    e_SEIS  
};  
  
main()  
{  
    new  
        Var;  
  
    Var = E_TEST_1:E_UNO;//Dará una advertencia  
    Var = e_TEST_2:e_CUATRO;//No da advertencia  
  
    #pragma unused Var  
}
```

### operador elipsis ``...``

Se lo conoce como el operador elipsis y uno de los usos que tiene es la inicialización de arrays, este operador utiliza los valores anteriores para asignar los valores sucesivos al array hasta completarlo.  
  
Veamos algunos ejemplos análogos para comprender mejor su funcionamiento:

```cpp
new Array[15] = {5, ...};  
new Array[15] = {5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5};
```

```cpp
new Array[10] = {0, 1, ...};  
new Array[10] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
```

```cpp
new Array[6] = {1, 5, ...};  
new Array[6] = {1, 5, 10, 15, 20, 25};
```

```cpp
new Array[10] = {1, 5, 8, ...};  
new Array[10] = {1, 5, 8, 11, 14, 17, 20, 23, 26, 29};
```
Como podemos observar, es una forma muy rápida de inicializar arrays sin tener que completar todos los valores. Si con los ejemplos no lo vieron, lo explicare:  
El operador elipsis lo que hace es en caso de solo haber un número, entonces completa con el mismo hasta el final o bien si hay mas de 1 numero restar los últimos 2 entre si y a partir del ultimo obtener el siguiente sumando dicha diferencia.

```cpp
new Array[5] = {a, b, ...};
new Array[5] = {a, b, b+1*(b-a), b+2*(b-a), b+3*(b-a)};
```
